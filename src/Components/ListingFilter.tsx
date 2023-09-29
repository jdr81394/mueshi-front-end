import React, { useState } from 'react';
import StyledButton from "./ListingFilterStyles.tsx"


const ListingFilter = ({ showYourLists, handleSetShowYourLists }: { showYourLists: boolean, handleSetShowYourLists: () => {} }) => {

    console.log(handleSetShowYourLists)

    return <div>
        <StyledButton showYourLists={showYourLists} onClick={handleSetShowYourLists}>
            {showYourLists && `Your Listings`}
            {!showYourLists && `All Listings`}
        </StyledButton>
    </div>
}


export default ListingFilter;