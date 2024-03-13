// IMPORTS COMPONENTS
import HeaderMobile from "@/components/common/header/mobile-header/index.jsx"
import UnorderedList from "../unordered-list/jsx/index.jsx"

// IMPORTS ATOMS
import ContactUsButton from "@/atoms/buttons/contact-us/jsx/index.jsx"
import Link from "@/atoms/links/jsx/index.jsx"
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

// IMPORTS REACT
import { useState, useEffect } from "react"

// IMPORTS COLLECTION
import { getCollection } from "astro:content"

// IMPORTS HEADER COLLECTION
let header_data = await getCollection("header")
header_data = header_data.sort((a, b) => a.data.order - b.data.order)

const Header = ( props ) => {

    const [ isScrolled, setIsScrolled ] = useState( false )

    useEffect(() => {

        const handleScroll = () => {

          setIsScrolled( window.scrollY > 20 )

        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

      }, [])

    return(
        <>
            <header className={` ${ isScrolled ? "shadow-2xl border-b border-gray-50" : "" } h-24 hidden md:flex items-center fixed z-50 w-full bg-synetec_black top-10 `}>
                <nav className="flex items-center justify-between h-full w-full container max-w-8xl mx-auto">
                    <section className="flex items-center gap-12">
                        <Link href="/" aria-label="logo">
                            <div className="h-10 w-full">
                                <PictureInternalContain
                                    alternative_text="synetec logo"
                                    source="/logo/synetec-logo.svg"
                                />
                            </div>
                        </Link>
                        <div className="flex gap-10 items-center">
                            <UnorderedList
                                header_data={ header_data }
                            />
                        </div>
                    </section>
                    <section className="flex items-center gap-8 relative z-50">
                        <div>
                            <span className="text-xs text-white">+44 (0) 2081 444 206</span>
                        </div>
                        <div className="flex justify-self-end w-fit">
                            <Link href="/contact" aria-label="Contact Us">
                                <ContactUsButton>Contact Us</ContactUsButton>
                            </Link>
                        </div>
                    </section>
                </nav>
            </header>
            <HeaderMobile />
        </>
    )

}

export default Header
