import { FC } from "react";

import { Advantages } from "./advantages";
import { Benefit } from "./benefit";
import { Home as Main } from "./home";
import { Offer } from "./offer";
import { Security } from "./security";
import { Services } from "./services";

export const Home: FC = () => (
  <>
    <Main />
    <Advantages />
    <Offer />
    <Benefit />
    <Security />
    <Services />
  </>
);
