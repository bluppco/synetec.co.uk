export const homeAPI = async ( environment, ENDPOINT ) => {

    // NETWORK CALL TO GET DATA
    const network_data = await fetch( ENDPOINT + "/home" )
    const data_json = await network_data.json()

    const { home, services, case_studies, meta } = data_json.data

    let home_data = {

        // HOME PROPS
        hero : "",
        trusted_companies : "",
        award_winning : "",
        key_services : "",
        book_a_conversation : ""

    }
    home.map( ( data ) => {

        if( data.slug === "hero" )
            home_data.hero = data
        else if( data.slug === "trusted-companies" )
            home_data.trusted_companies = data
        else if ( data.slug === "award-winning" )
            home_data.award_winning = data
        else if ( data.slug === "key-services" )
            home_data.key_services = data
        else if ( data.slug === "book-a-conversation" )
            home_data.book_a_conversation = data

    })

    return { home_data, services, case_studies, meta }

}
