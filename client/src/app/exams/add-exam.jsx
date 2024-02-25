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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DialogClose } from "@radix-ui/react-dialog"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageUpload } from "../../components/ui/image-upload"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DotsVerticalIcon } from "@radix-ui/react-icons"


  

export function AddExam() {

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const [patientID, setPatientId] = useState("")

    // Exam data
    const [keyFindings, setKeyFindings] = useState("")
    const [notes, setNotes] = useState("")
    const [brixiaScores, setBrixiaScores] = useState("")
    const [bmi, setBmi] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [file, setFile] = useState(null)


    // TODO: Handle file upload (set the imageURL to the new file's URL)
    function handleFile(e) {
        setFile(e.target.files[0])
    }

    //TODO: Handle save get all of the data and send it to the back end
    function handleSave() {
    }

    //TODO: Create delete 

    

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
    function handleFirstNameChange(e) {
        setFirstName(e.target.value)
    }
    function handleLastNameChange(e) {
        setLastName(e.target.value)
    }
    function handleAgeChange(e) {
        setAge(e.target.value)
    }
    function handleSexChange(e) {
        setSex(e.target.value)
    }
    function handlePronounsChange(e) {
        setPronouns(e.target.value)
    }
    function handleStreetChange(e) {
        setStreet(e.target.value)
    }
    function handleCityChange(e) {
        setCity(e.target.value)
    }
    function handleStateChange(e) {
        setState(e.target.value)
    }
    function handleZipChange(e) {
        setZip(e.target.value)
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
                    <Button disabled={loading}>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )

}