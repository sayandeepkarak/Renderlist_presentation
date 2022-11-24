import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import {
  AuthBlock,
  AuthButtonArea,
  AuthJumpLink,
  AuthViewArea,
} from "../../Components/styles/Div";
import { FacebookButton } from "../../Components/styles/Button";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { LogoImage } from "../../Components/styles/Image";
import Logo from "../../Assets/Images/Logo.png";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { handlegooglelogin, handlefacebooklogin, currentuser } =
    useAuthContext();

  useEffect(() => {
    currentuser !== null && navigate(-1);
  }, [currentuser, navigate]);

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
              <span>Log in with facebook</span>
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
