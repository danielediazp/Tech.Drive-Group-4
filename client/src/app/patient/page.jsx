import PatientTable from "./PatientTable"
import patients from "./patients_data.json"

export default function Exams()
{
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