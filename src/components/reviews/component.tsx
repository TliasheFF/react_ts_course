import { TReviews } from "../../constants/mocks-interface";
import { Review } from "../review/component";

interface Props {
  reviews: TReviews;
}

export const Reviews = ({ reviews }: Props) => {
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
