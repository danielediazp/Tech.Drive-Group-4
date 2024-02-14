

export default function Detail()
{
    return (
        <div className="text-center font-bold py-5">
            <h1>This is the Detail Page</h1>
            <div className = "row">
            <div className="inline-block px-5 py-2">Patient info</div>
            <div>
                <ul>
                    <li>Patient ID</li> <li>{exam.patientId}</li>
                    <li>Age</li> <li>{exam.age}</li>
                    <li>Sex</li> <li>{exam.sex}</li>
                    <li>BMI</li> <li>{exam.bmi}</li>
                    <li>Zip Code</li> <li>{exam.zipCdoe}</li>
                </ul>
            </div> 
            <div className="inline-block px-5 py-2">Exam info</div>
            <div>
                <ul>
                    <li>Exam ID</li> <li>{exam.examId}</li>
                    <li>Image</li>  <li>{exam.imageURL}</li>
                    <li>Date</li>  <li>{exam.date}</li>
                    <li>Key Findings</li>  <li>{exam.keyFindings}</li>
                    <li>Brixia Score</li>  <li>{exam.brixiaScores}</li>
                </ul>
            </div>
            </div>
            <a href="/" className="inline-block p-3"> Go Back to home</a>
        </div>
    )   
}