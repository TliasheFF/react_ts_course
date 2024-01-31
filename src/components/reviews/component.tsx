import { FC } from "react";
import { TReviews } from "../../constants/mocks-types";
import { Review } from "../review/component";
import { ReviewForm } from "../review-form/component";
import styles from "./styles.module.scss";

interface Props {
  reviews: TReviews;
}

export const Reviews: FC<Props> = ({ reviews }) => {
  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
      <div>
        <hr />
        <ReviewForm className={styles.reviews_form} />
      </div>
    </div>
  );
};
