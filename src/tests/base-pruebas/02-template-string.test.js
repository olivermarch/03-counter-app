import { getSaludo } from "../../base-pruebas/02-template-string";
import '@testing-library/jest-dom';


describe('Testing in the file 02-template-string.test.js', () => {
    
    test('getSaludo should return Hola Oliver', () => { 

        const nombre = 'Oliver';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola Oliver') ;

    });

    test('getSaludo should return Hola Carlos, if have no args', () => { 


        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos') ;

    })
});

