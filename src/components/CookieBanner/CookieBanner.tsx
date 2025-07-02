import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';
import { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-J6Q71SM2HD';

const loadGoogleAnalytics = () => {
  if (window.gtag) return; // Empêche le chargement multiple

  const script1 = document.createElement('script');
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script1.async = true;
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `;
  document.head.appendChild(script2);
};

const CookieBanner = () => {
  useEffect(() => {
    const consent = getCookieConsentValue();
    if (consent === 'true') {
      loadGoogleAnalytics();
    }
  }, []);

  return (
    <CookieConsent
      location="bottom"
      buttonText="J'accepte"
      declineButtonText="Je refuse"
      enableDeclineButton
      cookieName="siteCookieConsent"
      style={{ background: '#2B373B' }}
      buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
      declineButtonStyle={{ color: '#fff', background: '#2B373B', fontSize: '13px' }}
      expires={150}
      onAccept={() => {
        loadGoogleAnalytics();
      }}
    >
      Ce site utilise des cookies pour mesurer la fréquentation et améliorer votre expérience.
    </CookieConsent>
  );
};

export default CookieBanner;