const penumbraOpacity = 0.14
const umbraOpacity = 0.2
const ambientOpacity = 0.12

export default {
  dp2: {
    boxShadow: `
      0 2px 2px 0 rgba(0, 0, 0, ${penumbraOpacity}),
      0 3px 1px -2px rgba(0, 0, 0, ${umbraOpacity}),
      0 1px 5px 0 rgba(0, 0, 0, ${ambientOpacity})
    `,
  },
  dp3: {
    boxShadow: `
      0 3px 4px 0 rgba(0, 0, 0, ${penumbraOpacity}),
      0 3px 3px -2px rgba(0, 0, 0, ${umbraOpacity}),
      0 1px 8px 0 rgba(0, 0, 0, ${ambientOpacity})
    `,
  },
  dp4: {
    boxShadow: `
      0 4px 5px 0 rgba(0, 0, 0, ${penumbraOpacity}),
      0 1px 10px -2px rgba(0, 0, 0, ${umbraOpacity}),
      0 2px 4px -1px rgba(0, 0, 0, ${ambientOpacity})
    `,
  },
  dp6: {
    boxShadow: `
      0 6px 10px 0 rgba(0, 0, 0, ${penumbraOpacity}),
      0 1px 18px 0 rgba(0, 0, 0, ${umbraOpacity}),
      0 3px 5px -1px rgba(0, 0, 0, ${ambientOpacity})
    `,
  },
  dp8: {
    boxShadow: `
      0 8px 10px 1px rgba(0, 0, 0, ${penumbraOpacity}),
      0 3px 14px 2px rgba(0, 0, 0, ${umbraOpacity}),
      0 5px 5px -3px rgba(0, 0, 0, ${ambientOpacity})
    `,
  },
  dp16: {
    boxShadow: `
      0 16px 24px 2px rgba(0, 0, 0, ${penumbraOpacity}),
      0 6px 30px 5px rgba(0, 0, 0, ${umbraOpacity}),
      0 8px 10px -5px rgba(0, 0, 0, ${ambientOpacity})
    `,
  },
}
