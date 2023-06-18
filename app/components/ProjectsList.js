import Link from 'next/link'
import List from './List'
import ListItem from './ListItem'
import {Folder, ChevronUp} from 'lucide-react'

async function getSongs() {
    const res = await fetch('https://songboard-server.onrender.com/api/songs')

    if(!res.ok){
        throw new Error('Failed to fetch data!')
    }

    return res.json()
}

export default async function ProjectsList(){
    const songs = await getSongs()

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
                {songs.map((song) =>{
                    return(
                        <Link href={"/song/"+song._id}>
                            <ListItem key={song._id}>{song.title}</ListItem>
                        </Link>
                    )
                })}
            </List>
    </section>
    )
}