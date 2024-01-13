import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>OS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none"></p>
          <p className="text-sm font-medium leading-none">0x and Stone</p>
          <div className="flex flex-direction space-x-2">
            <Badge className="text-xs" variant="outline">Credit</Badge>
            <Link
              rel="noreferrer"
              href="/transaction/nd3k2kacrqjli8482ave"
              className="underline decoration-dotted"
            >
              <p className="text-sm text-muted-foreground">
                nd3k2kacrqjli8482ave
              </p>
            </Link>
          </div>
        </div>
        <div className="ml-auto font-medium">-$134.12</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Adjacent Credit Payment</p>
          <div className="flex flex-direction space-x-2">
            <Badge className="text-xs" variant="outline">ACH</Badge>
            <Link
              rel="noreferrer"
              href="/transaction/nd3k2kacrqjli8482ave"
              className="underline decoration-dotted"
            >
            <p className="text-sm text-muted-foreground">
              uyrp7fld2ium70oa7oi
            </p>
            </Link>
          </div>
        </div>
        <div className="ml-auto font-medium">+$234.51</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>CE</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Carta Equity</p>
          <div className="flex flex-direction space-x-2">
            <Badge className="text-xs" variant="outline">Wire</Badge>
            <Link
              rel="noreferrer"
              href="/transaction/nd3k2kacrqjli8482ave"
              className="underline decoration-dotted"
            >
            <p className="text-sm text-muted-foreground">
              5akynk7dqsq25qwk9q2u
            </p>
            </Link>
          </div>
        </div>
        <div className="ml-auto font-medium">+$3,900.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>UA</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Uniswap Airdrop</p>
          <div className="flex flex-direction space-x-2">
            <Badge className="text-xs" variant="outline">Digital</Badge>
            <Link
              rel="noreferrer"
              href="/transaction/nd3k2kacrqjli8482ave"
              className="underline decoration-dotted"
            >
            <p className="text-sm text-muted-foreground">
              0x8e65a371
            </p>
            </Link>
          </div>
        </div>
        <div className="ml-auto font-medium">+$299.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">William Kim</p>
          <div className="flex flex-direction space-x-2">
            <Badge className="text-xs" variant="outline">RTP</Badge>
            <Link
              rel="noreferrer"
              href="/transaction/nd3k2kacrqjli8482ave"
              className="underline decoration-dotted"
            >
            <p className="text-sm text-muted-foreground">
              iyuhl5kdn7ssmup83mvq
            </p>
            </Link>
          </div>
        </div>
        <div className="ml-auto font-medium">-$99.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Rent</p>
          <div className="flex flex-direction space-x-2">
            <Badge className="text-xs" variant="outline">Check</Badge>
            <Link
              rel="noreferrer"
              href="/transaction/nd3k2kacrqjli8482ave"
              className="underline decoration-dotted"
            >
            <p className="text-sm text-muted-foreground">
              30b43acfu9vw8fyc4f5
            </p>
            </Link>
          </div>
        </div>
        <div className="ml-auto font-medium">-$1,200.00</div>
      </div>
    </div>
  )
}
