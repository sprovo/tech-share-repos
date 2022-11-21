import React from "react";

export function WelcomeCardCP({ children }) {
  return (
    <div>
      <h1>Welcome - via Context</h1>
      <WelcomeMessageCP>{children}</WelcomeMessageCP>
    </div>
  );
}

export function WelcomeMessageCP({ children }) {
  return (
    <div>
      <p>Hi {children}!</p>
      <p>I see you used composition to tell us your name.</p>
    </div>
  );
}
