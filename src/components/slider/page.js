import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper-bundle.min.css'; // Correct import path for Swiper's CSS
import Image from 'next/image';
import "./style.css"
export default function Slider({ data, style, options }) {
    // Memoize the data and options to prevent re-renders caused by prop changes
    const memoizedData = useMemo(() => data, [JSON.stringify(data)]);
    const memoizedOptions = useMemo(() => options, [JSON.stringify(options)]);
    
    const truncateText = (text, wordLimit = 8) => {
        if (!text) return '';
        const words = text.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
    };

    return (
        <div className="carouselContainer container-fluid sliders-wrapper slider-padding">
            <Swiper
                {...memoizedOptions} // Spread options to pass Swiper configurations
                // spaceBetween={10} // You can adjust the spacing between items
                // slidesPerView={1} // Adjust based on how many slides you want to show
                lazy={true} // Enable lazy loading for images and iframes
            >
                {memoizedData.map((item, index) => (
                    <SwiperSlide key={item.id || index} className="item vid-item youtube">
                        {style === 'img' ? (
                            <Image
                                src={item.src}
                                alt={item.title || 'Image'}
                                width={400}
                                height={300}
                                loading="lazy" // Enables lazy loading for images
                            />
                        ) : (
                            <div>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe
                                        className="embed-responsive-item"
                                        src={item.youTube_link}
                                        width="320"
                                        height="200"
                                        loading="lazy" // Enables lazy loading for iframes
                                    ></iframe>
                                </div>
                                <h4 className="text-white">{truncateText(item.title, 6)}</h4>
                                <p>{truncateText(item.description, 20)}</p>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
