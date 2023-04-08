import Modal from "react-bootstrap/Modal";
import {Field, Form, Formik} from "formik";
import React, {FunctionComponent} from "react";
import {Props} from "../../../interfaces/question-modal.interface";
import * as Yup from 'yup'
import "./create-questions-modal.css"
import {Button} from "react-bootstrap";

const QuestionsSchema = Yup.object().shape({
    question: Yup.string().required('وارد کردن سوال الزامی است'),
    answerList: Yup.string().required('یک پاسخ اضافه کنید'),
    questioner: Yup.string().required('وارد کردن نام پرسشگر اجباری است')
})

const CreateQuestionsModal: FunctionComponent<Props> = ({show, onHide}) => {
    return(
        <Modal
            dir="rtl"
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>یک سوال اضافه کنید</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={{
                        question:'',
                        answersList:'',
                        questioner:''
                    }}
                    validationSchema={QuestionsSchema}
                    onSubmit={values => {
                        console.log("values", values)
                    }}>
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <Form dir="rtl">
                            <div className="question d-flex flex-column mt-3">
                                <label htmlFor="question">سوال</label>
                                <Field
                                    type="text"
                                    name="question"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.question}
                                />
                                {errors.question && touched.question ? <span className="question-error">{errors.question}</span> :null}
                            </div>
                            <div className="questioner d-flex flex-column mt-3">
                                <label htmlFor="questioner">پرسشگر</label>
                                <Field
                                    type="text"
                                    name="questioner"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.questioner}
                                />
                                {errors.questioner && touched.questioner ? <span className="questioner-error">{errors.questioner}</span> :null}
                            </div>
                            <div className="answersList d-flex flex-column mt-3">
                                <label htmlFor="answersList">پاسخ</label>
                                <select
                                    name="answersList"
                                >
                                    <option value="spring">بهار</option>
                                    <option value="summer">تابستان</option>
                                    <option value="fall">پاییز</option>
                                    <option value="winter">زمستان</option>
                                </select>
                                {errors.answersList && touched.answersList ? <span className="answersList-error">{errors.answersList}</span> :null}
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
            <Modal.Footer>
                <Button className="w-100" onClick={onHide}>ثبت سوال</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateQuestionsModal