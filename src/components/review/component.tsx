import { FC } from "react";
import { TReview } from "../../constants/mocks-types";

interface Props {
  review: TReview;
}

export const Review: FC<Props> = ({ review }) => {
  return (
    <div>
      <div>{review.text}</div>
    </div>
  );
};
