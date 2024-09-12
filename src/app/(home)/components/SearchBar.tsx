
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { useRouter } from 'next/navigation'



export function SearchBar() {
    const [location, setLocation] = useState("")
    const [cabs, setCabs] = useState("")
    const [adType, setAdType] = useState("")
    const router = useRouter()
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      // console.log({ location, cabs, adType })
      location.toLowerCase();
      router.push(`http://localhost:3000/search/${location}`)
    }
  
    return (
      <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto p-2 rounded-3xl mt-[2rem] bg-white">
        <div className="flex items-center justify-between">
          <Input
            type="text"
            value={location}
            onChange={(e: any) => setLocation(e.target.value)}
            className="w-[80%] placeholder:text-gray-600 text-black border-none outline-none"
            placeholder="Location"
          />
          <Button type="submit" className="ms-3 rounded-lg h-full">Search</Button>
        </div>
      </form>
    )
  }