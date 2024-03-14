// IMPORTS LAYOUTS
import Container from "@/layouts/container/jsx/index.jsx"

// IMPORTS COMPONENTS
import CaseStudyCard from "@/components/home/case-studies/card/jsx/index.jsx"
import Testimonial from "@/components/home/case-studies/testimonial/jsx/index.jsx"

// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index.jsx"
import SecondaryButton from "@/atoms/buttons/secondary/jsx/index.jsx"

// IMPORTS REACT CAROUSEL
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

// IMPORTS HERO ICONS
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

const CaseStudies = ( props ) => {

    // GET PROPS
    const {

        case_studies,
        CDN,
        data,
        PROJECT

    } = props

    return(
        <section className="relative h-full w-full">
            <section className="py-12 md:py-40 bg-cover bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${ CDN + PROJECT + "/" + data.cover + "?quality=80" })` }}>
                <Container>
                    <Carousel showThumbs={ false } showStatus={ false } showArrows={ true } autoPlay={ true } infiniteLoop={ true } showIndicators={ false } preventMovementUntilSwipeScrollTolerance={ true } swipeScrollTolerance={ 50 }
                        renderArrowPrev={( onClickHandler, hasPrev, label ) =>
                            hasPrev && (
                                    <button
                                        className="absolute mt-9 md:mt-0 top-0 left-0 md:-left-16 z-10 flex items-center h-full"
                                        onClick={ onClickHandler }
                                        title={ label }
                                        type="button"
                                    >
                                        <ChevronLeftIcon className="text-white size-8 md:size-12" />
                                    </button>
                        )}
                        renderArrowNext={( onClickHandler, hasNext, label ) =>
                            hasNext && (
                                <button
                                    className="absolute mt-9 md:mt-0 top-0 right-0 md:-right-16 z-10 flex items-center h-full"
                                    onClick={ onClickHandler }
                                    title={ label }
                                    type="button"
                                >
                                    <ChevronRightIcon className="text-white size-8 md:size-12" />
                                </button>
                        )}
                    >

                        {

                            case_studies.map( ( value, index ) => {

                                return(
                                    <section className="grid md:grid-cols-2 gap-20 md:gap-12" key={ index }>
                                        <section className="space-y-6 md:space-y-12">
                                            <h2 className="text-5xl md:text-6xl text-synetec_white font-poppins font-bold text-left">{ data.title }</h2>
                                            <p className="font-poppins font-light text-xl text-synetec_light_gray text-left">{ data.description }</p>
                                            <div className="pt-2">
                                                <Link href={ data.button_one_link } aria_label={ data.button_one_text }>
                                                    <SecondaryButton>{ data.button_one_text }</SecondaryButton>
                                                </Link>
                                            </div>
                                            <Testimonial
                                                CDN={ CDN }
                                                description={ value.testimonial_description }
                                                PROJECT={ PROJECT }
                                                short_description={ value.testimonial_short_description }
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
                    </Carousel>
                </Container>
            </section>
        </section>
    )

}

export default CaseStudies
