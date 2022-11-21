import React, { useState } from "react";
import { WelcomeCardPD } from "./components/WelcomeCardPD";
import { WelcomeCardCT } from "./components/WelcomeCardCT";
import { WelcomeCardCP } from "./components/WelcomeCardCP";

import "./components/styles.css";

export default function App() {
  const [userName] = useState("John Appleseed");

  return (
    <main>
      {/* Prop Drilling */}
      <WelcomeCardPD userName={userName} />
      <span>=================================</span>
      {/* useContext */}
      <WelcomeCardCT />
      <span>=================================</span>
      {/* Composition */}
      <WelcomeCardCP>{userName}</WelcomeCardCP>
    </main>
  );
}
