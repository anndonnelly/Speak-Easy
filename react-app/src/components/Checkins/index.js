import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {getCheckinsThunk} from "../../store/checkins"



function AllCheckins() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCheckinsThunk())
    }, [dispatch])

    return (
      <>
        <h1>Test</h1>
      </>
    );
        
        
    
}

export default AllCheckins;