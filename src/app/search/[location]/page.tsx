'use client'
import UserCard2 from "./components/UserCard2"


const sampleUsers = [
    {
      imageUrl: "https://i.pravatar.cc/301",
      name: "Anil",
      location: "New York, NY",
      age: 28,
      bio: "Adventurous soul, coffee enthusiast, and tech geek. Always up for new experiences!",
      distance: 5,
      price: 100,
    },
    {
      imageUrl: "https://i.pravatar.cc/302",
      name: "Ravi",
      location: "Los Angeles, CA",
      age: 32,
      bio: "Lover of beaches, music, and late-night coding sessions. Tech is my passion.",
      distance: 3,
      price: 120,
    },
    {
      imageUrl: "https://i.pravatar.cc/303",
      name: "Sara",
      location: "San Francisco, CA",
      age: 26,
      bio: "Outdoor explorer, fitness enthusiast, and startup founder. Living life to the fullest.",
      distance: 8,
      price: 110,
    },
    {
      imageUrl: "https://i.pravatar.cc/304",
      name: "Nina",
      location: "Austin, TX",
      age: 29,
      bio: "Passionate photographer, nature lover, and foodie. Always on the move.",
      distance: 10,
      price: 90,
    },
    {
      imageUrl: "https://i.pravatar.cc/305",
      name: "John",
      location: "Seattle, WA",
      age: 34,
      bio: "Coffee connoisseur, coding fanatic, and avid reader. Seattle's weather is my vibe.",
      distance: 6,
      price: 95,
    },
    {
      imageUrl: "https://i.pravatar.cc/306",
      name: "Ayesha",
      location: "Boston, MA",
      age: 30,
      bio: "Historian by profession, storyteller by passion. Exploring new cultures and cuisines.",
      distance: 4,
      price: 130,
    },
    {
      imageUrl: "https://i.pravatar.cc/307",
      name: "Karan",
      location: "Chicago, IL",
      age: 27,
      bio: "Traveler, startup enthusiast, and code breaker. Always hunting for the next challenge.",
      distance: 9,
      price: 105,
    },
    {
      imageUrl: "https://i.pravatar.cc/308",
      name: "Maria",
      location: "Denver, CO",
      age: 25,
      bio: "Mountain climber, fitness trainer, and adventure seeker. The outdoors are my home.",
      distance: 7,
      price: 115,
    },
    {
      imageUrl: "https://i.pravatar.cc/309",
      name: "David",
      location: "Miami, FL",
      age: 31,
      bio: "Lifelong beach lover, tech enthusiast, and part-time surfer. Living life with a smile.",
      distance: 2,
      price: 125,
    },
  ];
  

export default function RegisterCab() {

  return (
    
    <section className="w-full min-h-screen mx-auto flex flex-col items-center bg-[url('/bg.jpg')]">
        <div className="w-[70vw]pt-4 mb-10">
            <h1 className="w-[70vw] text-center text-white text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl p-6">
                Explore Your <span className="text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600"> Partner</span>
            </h1>
        </div>
      <div className="w-[80vw] grid grid-cols-3 gap-8 pt-4">
        {
          sampleUsers.map((user, ind) => {
            return <UserCard2 key={ind}
            imageUrl={user.imageUrl}
            name={user.name}
            location={user.location}
            age={user.age}
            bio={user.bio}
            distance={user.distance}
            price={user.price}
             />
          })
        }
      </div>
    </section>
  )
}