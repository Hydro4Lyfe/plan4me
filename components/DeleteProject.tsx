import api from "@/app/api/api";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

export default function DeleteProject() {
    const router = useRouter()
    const path = usePathname()
    const id = path.substring(path.lastIndexOf('/') + 1)

    async function DeleteProject() {
        await api.delete(`/api/projects/${id}`)
        router.push('/projects')
    }

    return (
        <Button onClick={DeleteProject} className="bg-destructive text-destructive-foreground hover:bg-destructive">Delete</Button>
    );
}