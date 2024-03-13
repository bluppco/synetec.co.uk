// IMPORTS REACT
import { useState } from "react"

// IMPORTS SONNER
import { Toaster, toast } from "sonner"

// IMPORTS REACT TURNSTILE
import { Turnstile } from '@marsidev/react-turnstile'

const ContactForm = ( props ) => {

    // GET PROPS
    const {

        cy,
        type

    } = props

    const [ turnstileToken, updateTurnstileToken ] = useState("")
    const [ state, updateState ] = useState({

        business_email: "",
        company_name: "",
        first_name: "",
        last_name: "",
        processing: false,
        processed: false,

    })
    const onChangeValue = ( event ) => {

        updateState({

            ...state,
            [ event.target.name]: event.target.value

        })

    }
    const triggerFormPOST = async () => {

        if( state.business_email !== "" && state.company_name !== "" && state.first_name !== "" && state.last_name !== "" && turnstileToken !== "" ){

            updateState({

                ...state,
                processing: true

            })
            const body = JSON.stringify({

                business_email: state.business_email,
                company_name: state.company_name,
                first_name: state.first_name,
                last_name: state.last_name,
                type: type,
                turnstileToken: turnstileToken,

            })
            const url = "https://synetec.api.blupp.co/contact"
            const options = {

                body: body,
                method: "POST",
                headers: {

                    "Content-Type": "application/json"

                }

            }
            const response = await fetch( url, options )
            if( response.status === 201 ){

                toast.success("We will contact you shortly!")
                updateState({

                    ...state,
                    business_email: "",
                    company_name: "",
                    first_name: "",
                    last_name: "",
                    processing: false,
                    processed: true

                })

            } else {

                updateState({

                    ...state,
                    processing: false

                })

            }

        } else {

            toast.error('Invalid request information')

        }

    }

    return (
        <section className="py-6">
            <div className="space-y-2">
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                        <input
                            className="h-12 w-full border-[1.5px] border-[#d7d7d7] rounded px-3"
                            name="first name"
                            onChange={ ( event ) => onChangeValue( event ) }
                            placeholder="First Name *"
                            type="text"
                            value={ state.name }
                        />
                        <input
                            className="h-12 w-full border-[1.5px] border-[#d7d7d7] rounded px-3"
                            name="last name"
                            onChange={ ( event ) => onChangeValue( event ) }
                            placeholder="Last Name *"
                            type="text"
                            value={ state.name }
                        />
                    </div>
                    <input
                        className="h-12 w-full border-[1.5px] border-[#d7d7d7] rounded px-3"
                        name="business email"
                        onChange={ ( event ) => onChangeValue( event ) }
                        placeholder="Business Email *"
                        type="text"
                        value={ state.name }
                    />
                    <input
                        className="h-12 w-full border-[1.5px] border-[#d7d7d7] rounded px-3"
                        name="company name"
                        onChange={ ( event ) => onChangeValue( event ) }
                        placeholder="Company Name *"
                        type="text"
                        value={ state.name }
                    />
                </div>
                <Turnstile
                    className="w-full bg-zinc-200 rounded hidden"
                    onSuccess={ ( token ) => updateTurnstileToken( token ) }
                    siteKey="0x4AAAAAAAOfA3BnLZ8S-_Kf"
                />
                <div className="pt-1 md:pt-2">
                    {

                        state.processing &&
                        <button className="h-12 flex items-center px-4 text-synetec_white bg-synetec_orange hover:bg-synetec_dark_orange border-2 border-synetec_orange hover:border-synetec_dark_orange transition-all duration-200 text-lg font-semibold" data-cy={ cy } id={ cy }>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                        </button>

                    }
                    {

                        !state.processing &&
                        <div className="flex justify-center">
                            <button className="h-12 flex items-center px-4 text-synetec_white bg-synetec_orange hover:bg-synetec_dark_orange border-2 border-synetec_orange hover:border-synetec_dark_orange transition-all duration-200 text-lg font-semibold" data-cy={ cy } id={ cy } onClick={ () => triggerFormPOST( state ) }>Contact Us</button>
                        </div>
                    }
                    {

                        state.processed &&
                        <section className="mt-4">
                            <p className="font-semibold">Thanks for contacting us. We will get back to you soon.</p>
                        </section>
                    }
                </div>
                <Toaster />
            </div>
        </section>

    )

}

export default ContactForm
