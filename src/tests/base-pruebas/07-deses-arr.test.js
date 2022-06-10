import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('Testing the desestruration', () => {

    test('should return an string an a number', () => { 
        
        const arreglo = retornaArreglo();
        const [letras, numeros] = retornaArreglo();
    

        expect(arreglo).toEqual(['ABC', 123]);
        
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
        

     })

})

