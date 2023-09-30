import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import axios from "axios";
import './App.css';
import Listing from './Components/Listing.tsx';
import CreateListing from './Components/CreateListing.tsx';
import ListingFilter from './Components/ListingFilter.tsx';
import { AppComponent, BottomNavbar } from './AppStyles.tsx';
import DummyImage from "./mueshi.png"

export enum Status {
  Denied,
  InProgress,
  Accepted
};


export interface BidData {
  id: number,
  bidderId: number,
  listingId: number,
  price: number,
  status: Status,
  bidder?: PersonData
};
export interface PersonData {
  id: number,
  name: string,
  totalSales: number,
  listings: number[]          // listing ids
}

export interface ListingData {
  id: number,
  ownerId: number,
  name: string,
  price: number,
  highestBid: number | null,
  bids: number[]
}

// export interface PersonData {
//   id: number,
//   name: string,
//   totalSales: number,
//   listings: ListingData[]
// }
// export interface BidData {
//   id: number,
//   bidderId: number,
//   listingId: number,
//   price: number,
//   status: Status
// };
// export interface ListingData {
//   id: number,
//   ownerId: number,
//   name: string,
//   price: number,
//   highestBid: number
// }

// Create 10 objects and put them into an array
// const dummyListing: ListingData[] = [
//   {
//     id: 0,
//     ownerId: 101,
//     name: 'Listing 1',
//     price: 50,
//     highestBid: [{
//       id: 0,
//       price: 60,
//       bidderId: 201,
//       status: Status.Accepted,
//     }],
//   },
//   {
//     id: 1,
//     ownerId: 101,
//     name: 'Listing 2',
//     price: 75,
//     highestBid: [{
//       id: 1,
//       price: 80,
//       bidderId: 202,
//       status: Status.Denied,
//     }],
//   },
//   {
//     id: 2,
//     ownerId: 101,
//     name: 'Listing 3',
//     price: 40,
//     highestBid: [{
//       id: 2,
//       price: 45,
//       bidderId: 203,
//       status: Status.InProgress,
//     }],
//   },
//   {
//     id: 3,
//     ownerId: 101,
//     name: 'Listing 3',
//     price: 45,
//     highestBid: [{
//       id: 2,
//       price: 45,
//       bidderId: 203,
//       status: Status.InProgress,
//     }],
//   },
//   {
//     id: 1,
//     ownerId: 101,
//     name: 'Listing 1',
//     price: 30,
//     highestBid: [{
//       id: 1,
//       price: 35,
//       bidderId: 201,
//       status: Status.InProgress,
//     }],
//   },
//   {
//     id: 2,
//     ownerId: 102,
//     name: 'Listing 2',
//     price: 25,
//     highestBid: [{
//       id: 2,
//       price: 30,
//       bidderId: 202,
//       status: Status.Accepted,
//     }],
//   },
//   {
//     id: 3,
//     ownerId: 103,
//     name: 'Listing 3',
//     price: 40,
//     highestBid: [{
//       id: 3,
//       price: 45,
//       bidderId: 203,
//       status: Status.InProgress,
//     }],
//   },
//   {
//     id: 4,
//     ownerId: 104,
//     name: 'Listing 4',
//     price: 50,
//     highestBid: [{
//       id: 4,
//       price: 55,
//       bidderId: 204,
//       status: Status.Accepted,
//     }],
//   },
//   {
//     id: 5,
//     ownerId: 105,
//     name: 'Listing 5',
//     price: 60,
//     highestBid: [{
//       id: 5,
//       price: 65,
//       bidderId: 205,
//       status: Status.InProgress,
//     }],
//   },
//   {
//     id: 6,
//     ownerId: 106,
//     name: 'Listing 6',
//     price: 70,
//     highestBid: [{
//       id: 6,
//       price: 75,
//       bidderId: 206,
//       status: Status.Accepted,
//     }],
//   },
//   {
//     id: 7,
//     ownerId: 107,
//     name: 'Listing 7',
//     price: 80,
//     highestBid: [{
//       id: 7,
//       price: 85,
//       bidderId: 207,
//       status: Status.InProgress,
//     }],
//   },
//   {
//     id: 8,
//     ownerId: 108,
//     name: 'Listing 8',
//     price: 90,
//     highestBid: [{
//       id: 8,
//       price: 95,
//       bidderId: 208,
//       status: Status.Accepted,
//     }],
//   },
//   {
//     id: 9,
//     ownerId: 109,
//     name: 'Listing 9',
//     price: 100,
//     highestBid: [{
//       id: 9,
//       price: 105,
//       bidderId: 209,
//       status: Status.InProgress,
//     }],
//   },
//   {
//     id: 10,
//     ownerId: 111,
//     name: 'Listing 10',
//     price: 110,
//     highestBid: [{
//       id: 10,
//       price: 115,
//       bidderId: 210,
//       status: Status.Accepted,
//     }],
//   },
//   {
//     id: 11,
//     ownerId: 111,
//     name: 'Listing 11',
//     price: 120,
//     highestBid: [{
//       id: 11,
//       price: 125,
//       bidderId: 211,
//       status: Status.InProgress,
//     }],
//   },
//   // Add more objects as needed
// ];

