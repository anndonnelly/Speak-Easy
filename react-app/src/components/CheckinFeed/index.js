import React, { useEffect, useState } from "react";
import { getCheckinsThunk } from "../../store/checkins";
import { useDispatch, useSelector } from "react-redux";
import CheckinCard from "../CheckinCard/CheckinCard";
import "./CheckinFeed.css";

function CheckinsFeed() {
  const dispatch = useDispatch();


  const checkins = useSelector((state) => Object.values(state.checkins));

  useEffect(() => {
    dispatch(getCheckinsThunk());
  }, [dispatch]);

  return (
    <>

        {checkins.map((checkin) => (
            <CheckinCard key={checkin.id} checkin={checkin}/>
        ))}


    </>
  );
}

export default CheckinsFeed;
