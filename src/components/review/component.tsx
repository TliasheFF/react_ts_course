import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { selectReviewById } from "../../redux/entities/review/selectors";

interface Props {
  reviewId: string;
}

export const Review: FC<Props> = ({ reviewId }) => {
  const review = useSelector((state: RootState) => selectReviewById(state, reviewId));

  return (
    <div>
      <div>{review.text}</div>
    </div>
  );
};
