import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import {
  AuthBlock,
  AuthButtonArea,
  AuthJumpLink,
  AuthViewArea,
} from "../../Components/Div";
import { FacebookButton } from "../../Components/Button";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { LogoImage } from "../../Components/Image";
import Logo from "../../Assets/Images/Logo.png";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const {
    handlegooglelogin,
    handlefacebooklogin,
    handleLogout,
  } = useAuthContext();

  useEffect(() => {
    handleLogout();
  }, []);

  const handle_google_login = () => {
    handlegooglelogin();
  };

  const handle_facebook_login = () => {
    handlefacebooklogin();
  };

  return (
    <>
      <AuthBlock>
        <AuthViewArea>
          <LogoImage src={Logo} />
          <AuthButtonArea>
            <GoogleButton
              label="Log in with Google"
              onClick={handle_google_login}
            />
            <FacebookButton onClick={handle_facebook_login}>
              <FacebookOutlinedIcon />
              Log in with facebook
            </FacebookButton>
          </AuthButtonArea>
          <AuthJumpLink>
            Don't have an account ?{" "}
            <AuthJumpLink
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => navigate("/signup")}
            >
              Signup here
            </AuthJumpLink>
          </AuthJumpLink>
        </AuthViewArea>
      </AuthBlock>
    </>
  );
};

export default Login;
