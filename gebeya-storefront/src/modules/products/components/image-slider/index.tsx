"use client"

import { useEffect, useState } from "react"
import type SwiperType from "swiper"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { ChevronLeft, ChevronRight } from "@medusajs/icons"
import { clx } from "@medusajs/ui"
import "swiper/css"
import "swiper/css/pagination"

import { Image as MedusaImage } from "@medusajs/medusa"
import Image from "next/image"

type ImageGalleryProps = {
  urls: MedusaImage[]
}

const ImageSlider = ({ urls }: ImageGalleryProps) => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Remove hydration error
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: activeIndex === (urls.length ?? 0) - 1,
  })

  useEffect(() => {
    swiper?.on("slideChange", ({ activeIndex }) => {
      setActiveIndex(activeIndex)
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: activeIndex === (urls.length ?? 0) - 1,
      })
    })
  }, [swiper, urls])

  const activeStyles =
    "active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full border-2 bg-white border-zinc-300"
  const inactiveStyles = "hidden text-gray-400"

  return (
    <div className="group relative aspect-[29/32] overflow-hidden rounded-large">
      <div className="absolute z-10 inset-0 opacity-0 group-hover:opacity-100 transition">
        <button
          onClick={(e) => {
            e.preventDefault()
            swiper?.slideNext()
          }}
          className={clx(activeStyles, "right-3 transition", {
            [inactiveStyles]: slideConfig.isEnd,
            "hover:bg-primary-300 text-primary-800 opacity-100":
              !slideConfig.isEnd,
          })}
          aria-label="next image"
        >
          <ChevronRight className="h-4 w-4 text-zinc-700 items-center justify-center" />{" "}
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            swiper?.slidePrev()
          }}
          className={clx(activeStyles, "left-3 transition", {
            [inactiveStyles]: slideConfig.isBeginning,
            "hover:bg-primary-300 text-primary-800 opacity-100":
              !slideConfig.isBeginning,
          })}
          aria-label="previous image"
        >
          <ChevronLeft className="h-4 w-4 text-zinc-700 items-center justify-center" />{" "}
        </button>
      </div>

      <Swiper
        pagination={{
          renderBullet: (_, className) => {
            return `<span class="rounded-full transition ${className}"></span>`
          },
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={50}
        modules={[Pagination]}
        slidesPerView={1}
        className="h-full w-full"
      >
        {isMounted &&
          urls?.map((image, index) => (
            <SwiperSlide key={image.id} className="relative h-full w-full">
              <Image
                loading="eager"
                priority={index <= 2 ? true : false}
                src={image.url}
                className="absolute inset-0 rounded-large object-cover object-center"
                alt={`Product image ${index + 1}`}
                fill
                sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default ImageSlider
