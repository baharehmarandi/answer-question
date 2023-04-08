import Modal from 'react-bootstrap/Modal';
import {Props} from "../../../interfaces/answer-modal.interface";
import {FunctionComponent} from "react";
import {Formik} from "formik";
import {IAnswer} from "../../../interfaces/answer.interface";
import {addAnswersToTable} from "../../core/answer-slice";
import "./create-answer-modal.css"
import {useDispatch} from "react-redux";
import moment from "jalali-moment";

const CreateAnswerModal: FunctionComponent<Props> = ({ show, onHide, selectedAnswer }) => {

    let formikData: IAnswer = {
        answer: "", respondent: "", score: 0, date: "", id:""
    }

    if(selectedAnswer){
        formikData = selectedAnswer
    }

    const dispatch = useDispatch()

    const onChangeSubmitBtn = (e:any, isValid:boolean, values:IAnswer) =>{
        if(show){
            if(isValid){
                show=false
                onHide()
                values.date = moment().format('YYYY/MM/DD')
                dispatch(addAnswersToTable(values))
            }
        } else {
            show=true
            onHide()
        }
    }

    return(
        <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dir="rtl"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    پاسخ را اضافه کنید
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={formikData}
                    validate={values => {
                        const errors:any = {};
                        if (!values.answer) {
                            errors.answer = 'وارد کردن پاسخ اجباری است';
                        }
                        if (!values.respondent) {
                            errors.respondent = 'وارد کردن نام پاسخگو اجباری است';
                        }
                        if (!values.score) {
                            errors.score = 'وارد کردن امتیاز اجباری است';
                        }
                        return errors;
                    }}
                    onSubmit={(values,{ setSubmitting }) => {
                        // console.log("values answer", values)
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                          isValid
                      }) => (
                        <form  onSubmit={handleSubmit} dir="rtl">
                            <div className="answer d-flex flex-column mt-3">
                                <label>پاسخ</label>
                                <input
                                    type="text"
                                    name="answer"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.answer}
                                />
                                <span className="answer-error mt-1">{errors.answer && touched.answer && errors.answer}</span>
                            </div>
                            <div className="respondent d-flex flex-column mt-3">
                                <label>نام پاسخگو</label>
                                <input
                                    type="text"
                                    name="respondent"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.respondent}
                                />
                                <span className="respondent-error mt-1">{errors.respondent && touched.respondent && errors.respondent}</span>
                            </div>
                            <div className="score d-flex flex-column mt-3">
                                <label>امتیاز</label>
                                <input
                                    type="number"
                                    name="score"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.score}
                                />
                                <span className="score-error mt-1">{errors.score && touched.score && errors.score}</span>
                            </div>
                            <button className="answer-submit-btn mt-3" type="submit" onClick={(e)=>onChangeSubmitBtn(e, isValid, values)}>
                                ثبت پاسخ
                            </button>
                        </form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    )
}

export default CreateAnswerModal