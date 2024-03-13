// IMPORTS ATOMS
import Picture from "@/atoms/picture/jsx/index.jsx"
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

const Testimonial = ( props ) => {

    // GET PROPS
    const {

        CDN,
        description,
        PROJECT,
        short_description,
        source

    } = props

    return(
        <section className="space-y-6">
            <div className="grid grid-cols-3 gap-6">
                <div className="h-60 w-full bg-synetec_slate p-2">
                    <Picture
                        alternative_text={ short_description }
                        CDN={ CDN }
                        image_width="400"
                        PROJECT={ PROJECT }
                        source={ source[0].file }
                    />
                </div>
                <div className="col-span-2 flex flex-col gap-4 justify-center">
                    <div className="size-14">
                        <PictureInternalContain
                            alternative_text="double quotes"
                            source="/icons/double-quote.svg"
                        />
                    </div>
                    <p className="text-2xl font-poppins font-medium italic text-synetec_light_gray text-left">{ short_description }</p>
                </div>
            </div>
            <p className="text-lg text-synetec_slate font-poppins text-left">{ description }</p>
        </section>
    )

}

export default Testimonial
