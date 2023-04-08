import CreateAnswerModal from "./components/create-Answer-modal";
import AnswersTable from "./components/answers-table";
import {useState} from "react";
import "./answers.css"

const Answers = () => {

    const [showAnswerModal, setShowAnswerModal] = useState(false)

    function onHandleAnswerModalShow () {
        if(!showAnswerModal){
            setShowAnswerModal(true)
        }else {
            setShowAnswerModal(false)
        }
    }

    return(
        <>
            <div className="answer d-flex flex-column justify-content-center">
                <div className=" d-flex flex-row justify-content-between">
                    <span className="answers-list">لیست پاسخ ها</span>
                    <button className="add-answer-btn"
                            onClick={onHandleAnswerModalShow}
                    >
                        <span className="add-answer">اضافه کردن پاسخ</span>
                        <img className="add-answer-icon me-2" src="/assets/add.png" alt="add answer icon"/>
                    </button>
                </div>
                <div className="answer-box mt-2">
                    <AnswersTable/>
                </div>
            </div>
            <CreateAnswerModal show={showAnswerModal}
                               onHide={() => setShowAnswerModal(false)}/>

        </>
    )
}

export default Answers