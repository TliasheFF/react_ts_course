import { FC, useState } from "react";
import { Layout } from "./components/layout/component";
import { RestaurantPage } from "./components/pages/restaurant-page/component";
import { UserContext } from "./components/contexts/user";
import { createPortal } from "react-dom";
import { AuthModal } from "./components/auth-modal/component";

export const App: FC = () => {
  const [user, setUser] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ user, setUser, showModal, setShowModal }}>
      <Layout className="layout">
        {showModal &&
          createPortal(
            <AuthModal
              onLogin={(authUser) => {
                setUser(authUser);
                setShowModal(!showModal);
              }}
              onClose={() => setShowModal(!showModal)}
            />,
            document.body
          )}
        <div className="container">
          <RestaurantPage />
        </div>
      </Layout>
    </UserContext.Provider>
  );
};
