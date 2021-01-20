const { TestScheduler } = require('jest');
const enhancer = require('./enhancer.js');
// test away!

describe("Enhancer tests", () => {
    it("repairs", () => {
        expect(enhancer.repair({
            name: "Item",
            durability: 10,
            enhancement: 5
        }))
            .toEqual({
                name: "Item",
                durability: 100,
                enhancement: 5
            })
    })

    it("succeeds", () => {
        expect(enhancer.success({
            name: "Item",
            durability: 10,
            enhancement: 5
        }))
            .toEqual({
                name: "Item",
                durability: 10,
                enhancement: 6
            })
        expect(enhancer.success({
            name: "Item",
            durability: 10,
            enhancement: 20
        }))
            .toEqual({
                name: "Item",
                durability: 10,
                enhancement: 20
                })
        
    })

    it("fails", () => {

    })

})