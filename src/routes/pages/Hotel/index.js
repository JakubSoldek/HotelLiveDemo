import React from 'react';
import logo from '../../../assets/img/logo.png';
import hotel1 from '../../../assets/img/hotel-1.jpg';
import hotel2 from '../../../assets/img/hotel-2.jpg';
import hotel3 from '../../../assets/img/hotel-3.jpg';
import quotation from '../../../assets/img/bg-pattern-quotation.svg';
import user1 from '../../../assets/img/user-1.jpg';
import user2 from '../../../assets/img/user-2.jpg';
import user3 from '../../../assets/img/user-3.jpg';
import user4 from '../../../assets/img/user-4.jpg';
import user5 from '../../../assets/img/user-5.jpg';
import user6 from '../../../assets/img/user-6.jpg';
import user from '../../../assets/img/user.jpg';

function Hotel() {

    function ActiveMenu() {
        let menuBtn = document.querySelector(".navigations");
        menuBtn.classList.toggle("active-menu");
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
                    <li className="active"><a href="hotel"><span className="nav-text">HOTEL</span></a></li>
                    <li><a href="ContactUs"><span className="nav-text">CONTACT US</span></a></li>
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
                    <div className="higher-content">
                        <span className="main-title">HOTEL LAS PALMAS</span>
                        <span className="higher-content-a"> <a href="/hotel">Alfubeira, Portugal</a></span>
                        <div className="hotel-rate"><span className="rate">8.6</span><span className="votes">429 VOTES</span></div>
                    </div>
                    <div className="lower-content">
                        {/* button book now */}
                        <button className="book-btn">
                            <span className="book-btn-text"> BOOK <br />
                                NOW</span>
                        </button>
                        {/* grid */}
                        <div className="hotel-grid-container ">
                            <div className="grid-left card">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis
                                    ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae
                                    architecto voluptate.
                                </p>
                                <p className="last-p">Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto
                                    voluptate
                                    delectus, inventore iure aliquid aliquam.
                                </p>
                                <div className="hotel-facilities">
                                    <div className="hotel-facilities-first">
                                        <p>Close to the beach</p>
                                        <p>Free airport
                                            shuttle</p>
                                        <p>Air
                                            conditioning and heating</p>
                                        <p>We speak all languages</p>
                                    </div>
                                    <div className="hotel-facilities-second">
                                        <p>Breakfast included</p>
                                        <p>Free wifi in
                                            all rooms</p>
                                        <p>Pets
                                            allowed</p>
                                        <p>Perfect for families</p>
                                    </div>
                                </div>
                                <div className="hotel-rec-users">
                                    <p className="rec-users-text">Lucy and 3 other friends recommend this hotel.</p>
                                    <div className="rec-user-imgs">
                                        <span className="avatar">
                                            <img src={user3} alt="user3" />
                                        </span>
                                        <span className="avatar">
                                            <img src={user4} alt="user4" /> </span>
                                        <span className="avatar">
                                            <img src={user5} alt="user5" /> </span>
                                        <span className="avatar">
                                            <img src={user6} alt="user6" /> </span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-card-first card ">
                                <img src={quotation} alt="quotation" id="quote" />
                                <p className="card-content">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto
                                    dicta animi, totam, itaque officia ex.
                                </p>
                                <header className="card_header">
                                    <img src={user1} alt="Daniel" id="daniel" />
                                    <h2 className="user_name">
                                        NICK<br /> SMITH<span className="comment-date">Feb 23rd,<br />2017</span>
                                    </h2>
                                    <span className="card-rate">7.8</span>
                                </header>
                            </div>
                            <div className="grid-card-second card ">
                                <img src={quotation} alt="quotation" id="quote" />
                                <p className="card-content">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto
                                    dicta animi.
                                </p>
                                <header className="card_header">
                                    <img src={user2} alt="Daniel" id="daniel" />
                                    <h2 className="user_name">
                                        MARY<br /> THOMAS<span className="comment-date">Sept 13th,<br />2017</span>
                                    </h2>
                                    <span className="card-rate">9.3</span>
                                </header>
                            </div>
                            <div className="grid-more-cards-a"><a href="/"><span className="show-all">Show all </span>→</a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

    </div>


}

export default Hotel;