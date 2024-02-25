// Column definitions for table
"use client";

import { Check } from "lucide-react";
import { EditPopup } from "../exams/edit-popup";
import { ColumnDef , createColumnHelper} from "@tanstack/table-core"
import {Checkbox} from "@/components/ui/checkbox"



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
        
        accesorKey: "_id",
        id:"patient_id",
        header:"Patient ID",
        
        cell: (props)=> {
            const patient = props.row.original
            if (patient) {
                return (
                    <div>
                        <p>{patient._id}</p>
                    </div>
                )
             }
        }
        
         
    },
    {
        header:"Name",
        id:"name",
        accesorKey:"name",
        cell: (props)=> {
            const patient = props.row.original
            if (patient) {
                return (
                    <div>
                        <p>{patient.name}</p>
                    </div>
                )
             }
        }

    },
    {
        header:"Last Name",
        accesorKey:"lname",
        cell: (props)=> {
            const patient = props.row.original
            if (patient) {
                return (
                    <div>
                        <p>{patient.lname}</p>
                    </div>
                )
             }
        }
        
    },
    {
        header:"Pro Nouns",
        accesorKey:"pronouns",
        cell: (props)=> {
            const patient = props.row.original
            if (patient) {
                return (
                    <div>
                        <p>{patient.pronouns}</p>
                    </div>
                )
             }
        }   
    },
    {
        header:"Birth Date",
        accesorKey:"birth_date",
        cell: (props)=> {
            const patient = props.row.original
            if (patient) {
                return (
                    <div>
                        <p>{patient.birth_date}</p>
                    </div>
                )
             }
        }
    },
    {
        header:"Sex",
        accesorKey:"sex",
        cell: (props)=> {
            const  patient = props.row.original
            if (patient) {
                return (
                    <div>
                        <p>{patient.sex}</p>
                    </div>
                )
             }
        }
    },
    {
        header:"Zip Code",
        accesorKey:"zip_code",
        cell: (props)=> {
            const patient = props.row.original
            if (patient) {
                return (
                    <div>
                        <p>{patient.zip_code}</p>
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