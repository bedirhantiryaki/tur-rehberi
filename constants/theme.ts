/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

// ana renk paleti - yeşil tonları kullanıyoruz çünkü doğa ve gezginlik vurgusu yapıyor
const tintColorLight = '#4CAF50';
const tintColorDark = '#66BB6A';

export const Colors = {
  light: {
    text: '#1A1A1A',
    textSecondary: '#666666',
    background: '#FFFFFF',
    backgroundSecondary: '#F5F5F5',
    tint: tintColorLight,
    primary: '#4CAF50',
    secondary: '#FF9800',
    accent: '#2196F3',
    border: '#E0E0E0',
    card: '#FFFFFF',
    icon: '#757575',
    tabIconDefault: '#9E9E9E',
    tabIconSelected: tintColorLight,
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    price: '#2E7D32',
  },
  dark: {
    text: '#FFFFFF',
    textSecondary: '#B0B0B0',
    background: '#121212',
    backgroundSecondary: '#1E1E1E',
    tint: tintColorDark,
    primary: '#66BB6A',
    secondary: '#FFB74D',
    accent: '#42A5F5',
    border: '#2C2C2C',
    card: '#1E1E1E',
    icon: '#B0B0B0',
    tabIconDefault: '#757575',
    tabIconSelected: tintColorDark,
    success: '#66BB6A',
    warning: '#FFB74D',
    error: '#EF5350',
    price: '#81C784',
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
