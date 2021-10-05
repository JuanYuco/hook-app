import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../Components/03-examples/MultipleCustomHooks";
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas e <MultipleCustomHooks />', () => {
    test('Debe mostrarse correctamente ', () => {
        useCounter.mockReturnValue({
            counter: 1,
            increment: () => {}
        });

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de mostrar la información', () => {
        useCounter.mockReturnValue({
            counter: 1,
            increment: () => {}
        });
        
        const author = 'Yuco';
        const quote = 'Solo disfruta la vida y se disfruta jugando Zelda';
        useFetch.mockReturnValue({
            data: [{
                author: author,
                quote: quote
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect( wrapper.find('.alert').exists() ).toBe(false);
        expect( wrapper.find('.mb-0').text().trim() ).toBe(quote);
        expect( wrapper.find('footer').text().trim() ).toBe(author);
    });
    
})
