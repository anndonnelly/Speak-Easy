import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal, setCurrentModal } from "../../store/modal";
import { loadOneDistillery } from "../../store/distilleries";
import { useParams } from "react-router-dom";


const SingleDistillery = () => {
    const {distilleryId} = useParams()
    console.log(distilleryId)
    const dispatch = useDispatch();
    const distillery = useSelector(state => state.distilleries)
    console.log("sdfghjkl;", distillery)

    useEffect(()=>{
        dispatch(loadOneDistillery(distilleryId))
    }, [dispatch, distilleryId])

    return(
        <h1>Hello from single distillery</h1>
    )
}

export default SingleDistillery
