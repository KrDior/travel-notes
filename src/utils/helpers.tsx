export const getKeyByValue = function(object: object, value: string): string | null {
  return Object.keys(object).find(key => object[key] === value) || null;
};
