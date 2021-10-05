import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'Juan Fernando Yuco',
        email: 'juanfernandoyuco@gmail.com'
    };

    test('Debe de retornar el formulario por defecto', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ value, handleInputChange, reset ] = result.current;
        expect( value ).toEqual(initialForm);
        expect( typeof handleInputChange ).toBe('function');
        expect( typeof reset ).toBe('function');
    });

    test('Debe de cambiar el valor del formulario (Cambiar name)', () => {
        const value = 'Link';
        const e = { target: { name: 'name', value } };
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;
        act( () => {
            handleInputChange( e );
        });

        expect( result.current[0] ).toEqual({ ...initialForm, name: value });
    });
    
    test('Debe de re-establecer el formulario con RESET', () => {
        const e = { target: { name: 'name', value: 'Link' } };
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current;
        act( () => {
            handleInputChange( e );
            reset();
        });

        expect( result.current[0] ).toEqual( initialForm );
    });
    
    
})
