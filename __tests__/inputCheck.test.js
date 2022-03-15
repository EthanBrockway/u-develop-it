const inputCheck = require("../utils/inputCheck");

it("inputCheck() returns null when all properties exist", () => {
  const obj = { name: "alice" };

  expect(inputCheck(obj, "name")).toBe(null);
});

it("inputCheck() returns an object when a property is missing", () => {
  const obj = { name: "alice", occupation: "" };

  expect(inputCheck(obj, "name", "occupation")).toEqual(
    expect.objectContaining({
      error: expect.stringContaining("No occupation specified"),
    })
  );
});
