import App from "../src/App";

function render(reactElementOrPrimitive: any, container: HTMLElement) {
  // Handles rendering children that are primitive types.
  if (["string", "number"].includes(typeof reactElementOrPrimitive)) {
    const node = String(reactElementOrPrimitive);
    container.appendChild(document.createTextNode(node));
    return;
  }

  // Creates a  DOM element from React Element's tag. ex: h1.
  const domElement = document.createElement(reactElementOrPrimitive.tag);

  if (reactElementOrPrimitive.props) {
    // Injects the React Elements props onto the corresponding DOM element.
    Object.keys(reactElementOrPrimitive.props)
      .filter((prop) => prop !== "children")
      .forEach((prop) => {
        if (prop.startsWith("on")) {
          // Converts event handlers to lower case to match Web API standard.
          domElement[prop.toLowerCase()] = reactElementOrPrimitive.props[prop];
        } else if (prop === "style") {
          const stylesObj = reactElementOrPrimitive.props[prop];
          for (const [key, value] of Object.entries(stylesObj)) {
            // Applies inline styles to owner DOM object.
            domElement.style[key] = value;
          }
        } else {
          domElement[prop] = reactElementOrPrimitive.props[prop];
        }
      });
  }

  // Renders the React elements children recursively by using render inside itself.
  if (reactElementOrPrimitive.props.children) {
    reactElementOrPrimitive.props.children.forEach((child) =>
      render(child, domElement)
    );
  }
  // Appends completed element to container element.
  container.appendChild(domElement);
}

// Re-renders the UI after a state change.
function reRender() {
  // The roots first child gets removed because it's rendered state is stale.
  document.querySelector("#root")?.firstChild?.remove();
  render(App(), document.querySelector("#root") as HTMLElement);
}

export default render;
export { reRender };
