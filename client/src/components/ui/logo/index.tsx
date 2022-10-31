import { FC } from "react";

import { useTranslation } from "@hooks";

import { HtmlImage } from "../image";

export const Logo: FC = () => {
  // **Props
  const t = useTranslation();

  return (
    <div className="logo">
      <HtmlImage
        src="/media/ui/logo.svg"
        width={143}
        height={36}
        alt={t.alt.logo}
      />
    </div>
  );
};
