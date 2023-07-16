import React from "react";
import "./searchItem.css";
import { Link } from "react-router-dom";

export default function SearchItem() {
    return (
        <div className="searchItem">
            <img
                src="img/searchItem1.webp"
                alt=""
                className="siImg"
            />


            <div className="siDesc">
                <h1 className="siTitle">Sky Tower Apartments</h1>
                <span>
                    Excellent location! Heart of Auckland CBD
                </span>
                <span className="siHighlight"> Gorgeous 3 bedroom Apartment </span>
                <span className="siSubtitle">
                    5 min from Sky City
                </span>
                <span>
                    Master Bedroom with own bathrom + walk in wardrop • 2 bedroom • 1 bathroom
                </span>
                <span className="siOpportun">
                    Grab your oportunity!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <button>1.2K</button>
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