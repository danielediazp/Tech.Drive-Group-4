'use client'

import { Button } from "@/components/ui/button"
import TestData from "../testData.json"
import ExamTable from "./ExamTable"
import {useState, useEffect} from 'react'

// Can we assume exams conform to correct data types due to schema checks in back end?
// TODO: Set up code to track active checkboxes & (later) use delete endpoint 
// TODO: Add form to edit popup
// TODO: Add popup or page for adding new record
// TODO: Set up editing buttons to use endpoints



const Admin = () => {
    const [exams, setExams] = useState(null)
    const [isLoading, setLoading] = useState(true)

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
            <Button>Delete selected record(s)</Button>
            <ExamTable exams={exams} />
        </div>
    )   
}

export default Admin;