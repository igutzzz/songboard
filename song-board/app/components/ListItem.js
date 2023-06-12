export default function ListItem({children}){
    return(
        <li className="flex items-center justify-start gap-3 px-4 py-2 mb-1 rounded">
            {children}
        </li>
    )
}