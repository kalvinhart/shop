export const formatStringToUpper = (string: string): string => {
  return `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;
};