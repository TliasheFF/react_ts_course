import { FC, useContext } from "react";
import { TReviews } from "../../constants/mocks-types";
import { Review } from "../review/component";
import { ReviewForm } from "../review-form/component";
import styles from "./styles.module.scss";
import { UserContext } from "../contexts/user";
import { AuthUser } from "../../constants/auth-user-types";

interface Props {
  reviews: TReviews;
}

export const Reviews: FC<Props> = ({ reviews }) => {
  const { user } = useContext<AuthUser>(UserContext);

  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
      {user && (
        <div>
          <hr />
          <ReviewForm className={styles.review_form} />
        </div>
      )}
    </div>
  );
};
