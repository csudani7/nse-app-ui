import React, { useEffect, useCallback } from "react";
import { useRecoilValue } from "recoil";
import { useHistory } from "react-router-dom";
import { userProfileData } from "../recoils/profile";

export default function (WrapperComponent) {
  function Authenticate(props) {
    const history = useHistory();
    const profileData = useRecoilValue(userProfileData);

    const handleRedirect = useCallback(() => {
      if (!profileData && !localStorage.getItem("nseAuthToken")) {
        history.push("/account");
      }
    }, [history, profileData]);

    useEffect(() => {
      handleRedirect();
    }, [handleRedirect]);

    return profileData ? <WrapperComponent {...props} /> : "";
  }

  return Authenticate;
}
