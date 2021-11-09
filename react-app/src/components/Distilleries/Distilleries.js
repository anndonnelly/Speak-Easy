import React from "react";
import { useDispatch } from "react-redux";
import {showModal, setCurrentModal} from "../../store/modal"
import PickDistillery from "../CreateCheckin/PickDistillery";
import "./Distilleries.css"

const Distilleries = () => {
    const dispatch = useDispatch()

    const showCheckinModal = () => {
        dispatch(setCurrentModal(PickDistillery));
        // dispatch(setCurrentModal(CreateCheckin));
        dispatch(showModal());
    }

    return (
      <div>
        {/* <button>Distilleries</button> */}
        <button className="checkin-modal-button"onClick={showCheckinModal}>Checkin</button>
      </div>
    );
};
export default Distilleries;
