import Link from "next/link";
import List from "./List";
import ListItem from "./ListItem";
import ProjectsList from "./ProjectsList";
import { Home, Library, Plus } from "lucide-react";

export default function Menu(){
    return(
        <aside className="h-screen w-1/5 border-r-2 border-slate-200">
            <div className="px-4 py-4 border-b-2">
                <h1 className="text-3xl font-black">Songboard</h1>
            </div>
            <div className="p-4">
                <button className="py-2 px-4 rounded bg-blue text-white text-lg w-full flex items-center justify-center gap-1">
                <Plus strokeWidth={2} size={22}/>
                    New Project
                </button>
            </div>
            <List className="pb-4">
                <Link href="/">
                    <ListItem>
                        <Home strokeWidth={2} size={22}/>
                        Home
                    </ListItem>
                </Link>
                <ListItem>
                    <Library strokeWidth={2} size={22}/>
                    Library
                </ListItem>
            </List>
            <ProjectsList />
        </aside>
    )
}