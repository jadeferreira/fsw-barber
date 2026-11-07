import Header from "./_components/header"
import { Button } from "@/app/_components/ui/button"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopItem from "@/app/_components/barbershop-item"
import { quickSearchOptions } from "@/app/_constants/search"
import BookingItem from "@/app/_components/booking-item"
import Search from "@/app/_components/search"
import Link from "next/link"
import { authOptions } from "@/app/_lib/auth"
import { getServerSession } from "next-auth"

const Home = async () => {
  const session = await getServerSession(authOptions)
  const barbershops = await db.barbershop.findMany({
    distinct: ["name"],
  })
  const popularBarbershops = await db.barbershop.findMany({
    distinct: ["name"],
    orderBy: {
      name: "desc",
    },
  })

  const confirmedBookings = session?.user
    ? await db.booking.findMany({
        where: {
          userId: (session?.user as any).id,
        },
        include: {
          service: {
            include: {
              barbershop: true,
            },
          },
        },
        orderBy: {
          date: "asc",
        },
      })
    : []

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Jade!</h2>
        <p>Segunda-feira, 21 de Fevereiro</p>

        <div className="mt-6">
          <Search />
        </div>

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  alt={option.title}
                  width={16}
                  height={16}
                />
                {option.title}
              </Link>
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

        <h3 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h3>

        <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {confirmedBookings.map((booking) => (
            <BookingItem key={booking.id} booking={booking} />
          ))}
        </div>

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
    </div>
  )
}

export default Home
