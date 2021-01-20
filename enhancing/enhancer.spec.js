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
        expect(enhancer.fail({
            name: "Item",
            durability: 10,
            enhancement: 14
        }))
            .toEqual({
                name: "Item",
                durability: 5,
                enhancement: 14
            })

        expect(enhancer.fail({
            name: "Item",
            durability: 10,
            enhancement: 16
        }))
            .toEqual({
                name: "Item",
                durability: 0,
                enhancement: 16
            })
    
        expect(enhancer.fail({
            name: "Item",
            durability: 10,
            enhancement: 18
        }))
            .toEqual({
                name: "Item",
                durability: 0,
                enhancement: 17
            })
    })
})


// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).