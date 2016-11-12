import { Animated, Easing } from 'react-native-universal'

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
const interpolateDesktopValue = from => 150 + (0.28 * (from - 195))

// Creates a function that calculates the duration value for different screen
// sizes
// The resulting function accepts an "add" parameter that gets added to the value
// before interpolation
const getResponsiveDurationFn = value => () => {
  const desktopMediaQuery = Breakpoints.ml.split('@media')[1]
  const tabletMediaQuery = Breakpoints.md.split('@media')[1]
  // Desktop, not in MD spec so I interpolated it
  if (global.matchMedia(desktopMediaQuery).matches) return interpolateDesktopValue(value)
  // Tablet, according to MD spec 30% longer than mobile
  if (global.matchMedia(tabletMediaQuery).matches) return value * 1.3
  // Mobile
  return value
}

export const Durations = {
  standard: getResponsiveDurationFn(300),
  large: getResponsiveDurationFn(375),
  entering: getResponsiveDurationFn(225),
  leaving: getResponsiveDurationFn(195),
  custom: getResponsiveDurationFn,
}

const Animations = {
  standard: (av, toValue = 1, duration) => Animated.timing(av, {
    duration: duration ? Durations.custom(duration)() : Durations.standard(),
    easing: Curves.standard,
    toValue,
  }),
  large: (av, toValue = 1, duration) => Animated.timing(av, {
    duration: duration ? Durations.custom(duration)() : Durations.large(),
    easing: Curves.standard,
    toValue,
  }),
  entrance: (av, toValue = 1, duration) => Animated.timing(av, {
    duration: duration ? Durations.custom(duration)() : Durations.entering(),
    easing: Curves.deceleration,
    toValue,
  }),
  exit: (av, toValue = 1, duration) => Animated.timing(av, {
    duration: duration ? Durations.custom(duration)() : Durations.leaving(),
    easing: Curves.acceleration,
    toValue,
  }),
  tempExit: (av, toValue = 1, duration) => Animated.timing(av, {
    duration: duration ? Durations.custom(duration)() : Durations.leaving(),
    easing: Curves.sharp,
    toValue,
  }),
  staggered: (av, staggerAV, toValue = 1, staggerAmount = 50) =>
    Animated.stagger(staggerAmount, [
      Animated.timing(toValue ? av : staggerAV, {
        duration: Durations.custom(300 - staggerAmount)(),
        easing: Curves.standard,
        toValue,
      }),
      Animated.timing(toValue ? staggerAV : av, {
        duration: Durations.custom(300 - staggerAmount)(),
        easing: Curves.standard,
        delay: Durations.custom(staggerAmount)(),
        toValue,
      }),
    ]),
}

export default Animations
