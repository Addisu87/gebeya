import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import Image from "next/image"
import { Facebook, X } from "@medusajs/icons"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

import banner from "../../../../../public/gebeya.png"

const socials = [
  { id: 1, icon: <Facebook />, url: "www.facebook.com" },
  { id: 2, icon: <X />, url: "www.twitter.com" },
  { id: 3, icon: <Facebook />, url: "www.youtube.com" },
  { id: 4, icon: <Facebook />, url: "www.instagram.com" },
]

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t border-ui-border-base w-full bg-[#ffd700]">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-8">
          <div className="flex space-x-2 justify-center items-center">
            <Image
              src={banner}
              alt="logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              Gebeya
            </LocalizedClientLink>
          </div>

          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {/* {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )} */}

            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Collections
                </span>
                <ul className="grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small">
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {socials && socials.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Social Links
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 md:grid-cols-2 gap-y-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (socials?.length || 0) > 2,
                    }
                  )}
                >
                  {/* <ul className="flex gap-2 text-ui-fg-subtle txt-small"> */}
                  {socials.map((social) => (
                    <li key={social.id}>
                      <LocalizedClientLink
                        href={social.url}
                        className="text-gray-400 h-4 w-4"
                      >
                        {social.icon}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex w-full mb-8 justify-between text-ui-fg-muted border-t border-ui-border-base">
          <Text className="txt-compact-small mt-1">
            © {new Date().getFullYear()} Gebeya Store. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
