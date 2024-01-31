import { FC } from "react";
import { Layout } from "./components/layout/component";
import { RestaurantPage } from "./components/pages/restaurant-page/component";

export const App: FC = () => {
  return (
    <Layout className="layout">
      <div className="container">
        <RestaurantPage />
      </div>
    </Layout>
  );
};
