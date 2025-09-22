// lib/gtag.js
export const GA_TRACKING_ID = 'G-J9E80PY24X';

// Отправка просмотра страницы
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Кастомные события (например, клики)
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
