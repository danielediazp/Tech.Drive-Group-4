import { 
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

    import {
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
      } from "@/components/ui/table"
    
    import TestData from "@/app/testdata.json"
    
    const MenuButton = () => {
        return(
            <DropdownMenu>
                <DropdownMenuTrigger><DotsVerticalIcon /></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Edit exam</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Delete exam</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }
    
    const ExamTable = ({exams}) => {
        return(
            
        <Table>
            <TableHead className="text-center font-bold py-10 text-lg">Patient Info</TableHead>
            <TableHead className="text-center font-bold py-10 text-lg">Exam Info</TableHead>                
           
            <TableBody>
             <TableRow>
                <TableCell className="text-left font-bold py-5">Patient ID: {exams.patientId}</TableCell>
                <TableCell className="text-left font-bold py-5">Exam ID: {exams.examId}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className="text-left font-bold py-5">Age: {exams.age}</TableCell>
                <TableCell className="text-left font-bold py-5">Image: {exams.imageURL}</TableCell>
            </TableRow>     
            <TableRow>
                <TableCell className="text-left font-bold py-5">Sex: {exams.sex}</TableCell>
                <TableCell className="text-left font-bold py-5">Date: {exams.date}</TableCell>
            </TableRow>     
            <TableRow>
                <TableCell className="text-left font-bold py-5">BMI: {exams.bmi}</TableCell>
                <TableCell className="text-left font-bold py-5">Key Findings: {exams.keyFindings}</TableCell>
            </TableRow>     
            <TableRow>
                <TableCell className="text-left font-bold py-5">Zip Code: {exams.zipCode} </TableCell>
                <TableCell className="text-left font-bold py-5">Brixia Score:{exams.brixiaScores} </TableCell>
            </TableRow>  
            </TableBody>
        </Table>
               
        )
    }    

const Admin = () => {
    return (
        <div>
            <ExamTable exams={TestData["exams"]} />
        </div>
    )   
}


export default Admin;