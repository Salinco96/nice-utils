module.exports = {
  "*.{ts}": () => "yarn typecheck",
  "*.{js,json,ts}": () => "yarn biome check --fix --staged",
}
