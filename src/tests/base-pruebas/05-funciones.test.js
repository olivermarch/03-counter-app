import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Testing functions', ()  => {


    test('should return an object getUser method', () => { 

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        //toEqual para comparar 2 objetos con sus propiedades
        expect(user).toEqual(userTest);
     });

     test('should return an object getUsuarioActivo method', () => { 

        const userTest = {
            uid: 'ABC567',
            username: 'Oliver'
        };
        const user = getUsuarioActivo('Oliver');
        //toEqual para comparar 2 objetos con sus propiedades
        expect(user).toEqual(userTest);
     });

})