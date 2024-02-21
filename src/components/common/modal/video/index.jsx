// IMPORTS MODAL FROM REACT
import Modal from "react-modal"

// IMPORTS CUSTOM MODAL STYLING
import { modalStyling } from "@/components/common/modal/styling/index.jsx"
import PictureInternal from "@/atoms/picture/internal/jsx"

const VideoModal = ( props ) => {

    const { open, close } = props

    return (
        <Modal
            isOpen={ open }
            onRequestClose={ close }
            style={ modalStyling }
        >
            <div className="w-full md:w-[970px] h-full md:h-[630px] md:p-4 relative">
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
                <div className="h-full w-full">
                <iframe
                    width="940"
                    height="600"
                    src="https://www.youtube.com/embed/xphPqv5XjxY?si=BhU46FugmeumohRP"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
                </div>
            </div>
        </Modal>
    )

}

export default VideoModal
