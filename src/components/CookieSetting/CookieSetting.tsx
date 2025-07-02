import Cookies from 'js-cookie';
import Button from '../Button/Button';

const CookieSettings = () => {
  const handleResetConsent = () => {
    Cookies.remove('siteCookieConsent');
    window.location.reload();
  };

  return (
    <Button text='Gérer mes Cookies' onClick={handleResetConsent}/>
  );
};

export default CookieSettings;
