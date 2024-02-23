export const homeAPI = async ( environment, ENDPOINT ) => {

    // NETWORK CALL TO GET DATA
    const network_data = await fetch( ENDPOINT + "/home" )
    const data_json = await network_data.json()

    const { home, services, studies, meta } = data_json.data

    let home_data = {

        // HOME PROPS
        award_winning : "",
        book_a_conversation : "",
        call_description_one : "",
        call_description_three : "",
        call_description_two : "",
        case_studies : "",
        contact_us : "",
        hero : "",
        key_services : "",
        trusted_companies : ""

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
        else if ( data.slug === "case-studies" )
            home_data.case_studies = data
        else if ( data.slug === "call-description-one" )
            home_data.call_description_one = data
        else if ( data.slug === "call-description-two" )
            home_data.call_description_two = data
        else if ( data.slug === "call-description-three" )
            home_data.call_description_three = data
        else if ( data.slug === "contact-us" )
            home_data.contact_us = data

    })

    return { home_data, services, studies, meta }

}
