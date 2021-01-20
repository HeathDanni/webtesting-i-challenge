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
})