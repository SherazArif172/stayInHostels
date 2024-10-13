import Image from "next/image";
import { Search, Mail } from "lucide-react";

export default function TravelBlog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Scenic view of an island"
              width={800}
              height={400}
              className="rounded-lg object-cover w-full h-[400px]"
            />
            <div className="mt-4 text-sm text-gray-500">
              <span>June 16, 2021</span>
              <span className="mx-2">&bull;</span>
              <span>120 views</span>
              <span className="mx-2">&bull;</span>
              <span>1 comment</span>
            </div>
            <p className="mt-4 text-gray-700">
              Traveling the world is a dream for many, but what if you could not
              only explore new cultures and landscapes but also make a positive
              impact on the communities you visit? Sustainable travel and
              volunteer work offer a unique opportunity to combine adventure
              with meaningful experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Travel scene 1"
              width={400}
              height={200}
              className="rounded-lg object-cover w-full h-[200px]"
            />
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Travel scene 2"
              width={400}
              height={200}
              className="rounded-lg object-cover w-full h-[200px]"
            />
          </div>

          <p className="text-gray-700">
            Volunteering abroad provides a chance to give back to the world and
            learn from different cultures. Whether you're interested in teaching
            English, working with children, or participating in environmental
            conservation projects, there are countless opportunities to make a
            meaningful difference.
          </p>

          {/* Additional content to ensure main area is scrollable */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Section {i}</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3 lg:sticky lg:top-8 lg:self-start">
          <div className="overflow-y-auto max-h-[calc(100vh-4rem)]">
            {/* Search */}
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full p-2 pr-10 border rounded-md"
                />
                <Search
                  className="absolute right-3 top-2.5 text-gray-400"
                  size={20}
                />
              </div>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">Travel</li>
                <li className="bg-blue-100 p-2 rounded">Tourist Guide</li>
                <li className="text-gray-700">City Sights</li>
                <li className="text-gray-700">Communication</li>
              </ul>
            </div>

            {/* Recommended Articles */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">
                Recommended articles
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt={`Recommended article ${i}`}
                      width={60}
                      height={60}
                      className="rounded-md object-cover"
                    />
                    <div>
                      <h4 className="font-medium">
                        Travel and Working Holidays
                      </h4>
                      <p className="text-sm text-gray-500">June 16, 2021</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Tag</h3>
              <div className="flex flex-wrap gap-2">
                {["Room", "People", "Guide", "Season", "City", "Sights"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Subscribe */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">
                Subscribe to our mailing list
              </h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-grow p-2 border rounded-l-md"
                />
                <button className="bg-blue-500 text-white p-2 rounded-r-md">
                  <Mail size={20} />
                </button>
              </div>
            </div>

            {/* Instagram */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Instagram</h3>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Image
                    key={i}
                    src="/placeholder.svg?height=100&width=100"
                    alt={`Instagram post ${i}`}
                    width={100}
                    height={100}
                    className="rounded-md object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
