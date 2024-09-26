import api from "@/app/api/api";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

export default function DeleteTask() {
    const router = useRouter()
    const path = usePathname()
    const id = path.substring(path.lastIndexOf('/') + 1)

    async function Delete() {
        await api.delete(`/api/tasks/${id}`)
        router.replace('/tasks')
    }

    return (
        <Button onClick={Delete} className="bg-destructive text-destructive-foreground hover:bg-destructive">Delete</Button>
    );
}