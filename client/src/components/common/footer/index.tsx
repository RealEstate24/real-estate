import { FC } from "react";

import Link from "next/link";

import { Container, HtmlImage, Image, Logo, Typography } from "@components/ui";

import { useTranslation } from "@hooks";

import { NAVIGATION } from "@constants";

import { Form } from "./form";

export const Footer: FC = () => {
  // **Props
  const t = useTranslation();

  return (
    <footer className="footer">
      <Container>
        <div className="footer-top">
          <Form />
          <div className="footer-info">
            <Typography variant="h2" tag="h2" upperCase>
              {t.common.consultation}
            </Typography>
            <div className="footer-socials">
              <Typography tag="p">{t.common.connection}</Typography>
              <ul>
                <li>
                  <a href="#" aria-label={t.ariaLabel.telegram}>
                    <HtmlImage
                      src="/media/icons/telegram.svg"
                      width={32}
                      height={32}
                      alt=""
                      aria-hidden={true}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label={t.ariaLabel.whatsapp}>
                    <HtmlImage
                      src="/media/icons/whatsapp.svg"
                      width={32}
                      height={32}
                      alt=""
                      aria-hidden={true}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label={t.ariaLabel.viber}>
                    <HtmlImage
                      src="/media/icons/viber.svg"
                      width={32}
                      height={32}
                      alt=""
                      aria-hidden={true}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-credentials">
            <Logo />
            <Typography tag="p">{t.common.credentials}</Typography>
          </div>
          <nav className="footer-nav">
            <ul className="footer-nav__list">
              {NAVIGATION.map((item) => (
                <li key={item.t}>
                  <Link href={item.href}>
                    <a>{t.navigation[item.t]}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-contacts">
            <a href="tel:+380965439103" className="footer-contacts__phone">
              <HtmlImage
                src="/media/icons/phone-gold.svg"
                width={24}
                height={24}
                alt=""
                aria-hidden={true}
              />
              380-96-54-39-103
            </a>
            <Link href="#form">
              <a className="footer-contacts__callback">{t.common.callback}</a>
            </Link>
          </div>
        </div>
      </Container>
      <div className="footer-bg">
        <Image
          src="/media/background/footer.png"
          width={1440}
          height={600}
          alt=""
          aria-hidden={true}
        />
      </div>
    </footer>
  );
};
