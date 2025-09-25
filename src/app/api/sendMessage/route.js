// app/api/sendMessage/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  console.log('=== FULL DEBUG ===');
  console.log('BOT_TOKEN exists:', !!process.env.TELEGRAM_BOT_TOKEN);
  console.log('BOT_TOKEN value:', process.env.TELEGRAM_BOT_TOKEN ? `${process.env.TELEGRAM_BOT_TOKEN.substring(0, 10)}...` : 'MISSING');
  console.log('CHAT_ID exists:', !!process.env.TELEGRAM_CHAT_ID);
  console.log('CHAT_ID value:', process.env.TELEGRAM_CHAT_ID || 'MISSING');

  // Проверка переменных окружения
  if (!process.env.TELEGRAM_BOT_TOKEN) {
    return NextResponse.json(
      { 
        error: 'Service configuration error - Missing TELEGRAM_BOT_TOKEN',
        debug: { tokenExists: false, chatIdExists: !!process.env.TELEGRAM_CHAT_ID }
      }, 
      { status: 500 }
    );
  }

  if (!process.env.TELEGRAM_CHAT_ID) {
    return NextResponse.json(
      { 
        error: 'Service configuration error - Missing TELEGRAM_CHAT_ID',
        debug: { tokenExists: true, chatIdExists: false }
      }, 
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    console.log('Received body:', body);
    
    const { name, telegram, whatsapp, message } = body;
    
    // Валидация
    if (!name?.trim() || !telegram?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Name, Telegram and Message are required' }, 
        { status: 400 }
      );
    }

    // Экранирование HTML
    const escapeHtml = (s = '') => {
      if (typeof s !== 'string') return '';
      return s
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };

    // Форматируем Telegram
    const telegramUsername = telegram.trim().startsWith('@') 
      ? telegram.trim() 
      : `@${telegram.trim()}`;
    const telegramClean = telegramUsername.replace('@', '');

    // Создаем сообщение
    let text = `
<b>🆕 Новая заявка с сайта</b>

<b>👤 Имя:</b> ${escapeHtml(name)}
<b>📱 Telegram:</b> <a href="https://t.me/${telegramClean}">${escapeHtml(telegramUsername)}</a>
    `.trim();

    if (whatsapp?.trim()) {
      const cleanWhatsapp = whatsapp.replace(/[^\d+]/g, '');
      text += `\n<b>📞 WhatsApp:</b> <a href="https://wa.me/${cleanWhatsapp}">${escapeHtml(whatsapp)}</a>`;
    }

    text += `\n\n<b>💬 Сообщение:</b>\n${escapeHtml(message)}`;
    text += `\n\n<b>📅 Дата:</b> ${new Date().toLocaleString('ru-RU')}`;

    console.log('Formatted message length:', text.length);
    console.log('Sending to Telegram API...');

    // Тестируем запрос к Telegram
    const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const requestBody = {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: text,
      parse_mode: 'HTML',
      disable_web_page_preview: true
    };

    console.log('Request URL:', `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN.substring(0, 10)}.../sendMessage`);
    console.log('Request body:', JSON.stringify(requestBody, null, 2));

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    console.log('Telegram API response status:', response.status);
    
    const responseText = await response.text();
    console.log('Telegram API response:', responseText);

    if (!response.ok) {
      console.error('Telegram API error details:', {
        status: response.status,
        statusText: response.statusText,
        body: responseText
      });
      
      return NextResponse.json(
        { 
          error: 'Failed to send message to Telegram',
          details: responseText
        },
        { status: 500 }
      );
    }

    const result = JSON.parse(responseText);
    console.log('✅ Message sent successfully to Telegram');
    
    return NextResponse.json({ 
      ok: true, 
      result: {
        message_id: result.result.message_id,
        date: result.result.date
      }
    });

  } catch (error) {
    console.error('❌ API route error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error.message 
      },
      { status: 500 }
    );
  }
}