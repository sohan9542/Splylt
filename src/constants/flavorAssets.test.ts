import { describe, expect, it } from "vitest";
import { flavorList, getFlavorAssets, nutrientList } from "./index";

describe("getFlavorAssets", () => {
  it("builds consistent public asset paths for a flavor color", () => {
    expect(getFlavorAssets("brown")).toEqual({
      background: "/images/brown-bg.svg",
      drink: "/images/brown-drink.webp",
      elements: "/images/brown-elements.webp",
    });
  });

  it("covers every flavor color used in the product list", () => {
    for (const flavor of flavorList) {
      const assets = getFlavorAssets(flavor.color);
      expect(assets.background).toContain(flavor.color);
      expect(assets.drink).toContain(flavor.color);
      expect(assets.elements).toContain(flavor.color);
    }
  });
});

describe("flavorList", () => {
  it("includes six unique flavors", () => {
    expect(flavorList).toHaveLength(6);
    const names = flavorList.map((flavor) => flavor.name);
    expect(new Set(names).size).toBe(names.length);
  });
});

describe("nutrientList", () => {
  it("keeps nutrient labels and amounts paired", () => {
    expect(nutrientList.length).toBeGreaterThan(0);
    for (const nutrient of nutrientList) {
      expect(nutrient.label.length).toBeGreaterThan(0);
      expect(nutrient.amount).toMatch(/\d/);
    }
  });
});
