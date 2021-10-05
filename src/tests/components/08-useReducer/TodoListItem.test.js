import { shallow } from "enzyme";
import { TodoListItem } from "../../../Components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en <TodoListItem />', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(
        <TodoListItem 
            todo={ demoTodos[1] }
            index={ 1 }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />
    );
    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de llamar la función handleDelete', () => {
        wrapper.find('button') .simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[1].id );
    });
    
    test('Debe de llamar la función handleToggle', () => {
        wrapper.find('p') .simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[1].id );
    });
    
    test('Debe de mostrar el texto correctamente', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(`2. ${ demoTodos[1].desc }`)
    });
    
    test('Debe de tener la clase complete si el TODO.done = true', () => {
        let todo = demoTodos[0];
        todo.done = true;
        const wrapper = shallow(
            <TodoListItem 
                todo={ todo }
                index={ 1 }
                handleDelete={ handleDelete }
                handleToggle={ handleToggle }
            />
        );

        expect( wrapper.find('p').hasClass('complete') ).toBe(true);
    });
    
});
