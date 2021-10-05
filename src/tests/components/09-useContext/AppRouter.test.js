import { mount } from "enzyme"
import { AppRouter } from "../../../Components/09-useContext/AppRouter"
import { UserContext } from "../../../Components/09-useContext/UserContext";

describe('Purebas en <AppRouter />', () => {
    const user = { id: 1, name: 'Juan Fernando Yuco Jimenez' }
    const wrapper = mount( 
        <UserContext.Provider value={ { user } }>
            <AppRouter />
        </UserContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
})
