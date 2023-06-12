import List from "./List";
import ListItem from "./ListItem";
import { Home, Library, Plus } from "lucide-react";

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
            <List>
                <ListItem>
                    <Home strokeWidth={2} size={22}/>
                    Home
                </ListItem>
                <ListItem>
                    <Library strokeWidth={2} size={22}/>
                    Library
                </ListItem>
            </List>
        </aside>
    )
}