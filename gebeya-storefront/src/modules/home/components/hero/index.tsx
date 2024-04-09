import { Heading } from "@medusajs/ui"
import Image from "next/image"

import { Image as MedusaImage } from "@medusajs/medusa"

import logo from "../../../../../public/shopping.jpeg"

type ImageGalleryProps = {
  urls: MedusaImage[]
}

const Hero = ({ urls }: ImageGalleryProps) => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            E-commerce Starter Template
          </Heading>

          <Image
            loading="eager"
            src={logo}
            className="absolute inset-0 rounded-large object-cover object-center"
            alt="Product image"
            fill
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
          />
        </span>
      </div>
    </div>
  )
}

export default Hero
