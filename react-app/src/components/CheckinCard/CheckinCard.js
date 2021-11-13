import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CheckinCard.module.css";
import { editCheckinsThunk } from "../../store/checkins";
import { deleteCheckinsThunk } from "../../store/checkins";
import { NavLink } from "react-router-dom";

function CheckinCard({ checkin }) {
    const dispatch = useDispatch();

    const currentUserId = useSelector((state) => state.session.user.id);

    const [edit, setEdit] = useState(false);
    const [editReview, setEditReview] = useState(checkin.review);
    const [editRating, setEditRating] = useState(checkin.rating);
    const [errors, setErrors] = useState([]);

    const checkinId = checkin.id;

    const handleEdit = (e) => {
        e.preventDefault();
        const err = [];

        if (editReview.length < 2) {
            const error = "Your review must be at least 2 characters long";
            err.push(error);
        }
        if (errors.length === 0) {
            const editedCheckin = {
                checkinId: checkin.id,
                review: editReview,
                rating: editRating,
            };
            dispatch(editCheckinsThunk(checkinId, editedCheckin));
            setEdit(false);
        }
        setErrors(err);
    };

    const deleteCheckin = () => {
        dispatch(deleteCheckinsThunk(checkinId));
    };

    if (edit) {
        return (
            <div className={styles.editCard}>
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
                    <div>
                        <label>Rating</label>
                        <select
                            name="rating"
                            value={editRating}
                            onChange={(e) => setEditRating(e.target.value)}>
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
                        <button>Update</button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className={styles.cardDiv}>
            <div className={styles.cardHeaderContent}>
                <div className={styles.headerFirst}>
                    <NavLink
                        className={styles.userName}
                        to={`/users/${checkin.user_id}`}>
                        {checkin.user_name}
                    </NavLink>
                    <span className={styles.isAt}>is at: </span>
                    <span className={styles.location}>{checkin.location}</span>
                </div>
                <div className={styles.headerSecond}>
                    <span className={styles.drinking}>Drinking a: </span>
                    <span className={styles.drinkName}>
                        {checkin.drink_name}
                    </span>
                </div>
                <div className={styles.headerThird}>
                    <span className={styles.review}>Review: </span>
                    <span className={styles.userReview}>{checkin.review}</span>
                </div>
                <div className={styles.headerFourth}>
                    <span className={styles.rating}>Rating: </span>
                    <span className={styles.userRating}>{checkin.rating}</span>
                </div>
                <div className={styles.userFx}>
                    {checkin?.user_id === currentUserId ? (
                        <div className={styles.buttonWrapper}>
                            <button
                                className={styles.checkinButtons}
                                onClick={() => setEdit(true)}>
                                Edit
                            </button>
                            <button
                                className={styles.checkinButtons}
                                onClick={deleteCheckin}>
                                Delete
                            </button>
                        </div>
                    ) : null}
                </div>
            </div>
            <div className={styles.imgWrapper}>
                <img
                    className={styles.checkinImage}
                    src={checkin.image}
                    alt=""
                />
            </div>
        </div>
    );
}

export default CheckinCard;
