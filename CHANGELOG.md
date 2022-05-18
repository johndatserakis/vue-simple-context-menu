# CHANGELOG.md

## 4.0.4

- Upgrade package to support Vue 3. Vue 2 support can be found at `v3.4.2`. Thank you @danielelkington.

## 3.4.2

- Add menu-closed event. Thank you @rttmax.

## 3.4.1

- Add support for HTML content in `option.name`. Thank you @mikeerickson.

## 3.3.2

- Fixed `border-box` issue with the divider. Thank you @mikeerickson.

## 3.1.8

- Added ability to hit escape to close popup window.

## 3.1.7

- Adding the option to add a custom class to each option object. Thanks for the suggestion @geri777.

## 3.1.3

- Fixing emitting to use kebab-case

## 3.1.2

- Build update to properly allow for iife build.

## 3.1.1

- Updated dependencies, migrate config, beautify code. Thanks @ansidev!

## 3.1.0 (2019-01-07)

- Removing `scoped` from the `style` to make allow proper overwriting of styles

## 3.0.1 (2019-01-04)

- Thank you to @ansidev. Updated dependencies, cleaned up code.

## 3.0.0 (2018-11-03)

- New build method that separates the js and css from the component. Component's js and css now need to be included separately.
- Adjusted blue color in menu
- Added tests

## 2.0.0 (2018-08-31)

- Adds support for multiple context menus. Make sure to use the newly required prop `id`, which needs a unique string.
- Updated styling to be more modern and streamlined.
