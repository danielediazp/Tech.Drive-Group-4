import { Button } from "@/components/ui/button"
import TestData from "../testData.json"
import ExamTable from "./ExamTable"

// Can we assume exams conform to correct data types due to schema checks in back end?
// TODO: Set up code to track active checkboxes & (later) use delete endpoint 
// TODO: Add popup for editing record
// TODO: Add popup or page for adding new record
// TODO: Set up editing buttons to use endpoints


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