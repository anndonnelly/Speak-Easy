import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./CheckinModal.module.css";
import { hideModal } from "../../store/modal";

export default function Modal() {
    const dispatch = useDispatch();
    const mount = useSelector((state) => state.modal.mount);
    const display = useSelector((state) => state.modal.display);
    const Current = useSelector((state) => state.modal.current);

    const onClose = () => {
        dispatch(hideModal());
    };
    return (
        mount &&
        display &&
        ReactDOM.createPortal(
            <div onClick={onClose} className={styles.modalBackground}>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={styles.modalContent}>
                    <Current />
                </div>
            </div>,
            mount
        )
    );
}
