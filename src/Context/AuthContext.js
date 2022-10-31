import React, { useContext, useState } from "react";
import { createContext } from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../Firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUserPlaylists } from "../App/UserPlaylists";
import { useSnackbar } from "notistack";
import Cookies from "js-cookie";

const authContext = createContext();

export const AuthContext = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [currentuser, setcurrentuser] = useState(null);
  const [load, setload] = useState(false);
  const googleprovider = new GoogleAuthProvider();
  const facebookprovider = new FacebookAuthProvider();

  const handleprovider = async (func, provider) => {
    try {
      let data = await signInWithPopup(auth, provider);
      data !== undefined && func(data);
    } catch (exp) {
      enqueueSnackbar("Some technical issue occured", {
        variant: "error",
      });
    }
    // signInWithPopup(auth, provider)
    //   .then((res) => {
    //     data = res;
    //   })
    //   .then(() => {
    //     data !== undefined && func(data);
    //   })
    //   .catch((exp) => {
    //     enqueueSnackbar("Some technical issue occured", {
    //       variant: "error",
    //     });
    //   });
  };

  const createUser = async (responsedata) => {
    try {
      const allusers = await getDocs(collection(db, "AllAccounts"));
      const userdata = allusers.docs.map((doc) => {
        return { ...doc.data(), Id: doc.id };
      });
      const found = userdata.some((e) => e.email === responsedata.user.email);
      if (!found) {
        await addDoc(collection(db, "AllAccounts"), {
          name: responsedata.user.displayName,
          email: responsedata.user.email,
          photoUrl: responsedata.user.photoURL,
        });
        const getcurrent = await getDocs(collection(db, "AllAccounts"));
        const currentdata = getcurrent.docs
          .map((e) => {
            return {
              ...e.data(),
              id: e.id,
            };
          })
          .filter((data) => {
            return data.email === responsedata.user.email;
          });
        await addDoc(
          collection(db, `AllAccounts/${currentdata[0].id}`, "Playlists"),
          {
            UserName: responsedata.user.displayName,
            Views: 0,
            Title: "Demo Playlist | RenderList",
            Thumbnail: "https://i.ytimg.com/vi/jCY6DH8F4oc/maxresdefault.jpg",
            Hide: true,
            Items: [
              {
                url: "https://youtu.be/o3KXwe-7A-Is",
                id: "o3KXwe-7A-Is",
                thumbnail:
                  "https://i.ytimg.com/vi/o3KXwe-7A-I/maxresdefault.jpg",
                channelTitle: "ATLAST",
                videoTitle:
                  "Deep Chills - Run Free (feat. IVIE) (Official Audio) TikTok #shoechange",
                publishedAt: "2017-08-18T13:31:53Z",
                view: 50297316,
              },
            ],
          }
        );
        navigate("/login");
        enqueueSnackbar("Thank you for register with Renderlist", {
          variant: "success",
        });
      } else {
        enqueueSnackbar("Account already registered, try to login", {
          variant: "error",
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const loginuser = async (responsedata) => {
    try {
      const allusers = await getDocs(collection(db, "AllAccounts"));
      const userdata = allusers.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      const found = userdata.some((e) => e.email === responsedata.user.email);
      if (found) {
        const founduser = userdata.filter((e) => {
          return e.email === responsedata.user.email;
        })[0];
        setcurrentuser(founduser);
        Cookies.set("log-key", JSON.stringify(founduser), {
          expires: 2,
          path: "/",
        });
        handleFetchuserData(founduser.id);
        enqueueSnackbar("Successfully logged in", {
          variant: "success",
        });
        navigate("/home");
      } else {
        enqueueSnackbar("User not found", {
          variant: "error",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleStableLogin = () => {
    const data = Cookies.get("log-key");
    if (data !== undefined) {
      setcurrentuser(JSON.parse(data));
      handleFetchuserData(data.id);
    }
  };

  const handleFetchuserData = async (userid) => {
    try {
      setload(true);
      const userPlaylist = await getDocs(
        collection(db, `AllAccounts/${userid}`, "Playlists")
      );
      dispatch(fetchUserPlaylists(userPlaylist.docs));
      setload(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handlegooglesignup = () => {
    handleprovider(createUser, googleprovider);
  };

  const handlefacebooksignup = () => {
    handleprovider(createUser, facebookprovider);
  };

  const handlegooglelogin = () => {
    handleprovider(loginuser, googleprovider);
  };

  const handlefacebooklogin = () => {
    handleprovider(loginuser, facebookprovider);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setcurrentuser(null);
      Cookies.remove("log-key");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    currentuser,
    load,
    handleFetchuserData,
    handleStableLogin,
    handleLogout,
    handlegooglesignup,
    handlefacebooksignup,
    handlegooglelogin,
    handlefacebooklogin,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(authContext);
};
