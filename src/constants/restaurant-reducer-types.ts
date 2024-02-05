export type InitialValues = {
    text: string | number;
    rating: string | number;
  };

export type ReviewFormAction = {
    type: string;
    payload: string | number;
  };