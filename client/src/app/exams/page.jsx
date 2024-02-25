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
        <div className="w-full min-h-screen">
            <div className="text-left px-12 pt-8">
                <h2 className="text-2xl font-bold tracking-tight">Welcome to the Exams Page!</h2>
                <p className="text-muted-foreground">Here you can edit and delete exams</p>
            </div>
            <div className="cointainer mx-auto px-12">
                <ExamTable exams={exams}/>
            </div>
        </div>
    )   
}

export default Admin;