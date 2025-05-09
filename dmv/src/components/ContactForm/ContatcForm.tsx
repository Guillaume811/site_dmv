import React, { useState } from 'react';
import styles from "./ContactForm.module.scss";
import Button from '../Button/Button';
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
    // État pour gérer le champ RGPD (case à cocher)
    const [consent, setConsent] = useState(false);

    // États pour stocker les valeurs du formulaire
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        company: "",
        message: "",
    });

    // Fonction appelée à chaque changement de champ pour mettre à jour le state
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
  
        if (!consent) {
            alert("Veuillez accepter les conditions RGPD.");
            return;
        }
  
        // Logique d'envoi du formulaire

        try {
            // Génère un token reCAPTCHA v3
            const token = await window.grecaptcha.execute(process.env.REACT_APP_RECAPTCHA_SITE_KEY!, {
                action: "submit"
            });

            // Préparation des données à envoyer à EmailJS
            const templateParams = {
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email,
                company: formData.company,
                message: formData.message,
                "g-recaptcha-response": token,
            };

            console.log("Token reCAPTCHA :", token);
            console.log("templateParams :", templateParams);
            
            // Envoi du formulaire via EmailJS
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID!,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
                templateParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
            );

            // Si envoi réussi
            alert("Votre message a bien été envoyé !");
            setFormData({ firstname: "", lastname: "", email: "", company: "", message: "" });
            setConsent(false);

        } catch (error) {
            console.error("Erreur lors de l'envoi :", error);
            alert("Une erreur est survenue. Veuillez réessayer.");
        }
    
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form__row}>
                <input 
                    type="text" 
                    id="lastname"
                    placeholder="Nom*"
                    value={formData.lastname}
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="text" 
                    id="firstname" 
                    placeholder="Prénom*"
                    value={formData.firstname}
                    onChange={handleChange} 
                    required 
                />
            </div>

            <div className={styles.form__row}>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="Email*" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                />
                <input 
                    type="text"
                    id="company"
                    placeholder="Société"
                    value={formData.company}
                    onChange={handleChange} 
                />
            </div>

            <div className={styles.form__row}>
                <textarea 
                    id="message"
                    placeholder="Message*" 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange} 
                    required 
                />
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