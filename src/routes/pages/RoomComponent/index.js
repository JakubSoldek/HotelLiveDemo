import React from 'react';
import logo from '../../../assets/img/logo.png';
import hotel1 from '../../../assets/img/hotel-1.jpg';
import hotel2 from '../../../assets/img/hotel-2.jpg';
import hotel3 from '../../../assets/img/hotel-3.jpg';
import user from '../../../assets/img/user.jpg';
//START searching rooms
import JSONDATA from "assets/data/rooms.json"
import { useState } from "react";
import RoomOfferItem from "components/RoomOfferItem/RoomOfferItem";
import { WrapperRoomOffer } from "components/RoomOffer/RoomOffer.styles";
//stop searching rooms

function RoomsPage() {
    //searching useState
    const [searchTerm, setSearchTerm] = useState('')

    function ActiveMenu() {
        let menuBtn = document.querySelector(".navigations");
        menuBtn.classList.toggle("active-menu");
    }

    return <div>
        <header>
            <div className="logo"><img src={logo} alt="logo" /></div>
            <div className="search-input" onChange={event => { setSearchTerm(event.target.value) }}>
                <div className="hamburger-phone" onClick={ActiveMenu}><i className="fas fa-bars" /></div><input type="text" placeholder="Search rooms" />
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
                    <li><a href="ContactUs"><span className="nav-text">CONTACT US</span></a></li>
                    <li className="active"><a href="RoomsPage"><span className="nav-text">ROOMS </span> </a></li>

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
                        <span className="main-title">ROOMS</span>
                        <span className="higher-content-a"> <a href="/ContactUs">Contact us</a></span>
                    </div>
                    <div className="contact-lower-content">
                        <div className="contact-lower-container">



                            <WrapperRoomOffer >
                                <div className="search-input-mobile" onChange={event => { setSearchTerm(event.target.value) }}>
                                    <input type="text" placeholder="Search rooms" />
                                </div>
                                {JSONDATA.filter((val) => {
                                    if (searchTerm === "") {
                                        return val
                                    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return val
                                    }
                                    return false;
                                }).map((userData, key) => (
                                    <RoomOfferItem userData={userData} key={key} />
                                ))}
                            </WrapperRoomOffer>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>

}

export default RoomsPage;