import { FC, useState } from "react";
import { Layout } from "./components/layout/component";
import { RestaurantPage } from "./components/pages/restaurant-page/component";
import { UserContext } from "./components/contexts/user";

export const App: FC = () => {
  const [user, setUser] = useState<string>("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout className="layout">
        <div className="container">
          <RestaurantPage />
        </div>
      </Layout>
    </UserContext.Provider>
  );
};
