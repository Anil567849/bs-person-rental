'use client'

import { SearchBar } from "./SearchBar"


export default function Hero() {

  return (
    <section className="w-full h-full">

      <div className="container mx-auto px-4 md:px-6 mt-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Hire a Person on Rent at Any Location
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 sm:text-xl md:text-2xl">
            Discover your perfect partner for your need
          </p>

          <div>
            <SearchBar/>
          </div>
        </div>
      </div>
    </section>
  )
}
