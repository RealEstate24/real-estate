import { FC } from "react";

import { useRouter } from "next/router";

import { Button, Container, Typography } from "@components/ui";

import { useTranslation } from "@hooks";

export const Security: FC = () => {
  // **Props
  const t = useTranslation();
  const { push } = useRouter();

  return (
    <section className="security padding-large">
      <Container>
        <Typography variant="h2" tag="h2" upperCase>
          {t.pages.home.security.title}
        </Typography>
        <Typography tag="p">{t.pages.home.security.description}</Typography>
        <div className="security-list">
          <div className="security-card problems">
            <Typography variant="h4" tag="h3" asGradient>
              {t.pages.home.security.problemsTitle}
            </Typography>

            <ul className="security-card__list">
              {(t.pages.home.security.problems as any[]).map((text, index) => (
                <li key={index}>
                  <div className="title">{text.title}</div>
                  <div className="description">{text.description}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="security-card guarantees">
            <Typography variant="h4" tag="h3" asGradient>
              {t.pages.home.security.guaranteesTitle}
            </Typography>
            <ul className="security-card__list">
              {(t.pages.home.security.guarantees as any[]).map(
                (text, index) => (
                  <li key={index}>
                    <div className="title">{text.title}</div>
                  </li>
                )
              )}
            </ul>
            <Typography tag="p" className="tip" center>
              {t.common.managerConsultation}
            </Typography>
            <Button withIcon fullWidth onClick={() => push("#form")}>
              {t.common.callback}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
