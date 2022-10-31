import { FC } from "react";

import { useRouter } from "next/router";

import { Button, Container, Image, Typography } from "@components/ui";

import { useTranslation } from "@hooks";

export const Home: FC = () => {
  // **Props
  const t = useTranslation();
  const { push } = useRouter();

  return (
    <section className="home">
      <Container>
        <div className="home-wrapper">
          <div className="home-info">
            <Typography variant="h1" tag="h1" upperCase>
              {t.pages.home.main.title}
            </Typography>
            <Typography tag="p">{t.pages.home.main.text}</Typography>
            <Button height="large" withIcon onClick={() => push("#form")}>
              {t.common.selectProperty}
            </Button>
          </div>
          <ul className="home-advantages">
            {(t.pages.home.main.advantages as Array<any>).map((item) => (
              <li key={item.title} className="home-advantages__item">
                <div className="home-advantages__item-title">{item.title}</div>
                <div className="home-advantages__item-caption">
                  {item.caption}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="home-bg">
        <Image
          src="/media/background/main.jpg"
          width={1440}
          height={728}
          priority
          alt=""
          aria-hidden={true}
        />
      </div>
    </section>
  );
};
