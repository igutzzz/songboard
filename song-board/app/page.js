import Card from "./components/Card"

export default function Home() {
  return (
    <main>
      <div className="p-4 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  )
}