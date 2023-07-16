import React from "react";
import "./searchItem.css";
import { Link } from "react-router-dom";

export default function SearchItem3() {
    return (
        <div className="searchItem">
            <img
                src="img/searchItem3.jpg"
                alt=""
                className="siImg"
            />


            <div className="siDesc">
                <h1 className="siTitle"> Marsden Viaduct Hotel</h1>
                <span>
                    In a prime location in the center of Auckland,
                </span>
                <span className="siHighlight"> Gorgeous 3 bedroom Hotel Apartment </span>
                <span className="siSubtitle">
                    0.7 km from City Centre
                </span>
                <span>
                    Marsden Viaduct Hotel provides Full English/Irish breakfast and free WiFi.
                </span>
                <span className="siOpportun">
                    Grab your oportunity!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <button>3K</button>
                </div>
                <div className="siOption">
                    <span className="siAuction">Auction</span>
                    <span className="siOffer">Offer Available</span>
                    <Link to="/list/apt">
                        <button className="siCheckBtn"> Let's have a look </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};