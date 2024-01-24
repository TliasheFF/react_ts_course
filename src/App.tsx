import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";
import { restaurants } from "./constants/mocks";

export const App = () => {
  return (
    <Layout>
      <div className="grid_container">
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </Layout>
  );
};
