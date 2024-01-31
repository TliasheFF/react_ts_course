export type InitialValues = {
    name: string | number;
    text: string | number;
    rating: string | number;
  };

export type Action = {
    type: string;
    payload: string | number;
  };