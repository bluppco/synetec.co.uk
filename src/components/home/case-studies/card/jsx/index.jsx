// IMPORTS ATOMS
import CaseStudyButton from "@/atoms/buttons/case-study/jsx/index.jsx"
import Link from "@/atoms/links/jsx/index.jsx"
import PictureContainLeft from "@/atoms/picture/contain/left/jsx/index.jsx"

const CaseStudyCard = ( props ) => {

    // GET PROPS
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
        <section className="space-y-8 bg-white/[0.04] p-10 border border-[#505050] shadow-2xl shadow-[#1c8cde24] rounded-md h-full">
            <div className="h-20 w-full pb-6">
                <PictureContainLeft
                    alternative_text={ title }
                    CDN={ CDN }
                    image_width="400"
                    PROJECT={ PROJECT }
                    source={ source }
                />
            </div>
            <h3 className="text-synetec_white font-poppins font-semibold text-4xl text-left leading-snug">{ title }</h3>
            <div className="pt-2">
                <p className="text-lg text-synetec_slate font-poppins text-left">{ description }</p>
            </div>
            <Link href={ button_link } aria_label={ button_text }>
                <div className="w-full">
                    <CaseStudyButton>{ button_text }</CaseStudyButton>
                </div>
            </Link>
        </section>
    )

}

export default CaseStudyCard
