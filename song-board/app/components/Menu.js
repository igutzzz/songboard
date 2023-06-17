import Link from "next/link";
import List from "./List";
import ListItem from "./ListItem";
import { Home, Library, Plus, Folder, ChevronUp } from "lucide-react";

export default function Menu(){
    return(
        <aside className="h-screen md:w-1/4 xl:w-1/5 border-r-2 border-slate-200">
            <div className="px-2 py-4 border-b-2">
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
            <section className="p-4 border-t-2 border-b-1 border-slate-200">
                <h3 className="font-semibold flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Folder size={18}/>    
                        Projects
                    </div>
                    <ChevronUp size={18}/>
                </h3>
            </section>
            <List>
                <Link href="/song">
                    <ListItem>Projeto 1</ListItem>
                </Link>
                <ListItem>Projeto 2</ListItem>
            </List>
        </aside>
    )
}