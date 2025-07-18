import React from "react"

const organizations = [
  {
    name: "Green Earth Initiative",
    followers: 120,
    logo: "/logos/green-earth.png",
  },
  {
    name: "Community Helpers",
    followers: 85,
    logo: "/logos/community-helpers.png",
  },
  {
    name: "Animal Rescue League",
    followers: 60,
    logo: "/logos/animal-rescue.png",
  },
]

const posts = [
  {
    author: "Green Earth Initiative",
    title: "Community Cleanup Event",
    description:
      "Join us for a community cleanup event at Central Park on Saturday, July 20th. We'll be picking up trash, planting trees, and making our park a better place for everyone. All ages welcome!",
    image: "/images/cleanup.jpg",
  },
  {
    author: "Sarah Miller",
    title: "Fundraising Bake Sale",
    description:
      "I'm organizing a bake sale to raise funds for the local animal shelter. Come by the town square on Sunday, July 21st, and support a great cause with some delicious treats!",
    image: "/images/bake-sale.jpg",
  },
  {
    author: "Community Helpers",
    title: "Elderly Assistance Program",
    description:
      "We're looking for volunteers to assist elderly residents with errands, companionship, and light household tasks. If you have some free time and a caring heart, please sign up!",
    image: "/images/elderly-help.jpg",
  },
  {
    author: "Animal Rescue League",
    title: "Pet Adoption Day",
    description:
      "Join us for our pet adoption day at the local pet store on Saturday, July 27th. Find your new furry friend and give a loving home to an animal in need!",
    image: "/images/pet-adoption.jpg",
  },
]

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-50 p-6 border-r">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-3 py-2 mb-4 rounded-md bg-gray-100"
        />
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-600 mb-2">Filters</h2>
          <div className="flex flex-wrap gap-2">
            {["Category", "Organization", "Date", "Location"].map((filter) => (
              <button
                key={filter}
                className="px-3 py-1 bg-gray-200 text-sm rounded-full"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-600 mb-2">
            Organizations
          </h2>
          <div className="space-y-4">
            {organizations.map((org) => (
              <div key={org.name} className="flex items-center gap-3">
                <img
                  src={org.logo}
                  alt={org.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">{org.name}</p>
                  <p className="text-xs text-gray-500">
                    {org.followers} followers
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Feed */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Feed</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Create Post
          </button>
        </div>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex items-start justify-between border-b pb-6"
            >
              <div className="w-2/3 pr-4">
                <p className="text-sm text-gray-500 mb-1">
                  Posted by {post.author}
                </p>
                <h2 className="font-semibold text-lg">{post.title}</h2>
                <p className="text-sm text-gray-700">{post.description}</p>
              </div>
              <img
                src={post.image}
                alt={post.title}
                className="w-32 h-20 object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
