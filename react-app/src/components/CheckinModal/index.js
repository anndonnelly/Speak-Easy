import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from "react-redux";
import "./CheckinModal.css"
import { hideModal } from '../../store/modal';

export default function Modal(){
    const dispatch = useDispatch()
    const mount = useSelector(state => state.modal.mount)
    const display = useSelector(state => state.modal.display)
    const Current = useSelector(state => state.modal.current)

    const onClose = () => {
        dispatch(hideModal())
    }

    return mount && display && ReactDOM.createPortal (
       <div onClick={onClose} className="modal-background">
           <div onClick={e => e.stopPropagation()}className="modal-content">
               <Current/>
           </div>
       </div> 
    , mount)
}
