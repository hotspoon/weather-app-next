import { getDayOrNightIcon } from "../getDayOrNightIcon"

describe("getDayOrNightIcon", () => {
  test('replaces last character with "d" for daytime (10 AM)', () => {
    const iconName = "icon1"
    const dateTimeString = "2023-04-01T10:00:00Z" // 10 AM UTC
    expect(getDayOrNightIcon(iconName, dateTimeString)).toBe("icond")
  })

  test('replaces last character with "n" for nighttime (10 PM)', () => {
    const iconName = "icon2"
    const dateTimeString = "2023-04-01T22:00:00Z" // 10 PM UTC
    expect(getDayOrNightIcon(iconName, dateTimeString)).toBe("iconn")
  })

  test('replaces last character with "d" for 6 AM boundary', () => {
    const iconName = "icon3"
    const dateTimeString = "2023-04-01T06:00:00Z" // 6 AM UTC
    expect(getDayOrNightIcon(iconName, dateTimeString)).toBe("icond")
  })

  test('replaces last character with "n" for 6 PM boundary', () => {
    const iconName = "icon4"
    const dateTimeString = "2023-04-01T18:00:00Z" // 6 PM UTC
    expect(getDayOrNightIcon(iconName, dateTimeString)).toBe("iconn")
  })
})
