export default async function Song({params}) {

    async function getSong(){
        const res = await fetch('https://songboard-server.onrender.com/api/songs/'+params.id);

        if(!res.ok){
            throw new Error('Failed to get this song. Please try again later.')
        }

        return res.json()
    }

    const song = await getSong();

    return(
        <main className="flex-1">
            <section className="px-8 py-4 text-right">
                <button className="py-2 px-4 rounded bg-slate-300">
                    Save
                </button>
            </section>
            <div className="px-32 py-4">
                <input type="text" placeholder="Title" value={song.title} className=" bg-white font-bold text-4xl pb-2" />
                <h2 className="text-xl pb-4 text-slate-600">{song.description}</h2>
                <p>{song.lyrics}</p>
            </div>
        </main>
    )
}