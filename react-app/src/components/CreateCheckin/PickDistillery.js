import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import {showModal, setCurrentModal} from "../../store/modal"
import { hideModal } from "../../store/modal";
import DistilleryCard from "../Distilleries/DistilleryCard";
import CreateCheckin from "./index";
import { loadAllDrinks } from "../../store/drinks";
import { useEffect } from "react";
import { loadDistilleries } from "../../store/distilleries";

export default function PickDistillery() {

    const dispatch = useDispatch()
 
    const drinks = useSelector((state) =>
      Object.values(state?.drinks)
    );
    const distilleries = useSelector((state) => Object.values(state?.distilleries));

    useEffect(() => {
      dispatch(loadAllDrinks());
      dispatch(loadDistilleries());
    }, [dispatch]);


    const handlePickDistillery = (e) => {
        e.preventDefault();
        dispatch(setCurrentModal(CreateCheckin))
    }

  return (
    <>
      <select onChange={handlePickDistillery}>
        <option value="" disabled>
          --Pick a Distillery--
        </option>
        {distilleries.map((distillery) => (
          <option key={distillery?.id} value={distillery?.id}>
            {distillery.name}
          </option>
        ))}
      </select>
      <select>
        <option value="" disabled>
          --Pick a Drink--
        </option>
        {drinks.map((drink) => (
          <option key={drink?.id} value={drink?.id}>
            {drink.name}
          </option>
        ))}
      </select>
    </>
  );
}


