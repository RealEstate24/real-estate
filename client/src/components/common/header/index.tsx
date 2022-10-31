import { FC, useRef, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import Cookies from "js-cookie";

import { Container, HtmlImage, Logo } from "@components/ui";

import { useOnClickOutside, useTranslation } from "@hooks";

import { NAVIGATION } from "@constants";

export const Header: FC = () => {
  // **Props
  const t = useTranslation();
  const { locales, locale, asPath, push } = useRouter();

  // **Local state
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // **Ref
  const contactRef = useRef<HTMLDivElement>(null);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleLang = (newLang: string) => () => {
    Cookies.set("NEXT_LOCALE", newLang);
    const path = asPath.split("#")?.[0] || asPath;
    push(path, path, { locale: newLang });
    handleMenuClose();
  };

  useOnClickOutside(contactRef, () => setIsContactOpen(false));

  return (
    <>
      <header className="header">
        <Container>
          <div className={isMenuOpen ? "header-mobile open" : "header-mobile"}>
            <div className="header-mobile__wrapper">
              <nav className="header-nav">
                <ul className="header-nav-list">
                  {NAVIGATION.map((item) => (
                    <li key={item.t}>
                      <Link href={item.href}>
                        <a onClick={handleMenuClose}>{t.navigation[item.t]}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="header-langs">
                {locales.map((lang) => (
                  <button
                    key={lang}
                    className={
                      lang === locale
                        ? "header-langs__item active"
                        : "header-langs__item"
                    }
                    onClick={handleLang(lang)}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="header-wrapper">
            <Logo />
            <nav className="header-nav desctop">
              <ul className="header-nav-list">
                {NAVIGATION.map((item) => (
                  <li key={item.t}>
                    <Link href={item.href}>
                      <a>{t.navigation[item.t]}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="header-langs desctop">
              {locales.map((lang) => (
                <button
                  key={lang}
                  className={
                    lang === locale
                      ? "header-langs__item active"
                      : "header-langs__item"
                  }
                  onClick={handleLang(lang)}
                >
                  {lang}
                </button>
              ))}
            </div>

            <div
              ref={contactRef}
              className={
                isContactOpen ? "header-contacts open" : "header-contacts"
              }
            >
              <a href="tel:+380965439103" className="header-contacts__phone">
                <HtmlImage
                  src="/media/icons/phone-gold.svg"
                  width={24}
                  height={24}
                  alt=""
                  aria-hidden={true}
                />
                380-96-54-39-103
              </a>
              <div className="header-contacts__bottom">
                <Link href="#form">
                  <a className="header-contacts__callback">
                    {t.common.callback}
                  </a>
                </Link>
                <ul className="header-contacts__socials">
                  <li>
                    <a href="#" aria-label={t.ariaLabel.telegram}>
                      <HtmlImage
                        src="/media/icons/telegram.svg"
                        width={18}
                        height={18}
                        alt=""
                        aria-hidden={true}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label={t.ariaLabel.whatsapp}>
                      <HtmlImage
                        src="/media/icons/whatsapp.svg"
                        width={18}
                        height={18}
                        alt=""
                        aria-hidden={true}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label={t.ariaLabel.viber}>
                      <HtmlImage
                        src="/media/icons/viber.svg"
                        width={18}
                        height={18}
                        alt=""
                        aria-hidden={true}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button
              className="header-contacts__btn"
              onClick={() => setIsContactOpen(true)}
              aria-label={
                isContactOpen
                  ? t.ariaLabel.closeContacts
                  : t.ariaLabel.openContacts
              }
            >
              <HtmlImage
                src="/media/icons/phone-gold.svg"
                width={24}
                height={24}
                alt=""
                aria-hidden={true}
              />
            </button>
            <button
              className={isMenuOpen ? "header-burger open" : "header-burger"}
              onClick={isMenuOpen ? handleMenuClose : handleMenuOpen}
              aria-label={
                isMenuOpen ? t.ariaLabel.closeBurger : t.ariaLabel.openBurger
              }
            >
              <span></span>
            </button>
          </div>
        </Container>
      </header>
    </>
  );
};
