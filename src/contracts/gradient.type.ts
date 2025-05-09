const colorValues = {
  blue: 'rgba(52, 0, 198, 1)',
  purple: 'rgba(113, 0, 236, 1)',
  lightPurple: 'rgba(232, 218, 247, 1)',
  darkPurple: '#1E0D4F',
  white: '#FFFFFF',
};

export type GradientsColors = keyof typeof colorValues;

const BASE_GRADIENT = 'radial-gradient(48.42% 48.42% at 49.41% 51.58%, COLOR_PLACEHOLDER 0%, transparent 100%)';

export const COLORS = Object.fromEntries(
  Object.entries(colorValues).map(([name, gradient]) => [name, BASE_GRADIENT.replace('COLOR_PLACEHOLDER', gradient)])
) as Record<GradientsColors, string>;