import { Animated, Easing, NativeModules } from 'react-native-universal'

import { Breakpoints } from './Responsive'

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
  standard: (av, options = {}) => Animated.timing(av, {
    easing: Curves.standard,
    toValue: 1,
    ...options,
    delay: options.delay && Durations.custom(options.delay)(),
    duration: options.duration ? Durations.custom(options.duration)() : Durations.standard(),
    useNativeDriver: options.useNativeDriver && NativeModules.NativeAnimatedModule,
  }),
  large: (av, options = {}) => Animated.timing(av, {
    easing: Curves.standard,
    toValue: 1,
    ...options,
    delay: options.delay && Durations.custom(options.delay)(),
    duration: options.duration ? Durations.custom(options.duration)() : Durations.large(),
    useNativeDriver: options.useNativeDriver && NativeModules.NativeAnimatedModule,
  }),
  entrance: (av, options = {}) => Animated.timing(av, {
    easing: Curves.deceleration,
    toValue: 1,
    ...options,
    delay: options.delay && Durations.custom(options.delay)(),
    duration: options.duration ? Durations.custom(options.duration)() : Durations.entering(),
    useNativeDriver: options.useNativeDriver && NativeModules.NativeAnimatedModule,
  }),
  exit: (av, options = {}) => Animated.timing(av, {
    easing: Curves.acceleration,
    toValue: 1,
    ...options,
    delay: options.delay && Durations.custom(options.delay)(),
    duration: options.duration ? Durations.custom(options.duration)() : Durations.leaving(),
    useNativeDriver: options.useNativeDriver && NativeModules.NativeAnimatedModule,
  }),
  tempExit: (av, options = {}) => Animated.timing(av, {
    easing: Curves.sharp,
    toValue: 1,
    ...options,
    delay: options.delay && Durations.custom(options.delay)(),
    duration: options.duration ? Durations.custom(options.duration)() : Durations.leaving(),
    useNativeDriver: options.useNativeDriver && NativeModules.NativeAnimatedModule,
  }),
}

export default Animations
