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
import { ImageUpload } from "./image-upload"


// TODO: Fetch patient data
function fetchPatient(patientId) {

    // Test data
    return {
        "firstName": "John",
        "lastName": "Doe",
        "age": 25,
        "sex":"Male",
        "street": "1234 Elm St",
        "city": "Anytown",
        "state": "CA",
        "zip": "12345",
        "dob": "1996-01-01",
        "pronouns": "He/Him/His"
    }
}


  

export function EditPopup({ exam }) {

    const patientId = exam["patientId"]


    // Fetch patient data
    const patient = fetchPatient(patientId)

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)


    // Patient data
    const [firstName, setFirstName] = useState(patient["firstName"])
    const [lastName, setLastName] = useState(patient["lastName"])
    const [age, setAge] = useState(patient["age"])
    const [sex, setSex] = useState(patient["sex"])
    const [pronouns, setPronouns] = useState(patient["pronouns"])
    const [street, setStreet] = useState(patient["street"])
    const [city, setCity] = useState(patient["city"])
    const [state, setState] = useState(patient["state"])
    const [zip, setZip] = useState(patient["zip"])
    const [dob, setDob] = useState(patient["dob"])

    // Exam data
    const [keyFindings, setKeyFindings] = useState(exam["keyFindings"])
    const [notes, setNotes] = useState(exam["notes"])
    const [brixiaScores, setBrixiaScores] = useState(exam["brixiaScores"])
    const [bmi, setBmi] = useState(exam["bmi"])
    const [imageURL, setImageURL] = useState(exam["imageURL"])
    const [file, setFile] = useState(null)


    // TODO: Handle file upload (set the imageURL to the new file's URL)
    function handleFile(e) {
        setFile(e.target.files[0])
    }

    //TODO: Handle save get all of the data and send it to the back end
    function handleSave() {
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

        <Dialog>
            
            <DialogTrigger asChild>
                <Button variant="default">Edit Record</Button>
            </DialogTrigger>

            <DialogContent>

                
                <Tabs>
                    <TabsList className="mb-4">
                        <TabsTrigger value="record">Record</TabsTrigger>
                        <TabsTrigger value="patient">Patient</TabsTrigger>
                    </TabsList>
                
                <TabsContent value="record">
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
                </TabsContent>

                
                <TabsContent value="patient">
                    <DialogHeader className="mb-4"> 
                        <DialogTitle>Edit Patient</DialogTitle>
                        <DialogDescription>
                            You are now editing patient: {exam["patientId"]}
                        </DialogDescription>
                    </DialogHeader>

                    <DialogDescription>

        
                        
                        <div className="grid w-full max-w-sm gap-1.5 items-center mb-4">
                            <span className="text-black dark:text-white text-bold" >First Name:</span>
                            <Input onChange={handleFirstNameChange} type="name" value = {firstName} id="firstName" placeholder="First Name" className="w-[461px]" />
                        </div>

                        <div className="grid w-full max-w-sm gap-1.5 items-center mb-4">
                            <span className="text-black dark:text-white text-bold" >Last Name:</span>
                            <Input onChange={handleLastNameChange} value={lastName} type="name" id="lastName" placeholder="Last Name" className="w-[461px]"/>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-y-4 pb-4">
                            <div className="col-span-2 flex justify-between items-center">
                                <span className="text-black dark:text-white text-bold" >Patient Pronouns: </span>
                                <Input onChange={handlePronounsChange} value={pronouns} type="text" className="w-[90px] h-[30px]" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-y-4 pb-4">
                            <div className="col-span-2 flex justify-between items-center">
                                <span className="text-black dark:text-white text-bold" >Patient Sex: </span>
                                <Select onValueChange={handleSexChange} defaultValue={sex}>
                                    <SelectTrigger className="w-[90px] h-[30px]">
                                        <SelectValue ></SelectValue>
                                    </SelectTrigger>
                                    <SelectContent >
                                        <SelectItem value="Male">Male</SelectItem>
                                        <SelectItem value="Female">Female</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>

                                </Select>
                            </div>
                        </div>

                        


                        <div className="grid grid-cols-2 gap-y-4 pb-4">
                            <div className="col-span-2 flex justify-between items-center">
                                <span className="text-black dark:text-white text-bold" >Patient Age: </span>
                                <Input onChange={handleAgeChange} value={age} type="number" className="w-[90px] h-[30px]" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-y-4 pb-4">
                            <div className="col-span-2 flex justify-between items-center">
                                <span className="text-black dark:text-white text-bold" >Birth Date: </span>
                                <Input onChange={setDob} value={dob} type="date" className="w-[120px] h-[30px]" />
                            </div>
                        </div>


                        <div className="grid w-full gap-1.5">
       
                            <span className="text-black dark:text-white text-bold" >Street:</span>
                            <Input onChange={handleStreetChange} value={street} type="text"></Input>
                            <div className="grid grid-cols-3 gap-y-1 gap-x-3">
                                <span className="text-black dark:text-white text-bold">City:</span>
                                <span className="text-black dark:text-white text-bold">State:</span>
                                <span className="text-black dark:text-white text-bold">ZIP Code:</span>
                               
                                <Input type="text" onChange={handleCityChange} value={city}></Input>
                                <Input type="text" onChange={handleStateChange} value={state}></Input>
                                <Input type="number" onChange={handleZipChange} value={zip}></Input>
                            </div>
                        </div>
                        
                    </DialogDescription>
                    
                    
                </TabsContent>
                </Tabs>
                
                <DialogFooter>
                <span className="text-red-500 text-sm font-medium">{error}</span>
                    <DialogClose asChild>
                        <Button variant="destructive" onClick={handleCancel}>Cancel</Button>
                    </DialogClose>
                    <Button disabled={loading}>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )

}