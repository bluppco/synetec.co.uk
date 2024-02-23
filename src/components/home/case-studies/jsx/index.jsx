// IMPORTS LAYOUTS
import Container from "@/layouts/container/jsx/index.jsx"

// IMPORTS COMPONENTS
import CaseStudyCard from "@/components/home/case-studies/card/jsx/index.jsx"
import Testimonial from "@/components/home/case-studies/testimonial/jsx/index.jsx"

// IMPORTS ATOMS
import SecondaryButton from "@/atoms/buttons/secondary/jsx/index.jsx"
import Link from "@/atoms/links/jsx/index.jsx"

// IMPORTS REACT CAROUSEL
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

const CaseStudies = ( props ) => {

    // PROPS
    const {

        case_studies,
        CDN,
        data,
        PROJECT

    } = props

    return(
        <section className="relative h-full w-full">
            <Carousel showThumbs={ false } showStatus={ false } showArrows={ true } autoPlay={ true } infiniteLoop={ true } showIndicators={ false }
                renderArrowPrev={( onClickHandler, hasPrev, label ) =>
                    hasPrev && (
                            <button
                                type="button"
                                onClick={ onClickHandler }
                                title={ label }
                                className="absolute top-0 left-1 z-10 flex items-center h-full"
                            >
                                <ChevronLeftIcon className="text-white w-12 h-12"/>
                            </button>
                )}
                renderArrowNext={( onClickHandler, hasNext, label ) =>
                    hasNext && (
                        <button
                            type="button"
                            onClick={ onClickHandler }
                            title={ label }
                            className="absolute top-0 right-1 z-10 flex items-center h-full"
                        >
                            <ChevronRightIcon className="text-white w-12 h-12"/>
                        </button>
                )}
            >
                <section className="py-40 bg-cover" style={{ backgroundImage: `url(${ CDN + PROJECT + "/" + data.cover + "?quality=80" })` }}>
                    <Container>
                        {

                            case_studies.map( ( value, index ) => {

                                return(
                                    <section className="grid grid-cols-2 gap-12" key={ index }>
                                        <section className="space-y-6">
                                            <h2 className="text-6xl text-synetec_white font-poppins font-bold text-left">{ data.title }</h2>
                                            <p className="font-poppins font-light text-xl text-synetec_light_gray text-left">{ data.description }</p>
                                            <div className="pt-10">
                                                <Link href={ data.button_one_link } aria_label={ data.button_one_text }>
                                                    <SecondaryButton>{ data.button_one_text }</SecondaryButton>
                                                </Link>
                                            </div>
                                            <Testimonial
                                                short_description={ value.testimonial_short_description }
                                                description={ value.testimonial_description }
                                                CDN={ CDN }
                                                PROJECT={ PROJECT }
                                                source={ value.author_image }
                                            />
                                        </section>
                                        <CaseStudyCard
                                            button_link={ value.button_link }
                                            button_text={ value.button_text }
                                            CDN={ CDN }
                                            description={ value.description }
                                            PROJECT={ PROJECT }
                                            source={ value.cover }
                                            title={ value.title }
                                        />
                                    </section>
                                )

                            })

                        }
                    </Container>
                </section>
            </Carousel>
        </section>
    )

}

export default CaseStudies
