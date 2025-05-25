  export const ratingFn = (rating: number) => {
    let wholeValue;
    let halfValue: 0 | 1;
    if (rating % 2 !== 0) {
        // correct check
        // rating % 1 !== 0
      wholeValue = Math.floor(rating);
      halfValue = 1;
    } else {
      wholeValue = rating;
      halfValue = 0;
    }

    return { wholeValue, halfValue };
  };