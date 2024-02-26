"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DialogClose } from "@radix-ui/react-dialog"
import { useState } from "react"
import { ImageUpload } from "../../components/ui/image-upload"
import { useToast } from "@/components/ui/use-toast"




async function addExam(exam) {

    const response = await fetch("http://localhost:3001/records", {
        method: "POST",
        headers: {
            "x-api-auth": "HACKDIV",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(exam)
    })
    if (!response.ok) {
        setError(`Error: ${response.status}`);
    }
}




  

export function AddExam() {
    
    const {toast} = useToast()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    

    const [patientID, setPatientId] = useState("")

    // Exam data
    const [keyFindings, setKeyFindings] = useState("")
    const [notes, setNotes] = useState("")
    const [brixiaScores, setBrixiaScores] = useState("")
    const [bmi, setBmi] = useState("")
    const [imageURL, setImageURL] = useState("")
    

    // TODO: Handle file upload (set the imageURL to the new file's URL)
    function handleFile(e) {
        setFile(e.target.files[0])
    }

    //TODO: Handle save get all of the data and send it to the back end
    function handleSave() {

        if (patientID === "" || keyFindings === "" || notes === "" || brixiaScores === "" || bmi === "") {
            setError("Please fill out all fields")
            return
        }

        setLoading(true)

        const exam = {
            patientID: patientID,
            doctorID: "65cd736cfbc33f835a47167f",
            keyFinding: keyFindings,
            note: notes,
            brixiaScore: brixiaScores,
            bmi: bmi,
            imageURL: imageURL
        }
        addExam(exam)
        setLoading(false)
        toast({
            title: "Exam added",
            description: "The exam has been added please reload the page"
        })

    }


    

    function handleKeyFindingChange(e) { 
        setKeyFindings(e.target.value)
    }

    function handleNotesChange(e) {
        setNotes(e.target.value)
    }

    function handleBrixiaScoresChange(e) {
        setBrixiaScores(e.target.value)
    }
    function handleBmiChange(e) {   
        setBmi(e.target.value)
    }
   
    function handlePatientIdChange(edit) {
        setPatientId(edit.target.value)
    }
    




    return (

        <Dialog>
            
            <DialogTrigger asChild>
                <Button>Add new Exam</Button>
            </DialogTrigger>

            <DialogContent>

                
               
                <DialogHeader className="mb-4"> 
                    <DialogTitle>Add Exam</DialogTitle>
                    <DialogDescription>
                        Add exam for any existing patient
                    </DialogDescription>

                </DialogHeader>
                <DialogDescription>
                {loading && <span className="text-black dark:text-white">Loading...</span>}

                <ImageUpload changeUrl={setImageURL} setLoading={setLoading}/>

                    
                    <div className="grid grid-cols-2 gap-y-4 pb-4">
                        
                        <div className="col-span-2 flex justify-between items-center">
                            <span className="text-black dark:text-white text-bold" >Brixia Score: </span>
                            <Input value={brixiaScores} className="w-[90px] h-[30px]" onChange={handleBrixiaScoresChange}/>
                        </div>

                        <div className="col-span-2 flex justify-between items-center">
                            <span className="text-bold text-black dark:text-white" >Patient BMI: </span>
                            <Input value={bmi} type="number" className="w-[90px] h-[30px]" onChange={handleBmiChange}/>
                        </div>

                    </div>

                    <div className="grid w-full gap-1.5">
                        <span className="text-black dark:text-white" htmlFor="patientID">Patient ID: </span>
                        <Input value={patientID} id="patientID" onChange={handlePatientIdChange} />
                    </div>
                    
                    <div className="grid w-full gap-1.5 mb-6">
                        <span className="text-black dark:text-white" htmlFor="notes">Edit Notes: </span>
                        <Textarea value={notes} id="notes" onChange ={handleNotesChange}/>
                    </div>

                    <div className="grid w-full gap-1.5">
                        <span className="text-black dark:text-white" htmlFor="key-finding">Edit Key Findings: </span>
                        <Textarea value={keyFindings} id="key-finging" onChange={handleKeyFindingChange} />
                    </div>
                
                    
                </DialogDescription>
                
                
                <DialogFooter>
                <span className="text-red-500 text-sm font-medium">{error}</span>
                    <DialogClose asChild>
                        <Button variant="destructive">Cancel</Button>
                    </DialogClose>
                    <Button disabled={loading} onClick={handleSave}>Save</Button>
                </DialogFooter>
            </DialogContent>
    
        </Dialog>
    )

}