import {IQuestions} from "./questions.interface";

export type Props = {
    show: boolean
    onHide(): any
    selectedQuestion?: IQuestions
}