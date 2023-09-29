import React, { useEffect, useState } from 'react';
import { BidPanel, BidPanelButtonContainer, BidPanelButtonContainerAcceptButton, BidPanelButtonContainerDeclineButton, BidPanelFlex, BidPanelImage, BidPanelText, BottomHalf, ButtonContainer, CancelButton, CurrentBidderText, DeleteButton, EditButton, FullPage, NameInput, Photo, PriceInput, SaveButton, TextArea, TextForm, TopHalf, VerticalDivider } from './ExpandedListingStyles.tsx';
import { useLocation, useSearchParams, useParams } from 'react-router-dom';
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


const ExpandedListing = () => {

    const [name, setName] = useState<string>("Dummy Name");
    const [price, setPrice] = useState<number>(123123);
    const [bids, setBids] = useState<BidData[]>(dummyBids);
    const [description, setDescription] = useState<string>("");

    const [isEdit, setIsEdit] = useState<boolean>(false);


    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/getListing?id=${id}`).then((res) => {
            const { listing } = res.data;
            const dummyBids = res.data.bids;
            const { name, price } = listing;

            setName(name);
            setPrice(price);
            setBids(dummyBids);
            console.log(dummyBids);
        }).catch((err) => {
            console.error("Error when getting listing: ", err);
        })
    }, [])

    const handleSave = () => {

        /* make api call */
    }

    const handleEdit = () => {
        if (isEdit === false) setIsEdit(true);
        else setIsEdit(false);
    }


    const handleDelete = () => {
        /* make api call */

    }


    /* http call to get name, price and value */

    return <FullPage>
        <nav></nav>
        <TopHalf>
            <Photo src={DummyImage} alt={"hi"}></Photo>
            <TextForm>
                <NameInput isEdit={isEdit} disabled={!isEdit} type="string" value={name} />
                <PriceInput isEdit={isEdit} disabled={!isEdit} type="number" value={price} />
                {/* <TextArea value={description} /> */}

                <ButtonContainer>
                    {!isEdit && <EditButton onClick={handleEdit}> Edit </EditButton>}
                    {!isEdit && <DeleteButton onClick={handleDelete}> Delete </DeleteButton>}
                    {isEdit && <SaveButton onClick={handleSave}> Save </SaveButton>}
                    {isEdit && <CancelButton onClick={handleEdit}> Cancel </CancelButton>}
                </ButtonContainer>
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
                            <div> Name {bid?.bidder?.name} </div>
                            <div> Bid: ${bid.price} </div>
                        </BidPanelText>
                    </BidPanelFlex>
                    <BidPanelButtonContainer>
                        <BidPanelButtonContainerAcceptButton>Accept</BidPanelButtonContainerAcceptButton>
                        <BidPanelButtonContainerDeclineButton>Decline</BidPanelButtonContainerDeclineButton>

                    </BidPanelButtonContainer>
                </BidPanel>
            })}
        </BottomHalf>

    </FullPage >
}

export default ExpandedListing;