import React from "react";
import "./searchItem.css";
import { Link } from "react-router-dom";

export default function SearchItem2() {
    return (
        <div className="searchItem">
            <img
                src="img/searchItem2.jpg"
                alt=""
                className="siImg"
            />


            <div className="siDesc">
                <h1 className="siTitle">QT apartment</h1>
                <span>
                    Set in Auckland in the heart of the Viaduct Harbor
                </span>
                <span className="siHighlight"> Gorgeous 4 bedroom Apartment </span>
                <span className="siSubtitle">
                    0.5 km from center
                </span>
                <span>
                    Popular points of interest near QT Auckland include Sky Tower, Viaduct Harbor and SKYCITY Auckland Convention Center.
                </span>
                {/* <span className="siOpportun">
                    Grab your oportunity!
                </span> */}
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <button>1.7K</button>
                </div>
                <div className="siOption">
                    {/* <span className="siAuction">Auction</span> */}
                    <span className="siOffer">Rental Available</span>
                    <Link to="/list/apt">
                        <button className="siCheckBtn"> Let's have a look </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};