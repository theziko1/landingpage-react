import React from 'react'
import mobile from "../assets/images/mobile-logo.svg"
import maecenas from "../assets/images/maecenas.svg"


const Product = () => {
  return (
    <div>
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="product">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
                <img src={mobile} alt="mobile" />
            </div>
            <div className="md:w-3/5 mx-auto ">
                <h2 className="text-4xl text-NeutralDGrey font-semibold mb-4 md:w-4/5">How to design your site footer like we did</h2>
                <p className="md:w-3/4 text-sm text-NeutralDGrey mb-8">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <button className="btn">Learn more</button>                
            </div>
        </div>
    </div>
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-NeutralSilver py-16" id="testimonial">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:w-1/3">
              <img src={maecenas} alt="maecenas" />
            </div>
           
           <div className="md:w-2/3 mx-auto">
            <div>
                <p className="md:w-4/5 text-sm text-NeutralGrey mb-8 leading-6">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <h5 className="text-BrandPrimary text-xl font-semibold mb-2">Tim Smith</h5>
                <p className="text-base text-NeutralGrey mb-8">British Dragon Boat Racing Association</p>
                    <div>
                       <div className="flex items-center gap-8 flex-wrap">
                         <img src="/src/assets/images/logosframe.svg" alt="logoframe" />
                         <div className="flex items-center gap-8 ">
                            <a href="/" className="font-bold text-BrandPrimary hover:text-neutral-700">Meet all customers
                            <svg className="inline-block ml-2" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399" stroke="#4CAF4F" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            </a>
                         </div>
                       </div> 
                    </div>
            </div>
           </div> 
          </div>
    </div>
</div>
  )
}

export default Product