import React, { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
// import { useSelector } from 'react-redux';

export default function (WrapperComponent) {
  function Authenticate(props) {
    const history = useHistory();
    // const authSelector = useSelector(selector => selector.auth);
    // const { isAuthenticated } = authSelector;

    const handleRedirect = useCallback(() => {
      // if (!isAuthenticated && !localStorage.getItem("studearn")) {
      history.push("/account");
      // }
    }, [history]);

    useEffect(() => {
      handleRedirect();
    }, [handleRedirect]);

    return <WrapperComponent {...props} />;
  }

  return Authenticate;
}