// const dummyUser: PersonData = {
//   name: "dummy",
//   id: 0,
//   totalSales: 10,
//   listings: []
// };

function App() {

  const navigator = useNavigate();

  const [user, setUser] = useState<PersonData>();
  const [listings, setListings] = useState<ListingData[]>()
  const [showYourLists, setShowYourLists] = useState<boolean>(true);
  // const [totalSales, setTotalSales] = useState<number>(0);
  const [fadeAway, setFadeAway] = useState<boolean>(false);


  useEffect(() => {
    axios.get("http://localhost:3001/getPeople").then((res) => {
      setUser(res.data);
    })
  }, [])


  useEffect(() => {
    axios.get("http://localhost:3001/").then((response) => {
      console.log("RESPONE: ", response.data)
      setListings(response.data);
    }).catch((err) => {
      console.log("error: ", err);
    })
  }, [])

  const handleSetShowYourLists = () => {
    setShowYourLists(!showYourLists);
  }

  const handleFadeAway = (id: number) => {
    setFadeAway(true);
    setTimeout(() => {
      navigator(`/listing/${id}`)
    }, 1000)

  }

  const addListing = (data: any) => {
    let newListings: any = [...listings as ListingData[]];
    newListings?.push(data);
    setListings(newListings);
    console.log("LISTINGS AFTER: ", listings);
  }

  return (
    <AppComponent fadeAway={fadeAway}>
      <div className='navbar' >
        <a className="nav-links"> Dummy</a>
        <a className="nav-links"> Link </a>
        <a className="nav-links"> Total Sales: ${user && user.totalSales}</a>
        <img className="nav-link-image" style={{ width: "25px", height: "25px", borderRadius: "100000px" }} src={DummyImage} alt={"Dummy"} />

      </div>
      {user && <CreateListing listings={listings} addListing={addListing} ownerId={user.id}></CreateListing>}

      <div>
        <div className="app-horizontal-divider"></div>
      </div>
      <div className="app-sales-filter-container">
        <h2 className='app-total-sales'>Your Total Sales: ${user && user.totalSales}</h2>

        <ListingFilter showYourLists={showYourLists} handleSetShowYourLists={handleSetShowYourLists}></ListingFilter>
      </div>


      <div className="app-outer-body">

        {listings && listings.filter((listing) => {
          if (showYourLists === true) {
            return listing.ownerId === user.id;
          } else {
            return true;
          }

        }).map((listing, index) => {
          return <Listing handleFadeAway={handleFadeAway} key={index} index={index} listing={listing}></Listing>


        })}
      </div>
      <BottomNavbar>
        <a style={{ fontFamily: "Helvetica", fontStyle: "italic", margin: "auto 20px" }} className="nav-links"> Dummy</a>
        <a style={{ fontStyle: "italic", margin: "auto 20px" }} className="nav-links"> Link</a>
        <a style={{ fontStyle: "italic", margin: "auto 20px" }} className="nav-links"> Mueshi.io</a>

      </BottomNavbar>

    </AppComponent >
  );
}

export default App;
