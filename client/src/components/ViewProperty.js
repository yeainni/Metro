import React from "react";
import "./vProperty.css";

export default function FeaturedProperty() {
    return (
        <div className="fp">
            <div className="fpItem">
                <img
                    src="img/2storeyHouse.webp"
                    alt="2 Storey House"
                    className="fpImg"
                />
                <span className="fpName">2 Storey House</span>
                <span className="fpCity">Halfmoon Bay</span>
                <span className="fpPrice">Near Nego</span>
                <div className="fpRating">
                    <button>5.2k</button>
                    <span>East Auckland</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="img/apartment.jpg"
                    alt="Apartment"
                    className="fpImg"
                />
                <span className="fpName">Apartment</span>
                <span className="fpCity">Auckland CBD</span>
                <span className="fpPrice">Auction</span>
                <div className="fpRating">
                    <button>5k</button>
                    <span>Auckland CBD</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="img/townhouse.webp"
                    alt="Townhouse"
                    className="fpImg"
                />
                <span className="fpName">Townhouse</span>
                <span className="fpCity">Howic</span>
                <span className="fpPrice">$ 1m</span>
                <div className="fpRating">
                    <button>4.7k</button>
                    <span>East Auckland</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="img/mension.jpg"
                    alt="Mension"
                    className="fpImg"
                />
                <span className="fpName">Mension</span>
                <span className="fpCity">Drury</span>
                <span className="fpPrice">Starting from $ 2m</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>South Auckland</span>
                </div>
            </div>
        </div>
    );
};
