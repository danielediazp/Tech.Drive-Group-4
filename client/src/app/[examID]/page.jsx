
"use client";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

async function fetchExam(examID) {
  const res = await fetch(`http://localhost:3001/records/${examID}`, {
    headers: {
      "x-api-auth": "HACKDIV",
    },
    method: "GET",
  });
  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }
  return res.json();
}

const Detail = ({ params }) => {
  const examID = params.examID;
  const [exam, setExam] = useState({});


  
  

  useEffect(() => {
    fetchExam(examID).then(setExam).catch(console.error); // Fetch exam and update state
  }, []);

  if (!exam || !exam.patientID) {
    return <div>Loading...</div>;
  }


  return (
    <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-center font-bold py-10 text-lg">Patient Info</TableHead>
                    <TableHead className="text-center font-bold py-10 text-lg">Exam Info</TableHead>      
                </TableRow>          
           </TableHeader>
            <TableBody>
             <TableRow>
                <TableCell className="text-left font-bold py-5">Patient ID: {exam.patientID._id}
                </TableCell>
                <TableCell className="text-left font-bold py-5">Exam ID: {exam._id}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className="text-left font-bold py-5">Pro Nouns: {exam.patientID.pronouns}</TableCell>
                <TableCell className="text-left font-bold py-5"><img src={exam.imageURL} className="w-[300px]"></img></TableCell>
            </TableRow>     
            <TableRow>
                <TableCell className="text-left font-bold py-5">Sex: {exam.patientID.sex}</TableCell>
                <TableCell className="text-left font-bold py-5">Date: {exam.date}</TableCell>
            </TableRow>     
            <TableRow>
                <TableCell className="text-left font-bold py-5">BMI: {exam.bmi}</TableCell>
                <TableCell className="text-left font-bold py-5">Key Findings: {exam.keyFinding}</TableCell>
            </TableRow>     
            <TableRow>
                <TableCell className="text-left font-bold py-5">Zip Code: {exam.patientID.zipcode} </TableCell>
                <TableCell className="text-left font-bold py-5">Brixia Score:{exam.brixiaScore} </TableCell>
            </TableRow>  
            </TableBody>
        </Table>
  );
};

export default Detail;
