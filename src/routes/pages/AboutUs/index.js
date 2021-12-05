import React from 'react';

import logo from 'assets/img/logo.png';
import hotel1 from 'assets/img/hotel-1.jpg';
import hotel2 from 'assets/img/hotel-2.jpg';
import hotel3 from 'assets/img/hotel-3.jpg';
import user from 'assets/img/user.jpg';

function AboutUs() {


	// let menuBtn = document.querySelector(".navigations");
	// let hamburgerBtn = document.querySelector(".hamburger-phone");
	// hamburgerBtn.addEventListener('click', () => menuBtn.classList.toggle("active-menu"));

	function ActiveMenu() {
		let menuBtn = document.querySelector(".navigations");
		menuBtn.classList.toggle("active-menu");
	}
	return <div>
		<header>
			<div className="logo">
				<img src={logo} alt="logo" />
			</div>
			<div className="search-input">
				<div className="hamburger-phone" onClick={ActiveMenu}><i className="fas fa-bars" /></div>
			</div>

			<div className="user">
				<img src={user} alt="actualUsercleans" className="user-photo" />
				<span className="welcome-txt">Hi Johnn</span>
			</div>
		</header>
		<div className="left-right-wrapper">
			<nav className="left-side">
				<ul className="navigations ">
					<li className="active"><a href="/"><span className="nav-text">ABOUT US</span> </a></li>
					<li><a href="hotel"><span className="nav-text">HOTEL </span> </a></li>
					<li><a href="ContactUs"><span className="nav-text">CONTACT US</span></a></li>
					<li><a href="RoomsPage"><span className="nav-text">ROOMS </span> </a></li>
				</ul>
				<div className="rights">© 2021 All rasights reserved.</div>
			</nav>
			<div className="right-side">
				<section className="hotels-photo">
					<div className="hotel-photo">
						<img src={hotel1} alt="hotel at night" />
					</div>
					<div className="hotel-photo">
						<img src={hotel2} alt="hotels pool" />
					</div>
					<div className="hotel-photo">
						<img src={hotel3} alt="hotel view" />
					</div>
				</section>
				<main>
					<div className="index-higher-content">
						<span className="main-title">ABOUT US</span>
						<span className="higher-content-a"> <a href="/ContactUs">Contact us</a></span>
					</div>
					<div className="about-lower-content">
						<div className="about-lower-container">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis
								ratione
								sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto
								voluptate.
							</p>
							{/*  przyciski animowane */}
							{/* <div class="container">
			  <a href="#" class="button">Hover me</a>
		  </div>

		  <div class="container">
			  <button class="btn-change3">Button</button>
		  </div> */}
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis
								ratione
								sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto
								voluptate.
							</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis
								ratione
								sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto
								voluptate.
							</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis
								ratione
								sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto
								voluptate.
							</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis
								ratione
								sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto
								voluptate.
							</p>
							<p>Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus,
								inventore
								iure aliquid aliquam.
							</p>

						</div>
					</div>
				</main>
			</div>
		</div>

	</div>;
}

export default AboutUs;