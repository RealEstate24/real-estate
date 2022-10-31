import { FC } from "react";

import { useRouter } from "next/router";

import { Button, Container, Image, Typography } from "@components/ui";

import { useTranslation } from "@hooks";

export const Offer: FC = () => {
  // **Props
  const t = useTranslation();
  const { push } = useRouter();

  return (
    <section className="offer">
      <Container>
        <div className="offer-body">
          <div className="offer-wrapper">
            <div className="offer-wrapper__info">
              <Typography variant="h2" tag="h2" upperCase asGradient>
                {t.pages.home.offer.title}
              </Typography>
              <Typography tag="p">{t.pages.home.offer.description}</Typography>
              <Button onClick={() => push("#form")}>
                {t.common.getSelection}
              </Button>
            </div>
            <div className="offer-wrapper__image">
              <Image
                src="/media/background/catalog.png"
                width={264}
                height={309}
                alt=""
                aria-hidden={true}
              />
            </div>
          </div>
          <div className="offer-bg">
            <Image
              src="/media/background/offer.jpg"
              width={1180}
              height={428}
              alt=""
              aria-hidden={true}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
