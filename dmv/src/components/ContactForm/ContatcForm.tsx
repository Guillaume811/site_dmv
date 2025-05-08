import React, { useState } from 'react';
import styles from "./ContactForm.module.scss";
import Button from '../Button/Button';

const ContactForm: React.FC = () => {

    const [consent, setConsent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!consent) {
        alert("Veuillez accepter les conditions RGPD.");
        return;
      }
  
      // Logique d'envoi du formulaire ici

    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form__row}>
                <input type="text" id="name" placeholder="Nom*" required />
                <input type="text" id="fistName" placeholder="Prénom*" required />
            </div>
            <div className={styles.form__row}>
                <input type="email" id="email" placeholder="Email*" required />
                <input type="text" placeholder="Société" />
            </div>
            <div className={styles.form__row}>
                <textarea placeholder="Message*" rows={5} required />
            </div>
            
            <div className={styles.form__checkbox}>
                <input
                    type="checkbox"
                    id="consent"
                    checked={consent}
                    onChange={() => setConsent((prev) => !prev)}
                    required
                />
                <label htmlFor="consent">
                    J’accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande.
                </label>
            </div>
            <Button text="Envoyer" type="submit" />
        </form>
    );
};

export default ContactForm;