import { ReactNode } from "react";

export type DeepPartial<T> = {
  [P in keyof T]: DeepPartial<T[P]>;
};

export interface ITranslation {
  meta: Record<string, string>;
  alt: Record<string, string>;
  ariaLabel: Record<string, string>;
  navigation: Record<string, string>;
  common: Record<string, string | ReactNode>;
  form: {
    labels: Record<string, string>;
  };
  pages: Record<
    string,
    Record<string, Record<string, string | ReactNode | any[]>>
  >;
}
