import React from 'react'
import { MdCreditScore } from 'react-icons/md'
import { machine_sittingon, machine_dried, machine_seethrough, machine_womanwash, machine_control, machine_closewash, machine_cleaning, machine_maleicon, machine_delivery, machine_filling, machine_washingclosed, maching_clothefold, machine_washinner, machine_femaleicon } from '../assets/images'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

export default function About() {
  return (
    <main className="bg-white">
      <section className="py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center gap-6">
          <aside className="flex-1 relative">
            <img data-aos="fade-down" data-aos-duration="2000" src={machine_sittingon} alt="" className="object-cover -scale-x-100 rounded-md h-60 md:h-72 ml-auto w-9/12" />
            <img data-aos="fade-up" data-aos-duration="1000" src={machine_dried} alt="" className="object-cover absolute left-0 top-1/3 rounded-md h-40 sm:h-52 z-10 border-2 md:border-8 border-white ml-auto w-6/12" />
            <div className="ml-auto mr-4 w-5/12 p-4 md:p-6 mt-3 rounded-md bg-primary text-white">
              <div className="flex gap-4 items-center">
                <div className="rounded-full grid place-items-center h-8 text-xl md:text-2xl bg-white text-secondary flex-shrink-0"><MdCreditScore /></div>
                <h4 className="text-lg md:text-xl font-bold">Book now</h4>
              </div>
              <p data-aos="fade-up" data-aos-duration="1000" className=" md:text-base leading-loose text-justify">It takes as little as minut to book and as early as tomorrow to deliver</p>
            </div>
          </aside>
          <aside className="flex-1 flex-col gap-4">
            <p data-aos="fade-down" data-aos-duration="2000" className="py-2 px-6 rounded-md bg-secondary text-white uppercase font-bold text-sm md:text-base w-max">About Us</p>
            <h2 data-aos="fade-right" data-aos-duration="1000" className='text-2xl md:text-4xl font-bold text-dark'>Your Trusted Partner in laundry Care</h2>
            <p data-aos="fade-left" data-aos-duration="1500" className="text-sm md:text-base leading-loose text-justify text-dark/50">The meta element represents various kinds of metadata that cannot be expressed using the title, base, link, style, and script elements.</p>
            {
              [
                { id: "765480", headings: "Passionate Expertise", text: "The meta element represents various kinds of" },
                { id: "765481", headings: "Cutting Edge Technology", text: "The meta element represents various kinds of" },
                { id: "765482", headings: "Customer-center Approach", text: "The meta element represents various kinds of" },
              ].map(about => (
                <div key={about.id} className="flex gap-3">
                  <span className="text-2xl md:text-3xl text-secondary flex-shrink-0 mt-1">
                    <IoCheckmarkCircleOutline />
                  </span>
                  <div className=''>
                    <h5 className="text-lg md:text xl text-dark font-bold">{about.headings}</h5>
                    <p className="text-sm md:text-base text-dark">{about.text}</p>
                  </div>
                </div>
              ))
            }
          </aside>
        </div>
      </section>
      <section className="relative px-4 bg-primary">
        <img src={machine_filling} alt="machine_seethrough" className="absolute  h-full w-full left-o top-0  opercity-40" />
        <div className="container mx-auto relative flex flex-col md:flex-row gap-6"></div>
        <div className='container max-auto flex md:flex-row md:gap-8'>
          <aside className='flex-1flex flex-col gap-4 justify-center relative py-20'>
          <p data-aos="fade-down" data-aos-duration="2000" className="py-2 px-6 rounded-md bg-secondary text-white uppercase font-bold text-sm md:text-base w-max">Online Service</p>
          <p data-aos="fade-right" data-aos-duration="1500" className='text-lg font-bold text-dark md:text-lg'>Discover the Ease of Online Booking</p>
          <p  data-aos="fade-left" data-aos-duration="2000" className=' text-white md:text-xl'>The meta element represents various kinds of metadata that cannot be <span className='text-white'> expressed using the title, base, link, style, and script elements.</span></p>
          <p data-aos="fade-up" data-aos-duration="1000" className="py-2 px-6  bg-dark text-white uppercase font-bold text-sm md:text-base w-max">Book Now</p>
          </aside>
          <aside className='flex-1 relative border-2 border-white'>
            <img src={machine_sittingon} alt="" className="absolute h-11/12 w-1/2 top-1/2 -translate-y-1/2 object-cover object-center" />
            <img data-aos="fade-up" data-aos-duration="1000" src={machine_dried} alt="machine_dried" className='absolute  left-0 z-10  bottom-4 ' />
          </aside>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row gap-6 md:gap-8">
          <aside className="flex-1 relative"> 
            <img data-aos="fade-down" data-aos-duration="1500" src={machine_womanwash} alt="machine_womanwash" className="h-full w-11/12 rounded-md object-cover ml-auto block" />
            <figure className="bg-primary p-4 md:p-6 rounded-md w-56 text-white absolute z-10 left-0 bottom-8">
              <div className="flex items -center gap-2">
                <h4 className="text-3xl md:text-5xl font-bold tracking-tighter">25+</h4>
                <div data-aos="fade-down" data-aos-duration="2000" className="p text-lg md:text-xl">Years of Experience</div>
              </div>
              <p data-aos="fade-up" data-aos-duration="1000" className="text-lg md:text-xl">The head element represents a collection of metadata for the Document.</p>
            </figure>
          </aside>
          <aside className="flex-1 relative flex flex-col gap-4 py-5">
            <p className="py-2 px-6 rounded-md bg-secondary text-white uppercase font-bold text-sm md:text-base w-max">About Us</p>
            <h2 data-aos="fade-up" data-aos-duration="2000" className='text-2xl md:text-4xl font-bold text-dark'>Your Trusted Partner in laundry Care</h2>
            <p data-aos="fade-right" data-aos-duration="1000" className="text-sm md:text-base leading-loose text-justify text-dark/50">The meta element represents various kinds of metadata that cannot be expressed using the title, base, link, style, and script elements.</p>
            {[ 
              {id:"987650", title:"Eco-friendly Washing", percentage: 92 },
              {id:"987651", title:"meticuloe Washing", percentage: 96 },
              {id:"987652", title:"Stian-free ", percentage: 98 },
              {id:"987653", title:"ultra-fast Delivary ", percentage: 87 },
            ].map(item => (
              <div className="flex flex-col gap-1 text-dark/80">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg md:text-xl font-bold">{item.title}</h4>
                  <h5 className="text-sm md:text-base font-semibold">{item.percentage}%</h5>
                </div>
                <div className="bg-dark/20 rounded-sm overflow-hidden">
                  <div style={{width: `${item.percentage}%`}} className="bg-yell p-1"></div>
                </div>
              </div>
            ))
            }
          </aside>
        </div>
      </section>
    </main>
  )
}
