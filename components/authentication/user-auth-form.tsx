"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="grid gap-2">
        <Button disabled={isLoading} onClick={() => window.location.href='/api/auth/login'}>
          {/* {isLoading && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )} */}
          Log in
        </Button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or
          </span>
        </div>
      </div>
      <Button variant="outline" disabled={isLoading} onClick={() => window.location.href='/api/auth/login'}>
          {/* {isLoading && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )} */}
          Sign up
        </Button>
    </div>
  )
}