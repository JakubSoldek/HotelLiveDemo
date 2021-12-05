import React, { useState } from 'react';
import logo from '../../../assets/img/logo.png';

import hotel1 from '../../../assets/img/hotel-1.jpg';
import hotel2 from '../../../assets/img/hotel-2.jpg';
import hotel3 from '../../../assets/img/hotel-3.jpg';
import user from '../../../assets/img/user.jpg';


function ContactUs() {

    function ActiveMenu() {
        let menuBtn = document.querySelector(".navigations");
        menuBtn.classList.toggle("active-menu");
    }

    const [title, setTitle] = useState('');

    let ifClicked = false;

    const submitWithName = (e) => {
        e.preventDefault();
        if (!ifClicked) {
            let tag = document.createElement("p");
            tag.classList.add("send-form-info");
            let text = document.createTextNode("Thank you " + title + " for a message, we will contact you as soon as possible.");
            tag.appendChild(text);
            let element = document.querySelector("form");
            element.appendChild(tag);
            ifClicked = true;
        }

    }

    return <div>
        <header>
            <div className="logo"><img src={logo} alt="logo" /></div>
            <div className="search-input">
                <div className="hamburger-phone" onClick={ActiveMenu}><i className="fas fa-bars" /></div>
            </div>
            <div className="user">
                <img src={user} alt="user" className="user-photo" />
                <span className="welcome-txt">Hi John</span>
            </div>
        </header>
        <div className="left-right-wrapper">
            <nav className="left-side">
                <ul className="navigations ">
                    <li><a href="/"><span className="nav-text">ABOUT US</span></a></li>
                    <li><a href="hotel"><span className="nav-text">HOTEL</span></a></li>
                    <li className="active"><a href="ContactUs"><span className="nav-text">CONTACT US</span></a></li>
                    <li><a href="RoomsPage"><span className="nav-text">ROOMS </span> </a></li>

                </ul>
                <div className="rights">© 2021 All rights reserved.</div>
            </nav>
            <div className="right-side">
                <section className="hotels-photo">
                    <div className="hotel-photo"> <img src={hotel1} alt="hotel at night" />
                    </div>
                    <div className="hotel-photo"><img src={hotel2} alt="hotels pool" />
                    </div>
                    <div className="hotel-photo"><img src={hotel3} alt="hotel view" /></div>
                </section>
                <main>
                    <div className="contact-higher-content">
                        <span className="main-title">CONTACT US</span>
                        <span className="higher-content-a"> <a href="/">Hotel</a></span>
                    </div>
                    <div className="contact-lower-content">
                        <div className="contact-lower-container">
                            <p>If you have any questions please send us a message</p>
                            <form onSubmit={submitWithName}>
                                <input className="name-input" type="text" name="name" id="name" placeholder="Name and Surname" required value={title} onChange={(e) => setTitle(e.target.value)} />
                                <input className="email-input" type="email" name="email" id="email" placeholder="E-mail" required />
                                <input className="tel-input" type="tel" name="tel" id="tel" placeholder="Tel number e.g.605 837 265" required pattern="[0-9]{3} [0-9]{3} [0-9]{3}" />
                                <textarea name="message" id="message" cols={30} rows={5} placeholder="Describe your message..." defaultValue={""} />
                                <button className="contact-btn" type="submit">SEND MESSAGE</button>
                            </form>
                            <p>Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus,
                                inventore
                                iure aliquid aliquam.</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>

}

export default ContactUs;