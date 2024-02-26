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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DotsVerticalIcon } from "@radix-ui/react-icons"
import { useToast } from "@/components/ui/use-toast"


async function editExam(exam, id) {
    const response = await fetch(`http://localhost:3001/records/${id}`, {
        method: "PUT",
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



  

export function EditPopup({ exam }) {
    const {toast} = useToast() 

    const patientId = exam.patientId
    const examId = exam._id

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const [open, setOpen] = useState(false)


    
    
    // Exam data
    const [keyFindings, setKeyFindings] = useState(exam["key_finding"])
    const [notes, setNotes] = useState(exam["notes"])
    const [brixiaScores, setBrixiaScores] = useState(exam["brixia_score"])
    const [bmi, setBmi] = useState(exam["bmi"])
    const [imageURL, setImageURL] = useState(exam["imageURL"])


    function handleDelete(){
        const id = exam._id
        
        fetch(`http://localhost:3001/records/${id}`, {
            headers: {
                "x-api-auth": "HACKDIV"
            },
            method: "DELETE",
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            toast({
                title: "Exam deleted",
                description: "The exam has been deleted please reload the page",
            })
        })
    }


    //TODO: Handle save get all of the data and send it to the back end
    function handleSave() {
            
            if (patientId === "" || keyFindings === "" || notes === "" || brixiaScores === "" || bmi === "") {
                setError("Please fill out all fields")
                return
            }

    
            setLoading(true)
    
            const exam = {
                patientId: patientId,
                doctorId: "65cd736cfbc33f835a47167f",
                keyFinding: keyFindings,
                note: notes,
                brixiaScore: brixiaScores,
                bmi: bmi,
                imageURL: imageURL
            }
            editExam(exam, examId).then(() => {
                console.log("Exam edited")
            }
            ).catch((err) => {
                console.error(err)
                setError("Error editing exam")
                return
            })

            setLoading(false)
            toast({
                title: "Exam edited",
                description: "The exam has been edited please reload the page"
            })
            setOpen(false)


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
    


    function handleCancel(){
        // Reset to original values
        setKeyFindings(exam["keyFindings"])
        setNotes(exam["notes"])
        setBrixiaScores(exam["brixiaScores"])
        setBmi(exam["bmi"])
        setCity(patient["city"])
        setStreet(patient["street"])
        setPronouns(patient["pronouns"])
        setFirstName(patient["firstName"])
        setLastName(patient["lastName"])
        setAge(patient["age"])
        setSex(patient["sex"])
        setZip(patient["zip"])
        setState(patient["state"])
        setError("")
    }



    return (

        <Dialog open={open} onOpenChange={setOpen}>
            
        <DropdownMenu>
            <DropdownMenuTrigger><DotsVerticalIcon /></DropdownMenuTrigger> 
            <DropdownMenuContent>
                <DialogTrigger asChild>
                    <DropdownMenuItem><span>Edit exam</span></DropdownMenuItem>
                </DialogTrigger>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleDelete}>Delete exam</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

            <DialogContent>
                
                <DialogHeader className="mb-4"> 
                    <DialogTitle>Edit Record</DialogTitle>
                    <DialogDescription>
                        You are now editing exam: {exam["examId"]} for patient: {exam["patientId"]}
                    </DialogDescription>

                </DialogHeader>
                <DialogDescription>

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
                        <Button variant="destructive" onClick={handleCancel}>Cancel</Button>
                    </DialogClose>
                    <Button disabled={loading} onClick={handleSave}>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )

}