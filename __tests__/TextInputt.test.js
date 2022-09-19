// // ...
// import { render, act, fireEvent } from 'react-native-testing-library'
import TextInputt from '../src/components/TextInputt'
import renderer from "react-test-renderer";
// it ('does stuff', () => {
//   const mock = jest.fn()
//   const component = render(<Te onSearchTextChange={mock}/>)
//   fireEvent.changeText(component.findByType(TextInput), 'test')
//   expect(mock).toHaveBeenCalledWith('test')
// })

describe('Your component', () => {
    it('Component: renders correctly', () => {
    const tree = renderer.create(<TextInputt/>).toJSON();
    expect(tree).toMatchSnapshot();
 });
 it('Has  TextInput', () => {
  const tree2 = renderer.create(<TextInputt/>).toJSON();
  expect(findElement(tree2, '#email')).toBeDefined();
});

});

const findElement = function (tree2, element) {
    let result = undefined
    console.warn(tree2.children)
    for(node in tree2.children){
    if(tree2.children[node].props.testID = element) {
    result = true
    }
   }
    return result
  }