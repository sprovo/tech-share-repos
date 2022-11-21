import React, { createContext, useContext } from "react";

export const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export function WelcomeCardCT() {
  return (
    <UserContext.Provider value={{ name: "John Appleseed" }}>
      <div>
        <h1>Welcome - via Context</h1>
        <WelcomeMessageCT />
      </div>
    </UserContext.Provider>
  );
}

export function WelcomeMessageCT() {
  const user = useUser();

  return (
    <div>
      <p>Hi {user.name}!</p>
      <p>I see you used contexts to tell us your name.</p>
    </div>
  );
}
