module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  rootDir: "src",
  moduleDirectories: ["node_modules", "bower_components", "src"],
};
