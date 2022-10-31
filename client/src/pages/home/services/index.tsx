import { FC } from "react";

import { Container, HtmlImage, Image, Typography } from "@components/ui";

import { useTranslation } from "@hooks";

export const Services: FC = () => {
  // **Props
  const t = useTranslation();

  return (
    <section className="services padding-large">
      <Container>
        <Typography
          variant="h2"
          tag="h2"
          upperCase
          asGradient
          className="title"
        >
          {t.pages.home.services.title}
        </Typography>
        <ul className="services-list">
          {(t.pages.home.services.cards as any[]).map((card, index) => (
            <li key={index} className="services-item">
              <div className="services-item__icon">
                <HtmlImage
                  src={`/media/icons/services/${index + 1}.svg`}
                  width={40}
                  height={40}
                  alt=""
                  aria-hidden={true}
                />
              </div>
              <Typography variant="h3" tag="h3">
                {card.title}
              </Typography>
              <div className="services-item__text">
                {(card.description as any[]).map((text, index) => (
                  <Typography key={index} tag="p">
                    {text}
                  </Typography>
                ))}
              </div>
              <div className="services-item__bg">
                <Image
                  src={`/media/background/services/${index + 1}.png`}
                  width={380}
                  height={570}
                  alt=""
                  aria-hidden={true}
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
