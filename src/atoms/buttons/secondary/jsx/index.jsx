const SecondaryButton = ( props ) => {

    return(
        <button className="h-16 flex justify-center items-center px-8 rounded text-synetec_white bg-transparent border-2 border-synetec_orange hover:bg-synetec_orange transition-all duration-200 text-lg font-semibold w-full md:w-fit">
            { props.children }
        </button>

    )

}

export default SecondaryButton
