import { convertKelvinToCelsius } from "../convertKelvinToCelsius"

describe("convertKelvinToCelsius", () => {
  it("should convert 0 K to -273.15 C", () => {
    expect(convertKelvinToCelsius(0)).toBe(-273)
  })

  it("should convert 273.15 K to 0 C", () => {
    expect(convertKelvinToCelsius(273.15)).toBe(0)
  })

  it("should handle temperatures above freezing", () => {
    expect(convertKelvinToCelsius(293.15)).toBe(20)
  })

  it("should handle negative Kelvin temperatures gracefully", () => {
    expect(convertKelvinToCelsius(-10)).toBe(-283)
  })
})
