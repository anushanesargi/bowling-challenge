var stdin = require('mock-stdin').stdin();
const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
const bowl = require("./bowl");

describe("mocking stdin", () => {
  beforeEach(() => {
    consoleSpy.mockClear()
  })
  it("prints anusha", () => {
    const Bowl = new bowl();
    stdin.send("Anusha\n");
    Bowl.read();
    stdin.restore();
    expect(console.log).toHaveBeenLastCalledWith('Hello Anusha, How are you')
  });
});