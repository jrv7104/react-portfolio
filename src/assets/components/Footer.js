import React from 'react';
import GitHub from '../logos/GitHub logo.png';
import LinkedIn from '../logos/LinkedIn logo.png';

function Footer() {
    return (
        <section className="page-section contact" id="contact">
    <div>
        <address>
            <a href="tel:+13148524554">314-852-4554</a>
            <a href="mailto:jrv04@hotmail.com">jrv04@hotmail.com</a>
            <a href="https://github.com/jrv7104" target="_blank" rel="noopener noreferrer"><img src={GitHub} className="GitHub logo"/></a>
            <a href="https://www.linkedin.com/in/jason-viox-8477b7131" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} className="LinkedIn logo"/></a>
        </address>
    </div>
    </section>
    );
}

export default Footer;