"use client"
import { useState, useEffect } from "react"

export default function SongEditor(props){
    const [song, setSong] = useState({}); 

    const setTitle = e => {
        setSong(song => ({
            ...song, title: e.target.value
        }))
    }
    const setDescription = e => {
        setSong(song => ({
            ...song, description: e.target.value
        }))
    }
    const setLyrics = e => {
        setSong(song => ({
            ...song, lyrics: e.target.value
        }))
    }

    useEffect(()=>{setSong(props.song)},[props.song])
    return (
        <main className="flex-1">
        <div className="px-32 py-4">
            <h1 className="w-max">
                <input type="text" placeholder="Title" value={song.title} onChange={(e)=>setTitle(e)} className=" bg-white font-bold text-5xl pb-2" />
            </h1>
            <h2 className="w-1/2 mt-2">
                <input type="text" placeholder="Description" onChange={(e)=>setDescription(e)} value={song.description} className="bg-white text-xl pb-4 text-slate-600 w-full" />
            </h2>
            <section className="w-max mt-4">
                <input type="text" placeholder="Write something..." value={song.lyrics} onChange={(e)=>setLyrics(e)} className=" bg-white font-bold text-2xl pb-2"/>
            </section>
        </div>
    </main>
    )
}