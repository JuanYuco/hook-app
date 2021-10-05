import { shallow } from "enzyme";
import { RealExampleRef } from "../../../Components/04-useRef/RealExampleRef";

describe('Pruebas en <RealExampleRef />', () => {
    const wrapper = shallow( <RealExampleRef /> );
    test('Debe mostrarse correctamente', () => {
        expect( wrapper ) .toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false);
    });

    test('should ', () => {
        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true);
    });
    
});
