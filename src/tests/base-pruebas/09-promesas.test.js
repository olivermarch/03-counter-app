import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe('Testing Promises', () => {

    test('should return a hero async', (done) => { 


        const id = 1;

        getHeroeByIdAsync(id)
        .then( hero => {

            expect(hero).toBe(heroes[0]);
            done();
        });

     });

     test('should get an error if the heros id dont exist', (done) => { 

        const id = 10;

        getHeroeByIdAsync(id)
        .catch( error => {

            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });

      })
    

})

