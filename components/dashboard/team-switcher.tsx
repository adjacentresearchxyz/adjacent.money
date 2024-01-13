"use client"

import * as React from "react"
import { useState, useEffect } from 'react';
import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Group = {
  label: string;
  accounts: Account[];
};

type Account = {
  label: string;
  value: string;
};

type Team = (typeof groups)[number]["teams"][number]

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface TeamSwitcherProps extends PopoverTriggerProps { }

export default function TeamSwitcher({ className }: TeamSwitcherProps) {
  const [open, setOpen] = React.useState(false)
  const [showNewAccountDialog, setShowNewAccountDialog] = React.useState(false)

  const [groups, setGroups] = useState<Group[]>([
    {
      label: "Accounts",
      accounts: [ ],
    },
  ]);
  const [selectedAccount, setSelectedAccount] = React.useState<Team>()

  // Function to fetch the groups from the API
  const fetchGroups = async () => {
    const response = await fetch('/api/increase');
    const data = await response.json();

    if (response.ok) {
      let account_groups = []
      for (let account of data.accounts.data) {
        if (!groups.includes(account.id)) {
          account_groups.push({ label: account.name, value: account.id })
        }
      }

      setGroups([{ label: "Accounts", accounts: account_groups }])
    } else {
      console.error('Failed to fetch groups:', data.error);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  useEffect(() => {
    setSelectedAccount(groups[0].accounts[0])
  })

  return (
    <Dialog open={showNewAccountDialog} onOpenChange={setShowNewAccountDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select an account"
            className={cn("w-[200px] justify-between", className)}
          >
            <Avatar className="mr-2 h-5 w-5">
              <AvatarImage
                src={`https://avatar.vercel.sh/${selectedAccount?.value}.png`}
                alt={selectedAccount?.label}
                className="grayscale"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            {selectedAccount?.label}
            <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandList>
              <CommandInput placeholder="Search account..." />
              <CommandEmpty>No account found.</CommandEmpty>
              {groups.map((group) => (
                <CommandGroup key={group.label} heading={group.label}>
                  {group.accounts.map((account) => (
                    <CommandItem
                      key={account.value}
                      onSelect={() => {
                        setSelectedAccount(account)
                        setOpen(false)
                      }}
                      className="text-sm"
                    >
                      <Avatar className="mr-2 h-5 w-5">
                        <AvatarImage
                          src={`https://avatar.vercel.sh/${account.value}.png`}
                          alt={account.label}
                          className="grayscale"
                        />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      {account.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          selectedAccount?.value === account.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false)
                      setShowNewAccountDialog(true)
                    }}
                  >
                    <PlusCircledIcon className="mr-2 h-5 w-5" />
                    Create Account
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create account</DialogTitle>
          <DialogDescription>
            Add a new account
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
              <Label htmlFor="name">Account name</Label>
              <Input id="name" placeholder="Acme Inc." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="plan">Subscription plan</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">
                    <span className="font-medium">Free</span> -{" "}
                    <span className="text-muted-foreground">
                      Trial for two weeks
                    </span>
                  </SelectItem>
                  <SelectItem value="pro">
                    <span className="font-medium">Pro</span> -{" "}
                    <span className="text-muted-foreground">
                      $9/month per user
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowNewAccountDialog(false)}>
            Cancel
          </Button>
          <Button type="submit">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
