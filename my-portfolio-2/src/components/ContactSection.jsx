import emailjs from '@emailjs/browser';
import "../css/contact.css";
import {
  Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch
} from "lucide-react";
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from "react-i18next";

function ContactSection() {
  const { t } = useTranslation();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!form.current) return;

    emailjs
      .sendForm('service_af9jd5c', 'template_8v88no4', form.current, {
        publicKey: 'JAianBgehIoyUrcCe',
      })
      .then(
        () => {
          toast.success(t("contact.form.success"));
          form.current.reset();
        },
        (error) => {
          toast.error(t("contact.form.error"));
          console.error('FAILED...', error?.text || error?.message || error);
        }
      );
  };

  return (
    <section id="contact">
      <div className='contact-container'>
        <h2 className="contact-main-heading">
          {t("contact.mainHeading")} <span className="contact-main-heading-span">{t("contact.mainHeadingSpan")}</span>
        </h2>
        <p className="contact-main-paragraph">
          {t("contact.mainParagraph")}
        </p>

        <div className='contact-info-container'>
          <h3 className="contact-secondary-heading">{t("contact.infoHeading")}</h3>
          <div className='contact-container-boxes'>

            <div className="contact-container-box">
              <div className="contact-icon-container"><Phone /></div>
              <div className='contact-container-box-content'>
                <h4>{t("contact.phone.label")}</h4>
                <a href={`tel:${t("contact.phone.value")}`}>{t("contact.phone.value")}</a>
              </div>
            </div>

            <div className="contact-container-box">
              <div className="contact-icon-container"><Mail /></div>
              <div className='contact-container-box-content'>
                <h4>{t("contact.email.label")}</h4>
                <a href={`mailto:${t("contact.email.value")}`}>{t("contact.email.value")}</a>
              </div>
            </div>

            <div className="contact-container-box">
              <div className="contact-icon-container"><MapPin /></div>
              <div className='contact-container-box-content'>
                <h4>{t("contact.location.label")}</h4>
                <a>{t("contact.location.value")}</a>
              </div>
            </div>
          </div>

          <div className="contact-social-container">
            <h4 className="contact-social-heading">{t("contact.socialHeading")}</h4>
            <div>
              <a className="contact-social-icon" href="#" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
              <a className="contact-social-icon" href="#" target="_blank" rel="noopener noreferrer"><Facebook /></a>
              <a className="contact-social-icon" href="#" target="_blank" rel="noopener noreferrer"><Instagram /></a>
              <a className="contact-social-icon" href="#" target="_blank" rel="noopener noreferrer"><Twitch /></a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3 className="contact-form-heading">{t("contact.formHeading")}</h3>
          <form ref={form} onSubmit={handleSubmit}>
            <div className="contact-form-cell">
              <label htmlFor="name">{t("contact.form.nameLabel")}</label>
              <input
                type="text"
                id="name"
                name="from_name"
                required
                placeholder={t("contact.form.namePlaceholder")}
              />
            </div>

            <div className="contact-form-cell">
              <label htmlFor="email">{t("contact.form.emailLabel")}</label>
              <input
                type="email"
                id="email"
                name="from_email"
                required
                placeholder={t("contact.form.emailPlaceholder")}
              />
            </div>

            <div className="contact-form-cell">
              <label htmlFor="message">{t("contact.form.messageLabel")}</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder={t("contact.form.messagePlaceholder")}
              />
            </div>

            <button className="contact-form-button" type="submit">
              {t("contact.form.submitButton")} <Send size={16} />
            </button>
          </form>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
}

export default ContactSection;
