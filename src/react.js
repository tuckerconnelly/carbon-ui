// Switches React for server-side rendering

let React

// HACK if(process) means if(we're running in node aka the server)
// Need to check if we're running in server for SSR--SSR needs
// react-native-web, not react-native.
// We could have the consumer (the app) compile carbon-ui, but
// don't want to have that requirement.
// react native packager also runs in node, so process will also
// exist in react-native. To make sure we're in the server and not
// react-native, we add !global.__BUNDLE_START_TIME__, which the
// react native packager sets
if (process && !global.__BUNDLE_START_TIME__) React = require('react-native-web')
else React = require('react-native')

export default React
