


describe('Testing in the file demo.test.js', () => {
    
    test('should be equals both strings', () => { 
        const mensaje = 'Hola Mundo';

        const mensaje2 = `Hola Mundo`;

        expect(mensaje).toBe(mensaje2);
    })
});

