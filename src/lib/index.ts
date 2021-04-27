export const toCamelCase = (string: string) => {
  return string
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase());
};

export const camelToTitle = (string: string) => {
  return string
    .replace(/([A-Z])/g, (match: string) => " " + match)
    .replace(/^./, (match: string) => match.toUpperCase())
    .trim();
};
