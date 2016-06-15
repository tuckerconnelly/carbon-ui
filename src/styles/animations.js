import { Animated, Easing } from 'react-native-universal'
import matchMedia from 'react-native-match-media'

import { Breakpoints } from './Grid'

export const Curves = {
  standard: Easing.bezier(0.4, 0, 0.2, 1),
  deceleration: Easing.bezier(0, 0, 0.2, 1),
  acceleration: Easing.bezier(0.4, 0, 1, 1),
  sharp: Easing.bezier(0.4, 0, 0.6, 1),
}

// MD spec only specifies a range of durations for desktop, so I created a function
// to interpolate the desktop value from the mobile value.
//
// 150 is the shortest desktop duration
// 0.28 is desktop ms per mobile ms, or
// (longest desktop - shortest desktop) / (longest mobile - shortest mobile)
// or (200 - 150) / (375 - 195)
// 195 is the shortest mobile duration
const interpolateDesktopValue = from => 150 + 0.28 * (from - 195)

// Creates a function that calculates the duration value for different screen
// sizes
// The resulting function accepts an "add" parameter that gets added to the value
// before interpolation
const createDurationValueFn = value => (add = 0) => {
  const desktopMediaQuery = Breakpoints.ml.split('@media')[1]
  const tabletMediaQuery = Breakpoints.md.split('@media')[1]
  // Desktop, not in MD spec so I interpolated it
  if (matchMedia(desktopMediaQuery).matches) return interpolateDesktopValue(value + add)
  // Tablet, according to MD spec 30% longer than mobile
  if (matchMedia(tabletMediaQuery).matches) return (value + add) * 1.3
  // Mobile
  return value + add
}

export const Durations = {
  standard: createDurationValueFn(300),
  large: createDurationValueFn(375),
  entering: createDurationValueFn(225),
  leaving: createDurationValueFn(195),
  custom: createDurationValueFn(0),
}

const Animations = {
  standard: (av, toValue = 1, add) => Animated.timing(av, {
    duration: Durations.standard(add),
    easing: Curves.standard,
    toValue,
  }),
  large: (av, toValue = 1, add) => Animated.timing(av, {
    duration: Durations.large(add),
    easing: Curves.standard,
    toValue,
  }),
  entrance: (av, toValue = 1, add) => Animated.timing(av, {
    duration: Durations.entering(add),
    easing: Curves.deceleration,
    toValue,
  }),
  exit: (av, toValue = 1, add) => Animated.timing(av, {
    duration: Durations.leaving(add),
    easing: Curves.acceleration,
    toValue,
  }),
  tempExit: (av, toValue = 1, add) => Animated.timing(av, {
    duration: Durations.leaving(add),
    easing: Curves.sharp,
    toValue,
  }),
  staggered: (av, staggerAV, toValue = 1, staggerAmount = 50) =>
    Animated.stagger(staggerAmount, [
      Animated.timing(toValue ? av : staggerAV, {
        duration: Durations.standard(-staggerAmount),
        easing: Curves.standard,
        toValue,
      }),
      Animated.timing(toValue ? staggerAV : av, {
        duration: Durations.standard(-staggerAmount),
        easing: Curves.standard,
        delay: Durations.custom(staggerAmount),
        toValue,
      }),
    ]),
}

export default Animations
