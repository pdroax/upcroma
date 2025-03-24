import "./SubmitButton.css";
import Script from 'next/script';

function SubmitButton() {
  const gtagReportConversion = (url: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {  
        send_to: "AW-737613236/0P_yCOndkagBELSr3N8C",
        event_callback: () => {
          if (url) window.location.href = url;
        },
      });
    }
    return false;
  };

  return (
    <div>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-737613236"
      />
      <Script
        id="google-ads-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-737613236');
          `,
        }}
      />
      <button onClick={() => gtagReportConversion('https://cromafilms.com.br')} className="submit-btn">Enviar mensagem</button>
    </div>
  );
}

export default SubmitButton;
