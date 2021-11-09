import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import {showModal, setCurrentModal} from "../../store/modal"
import { hideModal } from "../../store/modal";
import CreateCheckin from "./index";

export default function PickDistillery() {

    const dispatch = useDispatch()

    const handlePickDistillery = (e) => {
        e.preventDefault();

        dispatch(setCurrentModal(CreateCheckin))

    }

  return (
    <>
      <select onChange={handlePickDistillery}>
        <option value="0">Test</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
}
