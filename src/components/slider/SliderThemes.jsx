import { Swiper, SwiperSlide } from 'swiper/solid';
import { Autoplay, Pagination, Navigation, Zoom} from "swiper";
import pole from './image/9508.jpg'
import divino_pole from './image/divino-pole.jpg'
import thumb from './image/thumb_l_41018.jpg';
import vesennii from './image/vesennii-zelenii.jpg'

import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SliderThemes = () => {
    return (
        <Swiper
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
            }}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            loop={true}
            watchOverflow={true}
            slidesPerGroup={1}
            spaceBetween={15}
            autoHeight={true}
            zoom={true}
            navigation={false}
            pagination={{
                clickable: true,
            }}
            modules={[Zoom, Navigation, Pagination, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div class="object-container min-w-full h-full blur-sm">
                    <img src={pole} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="object-container min-w-full h-full blur-sm">
                    <img src={divino_pole}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="object-container min-w-full h-full blur-sm">
                    <img src={thumb}/>
                </div>
            </SwiperSlide>
              <SwiperSlide>
                 <div class="object-container min-w-full h-full blur-sm">
                     <img src={vesennii}/>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default SliderThemes;

