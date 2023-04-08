import {configureStore} from "@reduxjs/toolkit";
import answerReducer from "../components/core/answer-slice";

export default configureStore({
    reducer:{
        answer: answerReducer,
    },
})