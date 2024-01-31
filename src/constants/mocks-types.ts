export type TRestaurants = TRestaurant[];

export type TRestaurant = {
  id: string;
  name: string;
  menu: TMenu;
  reviews: TReviews;
}

export type TMenu = TMenuItems[];

export type TMenuItems = {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}

export type TReviews = TReview[];

export type TReview = {
  id: string;
  user: string;
  text: string;
  rating: number;
}

