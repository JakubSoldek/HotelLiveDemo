import React from "react";
// import PropTypes from 'prop-types'; nr1
import { RoomItem } from "./RoomOfferItem.style";
// import { star } from "assets/img/SVG/star.svg"


const RoomOfferItem = (props) => (
    <RoomItem>

        <div className="cards__item">
            <div className="card">
                <div className="hotel__image" ><img className="cover" src={props.userData.image} alt="hotel" /></div>
                <div className="card__content">
                    <div className="card__title">{props.userData.title.toUpperCase()}</div>
                    <div className="stars"><svg width="40" height="40" fill=" #FFDF00" viewBox="0 0 20 20">
                        <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                    </svg><svg width="45" height="45" fill=" #FFDF00" viewBox="0 0 20 20">
                            <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                        </svg><svg width="50" height="50" fill=" #FFDF00" viewBox="0 0 20 20">
                            <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                        </svg><svg width="45" height="45" fill=" #FFDF00" viewBox="0 0 20 20">
                            <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                        </svg><svg width="40" height="40" fill=" #FFDF00" viewBox="0 0 20 20">
                            <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                        </svg>
                    </div>
                    <div className="price-size-container">
                        <p className="room_size">  SIZE: {props.userData.size}</p>
                        <p className="room_price">PRICE: {props.userData.price}{props.userData.currency}</p>
                    </div>
                    <a href="/ContactUs" ><button className="btn">BOOK NOW</button></a>
                </div>
            </div>
        </div>




    </RoomItem>
);

// RoomOfferItem.propTypes = {sluzy do okreslenia jkaiego typu sa przekazywane propsy np string czy number} nr1

export default RoomOfferItem;