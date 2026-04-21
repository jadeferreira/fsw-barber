import { Input } from "@/app/_components/ui/input"
import Header from "./_components/ui/header"
import { Button } from "@/app/_components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/app/_components/ui/card"
import { db } from "./_lib/prisma"
import BarbershopItem from "@/app/_components/ui/barbershop-item"
import { quickSearchOptions } from "@/app/_constants/search"
import BookingItem from "@/app/_components/ui/booking-item"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({
    distinct: ["name"],
  })
  const popularBarbershops = await db.barbershop.findMany({
    distinct: ["name"],
    orderBy: {
      name: "desc",
    },
  })

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

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.title}>
              <Image
                src={option.imageUrl}
                alt={option.title}
                width={16}
                height={16}
              />
              {option.title}
            </Button>
          ))}
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Banner Agende nos melhores com FSW"
            src="/Banner.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <BookingItem />

        <h3 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h3>
        <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h3 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h3>
        <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <footer>
        <Card className="rounded">
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2023 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
