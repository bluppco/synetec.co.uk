// IMPORTS COMPONENTS
import VideoModal from "@/components/common/modal/video/index.jsx"

// IMPORTS ATOMS
import PictureContain from "@/atoms/picture/contain/jsx/index.jsx"

// IMPORTS REACT
import React from "react"

const PlayIcon = ( props ) => {

    // GET PROPS
    const {

        CDN,
        image,
        PROJECT,


     } = props

    const [ state, updateState ] = React.useState({

        value: null,
        open_modal: false

    })
    const closeModal = () => {

        updateState({

            value: null,
            open_modal: false

        })

    }

    const openModal = () => {

        updateState({

            value: null,
            open_modal: true

        })

    }

    return(
        <div className="px-2 md:px-0 w-fit" onClick={ () => openModal() }>
            <div class="size-16">
                <PictureContain
                    alternative_text="play icon"
                    CDN={ CDN }
                    image_width="440"
                    PROJECT={ PROJECT }
                    source={ image }
                />
            </div>
            <VideoModal
                close={ () => closeModal() }
                open={ state.open_modal }
                value={ state.value }
            />
        </div>
    )

}

export default PlayIcon
