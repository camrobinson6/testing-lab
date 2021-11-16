const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require('./functions')

    describe('returnTwo', () => {
       let result = returnTwo(2)
       test('returnTwo should equal 2', () => {
       expect(result).toEqual(2)
    })

    describe('Greeting Test', () => {
        let result = greeting('James')
        test('Greeting James', () => expect(result).toEqual('Hello, James'))
    })

    describe('Greetings Test', () => {
        let result = greeting('Jill')
        test('Greeting Jill', () => expect(result).toEqual('Hello, Jill'))
    })
})
    
describe('add tests', () => {
        test('add should equal 3', () => {
            let result = add(1, 2)
            expect(result).toEqual(3)

        })
    })
        describe('add tests', () => {
            test('add should equal 14', () => {
                let result = add(5, 9)
                expect(result).toEqual(14)
            })
        })

        describe('multiply tests', () => {
            test('multiply should equal 8', () => {
                let result = multiply(4, 2)
                expect(result).toEqual(8)
    
            })
        })
            describe('multiply tests', () => {
                test('multiply should equal 45', () => {
                    let result = multiply(5, 9)
                    expect(result).toEqual(45)
                })
            })

            describe('divide tests', () => {
                test('divide should equal 2', () => {
                    let result = divide(4, 2)
                    expect(result).toEqual(2)
        
                })
            })
                describe('divide tests', () => {
                    test('divide should equal 14', () => {
                        let result = divide(21, 7)
                        expect(result).toEqual(3)
                    })
                })

                describe('subtract tests', () => {
                    test('subtract should equal 8', () => {
                        let result = subtract(10, 2)
                        expect(result).toEqual(8)
            
                    })
                })
                    describe('subtract tests', () => {
                        test('subtract should equal 14', () => {
                            let result = subtract(16, 2)
                            expect(result).toEqual(14)
                        })
                    })
        