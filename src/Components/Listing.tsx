import React from 'react';
import "./Listing.css";
import { ListingData } from '../App';
import DummyImage from "../mueshi.png"



interface ListingProps {
    index: number
    listing: ListingData
};


const Listing = ({ index, listing }: ListingProps) => {





    return <div className={"outer-listing-container flex-item"}>
        <img className="image" src={DummyImage} alt={listing.name} />
        <div className='product-text-description'>
            <div> {listing.name} - ${listing.price}</div>
            <div> Highest Bidder: {listing.highestBid[0].price} </div>
        </div>

    </div>
}

export default Listing;