'use client'

import { Button } from "@/components/ui/button"
import ExamTable from "./ExamTable"
import {useState, useEffect} from 'react'
import "./admin.css"
import Exams from "./test.json"

// TODO: Set up code to batch delete records
// TODO: Add form to edit popup
// TODO: Add popup for editing new record (using modified edit form?)
// TODO: Set up editing buttons to use endpoints
// TODO: Add alternating colors to table rows to improve readability
// TODO: Add link to detail page from exam ID
// TODO: Make sure key findings column has enough width to display text reasonably

const Admin = () => {
    const [exams, setExams] = useState(Exams)
    const [isLoading, setLoading] = useState(false)
    const [selected, setSelected] = useState([])

    // BATCH DELETING EXAMS
        // Delete button should only be active if one or more exams are selected
        // Clicking delete button triggers "Are you sure" popup
        // Verifying will call a function that uses an endpoint that makes use of Mongo's deleteMany method to remove any exam with an ID in the list

    // useEffect(() => {
    //     fetch('https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setExams(data.exams)
    //         setLoading(false)
    //     })
    // }, [])

    if (isLoading) return <p>Loading...</p>
    if (!exams) return <p>No exams found!</p>

    return (
        <div className="py-5 px-20 admin-page">
            <h1>This is the Admin Page</h1>
            
            <ExamTable exams={exams}/>
        </div>
    )   
}

export default Admin;