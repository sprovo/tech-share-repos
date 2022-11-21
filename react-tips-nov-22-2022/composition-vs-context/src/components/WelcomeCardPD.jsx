import React from "react";

export function WelcomeCardPD({ userName }) {
  return (
    <div>
      <h1>Welcome - via Prop Drilling</h1>
      <WelcomeMessagePD userName={userName} />
    </div>
  );
}

export function WelcomeMessagePD({ userName }) {
  return (
    <div>
      <p>Hi {userName}!</p>
      <p>I see you used prop drilling to tell us your name. Long journey!</p>
    </div>
  );
}
