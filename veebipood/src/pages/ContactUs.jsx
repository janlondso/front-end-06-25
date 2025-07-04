import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, TextField } from '@mui/material';

export const ContactUs = () => {
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
    <form ref={form} onSubmit={sendEmail}>
      {/* <label>Name</label> <br />
      <input type="text" name="from_name" /> <br />
      <label>Title</label> <br />
      <input type="text" name="title" /> <br /> */}

      <TextField name="from_name" label="Name" variant="outlined" />
        <br /> <br />
      <TextField name="from_email" label="Email" variant="outlined" />
        <br /> <br />
      <TextField name="message" label="Message" variant="outlined" />
        <br /> <br />
      
      
      {/* <label>Email</label> <br />
      <input type="email" name="from_email" /> <br />
      <label>Message</label> <br />
      <textarea name="message" /> <br /> */}
      <Button type="submit" variant="contained">Send</Button>
    </form>
  );
};