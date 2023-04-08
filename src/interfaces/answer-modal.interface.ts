import {IAnswer} from "./answer.interface";

export type Props = {
    show: boolean
    onHide(): any
    selectedAnswer?: IAnswer
}