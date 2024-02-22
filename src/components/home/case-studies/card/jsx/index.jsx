// IMPORTS ATOMS
import SecondaryButton from "@/atoms/buttons/secondary/jsx/index.jsx"
import Link from "@/atoms/links/jsx/index.jsx"
import PictureContainLeft from "@/atoms/picture/contain/left/jsx/index.jsx"

const CaseStudyCard = ( props ) => {

    // PROPS
    const {

        button_link,
        button_text,
        CDN,
        description,
        PROJECT,
        source,
        title

    } = props

    return(
        <section className="space-y-8 bg-slate-800/30 p-10 border border-slate-400/40 rounded-md">
            <div className="h-20 w-full pb-6">
                <PictureContainLeft
                    alternative_text=""
                    CDN={ CDN }
                    image_width="400"
                    PROJECT={ PROJECT }
                    source={ source }
                />
            </div>
            <h3 className="text-synetec_white font-poppins font-semibold text-4xl">{ title }</h3>
            <div className="pt-2">
                <p className="text-lg text-synetec_slate font-poppins">{ description }</p>
            </div>
            <Link href={ button_link } aria_label={ button_text }>
                <SecondaryButton>{ button_text }</SecondaryButton>
            </Link>
        </section>
    )

}

export default CaseStudyCard
