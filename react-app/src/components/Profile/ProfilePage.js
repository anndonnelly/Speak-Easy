import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal, setCurrentModal } from "../../store/modal";
import { loadOneUser } from "../../store/users";
import DistilleryCard from "../Distilleries/DistilleryCard";

import { useParams } from "react-router-dom";

import CheckinCard from "../CheckinCard/CheckinCard";
import { loadDistilleries } from "../../store/distilleries";


const ProfilePage = () => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user.id)
    const distilleries = useSelector(state => state.distilleries)
    const ownedDistilleries = useSelector(state => state.users.distilleries)
    console.log("????????????", distilleries)

    useEffect(() => {
        dispatch(loadOneUser(userId))
        dispatch(loadDistilleries())
    }, [dispatch])

    let distilleryCards;
    if (ownedDistilleries){
        distilleryCards = Object.values(distilleries).map((distillery) => {
            if (ownedDistilleries.includes(distillery.id)){
                return <DistilleryCard distillery={distillery} />
            }
            // console.log(distilleryId)
        })
    }

    return (
        <>
            <div>{distilleryCards}</div>
        </>
    )
}

export default ProfilePage
