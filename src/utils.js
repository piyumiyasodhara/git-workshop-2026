/**
 * Shared utility helpers used across the application.
 * Keeping small, pure functions here makes them easy to test in isolation.
 */

/**
 * Normalize a username for consistent lookups.
 * Trims whitespace and converts to lowercase.
 *
 * @param {string} username - Raw username input from the user
 * @returns {string} Normalized username
 */
function normalizeUsername(username) {
  return username.trim().toLowerCase();
}

/**
 * Check whether a string meets minimum password length requirements.
 *
 * @param {string} password - Password to validate
 * @param {number} [minLength=8] - Minimum allowed length
 * @returns {boolean} True when the password is long enough
 */
function isValidPassword(password, minLength = 8) {
  return typeof password === "string" && password.length >= minLength;
}

module.exports = {
  normalizeUsername,
  isValidPassword,
};
