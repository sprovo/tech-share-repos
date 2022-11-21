import React from "../../react";

function Header(props: any) {
  return (
    <section>
      <h1>{props.children}</h1>
      <span>Use the buttons below to increment the counter.</span>
      <p>Check the console to watch the index!</p>
    </section>
  );
}

export default Header;
