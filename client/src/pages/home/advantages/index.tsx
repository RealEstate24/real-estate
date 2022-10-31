import { CSSProperties, FC } from "react";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container, HtmlImage, Typography } from "@components/ui";

import { useTranslation } from "@hooks";

export const Advantages: FC = () => {
  // **Props
  const t = useTranslation();

  return (
    <section className="advantages padding-large">
      <Container>
        <Typography
          variant="h2"
          tag="h2"
          asGradient
          className="title"
          upperCase
        >
          {t.pages.home.advantages.title}
        </Typography>
      </Container>
      <div className="advantages-slider">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".advantages-slider__nav--prev",
            nextEl: ".advantages-slider__nav--next"
          }}
          pagination={{
            clickable: true,
            el: ".advantages-slider__pagination"
          }}
          spaceBetween={20}
          slidesPerView={2.4}
          centeredSlides
          breakpoints={{
            1200: {
              slidesPerView: 2.4
            },
            992: {
              slidesPerView: 1.4
            },
            576: {
              slidesPerView: 1.8
            },
            0: {
              slidesPerView: 1
            }
          }}
        >
          {(t.pages.home.advantages.slides as any[]).map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="advantages-slide"
                style={
                  {
                    "--url": `url("/media/icons/advantages/${index + 1}.svg")`
                  } as CSSProperties
                }
              >
                <div className="advantages-slide__label">
                  <span>{index + 1}</span>
                </div>
                <Typography>{slide.caption}</Typography>
                <Typography variant="h3" tag="h3">
                  {slide.title}
                </Typography>
                {slide.paragraph && <Typography>{slide.paragraph}</Typography>}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Container>
        <div className="advantages-slider__actions">
          <button className="advantages-slider__nav advantages-slider__nav--prev">
            <HtmlImage
              src="/media/icons/arrow.svg"
              width={45}
              height={33}
              alt=""
              aria-hidden={true}
            />
          </button>
          <div className="advantages-slider__pagination"></div>
          <button className="advantages-slider__nav advantages-slider__nav--next">
            <HtmlImage
              src="/media/icons/arrow.svg"
              width={45}
              height={33}
              alt=""
              aria-hidden={true}
            />
          </button>
        </div>
      </Container>
    </section>
  );
};
