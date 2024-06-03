import { IoArrowForward } from "react-icons/io5"
import { Link } from "react-router-dom"
import { featuresData } from "../data/featuresData"



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// data-aos="zoom-in"
// data-aos="zoom-out | in"

// Import Swiper styles
import 'swiper/css';
import { servicesData } from "../data/servicesData";
import { Autoplay } from "swiper/modules";
import { data } from "autoprefixer";
export default function Home() {

  return (
    <main className='bg-backdrop'>
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto flex flex-col gap-6 md:flex-row-reverse">
        <aside data-aos="flip-down" data-aos-delay="2000" className="flex-1 min-h-[300px] md:min-h-[400px] relative">
          <img src="/laundry.gif" alt="A moving working washing maching machine" className="absolute left-0 top-0 w-full h-full object-cover" />
        </aside>
        <aside className="flex-1 flex flex-col justify-center gap-2
        ">
          <h2 data-aos="fade-down" className="text-primary text-xl md:text-4xl font-bold">Wash it <span className="text-secondary">clean</span></h2>
          <p data-aos="fade-up" data-aos-delay="1000" className="text-base md:text-lg text-justify leading-loose text-dark/80">laundromat is your one stop shop for all dry clean service lovers out there who oves the neatest and ironed cloths</p>
          <Link data-aos="fade-right" data-aos-delay="2000" to={'/order'} 
          className='py-2 px-4 bg-secondary text-white border border-secondary hover:bg-white hover:text-secondary rounded-[md] w-max'>place an Order</Link>
        </aside>
      </div>
      
    </section>
    <section className="bg-backdrop py-20 px-2 md:px-4">
      <div className="container mx-auto flex flex-col gap-6 bg-white rounded-md shadow-lg shadow-slate-200 px-6 md:p-10 md:pt-16">
        <div className="flex flex-col md:flex-row gap-6">
          <h3 data-aos="flip-up" data-aos-delay="3000"  className="font-bold text-dark text-lg md:text-3xl leading-tight flex-1">
            We strive to provide you the best quality yet affordable laundry services in the country
          </h3>
          <div className="flex-1 flex flex-col gap-6">
            <p data-aos="fade-down" data-aos-delay="3000"  className="text-dark/70 leading-loose text-base md:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto laboriosam, illo delectus beatae eveniet unde, recusandae consequatur facilis, consectetur quaerat amet doloremque veritatis quasi vitae. Nisi soluta quibusdam qui asperiores modi nulla, illo laborum veniam labore quam quis pariatur maiores, unde tenetur! Molestias repudiandae sint perferendis minus laboriosam eveniet ipsa?</p>
            <Link data-aos="fade-left" data-aos-delay="800"  className='w-max py-2 px-4 md:px-6 bg-dark border border-dark/80 hover:bg-white text-white hover:text-dark/80 text-sm rounded-[md] flex items-center gap-2' to={'about'}>Explore more <IoArrowForward/></Link>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 py-10">
        {
          featuresData.map((el, i) => (
            <aside data-aos={i % 2 === 0 ? "zoom-in-left" : "zoom-out-right"} data-aos-delay={(i+1)*500} data-aos-duration="1000" key={el.id} className="bg-backdrop p-4 md:p-6 rounded-md flex flex-col gap-4 md:gap-6 items-center text-center hover:-translate-y-4 border-2 border-primary/5 hover:border-primary/30">
              <span className="text-3xl md:text-4xl text-primary">{el.icon}</span>
              <h5 className="text-lg md:text-xl font-semibold text-dark/80">{el.title}</h5> </aside>
          ))
        }

        </div>

      </div>
    </section>
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto flex flex-col gap-6">
        <h3  className="text-dark text-center text-xl md:text-3xl relative pb-4 after:absolute after:w-12 after:h-1 after:bg-secondary after:left-1/2 after:-translate-x-1/2 after:bottom-0">Our latest product</h3>
        <div data-aos="fade-up" data-aos-delay="1000">
         <Swiper
         modules={[Autoplay]}
         autoplay={{pauseOnMouseEnter:true, delay:3000}}
         speed={600}
         direction="horizontal"
         loop={"true"}
      spaceBetween={20}
      slidesPerView={2}
      breakpoints={{
        400: {slidesPerView: 2, spaceBetween: 20},
        800: {slidesPerView: 3, spaceBetween: 50},
      }}
    >
      {
        servicesData.map(service => (
          <SwiperSlide key={service.id} className="relative rounded-md h-44 lg:h-56 select-none overflow-hidden"><img src={service.image} alt=""className="absolute left-0 top-0 object-cover w-full h-full object-center" />
          <button type="submit" className="absolute left-0 top-0 object-cover w-full h-full flex items-end justify-center p-4 bg-gradient-to-b from-transparent via-transparent to-dark">
            <h4 className="text-white text-xl md:textt-3xl text-cent font-medium">{service.text}</h4>
          </button>
          </SwiperSlide>
        ))
      }
      
      
    </Swiper>
    </div>
      </div>
    </section>
    </main>
  )
}
