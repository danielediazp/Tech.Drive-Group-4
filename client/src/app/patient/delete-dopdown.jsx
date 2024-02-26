
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DotsVerticalIcon } from "@radix-ui/react-icons"
import { useToast } from "@/components/ui/use-toast"








export function DeleteDropdown({patient}) {

    const {toast} = useToast() 
    

    function handleDelete(){
        const id = patient._id
        
        fetch(`http://localhost:3001/patient/${id}`, {
            headers: {
                "x-api-auth": "HACKDIV"
            },
            method: "DELETE",
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            toast({
                title: "Patient deleted",
                description: "The patient has been deleted please reload the page",
            })
        })

    }




    return(
        <DropdownMenu>
            <DropdownMenuTrigger><DotsVerticalIcon /></DropdownMenuTrigger> 
            <DropdownMenuContent>
                <DropdownMenuItem onClick={handleDelete}>Delete patient</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
    

}