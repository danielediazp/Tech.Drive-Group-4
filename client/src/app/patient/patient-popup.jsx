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
import { DialogClose } from "@radix-ui/react-dialog"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { set } from "date-fns"


async function addPatient(patient) {
    
    console.log(patient)
    const response = await fetch("http://localhost:3001/patient", {
        method: "POST",
        headers: {
            "x-api-auth": "HACKDIV",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(patient)        
    
}
    )
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
}

  

export function AddPatient() {

    const {toast} = useToast()

    function handleSave() {

        if (firstName === "" || lastName === "" || pronouns === "" || dob === "" || street === "" || city === "" || state === "" || zip === "") {
            setError("Please fill out all fields")
            return
        }


        const patient = {
            name: firstName,
            lname: lastName,
            pronouns: pronouns,
            sex: sex,
            birth_date: dob,
            street: street,
            city: city,
            state: state,
            zipcode: zip,
        }
        addPatient(patient).then(() => {
            console.log("Patient added")
        }
        ).catch((err) => {
            console.error(err)
            return
        })
        toast({
            title: "Patient added",
            description: "The patient has been added please reload the page"
        })
        setOpen(false)

    }




        
    const [open, setOpen] = useState(false)
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
    function handleSexChange(value) {
        console.log(value)
        setSex(value)
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
        <Dialog open={open} onOpenChange={setOpen}>
            
        
            <DialogTrigger asChild> 
                <Button> Add Patient </Button> 
            </DialogTrigger> 
         

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
                                <Select onValueChange={(value)=> handleSexChange(value)} defaultValue={sex}>
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
                                <Input onChange={(e) => setDob(e.target.value)} value={dob} type="date" className="w-[120px] h-[30px]" />
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
                        <Button variant="destructive" >Cancel</Button>
                    </DialogClose>
                    <Button disabled={loading} onClick={handleSave}>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )

}