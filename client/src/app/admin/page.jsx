import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DotsVerticalIcon } from "@radix-ui/react-icons"
import { 
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import TestData from "../testData.json"

// Can we assume exams conform to correct data types due to schema checks in back end?
// TODO: Set up code to track active checkboxes & (later) use delete endpoint 
// TODO: Add popup for editing record
// TODO: Add popup or page for adding new record
// TODO: Set up editing buttons to use endpoints

const MenuButton = () => {
    return(
        <DropdownMenu>
            <DropdownMenuTrigger><DotsVerticalIcon /></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Edit exam</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Delete exam</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

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
                    <TableHead />
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
                                <MenuButton />
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