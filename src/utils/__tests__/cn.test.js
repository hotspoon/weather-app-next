import { cn } from "../cn"

describe("cn", () => {
  it("handles conditional classes", () => {
    const result = cn("btn", { "btn-primary": true, "btn-secondary": false }, "active").split(" ")
    expect(result).toContain("btn")
    expect(result).toContain("btn-primary")
    expect(result).toContain("active")
    expect(result.length).toBe(3)
  })

  it("ignores falsy values", () => {
    const result = cn("btn", null, undefined, false, "btn-primary").split(" ")
    expect(result).toContain("btn")
    expect(result).toContain("btn-primary")
    expect(result.length).toBe(2)
  })

  it("merges classes with tailwind utilities correctly", () => {
    const result = cn("p-4", "text-center", "p-4").split(" ")
    expect(result).toContain("p-4")
    expect(result).toContain("text-center")
    expect(result.length).toBe(2)
  })
})
