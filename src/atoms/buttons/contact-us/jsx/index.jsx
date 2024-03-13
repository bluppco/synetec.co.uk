const ContactUsButton = ( props ) => {

    return(
        <button className="h-14 flex items-center px-6 rounded text-synetec_white bg-transparent border-2 border-synetec_orange hover:bg-black transition-all duration-200 text-lg font-semibold">
            { props.children }
        </button>

    )

}

export default ContactUsButton
