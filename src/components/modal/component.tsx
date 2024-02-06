import { FC, useContext } from "react";
import { createPortal } from "react-dom";
import { AuthModal } from "../auth-form/component";
import { UserContext } from "../../contexts/user";

type Props = {
  state: boolean;
  setState: (state: boolean) => void;
};

export const Modal: FC<Props> = ({ state, setState }) => {
  const { setUser } = useContext(UserContext);

  return (
    <>
      {state &&
        createPortal(
          <AuthModal
            onLogin={(authUser) => {
              setUser(authUser);
              setState(!state);
            }}
            onClose={() => setState(!state)}
          />,
          document.getElementById("modal-container")!
        )}
    </>
  );
};
