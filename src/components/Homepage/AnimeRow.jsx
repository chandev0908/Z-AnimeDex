import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

function AnimeRow({ category, animes }) {
  let animeImg = useRef(new Array());
  let animeInfo = useRef(new Array());
  const onHoverInfo = (index) => {
    animeImg.current[index].classList.replace("h-3/4", "h-0");
  };
  const onLeaveHover = (index) => {
    animeImg.current[index].classList.replace("h-0", "h-3/4");
  };
  const imgHover = (index) => {
    animeImg.current[index].classList.replace("h-3/4", "h-full")
  }
  const imgHoverLeave = (index) => {
    animeImg.current[index].classList.replace("h-full", "h-3/4")
  }
  return (
    <div className="anime-container text-white z-10 w-full overflow-hidden pt-6">
      <h1 className=" ease-in-out text-primSize sm:text-primSizeS md:text-primSizeM lg:text-primSizeL m-2">{category && category}</h1>
      <Swiper
        className="animes"
        spaceBetween={20}
        freeMode={true}
        slidesPerView={3}
        direction={"horizontal"}
      >
        {animes.length !== 0 &&
          animes.slice(0,15).map((anime, index) => {
            return (
              <SwiperSlide
                key={anime.mal_id}
                className="anime relative transition-all duration-700 ease-in-out text-titleSize text-center max-w-xsm sm:max-w-sm md:max-w-md lg:max-w-lg bg-primary rounded-lg"
              >
                <img
                  ref={(element) => animeImg.current.push(element)}
                  index={index}
                  onMouseEnter={() => imgHover(index)}
                  onMouseLeave={() => imgHoverLeave(index)}
                  src={anime.image_url}
                  alt={anime.title}
                  className="transition-all duration-700 ease-in-out rounded-lg w-full h-3/4"
                />
                <div
                  ref={(element) => animeInfo.current.push(element)}
                  index={index}
                  onMouseEnter={() => onHoverInfo(index)}
                  onMouseLeave={() => onLeaveHover(index)}
                  className="anime-info mt-2 mb-2 text-titleSizeS md:text-titleSizeM lg:text-titleSizeL grid grid-flow-column justify-center content-start gap-y-1 w-full h-full z-0"
                >
                  <h1>{anime.title}</h1>
                  <div className="rating grid grid-flow-col justify-center items-center">
                    <svg
                      className="w-4 h-4 text-lightblue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                    <h2>{anime.score}</h2>
                  </div>
                  <h1>Rank: {anime.rank}</h1>
                  <Link to={`/anime/${anime.mal_id}`} >View</Link>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
export default AnimeRow;
