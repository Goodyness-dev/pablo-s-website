import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger once globally
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

export interface NumberParts {
  prefix: string;
  targetNum: number;
  suffix: string;
  decimals: number;
  hasCommas: boolean;
}

/**
 * Parses raw statistical strings like "+16,000%", "30.2K", "4,088", "100%", etc.
 */
export function parseNumberString(value: string): NumberParts | null {
  const trimmed = value.trim();

  // Pattern matches optional prefix (+, -, $), digits with optional commas and decimals, and trailing suffixes (%, K, M, B, etc.)
  const match = trimmed.match(/^([+\-$]?)([\d,]+(?:\.\d+)?)([A-Za-z%+]*)$/);
  if (!match) return null;

  const prefix = match[1] || '';
  const rawNumStr = match[2];
  const suffix = match[3] || '';

  const hasCommas = rawNumStr.includes(',');
  const cleanNumStr = rawNumStr.replace(/,/g, '');
  const targetNum = parseFloat(cleanNumStr);

  if (isNaN(targetNum)) return null;

  const decimals = cleanNumStr.includes('.') ? cleanNumStr.split('.')[1].length : 0;

  return {
    prefix,
    targetNum,
    suffix,
    decimals,
    hasCommas,
  };
}

/**
 * Formats a number with commas and matching decimal places
 */
export function formatNumberWithParts(num: number, parts: NumberParts): string {
  const fixed = num.toFixed(parts.decimals);
  let [intPart, decPart] = fixed.split('.');

  if (parts.hasCommas) {
    intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return `${parts.prefix}${intPart}${decPart !== undefined ? '.' + decPart : ''}${parts.suffix}`;
}
