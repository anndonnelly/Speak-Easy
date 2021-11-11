import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import {showModal, setCurrentModal} from "../../store/modal"
import { hideModal } from "../../store/modal";
import DistilleryCard from "../Distilleries/DistilleryCard";
import CreateCheckin from "./index";
import { loadAllDrinks } from "../../store/drinks";
import { useEffect, useState, createContext, useContext } from "react";
import { loadDistilleries } from "../../store/distilleries";
import PickDrink from "./PickDrink";

import { loadSelectedDistillery } from "../../store/checkinmodal";

export default function PickDistillery() {
  const dispatch = useDispatch();

  const distilleries = useSelector((state) =>
    Object.values(state?.distilleries)
  );
 
  const [distillery, setDistillery] = useState(-1);

  useEffect(() => {
    dispatch(loadDistilleries());
  }, [dispatch]);

  const handlePickDistillery =(e) => {
    e.preventDefault();
    setDistillery(+e.target.value);
    dispatch(loadSelectedDistillery(+e.target.value));
   
    dispatch(setCurrentModal(PickDrink));

  };

  return (
    <>
      <select value={distillery} onChange={handlePickDistillery}>
        <option value="" >
          --Pick a Distillery--
        </option>
        {distilleries.map((distillery) => (
          <option key={distillery.id} value={distillery.id}>
            {distillery.name}
          </option>
        ))}
      </select>
    </>
  );
}

