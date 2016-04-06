// Switches React for server-side rendering

let React

// If running on the server, import react-native-web for SSR instead of
// react-native
if (process) React = require('react-native-web')
else React = require('react-native')

export default React
