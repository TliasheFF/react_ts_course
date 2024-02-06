import { FC, useState } from "react";
import { Layout } from "./components/layout/component";
import { RestaurantPage } from "./components/pages/restaurant-page/component";
import { UserContext } from "./contexts/user";
import { Provider } from "react-redux";
import { store } from "./redux";

export const App: FC = () => {
  const [user, setUser] = useState<string>("");

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout className="layout">
          <div className="container">
            <RestaurantPage />
          </div>
        </Layout>
      </UserContext.Provider>
    </Provider>
  );
};
