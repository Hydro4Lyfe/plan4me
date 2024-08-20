import api from "@/app/api/api";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

export default function EditProject() {
    const router = useRouter()
    const path = usePathname()
    const id = path.substring(path.lastIndexOf('/') + 1)
    
    function GoBack() {
        router.push('/projects')
    }

    async function DeleteProject() {
        await api.delete(`/api/projects/${id}`)
        GoBack()
    }

    return (
        <div>
            <Button onClick={DeleteProject} className="bg-destructive text-destructive-foreground hover:bg-destructive">Delete</Button>
        </div>
    );
}