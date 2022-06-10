import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp"


describe('Testing the heroes functions', () => {

    test('should return a hero by id', () => { 

        const id = 2;
        
        const heroTest = getHeroeById(id);

        expect(heroTest).toEqual({
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        })

     })
    test('should return a undefined if the hero id do not exist', () => { 

        const id = 10;
        
        const heroTest = getHeroeById(id);

        expect(heroTest).toBe(undefined)

     })
    test('should return the heroes by owner = Marvel', () => { 

        const owner = 'Marvel';
        
        const heroTest = getHeroesByOwner(owner);

        console.log(heroTest)

        expect(heroTest).toEqual([
            {"id": 2, "name": "Spiderman", "owner": "Marvel"}, 
            {"id": 5, "name": "Wolverine", "owner": "Marvel"}]);

     })

})

