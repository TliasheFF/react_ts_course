import { TReviews } from "../../constants/mocks-interface";

interface Props {
  reviews: TReviews;
}

export const Review = ({ reviews }: Props) => {
  return (
    <>
      <h3>Отзывы:</h3>
      <ul>
        {reviews.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
};
