// IMPORTS COMPONENTS
import VideoModal from "@/components/common/modal/video/index.jsx"

// IMPORTS ATOMS
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

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

        open_modal: false

    })
    const closeModal = () => {

        updateState({

            open_modal: false

        })

    }

    const openModal = () => {

        updateState({

            open_modal: true

        })

    }

    return(
        <>
            <div className="px-2 md:px-0 w-fit" onClick={ () => openModal() }>
                <div class="size-16">
                    <PictureInternalContain
                        alternative_text="play icon"
                        source="/images/play.png"
                    />
                </div>
            </div>
            <VideoModal
                close={ ( event ) => closeModal( event ) }
                open={ state.open_modal }
            />
        </>
    )

}

export default PlayIcon
