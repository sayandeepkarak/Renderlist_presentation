import React from "react";
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

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <AuthBlock>
        <AuthViewArea>
          <LogoImage src={Logo} />
          <AuthButtonArea>
            <GoogleButton label="Log in with Google" />
            <FacebookButton>
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
