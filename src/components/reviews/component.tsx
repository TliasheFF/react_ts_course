import { FC } from "react";
import { TReviews } from "../../constants/mocks-types";
import { Review } from "../review/component";

interface Props {
  reviews: TReviews;
}

export const Reviews: FC<Props> = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <Review review={review} />
        </li>
      ))}
    </ul>
  );
};
