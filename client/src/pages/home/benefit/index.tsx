import { FC } from "react";

import { Container, HtmlImage, Typography } from "@components/ui";

import { useTranslation } from "@hooks";

export const Benefit: FC = () => {
  // **Props
  const t = useTranslation();

  return (
    <section className="benefit padding-large">
      <Container>
        <div className="benefit-content">
          <div className="benefit-info">
            <Typography variant="h2" tag="h2" asGradient upperCase>
              {t.pages.home.benefit.title}
            </Typography>
            <div className="benefit-info__text">
              {(t.pages.home.benefit.description as string[]).map((text) => (
                <Typography key={text} tag="p">
                  {text}
                </Typography>
              ))}
            </div>
          </div>
          <div className="benefit-statistic">
            <ul>
              {(t.pages.home.benefit.statistic as any[]).map((item) => (
                <li key={item.title}>
                  <span>{item.title}</span> {item.caption}
                </li>
              ))}
            </ul>
            <div className="benefit-bg">
              <HtmlImage
                src="/media/background/map.svg"
                width={680}
                height={484}
                alt=""
                aria-hidden={true}
              />
            </div>
          </div>
        </div>
        <div className="benefit-caption">
          <Typography variant="h4" tag="h3">
            {t.pages.home.benefit.captionTitle}
          </Typography>
          <Typography tag="p">
            {t.pages.home.benefit.captionDescription}
          </Typography>
        </div>
      </Container>
    </section>
  );
};
