import { FaLocationArrow, FaQuoteLeft, FaQuoteRight, FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel, Autoplay } from "swiper";
import mayitoismail from "../../assets/testimonials/mayitoismail.jpg"
import margratekuju from "../../assets/testimonials/margratekuju.jpg"
import newtonhassan from "../../assets/testimonials/newtonhassan.jpg"
import agaheaden from "../../assets/testimonials/agaheaden.jpg"
import jubairmaroof from "../../assets/testimonials/jubairmaroof.jpg"
import richardsikaonga from "../../assets/testimonials/richardsikaonga.jpg"
import aminkhan from "../../assets/testimonials/aminkhan.jpg"
import anthonyobi from "../../assets/testimonials/anthonyobi.jpg"
import uzairmanzoor from "../../assets/testimonials/uzairmanzoor.jpg"
import zunairkhan from "../../assets/testimonials/zunairkhan.jpg"
import './Testimonials.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  const linkedinTestimonials = [
    {
      id: 1,
      name: "Abdullah Najeeb",
      role: "Web Developer",
      testimonial: "I had the pleasure to work with Abu Talha on a couple of projects and came to know him as a very hardworking person. His knowledge and skill sets were very helpful to finish the projects on time and I’ll be happy to work with him again.",
      image: newtonhassan
    },
    {
      id: 1,
      name: "Abu Talha",
      role: "Full-Stack Developer",
      testimonial: "Talha is a great developer with impeccable commitment to projects he works on. He has an amazing work ethic, possesses excellent interpersonal skills which makes him very pleasant to work. In the projects I have collaborated in with him, he was a great team player, provided great reviews as well as serving as an inspiration for me to be better. Getting him in your team will guarantee you excellence. I hope to collaborate with him on future projects.",
      image: mayitoismail
    },
  ]

    return (
      <section id="testimonials" className="testimonials-section-container">
        <div className="testimonials-information" data-aos="fade-up">
          <div className="testimonials-title">
            <FaLocationArrow className="arrow-icon" />
            <span>Testimonials</span>
            <p className="microverse-date">What people say about me</p>
          </div>
        </div>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            mousewheel={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Mousewheel, Autoplay]}
            className="mySwiper"
            data-aos="fade-up"
          >
            {linkedinTestimonials.map((user) => 
              <SwiperSlide key={user.id}>
                <div className="relative-div">
                  <img src={user.image} alt="user" />
                  <FaLinkedin className="linkedin-testimonial" />
                </div>
                <div className="testimonial-info">
                  <p className="user-name">{user.name}</p>
                  <p className="user-role">{user.role}</p>
                  <div className="testimonial-flex">
                    <FaQuoteLeft className="quotes" />
                    <p className="user-testimonial">{user.testimonial}</p>
                    <FaQuoteRight className="quotes" />
                  </div>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
      </section>
    );
  };
  
export default Testimonials;
  