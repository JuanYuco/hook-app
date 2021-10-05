import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas sobre useCounter', () => {
    test('Debe de retornar valores por defecto', () => {
        const { result } = renderHook( () => useCounter() );
        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');
    });

    test('Debe retornar el valor por defecto que establesco', () => {
        const value = 100;
        const { result } = renderHook( () => useCounter( value ) );
        expect( result.current.counter ).toBe( value );
    });

    test('Debe de incrementar el counter en 1', () => {
        const value = 100;
        const { result } = renderHook( () => useCounter( value ) );
        const { increment } = result.current;
        act( () => {
            increment();
        });

        expect( result.current.counter ).toBe( value + 1 );
    });
    
    test('Debe de decrementar el counter en 1 ', () => {
        const value = 100;
        const { result } = renderHook( () => useCounter( value ) );
        const { decrement } = result.current;
        act( () => {
            decrement();
        });

        expect( result.current.counter ).toBe( value - 1 );
    });

    test('Deber retornar el mismo valor por defecto', () => {
        const value = 100;
        const { result } = renderHook( () => useCounter( value ) );
        const { increment, reset } = result.current;
        act( () => {
            increment();
            reset();
        });

        expect( result.current.counter ).toBe( value );
    });
    
     
})
