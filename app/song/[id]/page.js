import SongEditor from "@/app/components/SongEditor";

export default async function Song({params}) {

    async function getSong(){
        const res = await fetch('https://songboard-server.onrender.com/api/songs/'+params.id);
        if(!res.ok){
            throw new Error('Failed to get this song. Please try again later.')
        }
        return res.json()
    }

    const song = await getSong()
    
    return(
        <div>
            <section className="px-8 py-4 text-right">
                <button className="py-2 px-4 rounded bg-slate-300">
                    Save
                </button>
            </section>
            <SongEditor song={song} />
        </div>

    )
}