import { FC, useState } from "react";
import { Layout } from "./components/layout/component";
import { RestaurantPage } from "./components/pages/restaurant-page/component";
import { UserContext } from "./components/contexts/user";
import { Button } from "./components/button/component";
import { AuthUser, USER_INITIAL_STATE } from "./constants/auth-user";
import { createPortal } from "react-dom";
import { AuthModal } from "./components/auth-modal/component";

export const App: FC = () => {
  const [user, setUser] = useState<AuthUser>(USER_INITIAL_STATE);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <UserContext.Provider value={user}>
      <Layout className="layout">
        <div className="login">
          {!user.fullName && (
            <Button
              onClick={() => {
                setShowModal(true);
              }}
              size="m"
            >
              Login
            </Button>
          )}

          {showModal &&
            createPortal(
              <AuthModal
                onLogin={(authUser) => {
                  return setUser(authUser), setShowModal(false);
                }}
                onClose={() => setShowModal(false)}
              />,
              document.body
            )}

          {user.fullName && (
            <div className="logout">
              <p>{user.fullName}</p>
              <Button onClick={() => setUser(USER_INITIAL_STATE)} size="m">
                Logout
              </Button>
            </div>
          )}
        </div>

        <div className="container">
          <RestaurantPage />
        </div>
      </Layout>
    </UserContext.Provider>
  );
};
