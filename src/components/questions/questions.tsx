import {useState} from "react";
import CreateQuestionsModal from "./components/create-questions-modal";
import "./questions.css"

const Questions = () => {

    const [showModal, setShowModal] = useState(false)

    const onHandleAddQuestionsModal = () => {
        if(showModal){
            setShowModal(false)
        }else {
            setShowModal(true)
        }
    }

    return(
        <div className="questions">
            <div className="add-questions d-flex flex-row justify-content-between">
                <span className="questions-list-text">لیست سوالات</span>
                <button className="add-question" onClick={onHandleAddQuestionsModal}>
                    <span>اضافه کردن سوال</span>
                    <img src="/assets/add.png" alt="اضافه کردن سوال جدید" className="add-questions-btn me-2"/>
                </button>
            </div>
            <div className="questions-box mt-2">

            </div>
            <CreateQuestionsModal
                show={showModal}
                onHide={() => setShowModal(false)}
            />
        </div>
    )
}

export default Questions