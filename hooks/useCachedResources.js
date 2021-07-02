async function loadResourcesAndDataAsync() {
  try {
    SplashScreen.preventAutoHideAsync();

    // Load fonts
    await Font.loadAsync({
      ...Ionicons.font,
      'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
      percolate: require('../assets/icon/percolate.ttf'),
      'NunitoSans-Bold': require('../assets/font/NunitoSans-Bold.ttf'),
      'NunitoSans-Italic': require('../assets/font/NunitoSans-Italic.ttf'),
      NunitoSans: require('../assets/font/NunitoSans-Regular.ttf'),
    });
  } catch (e) {
    // We might want to provide this error information to an error reporting service
    console.warn(e);
  } finally {
    setLoadingComplete(true);
    SplashScreen.hideAsync();
  }
}
