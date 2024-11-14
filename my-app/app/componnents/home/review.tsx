"use client"
import { FC } from "react";
import { Swiper, SwiperSlide,  } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation,  Autoplay, } from "swiper/modules";

interface Testimonial {
  id: number;
  rating: number;
  text: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    text: "I want to say thank you to my doctor Steve! Vivamus sagittis massa vitae bibendum rhoncus.",
    author: { name: "Robert Lee", title: "Software Engineer", image: "https://lh3.googleusercontent.com/YGSpPZtg5J-EB3okHfhQdtJObZxAf161I05Ja16W66lMsdLZDMb4AZxxW0G7Iq_FEa1v91cIOcX-bQ1k11TQeBe_ufSvfNjD7-Pkyg=w512-l90-sg-rj-c0xffffff" },
    image: "https://images.unsplash.com/photo-1553895501-af9e282e7fc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    rating: 5,
    text: "The best dental experience I've ever had! The team was professional and friendly.",
    author: { name: "Banson Doe", title: "Teacher", image: "https://lh3.googleusercontent.com/YGSpPZtg5J-EB3okHfhQdtJObZxAf161I05Ja16W66lMsdLZDMb4AZxxW0G7Iq_FEa1v91cIOcX-bQ1k11TQeBe_ufSvfNjD7-Pkyg=w512-l90-sg-rj-c0xffffff" },
    image: "https://images.unsplash.com/photo-1553895501-af9e282e7fc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    rating: 5,
    text: "Excellent service and care. The staff is knowledgeable and always willing to answer questions.",
    author: { name: "Thomas Linda", title: "Designer", image: "https://lh3.googleusercontent.com/YGSpPZtg5J-EB3okHfhQdtJObZxAf161I05Ja16W66lMsdLZDMb4AZxxW0G7Iq_FEa1v91cIOcX-bQ1k11TQeBe_ufSvfNjD7-Pkyg=w512-l90-sg-rj-c0xffffff" },
    image: "https://images.unsplash.com/photo-1553895501-af9e282e7fc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const TestimonialsSection: FC = () => {
  return (
    <section className="bg-white md:py-28 py-12 px-6">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-lg text-blue-600 uppercase tracking-wide">Testimonial</h3>
          <h2 className="text-4xl font-bold text-gray-900">
            What our <span className="text-blue-600">Client Say</span>
          </h2>
          <p className="mt-4 text-gray-600">We are committed to sustainability and eco-friendly initiatives.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          {/* Testimonial Image */}
          <div className="lg:w-1/2 relative mb-8 lg:mb-0">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img src={testimonials[0].image} alt="Testimonial" className="w-full h-96 object-cover" />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 absolute bottom-4 left-4">
              <h3 className="text-3xl font-bold text-blue-600">{testimonials[0].rating}/5</h3>
              <p className="text-sm text-gray-600">This rate is given by users after visiting our location.</p>
              <div className="flex items-center space-x-1 mt-2">
                {[...Array(5)].map((_, i) => (
                    <svg     key={i}
                    className={`${
                      i < Math.floor(testimonials[0].rating) ? " text-yellow-400" : " text-gray-300"
                    }`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#e4f500" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>
               
                ))}
                <span className="ml-2 text-gray-600">for excellence services</span>
              </div>
            </div>
          </div>

          {/* Testimonial Slider */}
          <div className="lg:w-1/2 w-full">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              className="testimonial-slider"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="p-16 bg-slate-200 shadow-lg rounded-lg">
                    <div className="flex flex-col items-start space-x-4 mb-4 ">
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#242423" viewBox="0 0 256 256"><path d="M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z"></path></svg>
                      <p className="text-gray-700">{testimonial.text}</p>
                    </div>
                    <div className="flex items-center mt-4">
                      <img src={testimonial.author.image} alt={testimonial.author.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                      <div>
                        <h3 className="font-bold text-gray-900">{testimonial.author.name}</h3>
                        <p className="text-gray-600 text-sm">{testimonial.author.title}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
