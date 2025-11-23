import * as React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./NavItem";
import { TestimonialCard } from "./Testimonial";
import { Footer } from "./FooterSection";


export function EfatLanding() {
  const testimonials = [
    {
      author: "David Martinez",
      role: "CEO of GreenTech Solutions",
      content: "As a business owner, I was looking for a tool that could guide us toward eco-friendly practices. EFAT not only assessed our environmental impact but also suggested practical, cost-effective measures to improve. It's like having a sustainability consultant available 24/7!"
    },
    {
      author: "Michael Brown",
      role: "Operations Manager",
      content: "I love the simplicity and effectiveness of EFAT. The website is user-friendly, and the visualizations make complex data easy to understand. It's a must-have for any industry that's serious about sustainability."
    }, {
        author: "Michael Brown",
        role: "Operations Manager",
        content: "I love the simplicity and effectiveness of EFAT. The website is user-friendly, and the visualizations make complex data easy to understand. It's a must-have for any industry that's serious about sustainability."
      }
  ];

  return (
    <main className="flex overflow-hidden flex-col">
      <Navbar />
      
      <section className="flex flex-col justify-center items-center mt-14  w-[100%] ">
        <div className="flex flex-col  gap-5  text-black max-md:max-w-full">
          <h1 className="text-4xl  font-semibold ">
            TEST YOUR BUSINESS PLAN WITH
          </h1>
          <h2 className="text-3xl self-center text-blue-950 ">
          ECO FEASIBILTY ASSESSMENT TEST
        </h2>
        </div>
        
      </section>

      <section className="z-10 self-center mb-0 w-[100%]">
        <div className="flex gap-5 justify-evenly">
          



                <aside className="w-[22%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c58b14d11e35c06adb6847e8dee8b595504c4eb503b6628eaf94d5f3c733b02?placeholderIfAbsent=true&apiKey=ae33dffc165f400db26c462d40abbf66"
                    alt="Environmental analysis illustration"
                    className="object-contain z-10 shrink-0 mt-12 max-w-full aspect-[0.89] w-[235px] max-md:mt-10 max-md:mr-0"
                  />
                </aside>
                


{/* middle picture */}

                <div className="flex relative flex-col grow items-center  px-20 pt-11 pb-80 text-xl text-white min-h-[426px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9f907cc193149e256ed5ef9d7e34900658ccb52295ccf955e03257c348d612e?placeholderIfAbsent=true&apiKey=ae33dffc165f400db26c462d40abbf66"
                      alt=""
                      className="object-cover absolute inset-0 size-full"
                    />
                    <Link to="/detail">
                    <button className="relative text-center self-center pt-3 pb-3 mr-10 max-w-full bg-lime-600 rounded-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[294px] max-md:px-5">
                      CHECK FOR YOUR STARTUP
                    </button>
                    </Link>
                  </div>




                
            
            
          
          <aside className="flex flex-col mb-7 ">
            <div className="flex relative flex-col self-stretch px-16 pt-11 pb-44 my-auto text-base text-black aspect-[1.03] max-md:px-5 max-md:pb-24 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f724df5fcc56408a607683165c97d9ee5ce237259fc8358da6dc7a81790dc43?placeholderIfAbsent=true&apiKey=ae33dffc165f400db26c462d40abbf66"
                alt=""
                className="object-cover absolute inset-0 size-full"
              />
              
            </div>
          </aside>


        </div>
      </section>

{/* 
      testimonial */}

      <section className="mt-0 w-full ">
        <div className="flex justify-center font-bold text-7xl text-[#637845]">
        <h1>Testimonials</h1>
        </div>
              <div className="flex flex-wrap p-5">
                
               
                  {testimonials.map((testimonial, index) => (
                      <TestimonialCard author={testimonial.author} role={testimonial.role} content={testimonial.content} />
                    
                  ))}
                
        
            
          
        </div>
      </section>

      <section id="about" className="flex flex-col self-center  mt-20 w-full bg-white max-w-[1278px] rounded-[30px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col pt-4 ml-16 max-w-full text-6xl font-bold text-sky-900 w-[753px] max-md:text-4xl">
          <div className="z-10 shrink-0 mt-4 border-black border-solid border-[5px] h-[5px] w-[107px]" />
          <h2 className="self-end mt-0 max-md:text-4xl">About us</h2>
        </div>
        <article className="flex z-10 flex-col px-16 mt-0 text-3xl text-center text-black max-md:px-5 max-md:max-w-full">
          <div className="shrink-0 w-1.5 border-black border-solid border-[5px] h-[101px]" />
          <div className="flex z-10 flex-col self-end mt-0 w-full max-w-[1070px] max-md:max-w-full">
            <div className="flex flex-wrap gap-10 items-start max-md:max-w-full">
              <p className="flex-auto self-start w-[1010px] max-md:max-w-full">
                Welcome to the Eco Feasibility Assessment Tool (EFAT) – your trusted partner in achieving environmental sustainability. Our mission is to empower businesses, industries, and individuals with the tools and insights needed to evaluate their environmental impact and transition toward eco-friendly practices.
                <br />
                At EFAT, we believe that sustainability is not just a choice—it's a responsibility. With a user-friendly platform backed by data-driven analysis, we help companies determine whether their operations and projects are environmentally "green." By identifying potential areas for improvement, we guide organizations to align with global sustainability standards and reduce their carbon footprint.
              </p>
              <div className="shrink-0 self-end mt-96 border-black border-solid border-[5px] h-[101px] w-[5px] max-md:mt-10" />
            </div>
            <div className="shrink-0 self-end h-1.5 border-black border-solid border-[5px] w-[107px]" />
          </div>
        </article>
      </section>

      <Footer />
    </main>
  );
}