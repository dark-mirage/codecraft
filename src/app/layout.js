// app/layout.js
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Разработка веб-приложений",
  description: "Профессиональная разработка веб-приложений и мобильных приложений",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-J9E80PY24X"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-J9E80PY24X', { page_path: window.location.pathname });
            `,
          }}
        />

        {/* Yandex Metrika */}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(104274673, "init", {
                webvisor:true,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                ecommerce:"dataLayer"
              });

              // Автоматическое отслеживание кликов на кнопки
              document.addEventListener('click', function(e){
                let target = e.target;
                if(target.tagName === 'BUTTON' || target.closest('button')){
                  let btn = target.closest('button') || target;
                  ym(104274673, 'reachGoal', 'button_click', {label: btn.innerText});
                }
              });

              // Автоматическое отслеживание отправки форм
              document.addEventListener('submit', function(e){
                let form = e.target;
                ym(104274673, 'reachGoal', 'form_submit', {formName: form.getAttribute('name') || ''});
              });
            `,
          }}
        />

        {children}
      </body>
    </html>
  );
}
