export const shortenAddress = (address: string, chars = 4): string => {
  if (!address || address.length < chars * 2 + 2) return "";

  const start = address.substring(0, chars + 2);
  const end = address.substring(address.length - chars);

  return `${start}...${end}`;
};
