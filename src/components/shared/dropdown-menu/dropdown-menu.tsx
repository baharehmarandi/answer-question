import {Dropdown} from "react-bootstrap";
import "./dropdown-menu.css"
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromTable, editItemFromTable} from "../../core/answer-slice";
import CreateAnswerModal from "../../answers/components/create-Answer-modal";
import {useState} from "react";

const DropdownMenu = (props:any) =>{
    const itemDispatcher = useDispatch();
    const [showModal, setShowModal] = useState(false)

    const answerSelected = useSelector((state:any)=>state.answer.selectedAnswer)

    const onHandelDeleteItem = () => {
        itemDispatcher (deleteItemFromTable(props.itemIndex));
    }

    const onHandelEditItem = () => {
        itemDispatcher (editItemFromTable(props.itemIndex));

        if(showModal){
            setShowModal(false)
        }else {
            setShowModal(true)
        }
    }

    return(
        <>
            <Dropdown>
                <Dropdown.Toggle className="dropdown-btn"><img src="/assets/dots.png" alt="drop down menu"/></Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={onHandelDeleteItem}>حذف</Dropdown.Item>
                    <Dropdown.Item onClick={onHandelEditItem}>ویرایش</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <CreateAnswerModal show={showModal} onHide={() => setShowModal(false)} selectedAnswer={answerSelected}/>
        </>
    )
}

export default DropdownMenu