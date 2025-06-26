/* global describe, it */
import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("shuffle function", () => {
  it("should shuffle the array into a different order", () => {
    const original = [1, 2, 3, 4, 5];
    const result = shuffle(original);
    expect(result).to.have.members(original);
    expect(result).to.not.deep.equal(original);
  });
});
