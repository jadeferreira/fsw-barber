import { Input } from "@/app/_components/ui/input"
import Header from "./_components/ui/header"
import { Button } from "@/app/_components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Jade!</h2>
        <p>Segunda-feira, 21 de Fevereiro</p>

        <div className="mt-5 flex items-center gap-1">
          <Input className="h-auto" placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Banner Agende nos melhores com FSW"
            src="/Banner.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
