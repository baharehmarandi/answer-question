import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAnswer} from "../../interfaces/answer.interface";
import {v4 as uuidv4} from 'uuid';

const initialState: { answers: IAnswer[] , selectedAnswer: IAnswer} = {
    answers: [],
    selectedAnswer: {
        id: '',
        answer: '',
        respondent: '',
        score: 0,
        date: '',

    }
}

export const answerSlice = createSlice({
    name: 'answers',
    initialState,
    reducers:{
        addAnswersToTable: (state, action: PayloadAction<IAnswer>) => {

            if(!state.answers.find((answer)=>answer.answer===action.payload.answer && answer.respondent===action.payload.respondent && answer.score===action.payload.score) && action.payload.id === ''){
                const data = action.payload;
                data.id = uuidv4();
                state.answers.push(data);
            }
            const findIndex = state.answers.findIndex((answer)=>answer.id===action.payload.id)
            if(findIndex !== -1){
                state.answers[findIndex] = action.payload
            }

        },
        deleteItemFromTable: (state, action:PayloadAction<number>) => {
            state.answers.splice(action.payload, 1)
        },
        editItemFromTable: (state, action: PayloadAction<number>) => {
            state.selectedAnswer = state.answers[action.payload];
        },
    },
})

export const {addAnswersToTable, deleteItemFromTable, editItemFromTable} = answerSlice.actions;
export default answerSlice.reducer;