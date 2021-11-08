import React, { useEffect } from "react";
import { getCheckinsThunk } from "../../store/checkins";
import { useDispatch, useSelector } from "react-redux";

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
              <li key={checkin.id}>
                {checkin.review}
                {checkin.location}
                {checkin.rating}
                {""}
              </li>
            </div>
          );})} </ul>
    </>
  );
}

export default GetAllCheckins;
