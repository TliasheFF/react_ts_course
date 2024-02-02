import { FC, useState } from "react";
import { Layout } from "./components/layout/component";
import { RestaurantPage } from "./components/pages/restaurant-page/component";
import { UserContext } from "./components/contexts/user";
import { Button } from "./components/button/component";
import { AuthUsers, USER_INITIAL_STATE, authorizedUser } from "./constants/auth-user";
import { createPortal } from "react-dom";
import { AuthModal } from "./components/auth-modal/component";

export const App: FC = () => {
  const [user, setUser] = useState<AuthUsers>(USER_INITIAL_STATE);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <UserContext.Provider value={user}>
      <Layout className="layout">
        <div className="login">
          {!user.authorized && (
            <Button
              onClick={() => {
                setShowModal(true);
              }}
              size="s"
            >
              LogIn
            </Button>
          )}

          {showModal &&
            createPortal(
              <AuthModal onLogin={() => setUser(authorizedUser)} onClose={() => setShowModal(false)} />,
              document.body
            )}

          {user.authorized && (
            <div className="logout">
              <p>{user.fullName}</p>
              <Button onClick={() => setUser(USER_INITIAL_STATE)} size="s">
                LogOut
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
