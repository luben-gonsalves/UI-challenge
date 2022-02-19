import React from "react";

import { FlexCol, FlexRowSpaceBetween } from "../UIElements";
import { CustomCard, CardButton, CardTitle, Rating } from "./style";

const Card = () => {
  return (
    <CustomCard>
      <CardTitle>
        Das richtige Hörgerät verbessert mehr als nur Ihr Hören.
      </CardTitle>
      <CardButton className="mb-32">
        Jetzt Hörgeräte kostenlos testen
      </CardButton>
      <FlexRowSpaceBetween className="gap-5">
        <img
          src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/fee54b0f-siegel-geers-de-sc44805.svg"
          height="69px"
          width="132px"
          className="rectangle-logo "
          alt="trusted"
        />
        <img
          src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/7bea8d9d-trusted-shops-logo_103u03u03s03u000000000.png"
          height="69px"
          width="69px"
          className="circle-logo"
          alt="trusted shops"
        />
        <img
          src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/93d4fa9f-trust-logo_103w03u03u03u000000000.png"
          height="69px"
          width="69px"
          className="circle-logo"
          alt="trust"
        />
        <FlexCol>
          <img
            src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/625afd42-geers-gold-stars-4-7_105y012000000000000000.png"
            height="19px"
            width="107px"
            alt="stars"
            className="rating-logo"
          />
          <Rating>4,7/5</Rating>
        </FlexCol>
      </FlexRowSpaceBetween>
    </CustomCard>
  );
};

export default Card;
