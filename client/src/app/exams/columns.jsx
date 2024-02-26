// Column definitions for table
"use client";
import "./admin.css"
import { EditPopup } from "./edit-popup";
import {Checkbox} from "@/components/ui/checkbox"
import Link from "next/link";
import {Button} from "@/components/ui/button"


const formatDate = (date) => {
    return new Date(date).toLocaleDateString()
}

const truncate = (text) => {
    return(
        text.length <= 100 ? text : `${text.slice(0,100)}...`
    )
}


const column = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
    {
        
        accesorKey: "patient_id",
        id:"patient_id",
        header:"Patient ID",
        
        cell: (props)=> {
            const exam = props.row.original
            if (exam) {
                return (
                    <div>
                        <p>{exam.patient_id}</p>
                    </div>
                )
             }
        }
        
         
    },
    {
        header:"Exam ID",
        id:"examId",
        accesorKey:"_id",
        cell: (props)=> {
            const exam = props.row.original
            if (exam) {
                return (
                    <div>
                        <Link href={exam._id}><Button variant="ghost">{exam._id}</Button></Link>
                    </div>
                )
             }
        }

    },
    {
        header:"Image",
        accesorKey:"img_url",
        cell: (props)=> {
            const exam = props.row.original
            if (exam) {
                return (
                    <div>
                        <img className="exam-img" src={exam.img_url}></img>
                    </div>
                )
             }
        }
    
    },
    {
        header:"Key Findings",
        accesorKey:"keyFindings",
        cell: (props)=> {
            const exam = props.row.original
            if (exam) {
                return (
                    <div>
                        <p>{truncate(exam.key_finding)}</p>
                    </div>
                )
             }
        }
        
    },
    {
        header:"Notes",
        accesorKey:"notes",
        cell: (props)=> {
            const exam = props.row.original
            if (exam) {
                return (
                    <div>
                        <p>{truncate(exam.notes)}</p>
                    </div>
                )
             }
        }   
    },
    {
        header:"Brixia Score",
        accesorKey:"brixiaScores",
        cell: (props)=> {
            const exam = props.row.original
            if (exam) {
                return (
                    <div>
                        <p>{exam.brixia_score}</p>
                    </div>
                )
             }
        }
    },
    {
        header:"Bmi",
        accesorKey:"bmi",
        cell: (props)=> {
            const exam = props.row.original
            if (exam) {
                return (
                    <div>
                        <p>{exam.bmi}</p>
                    </div>
                )
             }
        }
    },
    {
        header:"Date",
        accesorKey:"date",
        cell: (props)=> {
            const exam = props.row.original
            if (exam) {
                return (
                    <div>
                        <p>{formatDate(exam.date)}</p>
                    </div>
                )
             }
        }
        
    },
    {
        accesorKey:"edit",
        id:"edit",
        cell: ({row}) => {
            return(
                <EditPopup exam={row.original}/>
            )}

    }
]

export default column;