import { retrieveSensorsData } from "./sensorsApi"
import { data } from "../../../data/mock-homepage-data"

describe('sensorApi Unit Test Suite', () => {
    it('Should equal to the mocked data', () => {
        expect(retrieveSensorsData()).toEqual(data.facades)
    })
})