import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Listing from './Components/Listing.tsx';

export enum Status {
  Denied,
  InProgress,
  Accepted
};
export interface PersonData {
  id: number,
  name: string,
  totalSales: number,
  listings: ListingData[]
}
export interface BidData {
  id: number,
  bidderId: number,
  price: number,
  status: Status
};
export interface ListingData {
  id: number,
  ownerId: number,
  name: string,
  price: number,
  highestBid: BidData[]
}

// Create 10 objects and put them into an array
const dummyListing: ListingData[] = [
  {
    id: 0,
    ownerId: 101,
    name: 'Listing 1',
    price: 50,
    highestBid: [{
      id: 0,
      price: 60,
      bidderId: 201,
      status: Status.Accepted,
    }],
  },
  {
    id: 1,
    ownerId: 102,
    name: 'Listing 2',
    price: 75,
    highestBid: [{
      id: 1,
      price: 80,
      bidderId: 202,
      status: Status.Denied,
    }],
  },
  {
    id: 2,
    ownerId: 103,
    name: 'Listing 3',
    price: 40,
    highestBid: [{
      id: 2,
      price: 45,
      bidderId: 203,
      status: Status.InProgress,
    }],
  },
  {
    id: 3,
    ownerId: 103,
    name: 'Listing 3',
    price: 45,
    highestBid: [{
      id: 2,
      price: 45,
      bidderId: 203,
      status: Status.InProgress,
    }],
  },
  {
    id: 1,
    ownerId: 101,
    name: 'Listing 1',
    price: 30,
    highestBid: [{
      id: 1,
      price: 35,
      bidderId: 201,
      status: Status.InProgress,
    }],
  },
  {
    id: 2,
    ownerId: 102,
    name: 'Listing 2',
    price: 25,
    highestBid: [{
      id: 2,
      price: 30,
      bidderId: 202,
      status: Status.Accepted,
    }],
  },
  {
    id: 3,
    ownerId: 103,
    name: 'Listing 3',
    price: 40,
    highestBid: [{
      id: 3,
      price: 45,
      bidderId: 203,
      status: Status.InProgress,
    }],
  },
  {
    id: 4,
    ownerId: 104,
    name: 'Listing 4',
    price: 50,
    highestBid: [{
      id: 4,
      price: 55,
      bidderId: 204,
      status: Status.Accepted,
    }],
  },
  {
    id: 5,
    ownerId: 105,
    name: 'Listing 5',
    price: 60,
    highestBid: [{
      id: 5,
      price: 65,
      bidderId: 205,
      status: Status.InProgress,
    }],
  },
  {
    id: 6,
    ownerId: 106,
    name: 'Listing 6',
    price: 70,
    highestBid: [{
      id: 6,
      price: 75,
      bidderId: 206,
      status: Status.Accepted,
    }],
  },
  {
    id: 7,
    ownerId: 107,
    name: 'Listing 7',
    price: 80,
    highestBid: [{
      id: 7,
      price: 85,
      bidderId: 207,
      status: Status.InProgress,
    }],
  },
  {
    id: 8,
    ownerId: 108,
    name: 'Listing 8',
    price: 90,
    highestBid: [{
      id: 8,
      price: 95,
      bidderId: 208,
      status: Status.Accepted,
    }],
  },
  {
    id: 9,
    ownerId: 109,
    name: 'Listing 9',
    price: 100,
    highestBid: [{
      id: 9,
      price: 105,
      bidderId: 209,
      status: Status.InProgress,
    }],
  },
  {
    id: 10,
    ownerId: 110,
    name: 'Listing 10',
    price: 110,
    highestBid: [{
      id: 10,
      price: 115,
      bidderId: 210,
      status: Status.Accepted,
    }],
  },
  {
    id: 11,
    ownerId: 111,
    name: 'Listing 11',
    price: 120,
    highestBid: [{
      id: 11,
      price: 125,
      bidderId: 211,
      status: Status.InProgress,
    }],
  },
  // Add more objects as needed
];

function App() {

  const [listings, setListings] = useState<ListingData[]>(dummyListing)
  const [yourLists, setYourLists] = useState<boolean>(true);
  const [totalSales, setTotalSales] = useState<number>(0);

  return (
    <div className="App">
      <div className='navbar'>
        Your listings
        all listings
        total sales {totalSales}
      </div>
      <div> putain </div>
      <div className="outer-body">
        {listings.map((listing, index) => {

          return <Listing index={index} listing={listing}></Listing>


        })}
      </div>

    </div>
  );
}

export default App;