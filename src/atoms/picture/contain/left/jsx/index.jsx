const PictureContainLeft = ( props ) => {

    const {

        alternative_text,
        CDN,
        image_width,
        PROJECT,
        source

    } = props

    return(
        <picture className="w-full h-full">
            <source media="(max-width: 375px)" srcSet={ CDN + PROJECT + "/" + source + "?height=300&quality=80" } />
            <source media="(max-width: 640px)" srcSet={ CDN + PROJECT + "/" + source + "?height=400&quality=80" } />
            <img
                src={ CDN + PROJECT + "/" +  source + "?quality=80" + "&width=" + image_width }
                alt={ alternative_text }
                className="w-full h-full object-contain object-left"
            />
        </picture>
    )

}

export default PictureContainLeft
