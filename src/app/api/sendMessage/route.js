// app/api/sendMessage/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  console.log("BOT TOKEN exists:", !!process.env.TELEGRAM_BOT_TOKEN);
  console.log("CHAT ID exists:", !!process.env.TELEGRAM_CHAT_ID);
  
  // Проверка переменных окружения
  if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
    console.error('Missing Telegram configuration');
    return NextResponse.json(
      { error: 'Service configuration error' }, 
      { status: 500 }
    );
  }

  try {
    const { name, telegram, whatsapp, message } = await request.json();
    
    // Валидация обязательных полей
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

    // Форматируем Telegram для ссылки
    const telegramUsername = telegram.startsWith('@') ? telegram : `@${telegram}`;
    
    // Создаем текст сообщения
    let text = `
<b>🆕 Новая заявка с сайта</b>

<b>👤 Имя:</b> ${escapeHtml(name)}
<b>📱 Telegram:</b> <a href="https://t.me/${telegramUsername.replace('@', '')}">${escapeHtml(telegramUsername)}</a>
    `.trim();

    // Добавляем WhatsApp если указан
    if (whatsapp?.trim()) {
      const cleanWhatsapp = whatsapp.replace(/[- ]/g, '');
      text += `\n<b>📞 WhatsApp:</b> <a href="https://wa.me/${cleanWhatsapp}">${escapeHtml(whatsapp)}</a>`;
    }

    // Добавляем сообщение и дату
    text += `\n\n<b>💬 Сообщение:</b>\n${escapeHtml(message)}`;
    text += `\n\n<b>📅 Дата:</b> ${new Date().toLocaleString('ru-RU')}`;

    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: 'HTML',
          disable_web_page_preview: true
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Telegram API error:', errorText);
      return NextResponse.json(
        { error: 'Failed to send message to Telegram' },
        { status: 500 }
      );
    }

    const result = await response.json();
    console.log('Message sent successfully');
    return NextResponse.json({ ok: true, result });

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}