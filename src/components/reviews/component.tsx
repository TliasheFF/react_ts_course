import { FC, useContext } from "react";
import { TReviews } from "../../constants/mocks-types";
import { Review } from "../review/component";
import { ReviewForm } from "../review-form/component";
import styles from "./styles.module.scss";
import { UserContext } from "../contexts/user";
import { AuthUsers } from "../../constants/auth-user";

interface Props {
  reviews: TReviews;
}

export const Reviews: FC<Props> = ({ reviews }) => {
  const { fullName } = useContext<AuthUsers>(UserContext);

  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
      {fullName && (
        <div>
          <hr />
          <ReviewForm className={styles.review_form} />
        </div>
      )}
    </div>
  );
};
