import * as React from "react";
import renderer from "react-test-renderer";
import App from "../src/App";
it(`renders correctly`, () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree.children.length).toBe(1);
});