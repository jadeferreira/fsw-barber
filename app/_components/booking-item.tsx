import { Avatar, AvatarImage } from "@/app/_components/ui/avatar"
import { Badge } from "@/app/_components/ui/badge"
import { Card, CardContent } from "@/app/_components/ui/card"
import { Prisma } from "@prisma/client"
import { format, isFuture } from "date-fns"
import { ptBR } from "date-fns/locale"

interface BookingItemProps {
  booking: Prisma.BookingGetPayload<{
    include: {
      service: {
        include: {
          barbershop: true
        }
      }
    }
  }>
}

const BookingItem = ({ booking }: BookingItemProps) => {
  const isConfirmed = isFuture(booking.date)
  return (
    <>
      <Card className="min-w-[90%]">
        <CardContent className="flex justify-between p-0">
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge
              className="rounded-md"
              variant={isConfirmed ? "default" : "secondary"}
            >
              {isConfirmed ? "Confirmado" : "Finalizado"}
            </Badge>
            <h3 className="font-semibold">{booking.service.name}</h3>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage
                  src={booking.service.barbershop.imageUrl}
                  alt="Avatar"
                />
              </Avatar>
              <p className="text-sm">{booking.service.barbershop.name}</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
            <p className="text-sm capitalize">
              {format(booking.date, "MMM", { locale: ptBR })}
            </p>
            <p className="text-2xl font-bold">
              {format(booking.date, "dd", { locale: ptBR })}
            </p>
            <p className="text-sm">
              {format(booking.date, "HH:mm", { locale: ptBR })}
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default BookingItem
