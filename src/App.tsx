import { FC, useState } from "react";
import { Layout } from "./components/layout/component";
import { RestaurantPage } from "./components/pages/restaurant-page/component";
import { UserContext } from "./components/contexts/user";
import { AuthUser, USER_INITIAL_STATE } from "./constants/auth-user";
import { createPortal } from "react-dom";
import { AuthModal } from "./components/auth-modal/component";
import { ModalContext } from "./components/contexts/modal";

export const App: FC = () => {
  const [user, setUser] = useState<AuthUser>(USER_INITIAL_STATE);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal, setUser }}>
      <UserContext.Provider value={user}>
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
    </ModalContext.Provider>
  );
};
