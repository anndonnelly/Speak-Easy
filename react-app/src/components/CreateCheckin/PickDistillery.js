import { useSelector, useDispatch } from "react-redux";
import { setCurrentModal } from "../../store/modal";
import { useEffect, useState } from "react";
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

    const handlePickDistillery = (e) => {
        e.preventDefault();
        setDistillery(+e.target.value);
        dispatch(loadSelectedDistillery(+e.target.value));
        dispatch(setCurrentModal(PickDrink));
    };

    return (
        <>
            <h1>Checkin</h1>
            <select value={distillery} onChange={handlePickDistillery}>
                <option value="">--Pick a Distillery--</option>
                {distilleries.map((distillery) => (
                    <option key={distillery.id} value={distillery.id}>
                        {distillery.name}
                    </option>
                ))}
                {/* // <option value="">Home</option>
                // <option value="">Other</option> */}
            </select>
        </>
    );
}
