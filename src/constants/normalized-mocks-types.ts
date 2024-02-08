export type NormalizedRestaurants = NormalizedRestaurant[]

export type NormalizedRestaurant = {
  id: string;
  name: string;
  menu: string[];
  reviews: string[];
}

export type NormalizedDishes = NormalizedDish[]

export type NormalizedDish = {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}

export type NormalizedReviews = NormalizedReview[]

export type NormalizedReview = {
  id: string;
  userId: string;
  text: string;
  rating: number;
}

export type NormalizedUsers = NormalizedUser[]

export type NormalizedUser = {
  id: string;
  name: string;
}
