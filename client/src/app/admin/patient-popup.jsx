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


  

export function addPatient() {




    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)


    // Patient data
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [sex, setSex] = useState("")
    const [pronouns, setPronouns] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip, setZip] = useState("")
    const [dob, setDob] = useState("")

   


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
    


   



    return (
        <Dialog>
            
        
         <DropdownMenuTrigger> <Button> Add Patient </Button> </DropdownMenuTrigger> 
         

         <DialogContent>

                 
                    <DialogHeader className="mb-4"> 
                        <DialogTitle> Add Patient</DialogTitle>
                        <DialogDescription>
                            You are now adding a patient: 
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