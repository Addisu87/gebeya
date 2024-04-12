import { Heading } from "@medusajs/ui"

import Image from "next/image"

import banner from "../../../../../public/ee1.jpg"

const Hero = () => {
  return (
    <div className="content-container mx-auto mt-1 drop-shadow-md">
      <div className="h-[50vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle ">
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-24 gap-6">
          <Heading
            level="h1"
            className="text-4xl leading-10 font-bold lg:text-5xl sm:max-w-xl max-w-xs bg-gradient-to-r from-green-500 
            from-20% via-yellow-500 via-40% to-red-500 to-90% inline-block text-transparent bg-clip-text"
          >
            Ethiopian Cultural Clothes
          </Heading>
        </div>

        <Image
          src={banner}
          alt="Hero Image"
          fill
          className="absolute inset-0 rounded-large object-center object-fill"
        />
      </div>
    </div>
  )
}

export default Hero
