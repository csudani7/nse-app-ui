import React from "react";

function NotFoundPage(props) {
  const { history } = props;
  return (
    <>
      <button onClick={() => history.push("/")}>Back to home</button>
    </>
  );
}

export default NotFoundPage;
