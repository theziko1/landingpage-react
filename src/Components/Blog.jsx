import React from 'react'

const Blog = () => {
    const blogs = [
          {id : 1, title : "Creating Streamlined Safeguarding Processes with OneRen", image : "/src/assets/images/image1.svg"},
          {id : 1, title : "What are your safeguarding responsibilities and how can you manage them?", image : "/src/assets/images/image2.svg"},
          {id : 1, title : "Revamping the Membership Model with Triathlon Australia", image : "/src/assets/images/image3.svg"},
    ];
  return (
    <div className="px-4 lg-px-14 max-w-screen-2xl mx-auto my-12" id="faq">
         <div className="text-center md:w-1/2 mx-auto ">
            <h2 className="text-4xl text-NeutralDGrey font-semibold mb-4 ">Caring is the new marketing</h2>
            <p className="md:w-3/4 text-sm text-NeutralDGrey mb-8 mx-auto">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                    
         </div>
         <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justtify-between">
            {
                blogs.map(blog => <div key={blog.id} className="mx-auto relative cursor-pointer mb-12">
                <img src={blog.image} alt="image" className="hover:scale-95 transition-all duration-300" />
                  <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto  absolute left-0 right-0 -bottom-12">
                    <h3 className="mb-3 font-semibold text-NeutralGrey">{blog.title}</h3>
                    <div className="flex items-center justify-center gap-8 ">
                            <a href="/" className="font-bold text-BrandPrimary hover:text-neutral-700">Readmore
                            <svg className="inline-block ml-2" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399" stroke="#4CAF4F" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            </a>
                   </div>
                  </div>
                </div>)
            }
         </div>
    </div>
  )
}

export default Blog