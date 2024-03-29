import { todoReducer } from '../../../Components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en todoReducer', () => {
    test('Debe de retornar el estado por defecto', () => {
        const state = todoReducer( demoTodos, {} );
        expect( state ).toEqual( demoTodos );
    });

    test('Debe de agregar un todo', () => {
        const payload = {
            id: 3,
            desc: 'Aprender Node',
            done: false
        };

        const todo = {
            type: 'add',
            payload: payload
        };

        const state = todoReducer( demoTodos, todo );
        expect( state ).toEqual( [ ...demoTodos, payload ] );
    });
    
    test('Debe de borrar un TODO', () => {
        const action = {
            type: 'delete',
            payload: 1
        }

        const state = todoReducer( demoTodos, action );
        expect( state.length ).toBe( 1 );
        expect( state ).toEqual( [ demoTodos[1] ] );
    });
    
    test('Debe de hacer el TOGGLE del TODO', () => {
        const action = {
            type: 'toggle',
            payload: 1
        }

        const state = todoReducer( demoTodos, action );
        expect( state[0].done ).toBe( true );
        expect( state[1] ).toEqual( demoTodos[1] );
    });
    
});
