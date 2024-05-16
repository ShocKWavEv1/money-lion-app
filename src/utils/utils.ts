export const handleDate = (date: any) => {
  if (!date || isNaN(new Date(date).getTime())) {
    return "Invalid Date";
  }

  const parsedDate: any = new Date(date);
  const formatter = new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return formatter.format(parsedDate);
};

export const handleDynamicBackgroundColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = `rgb(${red},${green},${blue})`;

  return color;
};

export const handleNameAvatar = (first: string, last: string) => {
  const firstInitial = first.charAt(0).toUpperCase();
  const lastInitial = last.charAt(0).toUpperCase();

  return `${firstInitial}${lastInitial}`;
};

export const formatLikes = (number: any) => {
  if (number < 1000) {
    return `${number} likes`;
  } else if (number >= 1000 && number < 1000000) {
    return `${(number / 1000).toFixed(1)}k likes`;
  } else if (number >= 1000000) {
    return `${(number / 1000000).toFixed(1)}M likes`;
  }
};
