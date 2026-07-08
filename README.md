# Git Workshop 2026

A small Node.js sample project for tomorrow's tech session. Use it to practice Git workflows: branching, commits, merges, pull requests, and CI.

## Project structure

```
├── README.md
├── .gitignore
├── LICENSE
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions CI pipeline
├── src/
│   ├── app.js              # Application entry point
│   ├── auth.js             # Registration and login logic
│   └── utils.js            # Shared helper functions
├── tests/
│   └── app.test.js         # Unit tests
├── package.json
└── package-lock.json
```

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- [Git](https://git-scm.com/)

## Getting started

```bash
# Clone the repository
git clone <repo-url>
cd my-first-repo-demo

# Install dependencies
npm install

# Run the demo
npm start

# Run tests
npm test
```

## Workshop exercises

Try these hands-on tasks during the session:

1. **Create a feature branch** — e.g. `feature/password-strength-check`
2. **Make a change** — add validation or a new utility in `src/utils.js`
3. **Commit with a clear message** — describe *why*, not just *what*
4. **Open a pull request** — watch CI run automatically
5. **Resolve a merge conflict** — two branches editing the same file

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `npm start`   | Run the demo application |
| `npm test`    | Run the test suite       |

## License

MIT — see [LICENSE](LICENSE).
