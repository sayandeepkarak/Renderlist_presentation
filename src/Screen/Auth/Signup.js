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
import { useAuthContext } from "../../Context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();

  const { handlegooglesignup, handlefacebooksignup } = useAuthContext();

  const handle_google_sign = () => {
    handlegooglesignup();
  };
  const handle_facebook_sign = () => {
    handlefacebooksignup();
  };

  return (
    <>
      <AuthBlock>
        <AuthViewArea>
          <LogoImage src={Logo} />
          <AuthButtonArea>
            <GoogleButton
              onClick={handle_google_sign}
              label="Sign up with Google"
            />
            <FacebookButton disabled={true} onClick={handle_facebook_sign}>
              <FacebookOutlinedIcon />
              Sign up with facebook
            </FacebookButton>
          </AuthButtonArea>
          <AuthJumpLink>
            Already have an account ?{" "}
            <AuthJumpLink
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Login Here
            </AuthJumpLink>
          </AuthJumpLink>
        </AuthViewArea>
      </AuthBlock>
    </>
  );
};

export default Signup;
