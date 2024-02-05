import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { HeaderSliderSlides } from "../UI-data/UI-data";
// import Atropos from "atropos/react";

// styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import 'atropos/css';

const HeaderSlider = () => {
  return (
    <Swiper
      className="header--slider"
      modules={[Navigation, Autoplay, EffectFade]}
      navigation={true}
      // autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      speed={1000}
      effect="fade"
      fadeEffect={{ crossFade: true }}
    >
      {HeaderSliderSlides.map((slide) => (
        <SwiperSlide
          key={slide.slideNumber}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
            <div className="header--slider--content">
              <span className="header--slider--title">{slide.title}</span>
              <p className="header--slider--description">{slide.description}</p>
              <button onClick={() => console.log('clicked')} className="header--slider--btn">{slide.btnContext}</button>
            </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeaderSlider;
