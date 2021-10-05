import { shallow } from "enzyme"
import { HookApp } from "../HookApp";

describe('Pruebas sobre el componente <HookApp />', () => {
    test('El componente debe pintarse correctamente', () => {
        const wrapper = shallow(<HookApp />);
        expect( wrapper ).toMatchSnapshot();
    });
    
})
