import React, { useState } from 'react';
import StyledButton from "./ListingFilterStyles.tsx"


const ListingFilter = ({ showYourLists, handleSetShowYourLists }: { showYourLists: boolean, handleSetShowYourLists: () => {} }) => {


    return <StyledButton showYourLists={showYourLists} onClick={handleSetShowYourLists}>
        {showYourLists && `Your Listings`}
        {!showYourLists && `All Listings`}
    </StyledButton>

}


export default ListingFilter;