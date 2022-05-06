import { isInTestEnv } from "./index"

describe('Is in test env Test suites', () => {
    it('should return true', () => {
        expect(isInTestEnv()).toBeTruthy()
    })

    it('should return false', () => {
        process.env.NODE_ENV = 'prd'
        expect(isInTestEnv()).toBeFalsy()
    })
})
