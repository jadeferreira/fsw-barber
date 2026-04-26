import SidebarButton from "@/app/_components/sidebar-sheet"
import { Button } from "@/app/_components/ui/button"
import { Card, CardContent } from "@/app/_components/ui/card"
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Image from "next/image"

const Header = () => {
  return (
    <div>
      <Card className="rounded p-2">
        <CardContent className="flex flex-row items-center justify-between">
          <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SidebarButton />
          </Sheet>
        </CardContent>
      </Card>
    </div>
  )
}

export default Header
