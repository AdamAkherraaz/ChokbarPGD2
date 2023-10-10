const { getDefaultConfig } = require("@expo/metro-config");

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  defaultConfig.resolver.assetExts.push("cjs");


  const assetExts = defaultConfig.resolver.assetExts.filter((ext) => ext !== "svg");
  const sourceExts = [...defaultConfig.resolver.sourceExts, "svg"];

  return {
    ...defaultConfig,
    transformer: {
      ...defaultConfig.transformer,
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
      assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    },
    resolver: {
      ...defaultConfig.resolver,
      assetExts: assetExts,
      sourceExts: sourceExts,
    },
  };
})();
