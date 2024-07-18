import { metersToKilometers } from "../metersToKilometers"

describe("metersToKilometers", () => {
  test("converts meters to kilometers correctly for standard values", () => {
    expect(metersToKilometers(1500)).toBe("2km") // 1.5km rounded to 2km
  })

  test("handles zero meters correctly", () => {
    expect(metersToKilometers(0)).toBe("0km")
  })

  test("rounds down correctly for values just below the next kilometer", () => {
    expect(metersToKilometers(1499)).toBe("1km") // 1.499km rounded to 1km
  })

  test("rounds up correctly for values just above the previous kilometer", () => {
    expect(metersToKilometers(1001)).toBe("1km") // 1.001km rounded to 1km
  })
})
