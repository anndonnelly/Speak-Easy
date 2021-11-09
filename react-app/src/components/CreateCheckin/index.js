import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createCheckinsThunk } from "../../store/checkins";
import { hideModal } from "../../store/modal";

function CreateCheckin() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  // const [location, setLocation] = useState("");


  const currentUser = useSelector((state) => state.session.user);
  
  const onSubmit = async (e) => {
    e.preventDefault();

    if (review && rating){

      if (rating < 0 || rating > 5) {
        setErrors([...errors, "Please include a rating for your drink"]);
        return;
      }
      const checkin = {
        review: review,
        rating: rating,
        // location: location
        user_id : currentUser.id,
        // drink_id: currentDrink.id,
        // distillery_id: currentDistillery.id,
      };
      let response = await dispatch(createCheckinsThunk(checkin));
      if (response) {
        setErrors(response);
      }

      if (!response){
        setReview("")
        setErrors([])
      }
    }
    dispatch(hideModal())

  }

    return (
      <>
        <div>
          <h1>Checkin</h1>
        </div>
        <form onSubmit={onSubmit}>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <div>
            <label>Review</label>
            <textarea
              name="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="What did you think?"
            />
          </div>
          {/* <div>
            <label>Location</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
            {/* <select value={drink} onChange={(e) => setDrink(e.target.value)}>
              {eventLocations.map((location) => (
                <option value={location.id} key={location.id}>
                  {location.name}
                </option>
              ))}
            </select> */}
          </div>
          <div>
            <label>Distillery</label>
            {/* <select value={drink} onChange={(e) => setDrink(e.target.value)}>
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
              value={rating}
              onChange={(e) => setRating(e.target.value)}
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
            <button >Checkin</button>
          </div>
        </form>
      </>
    );
  
}
export default CreateCheckin;
