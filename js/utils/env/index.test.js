import { isInTestEnv } from "./index"

describe('IsInTestEnv Unit Test Suites', () => {
    it('should be in test env', () => {
        expect(isInTestEnv()).toBeTruthy()
    })

    it('should not be in test env', () => {
        process.env.NODE_ENV = 'prd'
        expect(isInTestEnv()).toBeFalsy()
    })
})
