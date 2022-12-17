import React from "react";
import { NavButtonArea } from "../../Components/styles/Div";
import { useAuthContext } from "../../Context/AuthContext";
import AuthButtonBlock from "./AuthButtonBlock";
import NormalBlock from "./NormalBlock";

const NavBarButton = () => {
  const { currentuser } = useAuthContext();

  return (
    <>
      <NavButtonArea>
        {currentuser === null ? (
          <>
            <AuthButtonBlock />
          </>
        ) : (
          <>
            <NormalBlock />
          </>
        )}
      </NavButtonArea>
    </>
  );
};

export default NavBarButton;
