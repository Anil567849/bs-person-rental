'use client';
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Camera, Heart, MessageCircle } from "lucide-react"
import { MapPin, Calendar, Info, PinIcon, CircleDollarSign } from "lucide-react"
import { useRouter } from "next/navigation";

interface UserProfileCardProps {
    imageUrl: string
    name: string
    location: string
    age: number
    bio: string
    distance: number
    price: number
    phone: number
  }



export default function Component({ imageUrl, name, location, age, bio, distance, price, phone}: UserProfileCardProps) {

  const router = useRouter();
  function handleContact() {
    // router.push(`tel:${phone}`);
    alert(`call at: ${phone}`);
  }
  function handleLike() {
    alert('liked')
  }

  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden bg-gray-200 rounded-xl shadow-lg">
      <div className="relative h-28 bg-[url('https://images.unsplash.com/photo-1636690513351-0af1763f6237?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <CardContent className="relative pt-16 pb-0 px-2">
        <Avatar className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 border-4 border-white">
          <AvatarImage src={`data:image/jpeg;base64,${imageUrl}`} alt={name} />
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className="text-center mb-2">
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        </div>
        <div className="p-4 space-y-2">
            <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                <span>{location}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
                <PinIcon className="mr-2 h-4 w-4" />
                <span>{distance} km range</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{age} years old</span>
            </div>
            <div className="flex items-start text-sm text-muted-foreground">
                <CircleDollarSign className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground line-clamp-2">{price}/hour</p>
            </div>
            <div className="flex items-start text-sm text-muted-foreground">
                <Info className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground line-clamp-2">{bio}</p>
            </div>
        </div>
      </CardContent>
      <div className="flex border-t border-gray-200">
        <Button 
        variant="ghost" 
        className="flex-1 py-4 text-blue-500 hover:bg-blue-50 rounded-none"
        onClick={handleContact}>
          <MessageCircle className="mr-2 h-5 w-5" />
          Contact
        </Button>
        <Button 
        variant="ghost" 
        className="flex-1 py-4 text-pink-500 hover:bg-pink-50 rounded-none"
        onClick={handleLike}>
          <Heart className="mr-2 h-5 w-5" />
          Like
        </Button>
      </div>
    </Card>
  )
}