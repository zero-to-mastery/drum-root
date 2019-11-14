describe("Go to sign in page", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:3001");
  });
  it("should be titled 'Sign In'", async () => {
    await expect(page.title()).resolves.toMatch("Sign In");
  });
});
