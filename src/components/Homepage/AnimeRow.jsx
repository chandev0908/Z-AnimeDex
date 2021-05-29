import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function AnimeRow({ category, animes }) {
  // return (
  //   <div className="anime-container">
  //     <h1>{category}</h1>
  //     <Swiper
  //       className="anime"
  //       spaceBetween={20}
  //       freeMode={true}
  //       slidesPerView={"auto"}
  //       direction={"horizontal"}
  //     >
  //         {animes.length !== 0 && animes.results.map(anime => {
  //             <SwiperSlide key={anime.id}>
  //               <img src={anime.image_url} />
  //             </SwiperSlide>
  //         })}
  //     </Swiper>
  //   </div>
  // );
}
export default AnimeRow;
