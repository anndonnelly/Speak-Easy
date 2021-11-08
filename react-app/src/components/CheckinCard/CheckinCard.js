import React, { useEffect, useState } from "react";
import { getCheckinsThunk } from "../../store/checkins";
import { useDispatch, useSelector } from "react-redux";
import './CheckinCard.css';
import { editCheckinsThunk } from "../../store/checkins";

function CheckinCard({checkin}) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const [edit, setEdit] = useState(false);
  const [editReview, setEditReview] = useState(checkin.review);
  const [editRating, setEditRating] = useState(checkin.rating);
  const [editLocation, setEditLocation] = useState(checkin.location);
  const [editDrinkId, setEditDrinkId] = useState(checkin.drink_id);
  const [errors, setErrors] = useState([])

  const checkins = useSelector((state) => Object.values(state.checkins));

  const handleEdit = async (e) => {
       e.preventDefault();
        const editedCheckin = {
            checkinId : checkin.id,
            // editDrinkId,
            review: editReview,
            rating: editRating,
          // location: location
        };

        let response = await dispatch(editCheckinsThunk(editedCheckin));
         if (response) {
           setErrors(response);
         }
  }


  if(edit){
      return (
        <form onSubmit={handleEdit}>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <div>
            <label>Review</label>
            <textarea
              name="review"
              value={editReview}
              onChange={(e) => setEditReview(e.target.value)}
            />
          </div>
          {/* <div>
            <label>Location</label>
            <select
              value={editLocation}
              onChange={(e) => setEditLocation(e.target.value)}
            >
              {eventLocations.map((location) => (
                <option value={location.id} key={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
          </div> */}
          <div>
            <label>Drink</label>
            {/* <select value={editDrinkId} onChange={(e) => setEditDrinkId(e.target.value)}>
              {eventLocations.map((location) => (
                <option value={location.id} key={location.id}>
                  {location.name}
                </option>
              ))}
            </select> */}
          </div>
          <div>
            <label>Rating</label>
            <select
              name="rating"
              value={editRating}
              onChange={(e) => setEditRating(e.target.value)}
            >
              <option value="" disabled>
                --Rating--
              </option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <button>Checkin</button>
          </div>
        </form>
      );
  }

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
                <br></br>
                <button onClick={() => setEdit(true)}>Edit</button>
                <button>Delete</button>
              </li>
            </div>
          );})} </ul>
    </>
  );


  
}

export default CheckinCard;
