import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";

import { hideModal } from "../../store/modal";

export default function PickDistillery() {
  
  return (
    <>
      <select>
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
