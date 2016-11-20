import ps from 'react-native-ps'

const iosOpacity = 0.25

const penumbraOpacity = 0.14
const umbraOpacity = 0.2

export default ps({
  ios: {
    dp0: {
      shadowColor: 'transparent',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: iosOpacity,
      shadowRadius: 0,
    },
    dp2: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: iosOpacity,
      shadowRadius: 1,
    },
    dp3: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: iosOpacity,
      shadowRadius: 2,
    },
    dp4: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: iosOpacity,
      shadowRadius: 2,
    },
    dp6: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: iosOpacity,
      shadowRadius: 3,
    },
    dp8: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: iosOpacity,
      shadowRadius: 4,
    },
    dp16: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: iosOpacity,
      shadowRadius: 8,
    },
  },

  android: {
    dp0: {
      elevation: 0,
    },
    dp2: {
      elevation: 2,
    },
    dp3: {
      elevation: 3,
    },
    dp4: {
      elevation: 4,
    },
    dp6: {
      elevation: 6,
    },
    dp8: {
      elevation: 8,
    },
    dp16: {
      elevation: 16,
    },
  },

  // Taken from Material Design Lite
  web: {
    dp0: {
      boxShadow: `
        0 0px 0px 0px rgba(0, 0, 0, 0),
        0 0px 0px 0px rgba(0, 0, 0, 0)
      `,
    },
    dp2: {
      boxShadow: `
        0 2px 2px 0px rgba(0, 0, 0, ${penumbraOpacity}),
        0 3px 1px -2px rgba(0, 0, 0, ${umbraOpacity})
      `,
    },
    dp3: {
      boxShadow: `
        0 3px 4px 0px rgba(0, 0, 0, ${penumbraOpacity}),
        0 3px 3px -2px rgba(0, 0, 0, ${umbraOpacity})
      `,
    },
    dp4: {
      boxShadow: `
        0 4px 5px 0px rgba(0, 0, 0, ${penumbraOpacity}),
        0 1px 10px -2px rgba(25, 184, 222, ${umbraOpacity})
      `,
    },
    dp6: {
      boxShadow: `
        0 6px 10px 0px rgba(0, 0, 0, ${penumbraOpacity}),
        0 1px 18px 0px rgba(0, 0, 0, ${umbraOpacity})
      `,
    },
    dp8: {
      boxShadow: `
        0 8px 10px 1px rgba(0, 0, 0, ${penumbraOpacity}),
        0 3px 14px 2px rgba(0, 0, 0, ${umbraOpacity})
      `,
    },
    dp16: {
      boxShadow: `
        0 16px 24px 2px rgba(0, 0, 0, ${penumbraOpacity}),
        0 6px 30px 5px rgba(0, 0, 0, ${umbraOpacity})
      `,
    },
  },
})
