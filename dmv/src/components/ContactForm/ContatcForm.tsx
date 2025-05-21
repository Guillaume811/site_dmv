import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import Button from '../Button/Button';
import styles from "./ContactForm.module.scss";



/* Component ContactForm
* Render logic :
* Uses "useState" to manage "consent", a boolean that tracks if the user checked the RGPD consent box.
* Uses another "useState" called "formData" to store form field values: "firstname", "lastname", "email", "company", and "message".
* Defines "handleChange" to update "formData" whenever the user types in an input or textarea.
* Defines "handleSubmit" to handle the form when submitted:
  -> Prevents the default behavior.
  -> If "consent" is not checked, shows an alert and stops the process.
  -> If consent is given:
    -> Generates a reCAPTCHA token using "window.grecaptcha".
    -> Prepares the form data as "templateParams".
    -> Sends the form with EmailJS using the provided environment keys.
    -> On success, resets the form and consent checkbox, and shows a confirmation alert.
    -> On error, logs the issue and shows an alert message.

* View TSX :
* Returns a <form> element using "handleSubmit" on submit.
* Inside the form:
  -> Displays two rows of input fields for "lastname" & "firstname", then "email" & "company".
  -> Shows a textarea for the message.
  -> Includes a checkbox for RGPD consent, with a label.
  -> Ends with a "Button" that submits the form.
*/
const ContactForm: React.FC = () => {
    const [consent, setConsent] = useState(false);

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        company: "",
        message: "",
    });

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

        try {
            const token = await window.grecaptcha.execute(process.env.REACT_APP_RECAPTCHA_SITE_KEY!, {
                action: "submit"
            });

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
            
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID!,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
                templateParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
            );

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