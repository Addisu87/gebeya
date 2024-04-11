import { Heading } from "@medusajs/ui"
import Image from "next/image"

import { Image as MedusaImage } from "@medusajs/medusa"

import banner from "../../../../../public/ee1.jpg"
import ImageSlider from "@modules/products/components/image-slider"

type ImageGalleryProps = {
  urls?: MedusaImage[]
}

const Hero = ({ urls }: ImageGalleryProps) => {
  return (
    <div className="content-container mx-auto mt-1">
      <div className="h-[50vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
          <Heading
            level="h1"
            className="text-4xl leading-10 font-bold lg:text-5xl sm:max-w-xl max-w-xs bg-gradient-to-r from-green-500 
            from-20% via-yellow-500 via-40% to-red-500 to-90% inline-block text-transparent bg-clip-text"
          >
            Ethiopian Cultural Clothes
          </Heading>
        </div>

        {urls && urls.length > 0 ? (
          <ImageSlider urls={urls} />
        ) : (
          <Image
            loading="eager"
            src={banner}
            className="absolute inset-0 rounded-large object-cover object-center"
            alt="Product image"
            fill
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
          />
        )}
      </div>
    </div>
  )
}

export default Hero
