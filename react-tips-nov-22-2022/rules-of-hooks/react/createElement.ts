function createElement(tag, props, ...children) {
  if (typeof tag === "function") {
    return tag(props);
  }

  const newElement = { tag, props: { ...props, children } };
  return newElement;
}

export default createElement;
