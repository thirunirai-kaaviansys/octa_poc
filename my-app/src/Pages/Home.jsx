import React, { useEffect, useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import "./Home.css";

function Home() {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (authState?.isAuthenticated) {
      oktaAuth.getUser().then((info) => {
        setUserInfo(info);
        console.log(info)
      });
    }
  }, [authState, oktaAuth]);

  if (!authState?.isAuthenticated) {
    return <div>Please log in</div>;
  }

  if (!userInfo) {
    return <div>Loading user info...</div>;
  }

  return (
    <div className="home">
      <h1>Welcome, {userInfo.name}!</h1>
      <div onClick={() => oktaAuth.signOut()} className="sample-button">
        Logout
      </div>
    </div>
  );
}

export default Home;
