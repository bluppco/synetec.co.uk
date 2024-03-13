// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index.jsx"
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

const UnorderedList = ( props ) => {

    // GET PROPS
    const { header_data } = props

    return(
        <ul className="flex">
        {

            header_data.map( ( item, index ) => {

                return (
                    <li key={ index } className="relative font-poppins font-medium text-white hover:text-synetec_orang transition-all duration-200 text-sm flex items-center gap-1 group cursor-pointer py-10 px-3">
                        <a href={ "/" + item.data.slug } aria-label={"explore " + item.data.title }>{ item.data.title }</a>
                        {

                            item.data.has_dropdown &&
                            <div>
                                <div className="w-5 aspect-square">
                                    <PictureInternalContain
                                        alternative_text="dropdown menu icon"
                                        source="/icons/dropdown.svg"
                                    />
                                </div>
                                <div className={` ${ item.data.title === "Services" ? "-left-44 w-[1020px]" : "-left-20 w-[420px]" } hidden group-hover:block group-hover:flex-col absolute bg-white z-20 top-20 rounded-md gap-2 transition-all duration-1000 ease-in `}>
                                    {

                                        item.data.title === "Services" &&

                                        <div className="grid grid-cols-3 gap-4 p-8">
                                            {

                                                item.data.items.map( ( sub_item, sub_item_index ) => {

                                                    return(
                                                        <div key={ sub_item_index } className="p-2 rounded hover:bg-zinc-50">
                                                            <Link href={ "/" + item.data.slug + "/" + sub_item.slug } aria_label={ "explore" + sub_item.title }>
                                                                <div className="flex items-center gap-4">
                                                                    <div className="p-2 bg-zinc-50 rounded-full border border-gray-200 h-fit">
                                                                        <div className="size-8">
                                                                            <PictureInternalContain
                                                                                alternative_text={ sub_item.title }
                                                                                source={ "/icons/" + sub_item.src }
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <p className="font-poppins font-semibold text-[#00104b] text-lg">{ sub_item.title }</p>
                                                                        <p className="text-sm text-[#00104b]/50 font-poppins">{ sub_item.description }</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    )

                                                })

                                            }
                                            <div />
                                            <div />
                                            <div className="pt-4">
                                                <Link href={ item.data.services_button_link } aria_label={ item.data.services_button_text }>
                                                    <p className="font-poppins font-semibold text-lg text-[#00104b]">{ item.data.services_button_text }</p>
                                                </Link>
                                            </div>
                                            <p className="font-poppins font-semibold uppercase text-xs text-synetec_zinc tracking-widest">Technologies</p>
                                            <div/>
                                            <div/>
                                            {

                                                item.data.technologies.map( ( sub_item, sub_item_index ) => {

                                                    return(
                                                        <div key={ sub_item_index } className="pt-6">
                                                            <Link href={ "/technology/" + sub_item.slug } aria_label={ "explore" + sub_item.title }>
                                                                <div className="flex items-center gap-4">
                                                                    <div>
                                                                        <p className="font-poppins font-semibold text-[#00104b] text-lg">{ sub_item.title }</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    )

                                                })

                                            }
                                            <div className="pt-4">
                                                <Link href={ item.data.technologies_button_link } aria_label={ item.data.technologies_button_text }>
                                                    <p className="font-poppins font-semibold text-lg text-[#00104b]">{ item.data.technologies_button_text }</p>
                                                </Link>
                                            </div>
                                        </div>

                                    }
                                    {

                                        item.data.title === "Why Partner with us" &&
                                        // || item.data.title === "Resource hub"
                                        <div className="space-y-6 p-10">
                                            {

                                                item.data.items.map( ( sub_item, sub_item_index ) => {

                                                    return(
                                                        <div key={ sub_item_index } className="p-2 rounded hover:bg-zinc-50">
                                                            <Link href={ "/" + item.data.slug + "/" + sub_item.slug } aria_label={ "explore" + sub_item.title }>
                                                                <div className="flex items-center gap-4">
                                                                    <div className="p-2 bg-zinc-50 rounded-full border border-gray-200 h-fit">
                                                                        <div className="size-8">
                                                                            <PictureInternalContain
                                                                                alternative_text={ sub_item.title }
                                                                                source={ "/icons/" + sub_item.src }
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <p className="font-poppins font-semibold text-[#00104b] text-lg">{ sub_item.title }</p>
                                                                        <p className="text-sm text-[#00104b]/50 font-poppins">{ sub_item.description }</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    )

                                                })

                                            }
                                            <div className="pt-4">
                                                <p className="font-poppins font-semibold text-lg text-[#00104b]">{ item.data.button_text }</p>
                                            </div>
                                        </div>

                                    }
                                    {

                                        item.data.title === "Resource hub" &&
                                        <div className="space-y-6 p-10">
                                            {

                                                item.data.items.map( ( sub_item, sub_item_index ) => {

                                                    return(
                                                        <div key={ sub_item_index } className="p-2 rounded hover:bg-zinc-50">
                                                            <Link href={ "/" + item.data.slug + "/" + sub_item.slug } aria_label={ "explore" + sub_item.title }>
                                                                <div className="flex items-center gap-4">
                                                                    <div className="p-2 bg-zinc-50 rounded-full border border-gray-200 h-fit">
                                                                        <div className="size-8">
                                                                            <PictureInternalContain
                                                                                alternative_text={ sub_item.title }
                                                                                source={ "/icons/" + sub_item.src }
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <p className="font-poppins font-semibold text-[#00104b] text-lg">{ sub_item.title }</p>
                                                                        <p className="text-sm text-[#00104b]/50 font-poppins">{ sub_item.description }</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    )

                                                })

                                            }
                                        <div className="pt-4">
                                            <p className="font-poppins font-semibold text-lg text-[#00104b]">{ item.data.button_text }</p>
                                        </div>
                                    </div>

                                    }
                                </div>
                            </div>

                        }
                    </li>
                )

            })

        }
    </ul>
    )

}

export default UnorderedList
