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
  import { useToast } from "@/components/ui/use-toast"


  



export function DeletePopup(props){

  const {toast} = useToast()



  function handleDelete() {

    console.log(props)
    const exams = props.exams

    if (exams.length === 0) return;
    
    const ids = exams.map(exams => exams.original._id)

    for (let id of ids) {
      fetch(`http://localhost:3001/records/${id}`, {
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
          title: "Exams deleted",
          description: "The selected exams have been deleted please reload the page",
        })
    
      })
      
    }
    
      
  }


    return(
        <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Delete selected record(s)</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete selected record(s)</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            Are you sure you want to delete the selected record(s)?
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogAction varient="destructive" onClick={handleDelete}>Delete</AlertDialogAction>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
}
