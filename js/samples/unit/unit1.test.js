import { sayHello } from './unit1'

describe('SayHello unit Test Suites', () => {
    it('should return "Hello, World"', () => {
        expect(sayHello()).toBe("Hello, World")
    })

    it('should return "Hello, Baptiste"', () => {
        expect(sayHello("Baptiste")).toBe("Hello, Baptiste")
    })

    it('should not return "Hello, Fabien"', () => {
        expect(sayHello("Baptiste")).not.toBe("Hello, Fabien")
    })

    it('should return a string', () => {
        expect(typeof (sayHello())).toBe('string')
    })

})
