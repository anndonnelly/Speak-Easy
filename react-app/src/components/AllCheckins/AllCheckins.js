import React, { useEffect } from "react";
import { getCheckinsThunk } from "../../store/checkins";
import { useDispatch, useSelector } from "react-redux";
import './AllCheckins.css'

function GetAllCheckins() {
  const dispatch = useDispatch();

  const checkins = useSelector((state) => Object.values(state.checkins));
  console.log("CHECKIN", checkins);
  useEffect(() => {
    dispatch(getCheckinsThunk());
  }, [dispatch]);

  return (
    <>
      <ul >{checkins.map(checkin => {
          return (
            <div className="checkin">
              <li key={checkin.review}>
                {checkin.review}
                <br></br>
                {checkin.location}
                <br></br>
                {checkin.rating}
                {""}
              </li>
            </div>
          );})} </ul>
    </>
  );
}

export default GetAllCheckins;
