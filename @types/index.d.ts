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
}