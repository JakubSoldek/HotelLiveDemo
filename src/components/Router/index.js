import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from '../../routes/pages/AboutUs';
import Hotel from '../../routes/pages/Hotel'
import ContactUs from '../../routes/pages/ContactUs';
import RoomsPage from '../../routes/pages/RoomComponent';
// import RoomOffer from '../../components/RoomOffer/RoomOffer.js';


const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AboutUs />} />
				{/* Dodaj potrzebne ścieżki aplikacji */}
				<Route path='/hotel' element={<Hotel />} />
				<Route path='/ContactUs' element={<ContactUs />} />
				<Route path='/RoomsPage' element={<RoomsPage />} />
				{/* <Route path='/room' element={<RoomOffer />} /> */}



			</Routes>
		</BrowserRouter>
	);
};

export default Router;
