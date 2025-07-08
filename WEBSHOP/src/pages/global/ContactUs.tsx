import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_af9jd5c', 'template_8v88no4', form.current, {
        publicKey: 'JAianBgehIoyUrcCe',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contactUs">
      <form ref={form} onSubmit={sendEmail}>
        <TextField name="title" label="Title" variant="outlined" fullWidth margin="normal" />
        <TextField name="from_name" label="Name" variant="outlined" fullWidth margin="normal" />
        <TextField name="from_email" label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField name="message" label="Message" variant="outlined" fullWidth margin="normal" multiline rows={4} />
        <Button type="submit" variant="contained" color="primary">Send</Button>
      </form>
    </div>
  );
};

export default ContactUs;
