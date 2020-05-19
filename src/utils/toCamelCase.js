const toCamelCase = (string) => {
  const convert = string.toLowerCase().replace(/(?:(^.)|([-_\s]+.))/g, (match) => {
    return match.charAt(match.length - 1).toUpperCase();
  });
  return convert.charAt(0).toLowerCase() + convert.substring(1);
};

export default toCamelCase;
