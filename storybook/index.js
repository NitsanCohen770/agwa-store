import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';

// import stories
configure(() => {
  require('../components/Task.stories.js');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});
