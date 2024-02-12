'use client'

import { Button } from "@/components/ui/button"
import ExamTable from "./ExamTable"
import {useState, useEffect} from 'react'
import "./admin.css"

// TODO: Set up code to batch delete records
// TODO: Add form to edit popup
// TODO: Add popup for editing new record (using modified edit form?)
// TODO: Set up editing buttons to use endpoints
// TODO: Add spacing to add/delete buttons and move to top left (?) of page
// TODO: Add alternating colors to table rows to improve readability
// TODO: Truncate key findings to maximum character length in admin view
// TODO: Make sure key findings column has enough width to display text reasonably

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

    // TODO: BATCH DELETING EXAMS
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
        <div className="py-5 px-20">
            <h1>This is the Admin Page</h1>
            <Button>Add new record</Button>
            {selected.length > 0 ? <Button>Delete {selected.length} selected record(s)</Button> : <Button variant="outline" disabled={true}>Delete selected record(s)</Button>}
            <ExamTable exams={exams} update={updateSelected}/>
        </div>
    )   
}

export default Admin;