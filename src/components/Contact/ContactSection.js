import React from 'react'
import './ContactSection.css';
const ContactSection = () => {
  return (
    <div className='Contact-container'>
            <h1>CONTACT US</h1>
            <div className='contact-ways'>
                <div className='contact-form'>
                    <h3>Send Me a Message</h3>
                    <div className='form-con-contact'>
                        <form >
                            <div>
                            <label><h4>FULLNAME<span>*</span></h4></label>
                            <input type="text" name="user_name" required/>
                            </div>
                            <div>
                            <label><h4>E-MAIL<span>*</span></h4></label>
                            <input type="email" name="user_email" required/>
                            </div>
                            <div>
                            <label><h4>MESSAGE<span>*</span></h4></label>
                            <textarea name="message" id='contact-message-textarea' required/>
                            </div>
                            <button type='submit'>Send Message</button>
                        </form>
                    </div>
                </div>
                <div className='Socialmedia-con'>
                        <h3>Social Media Links</h3>
                        <div className='contact-socialMedia-con'>
                                <div className='c-sm-ol'>
                                    <div className='c-sm-mc'>
                                        <ul>
                                            <li><a href=" s" target='_blank'><i class="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a href="s" target='_blank'><i class="fa-brands fa-instagram"></i></a></li>
                                            <li><a href="s" target='_blank'><i class="fa-brands fa-twitter"></i></a></li>
                                            <li><a href="s" target='_blank'><i class="fa-brands fa-discord"></i></a></li>
                                            <li><a href="s" target='_blank'><i class="fa-brands fa-youtube"></i></a></li>
                                            <li><a href="ss" target='_blank'><i class="fa-brands fa-telegram"></i></a></li>
                                            <li><a href="s" target='_blank'><i class="fa-brands fa-whatsapp"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                        
                </div>
            </div>
    </div>
  )
}

export default ContactSection