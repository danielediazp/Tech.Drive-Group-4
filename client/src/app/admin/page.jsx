import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import TestData from "../testdata.json"

// Can we assume exams conform to correct data types due to schema checks in back end?
// TODO: Set up code to track active checkboxes & (later) use delete endpoint 
const ExamTable = ({exams}) => {
    return(
        <Table>
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
                </TableRow>
            </TableHeader>
            <TableBody>
                {exams.map((exam) => 
                    {
                        return(
                            exam != null ? 
                            <TableRow>
                                <Checkbox />
                                <TableCell>{exam.patientId}</TableCell>
                                <TableCell>{exam.examId}</TableCell>
                                <TableCell>{exam.imageURL}</TableCell>
                                <TableCell>{exam.keyFindings}</TableCell>
                                <TableCell>{exam.brixiaScores}</TableCell>
                                <TableCell>{exam.age}</TableCell>
                                <TableCell>{exam.sex}</TableCell>
                                <TableCell>{exam.bmi}</TableCell>
                                <TableCell>{exam.zipCode}</TableCell>
                            </TableRow> :
                            <></>)
                        }
                )
                }
            </TableBody>
        </Table>
    )
}

const Admin = () => {
    return (
        <div className="text-center font-bold py-5">
            <h1>This is the Admin Page</h1>
            <Button>Add new record</Button>
            <Button>Delete selected record(s)</Button>
            <ExamTable exams={TestData["exams"]} />
        </div>
    )   
}


export default Admin;