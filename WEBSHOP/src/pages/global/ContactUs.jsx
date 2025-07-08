
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
        },
      );
  };

  return (
    <div className='contactUs'>
      <form ref={form} onSubmit={sendEmail}>
        <TextField name="title" label="Title" variant="outlined" />
        
        <TextField name="from_name" label="Name" variant="outlined" />
          
        <TextField name="from_email" label="Email" variant="outlined" />
          
        <TextField name="message" label="Message" variant="outlined" />
        
        <Button type="submit" variant="contained">Send</Button>
      </form>
    </div>
  );
};
export default ContactUs