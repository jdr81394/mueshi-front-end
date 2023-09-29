import React, { useState } from 'react';
import { BottomHalf, ButtonContainer, CancelButton, EditButton, FullPage, NameInput, Photo, PriceInput, SaveButton, TextArea, TextForm, TopHalf } from './ExpandedListingStyles.tsx';
import { useLocation, useSearchParams, useParams } from 'react-router-dom';
import DummyImage from "../mueshi.png"

const ExpandedListing = () => {

    const [name, setName] = useState<string>("Dummy Name");
    const [price, setPrice] = useState<number>(123123);
    const [description, setDescription] = useState<string>("");

    const [isEdit, setIsEdit] = useState<boolean>(false);


    const { id } = useParams();

    console.log(id)

    const handleSave = () => {

        /* make api call */
    }

    const handleEdit = () => {
        if (isEdit === false) setIsEdit(true);
        else setIsEdit(false);
    }

    // console.log("product id: ", productId)



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
                    {isEdit && <SaveButton onClick={handleSave}> Save </SaveButton>}
                    {isEdit && <CancelButton onClick={handleEdit}> Cancel </CancelButton>}
                </ButtonContainer>
            </TextForm>
        </TopHalf>
        <BottomHalf>
            <h2> Current Bidders</h2>
        </BottomHalf>

    </FullPage >
}

export default ExpandedListing;