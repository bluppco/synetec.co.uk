// IMPORTS ATOMS
import PictureInternal from "@/atoms/picture/internal/jsx/index.jsx"

// IMPORTS MODAL FROM REACT
import Modal from "react-modal"

// IMPORTS CUSTOM MODAL STYLING
import { modalStyling } from "@/components/common/modal/styling/index.jsx"

const VideoModal = ( props ) => {

    // GET PROPS
    const {

        close,
        open

    } = props

    return (
        <Modal
            isOpen={ open }
            onRequestClose={ close }
            style={ modalStyling }
        >
            <div className="w-full md:w-[970px] h-full md:h-[630px] md:p-4 relative z-[100]">
                <div className="absolute -top-[18px] -right-[18px] md:-top-2 md:-right-3">
                    <div className="hover:bg-zinc-200 p-1 cursor-pointer" onClick={ () => close() }>
                        <div className="w-3 md:w-4 aspect-square">
                            <PictureInternal
                                alternative_text="cross icon"
                                source="/icons/cross.svg"
                            />
                        </div>
                    </div>
                </div>
                <div className="h-[420px] w-full md:h-[600px] md:w-[940px]">
                    <iframe
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                        frameborder="0"
                        height="100%"
                        src="https://www.youtube.com/embed/xphPqv5XjxY?si=BhU46FugmeumohRP"
                        title="YouTube video player"
                        width="100%"
                    >
                    </iframe>
                </div>
            </div>
        </Modal>
    )

}

export default VideoModal
