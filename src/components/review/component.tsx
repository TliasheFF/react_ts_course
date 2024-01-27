import { IReview } from "../../constants/mocks-interface";

interface Props {
  review: IReview;
}

export const Review = ({ review }: Props) => {
  return (
    <div>
      <div>{review.text}</div>
    </div>
  );
};
