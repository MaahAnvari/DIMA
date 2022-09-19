import * as React from "react";
import ProfileButton from "../src/components/ProfileButton";
import renderer from "react-test-renderer";
it(`renders correctly`, () => {
  const tree = renderer.create(<ProfileButton>Submite</ProfileButton>);
  expect(tree).toMatchSnapshot();
});