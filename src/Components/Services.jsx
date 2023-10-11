import React from 'react'
import clients from "../assets/images/clientsLogos.svg";

const Services = () => {
  const services = [
    {id : 1, title : "Membership Organisations", description : "Our membership management software provides full automation of membership renewals and payments" , image :"/src/assets/images/IconOne.svg" },
    {id : 2, title : "National Associations", description : "Our membership management software provides full automation of membership renewals and payments" , image :"/src/assets/images/IconTwo.svg" },
    {id : 3, title : "Clubs And Groups", description : "Our membership management software provides full automation of membership renewals and payments" , image :"/src/assets/images/IconThree.svg"},
  ]
  
    return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
        <div className="text-center my-8">
            <h2 className="text-4xl text-NeutralDGrey text-semibold mb-2">Our clients</h2>
            <p className="text-neutralDGrey">We have been working with some Fortune 500+ clients </p>
            <div className="my-12 flex flex-wrap justify-between items-center gap-8">
                <img src={clients} alt="clients" />
            </div>

            <div>
            <h2 className="text-4xl text-NeutralDGrey text-semibold mb-3">Manage your entire community in a single system</h2>
            <p className="text-neutralDGrey">Who is Nextcent suitable for?</p>
            </div>
            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
                {
                    services.map(service => <div key={service.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer
                    hover:translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full">
                        <div>
                            <div className="h-14 w-14 mx-auto mb-4 rounded-tl-3xl rounded-br-3xl "><img src={service.image} alt="services" /></div>
                            <h4 className="text-2xl font-bold text-NeutralDGrey mb-2 px-2">{service.title}</h4>
                            <p className="text-sm text-NeutralDGrey">{service.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </div>
  )
}

export default Services