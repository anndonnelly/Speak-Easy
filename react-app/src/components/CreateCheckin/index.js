import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createCheckinsThunk } from "../../store/checkins";
import { hideModal } from "../../store/modal";
// import "../../index.css";
import styles from "./CreateCheckin.module.css";


function CreateCheckin() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [checkinImage, setCheckinImage] = useState("");
  const [location, setLocation] = useState("");

  const currentUser = useSelector((state) => state.session.user);
  const distillery = useSelector((state) => state?.selectedDistillery);
  const drink = useSelector((state) => state?.selectedDrink);
  const checkedInUser = useSelector((state) => state?.selectedUser);
  const checkins = useSelector((state) => Object.values(state?.checkins));
//   const checkinLocations = checkins
  console.log("llllllll", checkins);
  const onSubmit = async (e) => {
    e.preventDefault();

    if (review && rating) {
      if (rating < 0 || rating > 5) {
        setErrors([...errors, "Please include a rating for your drink"]);
        return;
      }
      const checkin = {
        review: review,
        rating: rating,
        location: location,
        user_id: currentUser.id,
        // drink_id: currentDrink.id,
        // distillery_id: currentDistillery.id,
      };
      let response = await dispatch(createCheckinsThunk(checkin));
      if (response) {
        setErrors(response);
      }

      if (!response) {
        setReview("");
        setErrors([]);
      }
    }
    dispatch(hideModal());
  };

  return (
    <div className={styles.checkinContainer}>
      <div className={styles.checkinFormHeader}>
        <h1 className={styles.checkinModalTitle}>Checkin</h1>
      </div>
      <div>
        {checkedInUser.username} is at {distillery.name} drinking a {drink.name}
      </div>
      <form className={styles.checkinForm} onSubmit={onSubmit}>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <div className={styles.formSection}>
          <label className={styles.checkinLabel}>Review</label>
          <textarea
            name="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="What did you think?"
            className={styles.checkinText}
            rows={4}
          />
        </div>
        <div className={styles.formSectionFlex}>
          <div>
            <label className={styles.checkinLabelTwo}>Rating</label>
            <select
              className={styles.checkinSelect}
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
            <label className={styles.checkinLabelTwo}>Location</label>
            <select
              className={styles.checkinSelect}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              {checkins.map((checkin) => (
                <option value={checkin.location} key={checkin.id}>
                  {checkin.location}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.formSection}>
          <input
            value={checkinImage}
            type="file"
            id="input"
            multiple
            onChange={(e) => setCheckinImage(e.target.value)}
          ></input>
        </div>
        <div className={styles.checkinButtonWrap}>
          <button className={styles.checkinButton}>Checkin</button>
        </div>
      </form>
    </div>
  );
}
export default CreateCheckin;

// TODO ? make a set for locations ?