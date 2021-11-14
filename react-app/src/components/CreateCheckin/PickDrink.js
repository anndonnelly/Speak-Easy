import { useSelector, useDispatch } from "react-redux";
import { setCurrentModal } from "../../store/modal";
import CreateCheckin from "./index";
import { loadAllDrinks } from "../../store/drinks";
import { useEffect } from "react";
import { loadSelectedDrink } from "../../store/checkinmodal_pagetwo";

export default function PickDrink() {
    const dispatch = useDispatch();

    const drinks = useSelector((state) => Object.values(state?.drinks));
    const distillery = useSelector((state) => state?.selectedDistillery);
    const currentUser = useSelector((state) => state?.session.user);

    useEffect(() => {
        dispatch(loadAllDrinks());
    }, [dispatch]);

    const handlePickDrink = (e) => {
        e.preventDefault();
        dispatch(setCurrentModal(CreateCheckin));
        dispatch(loadSelectedDrink(+e.target.value));
    };

    return (
        <>
            <h1>Checkin</h1>
            <div>
                {currentUser.username} is at {distillery.name}
            </div>
            <select onChange={handlePickDrink}>
                <option value="">--Pick a Drink--</option>
                {drinks.map((drink) => (
                    <option key={drink?.id} value={drink?.id}>
                        {drink.name}
                    </option>
                ))}
            </select>
        </>
    );
}
