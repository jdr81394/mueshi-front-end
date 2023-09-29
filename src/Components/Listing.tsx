import React, { useEffect, useState } from 'react';
import "./ListingStyles.tsx";
import { ListingData } from '../App';
import DummyImage from "../mueshi.png"
import { ListingImage, OuterListingContainer, ProductTextDescription } from './ListingStyles.tsx';



interface ListingProps {
    index: number
    listing: ListingData,
    handleFadeAway: (id: number) => {}
};


const Listing = ({ index, listing, handleFadeAway }: ListingProps) => {

    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [top, setTop] = useState<number>();
    const [left, setLeft] = useState<number>();

    const elementRef = React.createRef();


    const expandListing = () => {
        setIsExpanded(true);
        handleFadeAway(listing.id);
    }


    useEffect(() => {
        const x = elementRef.current as any;
        const { top, left } = x.getBoundingClientRect();
        setTop(top);
        setLeft(left);
    }, [])


    return <OuterListingContainer top={top} left={left} ref={elementRef} isExpanded={isExpanded} onClick={() => expandListing()} className="flex-item">
        <ListingImage isExpanded={isExpanded} className="image" src={DummyImage} alt={listing.name}></ListingImage>
        <ProductTextDescription isExpanded={isExpanded} >
            <div> {listing.name} - ${listing.price}</div>
            <div> Highest Bidder: {listing.highestBid[0].price} </div>
        </ProductTextDescription>
    </OuterListingContainer>

}

export default Listing;