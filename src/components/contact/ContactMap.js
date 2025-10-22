import React from 'react';

const ContactMap = () => {
    return (
        <>
            <div className="contact-map pb-30 pl-30 pr-30 wow fadeInUp" data-wow-delay=".3s">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105733.56679935717!2d-34.96400034906209!3d-7.146431196422722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace839019aa3d7%3A0x6e414a9c6d26db34!2sJo%C3%A3o%20Pessoa%2C%20PB!5e1!3m2!1spt-BR!2sbr!4v1761155484737!5m2!1spt-BR!2sbr"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    )
}

export default ContactMap;
