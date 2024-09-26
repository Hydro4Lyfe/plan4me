export type SidebarLink = {
    id: number,
    svg: string,
    route: string,
    label: string,
}

export type Project = {
    id: number,
    name: string,
    description: String,
    ownerId: String,
    startDate: Date,
    endDate: Date,
    status: String,
    priority: number,
    tasks: Task[],
}

export type Task = {
    id: string,
    ownerId: string,
    projectId: string,
    name: string,
    startDate: string,
    endDate: string,
    description: string,
    priority: string, 
    status: string
}