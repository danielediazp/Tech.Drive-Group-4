import ExamTable from "./ExamTable"
import "./admin.css"
// Fetching the exams from the serve

async function getExams() {
    try {
        const response = await fetch("http://localhost:3001/records", {
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

function parseData(data) {
    return data.map(item => ({
        _id: item._id,
        patient_id: item.patientID ? item.patientID._id : "", // Assuming you want the patient's _id if available
        created_by_doctor_id: item.doctorID ? item.doctorID._id : "", // Assuming you want the doctor's _id if available
        bmi: item.bmi,
        brixia_score: item.brixiaScore,
        img_url: item.imageURL,
        notes: item.note,
        key_finding: item.keyFinding,
        date: item.date,
        edited_by: [] 
    }));
}


export default async function Page(){

    const data = await getExams()
    const exams = parseData(data);

    return (
        <div className="w-full min-h-screen">
            <div className="text-left px-12 pt-8">
                <h2 className="text-2xl font-bold tracking-tight">Welcome to the Exams Page!</h2>
                <p className="text-muted-foreground">Here you can edit and delete exams</p>
            </div>
            <div className="cointainer mx-auto px-12">
                <ExamTable exams={exams}/>
            </div>
        </div>
    )   
}

