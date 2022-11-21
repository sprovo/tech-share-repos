import React from "../react";
import Header from "./components/HeaderSection";
import { reRender } from "../react-dom/renderer";
import { handleStateUpdateCb } from "../react/utils/handleStateUpdateCb";
import Counter from "./components/Counter";
import "./styles.css";

const hooksState: any[] = [];
let cursorIndex = 0;

function resetCursorIndex() {
  cursorIndex = 0;
}

function App() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  useEffect(() => {
    console.log({ counterOne, counterTwo });
  }, []);

  return (
    <main>
      <Header children="Use Hooks Clone" />
      <Counter
        name="Counter One"
        clickHandler={() => setCounterOne(counterOne + 1)}
        count={counterOne}
      />
      <Counter
        name="Counter Two"
        clickHandler={() => setCounterTwo(counterTwo + 1)}
        count={counterTwo}
      />
    </main>
  );
}

export function useState<T>(initialState: T): [T, (newState: T) => void] {
  // frozenCursor acts as an inclosed (via a closure) value to track each useState instances index within the hooksState array.
  let frozenCursor = cursorIndex;
  hooksState[frozenCursor] =
    hooksState[frozenCursor] || handleStateUpdateCb(initialState);

  const setState = (newState: T): void => {
    // NOTE: Logs each hooks instances index
    // console.log(`Hooks Index ${frozenCursor}`);

    hooksState[frozenCursor] = handleStateUpdateCb(newState);
    // Resets the cursor so the proper state can be used via index on next render.
    resetCursorIndex();
    reRender();
  };

  // Increments the cursor so the next useState call gets its own index.
  cursorIndex++;
  return [hooksState[frozenCursor], setState];
}

export function useEffect(
  cb: () => void,
  depsArray: any[] | undefined = undefined
) {
  const oldDeps = hooksState[cursorIndex];
  let hasDepsChanged = true; // Allows for runs with no deps array

  if (oldDeps && depsArray) {
    hasDepsChanged = depsArray.some((dependency, index) => {
      return !Object.is(dependency, oldDeps[index]);
    });
  }

  if (hasDepsChanged) cb();
  hooksState[cursorIndex] = depsArray;
}

export default App;
