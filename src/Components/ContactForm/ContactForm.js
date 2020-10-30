import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {

    const [contactMessage,setContactMessage] = useState({});

    const handleBlur = (e) => {
        let newMessage = {...contactMessage};
        let name = e.target.name;
        newMessage[name] = e.target.value;
        setContactMessage(newMessage);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = contactMessage;

        let templateParams = {
            from_name: name,
            to_name: 'Rayhan',
            email: email,
            message: message
        }

        emailjs.send(
            'gmail',
            'template_2vj65tu',
             templateParams,
            'user_HIpQ3LhZPJiVEV5OL90AR'
        )
        .then((response) => {
            alert("Your message send successfully")
         }, (err) => {
            alert("Your message send failed")
         });

    }



    return (
        <div className="contact-form">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="mb-4" style={{fontFamily: 'Rubik'}}>CONTACT ME</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    onBlur={handleBlur}
                                    name="name" 
                                    className="form-control" 
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email"
                                    onBlur={handleBlur} 
                                    name="email" 
                                    className="form-control" 
                                    placeholder="Email address"
                                />
                            </div>
                            <div className="form-group">
                                <textarea 
                                    onBlur={handleBlur}
                                    className="form-control" 
                                    name="message" 
                                    rows="7" 
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <input type="submit" className="btn btn-primary" value="Send Message"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;