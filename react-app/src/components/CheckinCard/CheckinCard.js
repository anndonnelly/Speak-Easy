import React, {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CheckinCard.css";
import { editCheckinsThunk } from "../../store/checkins";
import { deleteCheckinsThunk } from "../../store/checkins";

function CheckinCard({ checkin }) {
    const dispatch = useDispatch();
  
    const currentUserId = useSelector((state) => state.session.user.id);
  
    const [edit, setEdit] = useState(false);
    const [editReview, setEditReview] = useState(checkin.review);
    const [editRating, setEditRating] = useState(checkin.rating);
    const [editImage, setEditImage] = useState(checkin.image)
    const [editDrinkId, setEditDrinkId] = useState(checkin.drink_id);

    const [errors, setErrors] = useState([]);

    // const checkins = useSelector((state) => Object.values(state.checkins));
    const checkinId = checkin.id;

    const handleEdit = async (e) => {
        e.preventDefault();
        const editedCheckin = {
            checkinId: checkin.id,
            // editDrinkId,
            image: editImage,
            review: editReview,
            rating: editRating,
            //   location: location
        };
        console.log("*********", editedCheckin);
        let response = dispatch(editCheckinsThunk(checkinId, editedCheckin));
        if (response) {
            setErrors(response);
        }
        if (!response) {
            setEditReview("");
            setErrors([]);
        }
        setEdit(false);
    };

    const deleteCheckin = () => {
        dispatch(deleteCheckinsThunk(checkinId));
    };

    if (edit) {
        return (
          <div className="edit-card">
            <form onSubmit={handleEdit}>
              {/* <ul>
                {errors.map((error) => (
                <li key={error}>{error}</li>
                ))}
            </ul> */}
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
              {/* <div>
                <label>Image</label>
                <input
                  name="image"
                  value={editImage}
                  onChange={(e) => setEditImage(e.target.value)}
                />
              </div> */}
              <div>
                <button>Update</button>
              </div>
            </form>
          </div>
        );
    }

    return (
      <>
        <div className="checkin">
          {checkin.user_name} is at
          <br></br>
          {checkin.location} drinking a<br></br>
          {checkin.drink_name}
          <br></br>
          {checkin.review}
          <br></br>
          <img src={checkin.image} alt=""></img>
          <br></br>
          {checkin.rating}
          <br></br>
          {checkin?.user_id === currentUserId ? (
            <div>
              <button onClick={() => setEdit(true)}>Edit</button>
              <button onClick={deleteCheckin}>Delete</button>
            </div>
          ) : null}
        </div>
      </>
    );
}

export default CheckinCard;
