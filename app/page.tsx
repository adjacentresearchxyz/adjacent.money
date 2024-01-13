import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully Designed Banking
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Open, Accessible, Smooth. A banking experience like no other.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.login}
          rel="noreferrer"
          className={buttonVariants()}
        >
          Launch
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          Documentation
        </Link>
      </div>
    </section>
  )
}
