export default function Navbar() {
    return(
        <nav className="flex p-2 items-center justify-between">
            <h1 className="text-3xl">Songboard</h1>
            <div>
                <button className="py-2 px-4 font-bold bg-blue text-white rounded-md">Login</button>
            </div>
        </nav>
    )
}