const CaseStudyButton = ( props ) => {

    return(
        <button className="w-full md:w-fit text-center h-16 flex items-center justify-center px-8 rounded text-synetec_white bg-transparent border-2 border-synetec_orange hover:bg-synetec_orange transition-all duration-200 text-lg font-semibold">
            { props.children }
        </button>

    )

}

export default CaseStudyButton
