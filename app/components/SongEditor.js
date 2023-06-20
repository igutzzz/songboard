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
            <input type="text" placeholder="Title" value={song.title} onChange={(e)=>setTitle(e)} className=" bg-white font-bold text-4xl pb-2" />
            <h2 className="text-xl pb-4 text-slate-600" contentEditable>{song.description}</h2>
            <input type="text" value={song.lyrics} onChange={(e)=>setLyrics(e)}className=" bg-white font-bold text-2xl pb-2"/>
        </div>
    </main>
    )
}