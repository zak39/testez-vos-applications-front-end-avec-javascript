import { retrieveSensorsData } from "./sensorsApi"
import { data } from "../../../data/mock-homepage-data"

describe('SensorApi Unit Test Suite', () => {
    it('Should equal to data mocked', () => {
        expect(retrieveSensorsData()).toEqual(data.facades)
    })
})