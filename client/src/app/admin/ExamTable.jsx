import { Checkbox } from "@/components/ui/checkbox"
import EditMenu from "./EditMenu"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"


const ExamTable = ({exams}) => {
    return(
        <Table className="exam-table">
            <TableHeader>
                <TableRow>
                    <TableHead />
                    <TableHead>Patient ID</TableHead>
                    <TableHead>Exam ID</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead>Key Findings</TableHead>
                    <TableHead>Brixia Score</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Sex</TableHead>
                    <TableHead>BMI</TableHead>
                    <TableHead>ZIP Code</TableHead>
                    <TableHead />
                </TableRow>
            </TableHeader>
            <TableBody>
                {exams.map((exam) => 
                    {
                        return(
                            exam != null ? 
                            <TableRow className="exam-table-row">
                                <TableCell className="checkbox-cell"><Checkbox className="exam-checkbox"/></TableCell>
                                <TableCell>{exam.patientId}</TableCell>
                                <TableCell>{exam.examId}</TableCell>
                                <TableCell><img src={exam.imageURL} className="exam-img"/></TableCell>
                                <TableCell>{exam.keyFindings}</TableCell>
                                <TableCell>{exam.brixiaScores}</TableCell>
                                <TableCell>{exam.age}</TableCell>
                                <TableCell>{exam.sex}</TableCell>
                                <TableCell>{exam.bmi}</TableCell>
                                <TableCell>{exam.zipCode}</TableCell>
                                <TableCell><EditMenu /></TableCell>
                            </TableRow> :
                            <></>)
                        }
                )
                }
            </TableBody>
        </Table>
    )
}

export default ExamTable;