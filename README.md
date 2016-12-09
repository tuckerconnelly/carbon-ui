# <a href="https://carbon-ui.com" target="__blank"><img src="https://cloud.githubusercontent.com/assets/4349082/20800106/5141cfa0-b7b2-11e6-8b00-ced838b8320b.png" height="60" /></a>

[Material Design](https://material.google.com/) library for React Native that runs on all platforms.

### Installation

```
npm -S i tuckerconnelly/carbon-ui
```

Material Design is built on the Roboto Fonts, so you need to make them available for Carbon UI.

You can download them [here](https://github.com/tuckerconnelly/carbon-ui-docs/tree/master/android/app/src/main/assets/fonts), and then install them for your platform:

- [iOS](https://medium.com/@dabit3/adding-custom-fonts-to-react-native-b266b41bff7f)
- [Android](https://medium.com/@gattermeier/custom-fonts-in-react-native-for-android-b8a331a7d2a7#.3qrdx42mx)
- [Exponent](https://docs.getexponent.com/versions/v11.0.0/guides/using-custom-fonts.html)
- Web

Install [tuckerconnelly/react-native-web](https://github.com/tuckerconnelly/react-native-web), and then place the `<WebStyles />` component next to `<BaseStyles />` (from `tuckerconnelly/react-native-web`) in your `index.web.js`:

```js
import React from 'react'
import { render } from 'react-dom'
import { AppRegistry, BaseStyles } from 'react-native-universal'
import { WebStyles } from 'carbon-ui'

import App from './src/index'

const app = render(
  <App>
    <BaseStyles />
    <WebStyles />
  </App>,
  document.getElementById('root')
)
AppRegistry.registerComponent('client', app)
```

### Usage

Once you're installed, you can use any of [Carbon UI's components](https://carbon-ui.com/components/AppBar):

```js
import React from 'react'
import { Paper, Display1, FlatButton } from 'carbon-ui'

export default () =>
  <Paper>
    <Display1>Giant display</Display1>
    <FlatButton>Flat button</Button>
  </Paper>

```

### Documentation

- [Installation](https://carbon-ui.com/getting-started/installation)
- [Themes](https://carbon-ui.com/styles/theme)
- [Colors](https://carbon-ui.com/styles/colors)
- [Responsive UI](https://carbon-ui.com/styles/responsive)
- [Elevation and shadows](https://carbon-ui.com/styles/elevation)
- [Typography](https://carbon-ui.com/styles/typography)
- [Motion](https://carbon-ui.com/styles/motion)
- [Components](https://carbon-ui.com/components)

### Known issues

**Performance on Android**

Performance on Android can get pretty slow if you're not careful. Carbon UI makes good use of the Animated API, which is particularly slow on Android.

Carbon UI optimizes a lot, using native animations and graceful degradations, and it'll generally be good-to-go out of the box.

Long term, the React Native team is doing [good work](https://productpains.com/post/react-native/offload-some-animations-from-js-thread-for-better-perf) to improve Animated performance.

If you run in to any snags, check out the [Known issues](https://carbon-ui.com/getting-started/known-issues) page in the docs for tips on improving performance, or file an issue here.

### Disclaimer

This is still a beta. Expect bugs 😛

### Connect

Follow the creator on Twitter, [@TuckerConnelly](https://twitter.com/TuckerConnelly)

### License
MIT
