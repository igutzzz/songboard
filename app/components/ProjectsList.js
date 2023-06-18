import Link from 'next/link'
import List from './List'
import ListItem from './ListItem'
import {Folder, ChevronUp} from 'lucide-react'

export default function ProjectsList(){
    return(
        <section className="border-t-2 border-b-1 border-slate-200">
            <div className="p-4 font-semibold flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Folder size={18}/>    
                    Projects
                </div>
                <ChevronUp size={18}/>
            </div>
            <List>
                <Link href="/song">
                    <ListItem>Projeto 1</ListItem>
                </Link>
                <ListItem>Projeto 2</ListItem>
            </List>
    </section>
    )
}