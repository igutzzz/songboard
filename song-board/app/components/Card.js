export default function Card() {
    return(
        <div className="border-2 rounded-md p-4 min-w-lg max-w-lg max-h-40 min-h-max">
            <h1 className="text-2xl font-bold">Título</h1>
            <p className="py-2">Descrição</p>
            <p className="text-slate-400">Criado em: 05/06/2023</p>
        </div>
    )
}