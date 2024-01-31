import { Button } from "@/components/ui/button"

export default function Admin()
{
    return (
        <div className="text-center font-bold py-5">
            <h1>This is the Admin Page</h1>
            <Button>Add new record</Button>
            <Button>Delete selected record(s)</Button>
        </div>
    )   
}