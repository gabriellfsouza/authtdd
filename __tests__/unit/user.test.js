const bcrypt = require("bcryptjs");

const { User } = require("../../src/app/models");
const truncate = require("../ults/truncate");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encypt user password", async () => {
    const user = await User.create({
      name: "Gabriel",
      email: "gabriellfsouza@gmail.com",
      password: "123123"
    });

    const compareHash = await bcrypt.compare("123123", user.password_hash);

    expect(compareHash).toBe(true);
  });
});
