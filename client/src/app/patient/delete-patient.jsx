import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { IdCardIcon } from "@radix-ui/react-icons";
import { revalidateTag } from "next/cache";
import { Toast } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast"

  


export function DeletePatient(props){

    const {toast} = useToast()

    const patients = props.patients

    function handleDelete() {

      if (patients.length === 0) return;
      
    
      const ids = patients.map(patient => patient.original._id)

      for (let id of ids) {
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
      
        
    }

    return(
        <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Delete selected patient(s)</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete selected patient(s)</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            Are you sure you want to delete the selected patient(s)?
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogAction varient="destructive" onClick={handleDelete}>Delete</AlertDialogAction>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
}
