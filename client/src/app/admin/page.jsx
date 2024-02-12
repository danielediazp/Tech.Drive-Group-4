'use client'

import { Button } from "@/components/ui/button"
import ExamTable from "./ExamTable"
import {useState, useEffect} from 'react'
import "./admin.css"

// Can we assume exams conform to correct data types due to schema checks in back end?
// TODO: Set up code to track active checkboxes & (later) use delete endpoint 
// TODO: Add form to edit popup
// TODO: Add popup or page for adding new record
// TODO: Set up editing buttons to use endpoints

const Admin = () => {
    const [exams, setExams] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [selected, setSelected] = useState([])

    const updateSelected = (checked, exam) => {
        if (checked) {
            setSelected([...selected, exam._id])
        } else {
            setSelected(selected.filter(item => item != exam._id))
        }
    }

    // BATCH DELETING EXAMS
    // Delete button should only be active if one or more exams are selected
    // Clicking delete button triggers "Are you sure" popup
    // Verifying will call a function that uses an endpoint that makes use of Mongo's deleteMany method to remove any exam with an ID in the list

    useEffect(() => {
        fetch('https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams')
        .then((res) => res.json())
        .then((data) => {
            setExams(data.exams)
            setLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!exams) return <p>No exams found!</p>

    return (
        <div className="text-center font-bold py-5">
            <h1>This is the Admin Page</h1>
            <Button>Add new record</Button>
            {selected.length > 0 ? <Button>Delete selected record(s)</Button> : <Button variant="outline" disabled={true}>Delete selected record(s)</Button>}
            <ExamTable exams={exams} update={updateSelected}/>
        </div>
    )   
}

export default Admin;