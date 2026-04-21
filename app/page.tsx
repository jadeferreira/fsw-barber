import { Input } from "@/app/_components/ui/input"
import Header from "./_components/ui/header"
import { Button } from "@/app/_components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/app/_components/ui/card"
import { Badge } from "@/app/_components/ui/badge"

import { Avatar, AvatarImage } from "@/app/_components/ui/avatar"

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

        <h3 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h3>
        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="rounded-md">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage
                    src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
                    alt="Avatar"
                  />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Abril</p>
              <p className="text-2xl font-bold">21</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home
