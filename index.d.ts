declare module 'carbon-ui' {

  import * as React from 'react'
  import {TouchableWithoutFeedbackProps} from 'react-native'

  interface RaisedButtonProps {
		/**
		   * Disables the button if set to true.
		   */
		disabled?: boolean;
		/**
		   * The inside of the button. If it's text, it'll be UPPERCASEd.
		   */
		children?: React.ReactNode;
		/**
		   * The style of the button text. Only applies if props.children isn't passed.
		   */
		textStyle?: Object|any[];
		theme?: Object;
		onPress?: (...args: any[]) => any;
		style?: Object|any[];
	}

  export class RaisedButton extends React.Component<RaisedButtonProps, any> {}

	interface FlatButtonProps {
		/**
		   * Disables the button if set to true.
		   */
		disabled?: boolean;
		/**
		   * The inside of the button. If it's text, it'll be UPPERCASEd.
		   */
		children?: React.ReactNode;
		css?: Object;
		/**
		   * The style of the button text. Only applies if props.children isn't passed.
		   */
		textStyle?: Object|any[];
		theme?: Object;
		onPress?: (...args: any[]) => any;
		style?: Object|any[];
	}

	export class FlatButton extends React.Component<FlatButtonProps, any> {}

	interface FloatingActionButtonProps {
		/**
		   * Will set the background color to the accent color if set to true
		   */
		accent?: boolean;
		/**
		   * Usually an <Icon />
		   */
		children?: React.ReactNode;
		style?: Object|any[];
		onPressIn?: (...args: any[]) => any;
		onPressOut?: (...args: any[]) => any;
		theme?: Object;
		onPress?: (...args: any[]) => any;
	}

	export class FloatingActionButton extends React.Component<FloatingActionButtonProps, any> {}

	interface IconToggleProps {
		/**
		   * The name of the icon, from material icons: https://material.io/icons/
		   */
		name: string;
		/**
		   * The style of the containing TouchableRipple (which is a View)
		   */
		style?: Object|any[];
		/**
		   * The style of the Icon element
		   */
		iconStyle?: Object;
		onPress?: (...args: any[]) => any;
	}

	export class IconToggle extends React.Component<IconToggleProps, any> {}  
  
  interface CellProps {
		children?: React.ReactNode;
		style?: Object|any[];
	}

	class Cell extends React.Component<CellProps, any> {}
  
	interface HeaderCellProps {
		children?: React.ReactNode;
		style?: Object|any[];
	}

	class HeaderCell extends React.Component<HeaderCellProps, any> {}

  interface HeaderRowProps {
		/**
		   * A collection of HeaderCells
		   */
		children?: React.ReactNode; //Optional because https://github.com/Microsoft/TypeScript/issues/6471#issuecomment-171456118
		style?: Object|any[];
	}

	class HeaderRow extends React.Component<HeaderRowProps, any> {}

  interface RowProps {
		/**
		   * A collection of HeaderCells
		   */
		children?: React.ReactNode; ////Optional because https://github.com/Microsoft/TypeScript/issues/6471#issuecomment-171456118
		style?: Object|any[];
	}

  class Row extends React.Component<RowProps, any> {}

  interface DataTableProps {
		/**
		   * The first child should be a HeaderRow, and the rest regular Rows.
		   */
		children?: React.ReactNode; //Optional because https://github.com/Microsoft/TypeScript/issues/6471#issuecomment-171456118
		style?: Object|any[];
	}

	export class DataTable extends React.Component<DataTableProps, any> {
		static HeaderRow: typeof HeaderRow
		static HeaderCell: typeof HeaderCell
		static Row: typeof Row
		static Cell: typeof Cell
	}

  interface AppBarProps {
		/**
		   * The title on the AppBar
		   */
		title?: React.ReactNode;
		/**
		   * The material icon name of the nav icon
		   */
		navIcon?: string;
		/**
		   * Callback for handling presses on the nav icon
		   */
		onNavIconPress?: (...args: any[]) => any;
		/**
		   * Will make the AppBar flat and without shadows if false.
		   */
		elevated?: boolean;
		/**
		   * children are inserted after the title
		   */
		children?: React.ReactNode;
		css?: Object;
		theme?: Object;
	}

	export class AppBar extends React.Component<AppBarProps, any> {}

	interface NavigationDrawerProps {
		/**
		   * Will open the drawer if set to true.
		   */
		open?: boolean;
		style?: Object|any[];
		/**
		   * The style of the menu.
		   */
		menuStyle?: Object|any[];
		/**
		   * Callback for when the overlay is pressed
		   */
		onOverlayPress?: (...args: any[]) => any;
		/**
		   * Callback for when the drawer is finished opening. Use this to load in the
		   * the content afterwards if open/close animation performance is poor.
		   */
		onFinishOpening?: (...args: any[]) => any;
		/**
		   * Callback for when the drawer is starting to close. Use this in conjunction
		   * with onFinishOpening for performance optimization. If it returns a promise,
		   * it'll wait for the promise to resolve before starting the closing animation.
		   */
		onStartClosing?: (...args: any[]) => any;
		children?: React.ReactNode;
	}

	export class NavigationDrawer extends React.Component<NavigationDrawerProps, any> {}

  interface ListProps {
		/**
		   * Usually a collection of `ListItem`s
		   */
		children?: React.ReactNode;
	}

	export class List extends React.Component<ListProps, any> {}

  interface ListItemProps {
		/**
		   * The primary text for the item
		   */
		primaryText?: string;
		/**
		   * The secondary text for the item. Gets cut off at 2 lines.
		   */
		secondaryText?: string;
		/**
		   * The number of lines before the ellipsis will show in the secondary text.
		   */
		secondaryTextLines?: any;
		/**
		   * Will put an <Icon /> with the passed value on the left of the ListItem
		   */
		leftIcon?: string;
		/**
		   * If a string, will put an <Icon /> with the passed value on the right of
		   * the list item. If it's an element, it'll place the element on the right of
		   * the list item.
		   */
		rightIcon?: string|React.ReactElement<any>;
		/**
		   * The caption text on the top right of the ListItem
		   */
		rightText?: string;
		/**
		   * `true` if the list item is currently selected
		   */
		active?: boolean;
		/**
		   * Controls the expanded/collapses state if there are ListItem children
		   */
		expanded?: boolean;
		/**
		   * Pass additional ListItems as children to make this ListItem nested
		   * and expandable.
		   */
		children?: React.ReactNode;
		style?: Object|any[];
		onPress?: (...args: any[]) => any;
		theme?: Object;
		nestingDepth?: number;
	}

	export class ListItem extends React.Component<ListItemProps, any> {}

  interface DividerProps {
		/**
		   * The color of the divider. It's derived from the theme by default.
		   */
		color?: string;
		style?: Object;
		theme?: Object;
	}

	export class Divider extends React.Component<DividerProps, any> {}

  interface IconProps {
		/**
		   * The name of the icon, from the material icons font.
		   */
		name: string;
		children?: React.ReactNode;
		style?: Object|any[];
	}

	export class Icon extends React.Component<IconProps, any> {}

  interface TextFieldProps {
		/**
		   * The value of the TextField.
		   */
		value?: string;
		/**
		   * The placeholder, for when the value is blank.
		   */
		placeholder?: string;
		/**
		   * Will disabled the TextField if set to true.
		   */
		disabled?: boolean;
		/**
		   * The error to display under the TextField
		   */
		error?: string;
		/**
		   * Will make the TextField a single-line TextField, without a label.
		   */
		singleLine?: boolean;
		/**
		   * The style passed to the React Native TextInput
		   */
		textInputStyle?: Object|any[];
		/**
		   * The style passed to the placeholder.
		   */
		placeholderStyle?: Object|any[];
		/**
		   * Passed through to the underlying TextInput.
		   */
		onChangeText?: (...args: any[]) => any;
		theme?: Object;
		/**
		   * The style of the containing View.
		   */
		style?: Object|any[];
	}

	export class TextField extends React.Component<TextFieldProps, any> {}

  interface TextFieldErrorProps {
		style?: Object;
		/**
		   * The error text. The height expands to show it.
		   */
		children?: React.ReactNode;
		theme?: Object;
	}

	export class TextFieldError extends React.Component<TextFieldErrorProps, any> {}

  interface DialogProps {
		/**
		   * The title of the dialog.
		   */
		title?: string;
		/**
		   * The actions, can be an array (say, of FlatButtons) or a full element itself.
		   */
		actions?: React.ReactNode;
		/**
		   * Whether or not the Dialog is active.
		   */
		active?: boolean;
		/**
		   * When the overlay is pressed (usually to deactivate the dialog)
		   */
		onOverlayPress?: (...args: any[]) => any;
		/**
		   * The contents of the dialog
		   */
		children?: React.ReactNode;  //?
		style?: Object|any[];
	}

	export class Dialog extends React.Component<DialogProps, any> {}

  interface PaperProps {
		/**
		   * The elevation of the paper
		   */
		elevation?: number;
		children?: React.ReactNode;
		style?: Object|any[];
	}

	export class Paper extends React.Component<PaperProps, any> {}

  interface TouchableRippleProps extends TouchableWithoutFeedbackProps {
    /**
     * The color of the ripple.
     */
    rippleColor?: string;
    /**
     * How large the ripple gets. It's multipled by the diagonal length of the
     * TouchableRipple.
     */
    rippleSpread?: number;
    /**
     * The opacity of the ripple
     */
    rippleOpacity?: number;
    /**
     * The duration of the ripple _and_ the ripple fade out, in ms. So multiply
     * it by 2 to get the full duration.
     */
    rippleDuration?: number;
    /**
     * Will center the ripple if set to true.
     */
    rippleCentered?: boolean;

    /**
     * The contents of the ripple. Unlike other Touchables, doesn't need to be
     * a single element.
     */
    children?: React.ReactNode;
    style?: Object|any[];
	}

	export class TouchableRipple extends React.Component<TouchableRippleProps, any> {}

  interface ExpansionPanelProps {
		/**
		   * Will expand the panel if true.
		   */
		expanded?: boolean;
		/**
		   * The handler for when the the user presses to expand
		   */
		onExpand?: (...args: any[]) => any;
		/**
		   * The label for the collapsed state
		   */
		label?: React.ReactNode;
		/**
		   * The body of the expanded panel
		   */
		children?: React.ReactNode;
		/**
		   * The buttons on the bottom of the expanded panel
		   */
		actions?: React.ReactNode;
		/**
		   * This component animates its height using maxHeight so it can accept any
		   * content for it's children property and still animate its height. Pass
		   * an approximate height when expanded here for a more accurate animation.
		   */
		approximateHeight?: number;
	}

	export class ExpansionPanel extends React.Component<ExpansionPanelProps, any> {}

  interface BottomNavigationProps {
		/**
		   * A collection of BottomNavigationIcons.
		   */
		children?: React.ReactNode;
	}

	export class BottomNavigation extends React.Component<BottomNavigationProps, any> {}

  interface BottomNavigationIconProps {
		/**
		   * The name of the icon, from material icons.
		   */
		name: string;
		/**
		   * The text underneath the icon.
		   */
		text: string;
		/**
		   * Will activate the icon if set to true.
		   */
		active?: boolean;
		theme?: Object;
		onPress?: (...args: any[]) => any;
	}

	export class BottomNavigationIcon extends React.Component<BottomNavigationIconProps, any> {}

  interface SnackbarProps {
		/**
		   * Will show the Snackbar when set to true
		   */
		shown?: boolean;
		/**
		   * The text of the snackbar.
		   */
		children?: string;
		/**
		   * The text of the action button.
		   */
		actionText?: React.ReactNode;
		/**
		   * The onPress prop of the action button.
		   */
		onPressAction?: (...args: any[]) => any;
		/**
		   * The duration in milliseconds after appearing that props.onRequestDeactivate
		   * will be called.
		   */
		autoHideDuration?: number;
		/**
		   * Called once the props.autoHideDuration passes
		   */
		onRequestHide?: (...args: any[]) => any;
	}

	export class Snackbar extends React.Component<SnackbarProps, any> {}

  interface TypesProps {
		children?: React.ReactNode;
		style?: Object|any[];
		css?: Object|any[];
		theme?: Object;
		onPress?: (...args: any[]) => any;
	}

	export class Display4 extends React.Component<TypesProps, any> {}
	export class Display3 extends React.Component<TypesProps, any> {}
	export class Display2 extends React.Component<TypesProps, any> {}
	export class Display1 extends React.Component<TypesProps, any> {}
	export class Headline extends React.Component<TypesProps, any> {}
	export class Title extends React.Component<TypesProps, any> {}
	export class Subheading extends React.Component<TypesProps, any> {}
	export class Body2 extends React.Component<TypesProps, any> {}
	export class Body1 extends React.Component<TypesProps, any> {}
	export class Caption extends React.Component<TypesProps, any> {}

  interface TypeProperties {
		color: string,
    fontFamily: string,
    fontSize: number,
    // NOTE Not currently in MD spec, making educated guess
    lineHeight: number,
		'@media (min-width: 1280px)'?: {fontSize: number}
	}

  interface TypeObject {
		display4: TypeProperties,
		display3: TypeProperties,
		display2: TypeProperties,
		display1:TypeProperties,
		headline: TypeProperties,
		title:TypeProperties,
		subheading: TypeProperties,
		body2: TypeProperties,
		body1: TypeProperties,
		caption: TypeProperties
	}
	export const Type: TypeObject

  export const connectTheme: (component: React.StatelessComponent<any> | React.ComponentClass<any> ) => React.StatelessComponent<any> | React.ComponentClass<any>

  interface ThemeProviderProps {
		theme?: Object;
		children?: React.ReactNode;  //?
	}

	export class ThemeProvider extends React.Component<ThemeProviderProps, any> {}

  export interface theme {
    colors: {
      primary?: string,
      primaryLight?: string,
      primaryDark?: string,

      accent?: string;
      accentLight?: string,
      accentDark?: string,

      button?: {
        flat?: {
          pressed?: string,
          disabledText?: string,
        },
        raised?: {
          disabled?: string,
          disabledText?: string,
          focusedShade?: string,
        },
      },

      divider?: string,
      ripple?: string,
      error?: string,
    },

    type?: TypeObject
  }

	interface Themes {
    [key: string]: theme
  }

  export const themes: Themes

  export const WebStyles: React.StatelessComponent<any>

	//type styleType = "Display4" | "Display3" | "Display2" | "Display1" | "Headline" | "Title" | "Subheading" | "Body2" | "Body1" | "Caption"

	interface BreakpointsProperties {
		xs: string,
		sm: string,
		ms: string,
		md: string,
		ml: string,
		lg: string,
		xl: string,
	}
	export const Breakpoints: BreakpointsProperties

	export const gu: 4
	 

	export const Elevation: any

	export const Animations: any
	
	export const Curves: any
	
	export const Durations: any

	interface ColorProperties {
		red50: '#ffebee',
		red100: '#ffcdd2',
		red200: '#ef9a9a',
		red300: '#e57373',
		red400: '#ef5350',
		red500: '#f44336',
		red600: '#e53935',
		red700: '#d32f2f',
		red800: '#c62828',
		red900: '#b71c1c',
		redA100: '#ff8a80',
		redA200: '#ff5252',
		redA400: '#ff1744',
		redA700: '#d50000',

		pink50: '#fce4ec',
		pink100: '#f8bbd0',
		pink200: '#f48fb1',
		pink300: '#f06292',
		pink400: '#ec407a',
		pink500: '#e91e63',
		pink600: '#d81b60',
		pink700: '#c2185b',
		pink800: '#ad1457',
		pink900: '#880e4f',
		pinkA100: '#ff80ab',
		pinkA200: '#ff4081',
		pinkA400: '#f50057',
		pinkA700: '#c51162',

		purple50: '#f3e5f5',
		purple100: '#e1bee7',
		purple200: '#ce93d8',
		purple300: '#ba68c8',
		purple400: '#ab47bc',
		purple500: '#9c27b0',
		purple600: '#8e24aa',
		purple700: '#7b1fa2',
		purple800: '#6a1b9a',
		purple900: '#4a148c',
		purpleA100: '#ea80fc',
		purpleA200: '#e040fb',
		purpleA400: '#d500f9',
		purpleA700: '#aa00ff',

		deepPurple50: '#ede7f6',
		deepPurple100: '#d1c4e9',
		deepPurple200: '#b39ddb',
		deepPurple300: '#9575cd',
		deepPurple400: '#7e57c2',
		deepPurple500: '#673ab7',
		deepPurple600: '#5e35b1',
		deepPurple700: '#512da8',
		deepPurple800: '#4527a0',
		deepPurple900: '#311b92',
		deepPurpleA100: '#b388ff',
		deepPurpleA200: '#7c4dff',
		deepPurpleA400: '#651fff',
		deepPurpleA700: '#6200ea',

		indigo50: '#e8eaf6',
		indigo100: '#c5cae9',
		indigo200: '#9fa8da',
		indigo300: '#7986cb',
		indigo400: '#5c6bc0',
		indigo500: '#3f51b5',
		indigo600: '#3949ab',
		indigo700: '#303f9f',
		indigo800: '#283593',
		indigo900: '#1a237e',
		indigoA100: '#8c9eff',
		indigoA200: '#536dfe',
		indigoA400: '#3d5afe',
		indigoA700: '#304ffe',

		blue50: '#e3f2fd',
		blue100: '#bbdefb',
		blue200: '#90caf9',
		blue300: '#64b5f6',
		blue400: '#42a5f5',
		blue500: '#2196f3',
		blue600: '#1e88e5',
		blue700: '#1976d2',
		blue800: '#1565c0',
		blue900: '#0d47a1',
		blueA100: '#82b1ff',
		blueA200: '#448aff',
		blueA400: '#2979ff',
		blueA700: '#2962ff',

		lightBlue50: '#e1f5fe',
		lightBlue100: '#b3e5fc',
		lightBlue200: '#81d4fa',
		lightBlue300: '#4fc3f7',
		lightBlue400: '#29b6f6',
		lightBlue500: '#03a9f4',
		lightBlue600: '#039be5',
		lightBlue700: '#0288d1',
		lightBlue800: '#0277bd',
		lightBlue900: '#01579b',
		lightBlueA100: '#80d8ff',
		lightBlueA200: '#40c4ff',
		lightBlueA400: '#00b0ff',
		lightBlueA700: '#0091ea',

		cyan50: '#e0f7fa',
		cyan100: '#b2ebf2',
		cyan200: '#80deea',
		cyan300: '#4dd0e1',
		cyan400: '#26c6da',
		cyan500: '#00bcd4',
		cyan600: '#00acc1',
		cyan700: '#0097a7',
		cyan800: '#00838f',
		cyan900: '#006064',
		cyanA100: '#84ffff',
		cyanA200: '#18ffff',
		cyanA400: '#00e5ff',
		cyanA700: '#00b8d4',

		teal50: '#e0f2f1',
		teal100: '#b2dfdb',
		teal200: '#80cbc4',
		teal300: '#4db6ac',
		teal400: '#26a69a',
		teal500: '#009688',
		teal600: '#00897b',
		teal700: '#00796b',
		teal800: '#00695c',
		teal900: '#004d40',
		tealA100: '#a7ffeb',
		tealA200: '#64ffda',
		tealA400: '#1de9b6',
		tealA700: '#00bfa5',

		green50: '#e8f5e9',
		green100: '#c8e6c9',
		green200: '#a5d6a7',
		green300: '#81c784',
		green400: '#66bb6a',
		green500: '#4caf50',
		green600: '#43a047',
		green700: '#388e3c',
		green800: '#2e7d32',
		green900: '#1b5e20',
		greenA100: '#b9f6ca',
		greenA200: '#69f0ae',
		greenA400: '#00e676',
		greenA700: '#00c853',

		lightGreen50: '#f1f8e9',
		lightGreen100: '#dcedc8',
		lightGreen200: '#c5e1a5',
		lightGreen300: '#aed581',
		lightGreen400: '#9ccc65',
		lightGreen500: '#8bc34a',
		lightGreen600: '#7cb342',
		lightGreen700: '#689f38',
		lightGreen800: '#558b2f',
		lightGreen900: '#33691e',
		lightGreenA100: '#ccff90',
		lightGreenA200: '#b2ff59',
		lightGreenA400: '#76ff03',
		lightGreenA700: '#64dd17',

		lime50: '#f9fbe7',
		lime100: '#f0f4c3',
		lime200: '#e6ee9c',
		lime300: '#dce775',
		lime400: '#d4e157',
		lime500: '#cddc39',
		lime600: '#c0ca33',
		lime700: '#afb42b',
		lime800: '#9e9d24',
		lime900: '#827717',
		limeA100: '#f4ff81',
		limeA200: '#eeff41',
		limeA400: '#c6ff00',
		limeA700: '#aeea00',

		yellow50: '#fffde7',
		yellow100: '#fff9c4',
		yellow200: '#fff59d',
		yellow300: '#fff176',
		yellow400: '#ffee58',
		yellow500: '#ffeb3b',
		yellow600: '#fdd835',
		yellow700: '#fbc02d',
		yellow800: '#f9a825',
		yellow900: '#f57f17',
		yellowA100: '#ffff8d',
		yellowA200: '#ffff00',
		yellowA400: '#ffea00',
		yellowA700: '#ffd600',

		amber50: '#fff8e1',
		amber100: '#ffecb3',
		amber200: '#ffe082',
		amber300: '#ffd54f',
		amber400: '#ffca28',
		amber500: '#ffc107',
		amber600: '#ffb300',
		amber700: '#ffa000',
		amber800: '#ff8f00',
		amber900: '#ff6f00',
		amberA100: '#ffe57f',
		amberA200: '#ffd740',
		amberA400: '#ffc400',
		amberA700: '#ffab00',

		orange50: '#fff3e0',
		orange100: '#ffe0b2',
		orange200: '#ffcc80',
		orange300: '#ffb74d',
		orange400: '#ffa726',
		orange500: '#ff9800',
		orange600: '#fb8c00',
		orange700: '#f57c00',
		orange800: '#ef6c00',
		orange900: '#e65100',
		orangeA100: '#ffd180',
		orangeA200: '#ffab40',
		orangeA400: '#ff9100',
		orangeA700: '#ff6d00',

		deepOrange50: '#fbe9e7',
		deepOrange100: '#ffccbc',
		deepOrange200: '#ffab91',
		deepOrange300: '#ff8a65',
		deepOrange400: '#ff7043',
		deepOrange500: '#ff5722',
		deepOrange600: '#f4511e',
		deepOrange700: '#e64a19',
		deepOrange800: '#d84315',
		deepOrange900: '#bf360c',
		deepOrangeA100: '#ff9e80',
		deepOrangeA200: '#ff6e40',
		deepOrangeA400: '#ff3d00',
		deepOrangeA700: '#dd2c00',

		brown50: '#efebe9',
		brown100: '#d7ccc8',
		brown200: '#bcaaa4',
		brown300: '#a1887f',
		brown400: '#8d6e63',
		brown500: '#795548',
		brown600: '#6d4c41',
		brown700: '#5d4037',
		brown800: '#4e342e',
		brown900: '#3e2723',

		blueGrey50: '#eceff1',
		blueGrey100: '#cfd8dc',
		blueGrey200: '#b0bec5',
		blueGrey300: '#90a4ae',
		blueGrey400: '#78909c',
		blueGrey500: '#607d8b',
		blueGrey600: '#546e7a',
		blueGrey700: '#455a64',
		blueGrey800: '#37474f',
		blueGrey900: '#263238',

		grey50: '#fafafa',
		grey100: '#f5f5f5',
		grey200: '#eeeeee',
		grey300: '#e0e0e0',
		grey400: '#bdbdbd',
		grey500: '#9e9e9e',
		grey600: '#757575',
		grey700: '#616161',
		grey800: '#424242',
		grey900: '#212121',

		black: '#000000',
		white: '#ffffff',

		blackPrimary: 'rgba(0, 0, 0, 0.87)',
		blackSecondary: 'rgba(0, 0, 0, 0.54)',
		blackHint: 'rgba(0, 0, 0, 0.38)',
		blackTransparent: 'rgba(0, 0, 0, 0)',

		whitePrimary: 'rgba(255, 255, 255, 1)',
		whiteSecondary: 'rgba(255, 255, 255, 0.70)',
		whiteHint: 'rgba(255, 255, 255, 0.50)',
		whiteTransparent: 'rgba(255, 255, 255, 0)',
	}

	export const Colors: ColorProperties

}
