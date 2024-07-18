import { convertWindSpeed } from "../convertWindSpeed"

describe("convertWindSpeed", () => {
  test("converts 0 m/s to 0 km/h", () => {
    expect(convertWindSpeed(0)).toBe("0km/h")
  })

  test("converts 1 m/s to 3.6 km/h", () => {
    expect(convertWindSpeed(1)).toBe("4km/h") // Note: 3.6 rounds to 4
  })

  test("converts 5.5 m/s to 19.8 km/h", () => {
    expect(convertWindSpeed(5.5)).toBe("20km/h") // Note: 19.8 rounds to 20
  })
})
