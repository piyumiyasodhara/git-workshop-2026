/**
 * Tests for the auth and app modules.
 *
 * Run with: npm test
 * Uses Node.js built-in test runner (no extra dependencies).
 */

const { describe, it, beforeEach } = require("node:test");
const assert = require("node:assert/strict");

const { register, login, clearUsers } = require("../src/auth");
const { normalizeUsername, isValidPassword } = require("../src/utils");

describe("utils", () => {
  it("normalizes usernames to lowercase and trims whitespace", () => {
    assert.equal(normalizeUsername("  Alice  "), "alice");
  });

  it("rejects passwords shorter than 8 characters", () => {
    assert.equal(isValidPassword("short"), false);
    assert.equal(isValidPassword("longenough"), true);
  });
});

describe("auth", () => {
  beforeEach(() => {
    clearUsers();
  });

  it("registers a new user successfully", () => {
    const result = register("bob", "password123");
    assert.equal(result.success, true);
  });

  it("prevents duplicate registration", () => {
    register("bob", "password123");
    const result = register("bob", "anotherpass");
    assert.equal(result.success, false);
  });

  it("logs in with correct credentials", () => {
    register("bob", "password123");
    const result = login("bob", "password123");
    assert.equal(result.success, true);
  });

  it("rejects login with wrong password", () => {
    register("bob", "password123");
    const result = login("bob", "wrongpass");
    assert.equal(result.success, false);
  });
});
