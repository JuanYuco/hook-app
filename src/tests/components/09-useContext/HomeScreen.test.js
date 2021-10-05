import { mount } from "enzyme";
import { HomeScreen } from "../../../Components/09-useContext/HomeScreen";
import { UserContext } from "../../../Components/09-useContext/UserContext";

describe('Pruebas en <HomeScreen />', () => {
    const user = {
        name: 'Juan Fernando Yuco Jimenez',
        email: 'juanfernandoyuco@gmail.com'
    }

    const wrapper = mount( 
        <UserContext.Provider value={ user }>
            <HomeScreen /> 
        </UserContext.Provider>
    );

    test('Debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
})
