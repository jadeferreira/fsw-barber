import SidebarButton from "@/app/_components/sidebar-sheet"
import { Button } from "@/app/_components/ui/button"
import { Card, CardContent } from "@/app/_components/ui/card"
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <div>
      <Card className="rounded p-2">
        <CardContent className="flex flex-row items-center justify-between">
          <Link href="/">
            <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
          </Link>
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
