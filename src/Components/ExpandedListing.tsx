import React, { useEffect, useState } from 'react';
import { AskingPrice, AskingPriceContainer, BidPanel, BidPanelButtonContainer, BidPanelButtonContainerAcceptButton, BidPanelButtonContainerDeclineButton, BidPanelFlex, BidPanelImage, BidPanelText, BottomHalf, BottomNavbar, ButtonContainer, CancelButton, CurrentBidderText, DeleteButton, EditButton, FullPage, NameInput, Navbar, Photo, PriceInput, SaveButton, TextArea, TextForm, TopHalf, VerticalDivider } from './ExpandedListingStyles.tsx';
import { useLocation, useSearchParams, useParams, useNavigate, Link } from 'react-router-dom';
import DummyImage from "../mueshi.png"
import { BidData, Status } from '../App.tsx';
import axios from "axios";


const dummyBids: BidData[] = [
    {
        id: 1,
        bidderId: 101,
        listingId: 201,
        price: 50,
        status: Status.Accepted,
    },
    {
        id: 2,
        bidderId: 102,
        listingId: 202,
        price: 60,
        status: Status.Accepted,
    },
    {
        id: 3,
        bidderId: 103,
        listingId: 203,
        price: 70,
        status: Status.InProgress,
    },
    {
        id: 4,
        bidderId: 104,
        listingId: 204,
        price: 45,
        status: Status.Denied,
    },
    {
        id: 5,
        bidderId: 105,
        listingId: 205,
        price: 55,
        status: Status.InProgress,
    },
];

const dummyUser: PersonData = {
    name: "dummy",
    id: 0,
    totalSales: 10,
    listings: []
};


const ExpandedListing = () => {

    const [name, setName] = useState<string>("Dummy Name");
    const [price, setPrice] = useState<string>();
    const [bids, setBids] = useState<BidData[]>(dummyBids);
    const [isOwner, setIsOwner] = useState<boolean>(false);
    const [description, setDescription] = useState<string>("");
    const [fadeAway, setFadeAway] = useState<boolean>(false);

    const [isEdit, setIsEdit] = useState<boolean>(false);


    const { id } = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`http://localhost:3001/getListing?id=${id}`).then((res) => {
            const { listing } = res.data;
            const dummyBids = res.data.bids;
            const { name, price } = listing;


            if (listing.ownerId === dummyUser.id) {
                setIsOwner(true);
            }


            setName(name);
            setPrice("$" + price);
            setBids(dummyBids);
            console.log(dummyBids);
        }).catch((err) => {
            console.error("Error when getting listing: ", err);
        })
    }, [])

    const handleSave = () => {
        /* make api call */
        const newPrice = price?.substring(1);
        axios.put("http://localhost:3001/putListing", { name, price: newPrice, id })
            .then((response) => {
                const { name, price } = response.data;
                setName(name);
                setPrice("$" + price);
                // Handle the successful response here
                console.log('PUT request successful:', response.data);
                setIsEdit(false);
            })
            .catch((error) => {
                // Handle any errors that occurred during the request
                console.error('Error making PUT request:', error);
            });
    }

    const handleEdit = () => {
        if (isEdit === false) setIsEdit(true);
        else setIsEdit(false);
    }


    const handleDelete = () => {
        /* make api call */
        axios.delete(`http://localhost:3001/deleteListing?id=${id}`).then((response) => {
            console.log("RESPONSE : ", response);
            setFadeAway(true);

            setTimeout(() => {
                navigator("/");

            }, 1000)

            /* */
        })
    }

    const acceptBid = (id: number) => {

        axios.put("http://localhost:3001/acceptBid", { id }).then((res) => {

            console.log("RES: ", res);
            setFadeAway(true);

            setTimeout(() => {
                navigator("/");

            }, 1000)
        })

    }

    const declineBid = (id: number) => { }


    const updateName = (e: any) => {
        const value = e.target.value;
        setName(value);
    }

    const updatePrice = (e: any) => {
        const value = e.target.value;
        setPrice(value);
    }


    /* http call to get name, price and value */

    return <FullPage fadeAway={fadeAway}>
        <Navbar>
            <Link style={{ margin: "auto 20px", color: "inherit", textDecoration: 'none' }} className="nav-link" to="/">Home</Link>
            <a style={{ margin: "auto 20px" }} className="nav-links"> Dummy</a>
            <a style={{ margin: "auto 20px" }} className="nav-links"> Link </a>
            <img style={{ margin: "auto 20px" }} className="nav-link-image" style={{ width: "25px", height: "25px", borderRadius: "100000px" }} src={DummyImage} alt={"Dummy"} />

        </Navbar>

        <TopHalf>
            <Photo src={DummyImage} alt={"hi"}></Photo>
            <TextForm>
                <NameInput isEdit={isEdit} disabled={!isEdit} type="string" value={name} onChange={(e) => updateName(e)} />
                <AskingPriceContainer>
                    <AskingPrice>Asking Price:</AskingPrice>
                    <PriceInput isEdit={isEdit} disabled={!isEdit} type="string" value={price} onChange={(e) => updatePrice(e)} />
                </AskingPriceContainer>
                {/* <TextArea value={description} /> */}

                {isOwner &&
                    <ButtonContainer>
                        {!isEdit && <EditButton onClick={handleEdit}> Edit </EditButton>}
                        {!isEdit && <DeleteButton onClick={handleDelete}> Delete </DeleteButton>}
                        {isEdit && <SaveButton onClick={handleSave}> Save </SaveButton>}
                        {isEdit && <CancelButton onClick={handleEdit}> Cancel </CancelButton>}
                    </ButtonContainer>
                }
            </TextForm>
        </TopHalf>
        <BottomHalf>
            <VerticalDivider></VerticalDivider>

            <CurrentBidderText> Current Bidders</CurrentBidderText>
            {bids && bids.map((bid, index) => {
                return <BidPanel key={index}>
                    <BidPanelFlex>
                        <BidPanelImage src={DummyImage} alt={"hi"}></BidPanelImage>
                        <BidPanelText>
                            <div> Bidder: {bid?.bidder?.name} </div>
                            <div> Bid: ${bid.price} </div>
                        </BidPanelText>
                    </BidPanelFlex>
                    {isOwner &&
                        <BidPanelButtonContainer>
                            <BidPanelButtonContainerAcceptButton onClick={() => acceptBid(bid.id)}>Accept</BidPanelButtonContainerAcceptButton>
                            <BidPanelButtonContainerDeclineButton onClick={() => declineBid(bid.id)}>Decline</BidPanelButtonContainerDeclineButton>

                        </BidPanelButtonContainer>
                    }
                </BidPanel>
            })}
            {bids.length === 0 && <div style={{ marginBottom: "100px", fontStyle: "italic", fontSize: "16px", textAlign: "center" }}>No Bids Found.</div>}
        </BottomHalf>
        <BottomNavbar>
            <a style={{ fontFamily: "Helvetica", fontStyle: "italic", margin: "auto 20px" }} className="nav-links"> Dummy</a>
            <a style={{ fontStyle: "italic", margin: "auto 20px" }} className="nav-links"> Link</a>
            <a style={{ fontStyle: "italic", margin: "auto 20px" }} className="nav-links"> Mueshi.io</a>

        </BottomNavbar>
    </FullPage >
}

export default ExpandedListing;