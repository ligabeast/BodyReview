module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            "@styling": "./src/styling",
            "@components": "./src/components",
            "@pages": "./src/pages",
            "@ui": "./src/ui",
            "@src": "./src",
          },
        },
      ],
    ],
  };
};
