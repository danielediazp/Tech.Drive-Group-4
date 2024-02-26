import PatientTable from "./PatientTable"
import axios from "axios"

async function getPatients() {
    try {
        const response = await fetch("http://localhost:3001/patient", {
            cache: "no-cache",
            method: 'GET', 
            headers: {
                "x-api-auth": "HACKDIV"
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
}

export default async function Page()
{
    const patients = await getPatients()
    return (
        <div className="w-full min-h-screen">
            <div className="text-left px-12 pt-8">
                <h2 className="text-2xl font-bold tracking-tight">Welcome to the Patient Page!</h2>
                <p className="text-muted-foreground">Here you can edit, delete and create patient</p>
            </div>
            <div className="cointainer mx-auto px-12">
                <PatientTable patients={patients}/>
            </div>
        </div>
    )
}