import { Button } from "@/app/_components/ui/button"
import { Card, CardContent } from "@/app/_components/ui/card"
import { MenuIcon } from "lucide-react"
import Image from "next/image"

const Header = () => {
  return (
    <div>
      <Card>
        <CardContent className="flex flex-row items-center justify-between">
          <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Header
