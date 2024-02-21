import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { DotsVerticalIcon } from "@radix-ui/react-icons"
import { 
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger } from "@/components/ui/dropdown-menu"


const EditMenu = () => {
    return(
    <Dialog>
        <DropdownMenu>
            <DropdownMenuTrigger><DotsVerticalIcon /></DropdownMenuTrigger> 
            <DropdownMenuContent>
                <DialogTrigger asChild>
                    <DropdownMenuItem><span>Edit exam</span></DropdownMenuItem>
                </DialogTrigger>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Delete exam</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit Exam</DialogTitle>
                <DialogDescription>Edit fields for an exam. This cannot be undone.</DialogDescription>
            </DialogHeader>
            <h2>Form to be added</h2>
        </DialogContent>
    </Dialog>
    )
}

export default EditMenu;