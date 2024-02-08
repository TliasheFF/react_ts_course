import { FC, useContext } from "react";
import { Review } from "../review/component";
import { ReviewForm } from "../review-form/component";
import styles from "./styles.module.scss";
import { UserContext } from "../../contexts/user";
import { AuthUser } from "../../constants/auth-user-types";

interface Props {
  reviewsIds: string[];
}

export const Reviews: FC<Props> = ({ reviewsIds }) => {
  const { user } = useContext<AuthUser>(UserContext);

  return (
    <div>
      <ul>
        {reviewsIds.map((id) => (
          <li key={id}>
            <Review reviewId={id} />
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
