import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { createCheckinsThunk } from "../../store/checkins";
import { hideModal } from "../../store/modal";
// import "../../index.css";
import styles from "./CreateCheckin.module.css";


function CreateCheckin() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState();
  const [checkinImage, setCheckinImage] = useState("");
//   const [location, setLocation] = useState("")
//   const [submitted, setSubmitted] = useState(false)

  const currentUser = useSelector((state) => state.session.user);
  const distillery = useSelector((state) => state?.selectedDistillery);
  const drink = useSelector((state) => state?.selectedDrink);
  const checkedInUser = useSelector((state) => state?.session.user);
  const checkins = useSelector((state) => Object.values(state?.checkins));

const valErrors = [];
//     if (review.length > 1 && review.length < 5) {
//         valErrors.push("--Review must be at least 5 characters long--")
//         setErrors(valErrors);
//     };

  useEffect(() => {
      
        if (review.length > 0 && review.length < 5) valErrors.push("--Review must be at least 5 characters long--");

      setErrors(valErrors);
      console.log("ddddddd---->", errors);
      console.log("REVIEW", review)
  }, [review])

  const onSubmit = async (e) => {
    e.preventDefault();

    if (review) {
      const checkin = {
        review: review,
        rating: rating,
        location: distillery.name,
        image: checkinImage,
        // user_id: currentUser.id,
        drink_id: drink.id,
        distillery_id: distillery.id,
        drink_name: drink.name,
      };

       dispatch(createCheckinsThunk(checkin));
    //   if (response) {
    //     setErrors(response);
    //   }

    //   if (!response) {
    //     setReview("");
    //     setErrors([]);
    //   }
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
          {errors.length > 0
            ? errors.map((valError) => <li key={valError}>{valError}</li>)
            : null}
        </ul>
        <div className={styles.formSection}>
          <label className={styles.checkinLabel}>Review</label>
          <textarea
            name="review"
            required
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
              required
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="">--Rating--</option>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
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
          <button disabled={errors.length > 0} className={styles.checkinButton}>
            Checkin
          </button>
        </div>
      </form>
    </div>
  );
}
export default CreateCheckin;

// TODO ? make a set for locations ?