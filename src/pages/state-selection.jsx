"use client"

export function StateSelection({ region, states, onStateClick }) {
  // Define some background images for states (in a real app, you'd have actual images)
  const stateImages = {
    "West Bengal": "https://i.pinimg.com/736x/03/42/cf/0342cfa938983e12e951b4acd06121b7.jpg",
    
    Odisha: "https://i.pinimg.com/736x/5e/f1/7c/5ef17c0f9f291e4c4797f76fd61dd272.jpg",
    Goa: "https://i.pinimg.com/736x/7a/2d/08/7a2d08f2c9257b0d26319e4362ff85d5.jpg",
    Kerala: "https://i.pinimg.com/736x/37/85/f1/3785f100022f85f73503d745849abb20.jpg",
    "Tamil Nadu": "https://i.pinimg.com/736x/e0/ab/aa/e0abaa1bfaf6df121ee1dbea2b55f700.jpg",
    "Himachal Pradesh": "https://i.pinimg.com/736x/5e/5d/26/5e5d2656cdf129383578bb3f8b7ff130.jpg",
    Uttarakhand: "https://i.pinimg.com/736x/2d/c2/b3/2dc2b32b1c47fbecf34920cb5fcc9146.jpg",
    Sikkim: "https://i.pinimg.com/736x/f6/7c/57/f67c572cf8eea0fa56ebbc69b31d63ef.jpg",
    Meghalaya: "https://i.pinimg.com/736x/a2/f2/15/a2f21530c9d321a782787de431b7a823.jpg",
    "Jammu & Kashmir": "https://i.pinimg.com/736x/0a/37/ff/0a37ff0dc860b331d1c0525ab865e060.jpg",
    "Arunachal Pradesh": "https://i.pinimg.com/736x/77/59/2f/77592fc767066afabb72b38b9aa180db.jpg",
    "Andaman & Nicobar": "https://i.pinimg.com/736x/8a/26/0b/8a260bf080898e5719099336af5ca6e3.jpg",
    Maharashtra: "https://i.pinimg.com/736x/7d/54/2e/7d542e6db3287c19808c11dbc34627b4.jpg",
    Delhi: "https://i.pinimg.com/736x/dd/06/a2/dd06a2b9e9292368548910601f8b43b5.jpg",
    Karnataka: "https://i.pinimg.com/736x/90/36/65/903665950bf67eee3e4fcd3f5ec692b2.jpg",
    Telangana: "https://i.pinimg.com/736x/89/1b/99/891b990956ed38c8ce29ef3887caa1ec.jpg",
    Rajasthan: "https://i.pinimg.com/736x/5f/22/0e/5f220e791d2a31791ac8d3893eaca7ca.jpg",
    "Uttar Pradesh": "https://i.pinimg.com/736x/b5/70/80/b570809d76c1cd6477be9ea31f0e62a7.jpg",
    "Madhya Pradesh": "https://i.pinimg.com/736x/d2/c3/93/d2c3938759358ed39e513e744b78862e.jpg",
    Gujarat: "https://i.pinimg.com/736x/b5/7b/ff/b57bff9b097c07172b1faea560fdbd5d.jpg",
    Bihar: "https://i.pinimg.com/736x/cf/57/75/cf577566c777ae4d316b54901c31b938.jpg",
  }
  return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {states.map((state) => (
    <div
      key={state}
      className="overflow-hidden rounded-xl shadow-md cursor-pointer hover:shadow-lg transition duration-300 bg-white border border-gray-200 transform hover:scale-105"
      onClick={() => onStateClick(state)}
    >
      {/* IMAGE SECTION */}
      <div className="relative aspect-[16/9] w-full">
        <img
          src={stateImages[state]}
          alt={state}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-3 text-white">
          <h3 className="text-lg font-semibold">{state}</h3>
          <p className="text-xs opacity-90">{region}</p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-4 space-y-2">
        <p className="text-gray-700 text-sm leading-snug">
          Explore the unique beauty and culture of this destination.
        </p>
        <div className="flex items-center text-gray-500 text-sm gap-1">
          <span className="material-icons text-base">event</span>
          Best time: Varies by season
        </div>
      </div>
    </div>
  ))}
</div>
  )
}
