import {Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import {IAnswer} from "../../../interfaces/answer.interface";
import DropdownMenu from "../../shared/dropdown-menu/dropdown-menu";
import "./answers-table.css"

const AnswersTable = () => {

    const answersList = useSelector((state:any)=>state.answer.answers)

    return(
        <Table className="answer-table mt-3" striped bordered>
            <thead>
            <tr>
                <th>#</th>
                <th>پاسخ</th>
                <th>نام پاسخ دهنده</th>
                <th>امتیاز</th>
                <th>تاریخ</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {answersList ? answersList.map((answersList:IAnswer, index:number)=>
                <tr key={index}>
                    <td>{index}</td>
                    <td>{answersList.answer}</td>
                    <td>{answersList.respondent}</td>
                    <td>{answersList.score}</td>
                    <td>{answersList.date}</td>
                    <td><DropdownMenu itemIndex={index}/></td>
                </tr>
            ):null}
            </tbody>
        </Table>
    )
}

export default AnswersTable