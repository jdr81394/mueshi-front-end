import React, { useState } from 'react';
import "./CreateListing.css"
import DummyImage from "../mueshi.png"
import axios from "axios";

const CLASS_PREFIX = "create-listing";

const CreateListing = ({ addListing, listings, ownerId }) => {


    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<number>(0);

    const handleSetName = (e: any) => {
        const { value } = e.target;
        setName(value);
    }

    const handleSetPrice = (e: any) => {
        const { value } = e.target;
        if (value < 0) return;
        setPrice(value);
    }

    const postListing = () => {
        axios.post("http://localhost:3001/postListing", { name, price, ownerId })
            .then(response => {
                if (response.status === 200) {

                    addListing(response.data)
                    // Add a toast 
                }
            }).catch(err => {
                console.error("Error on posting listing: ", err);
            })
    }


    return <div className={`${CLASS_PREFIX}-inner-body`}>
        <div className={`${CLASS_PREFIX}-text-body`}>
            <h1> Add A Listing</h1>
            <img className={`${CLASS_PREFIX}-image-mobile`} src={DummyImage} alt={"Dummy"} />

            <input onFocus={(e) => e.preventDefault()} placeholder="Name Your Listing" type='string' value={name} onChange={(e) => handleSetName(e)} />
            <input type='number' value={price} onChange={(e) => handleSetPrice(e)} />
            <button onClick={postListing} className={`${CLASS_PREFIX}-button`}> add </button>
        </div>
        <div className={`${CLASS_PREFIX}-vertical-divider`}></div>

        <img className={`${CLASS_PREFIX}-image`} src={DummyImage} alt={"Dummy"} />


    </div>

}

export default CreateListing;