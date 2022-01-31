const generateHeading = (word) => {
  // const heading = props.heading;
  if (word.split(" ").length < 2 || !word.includes(":")) {
    return word;
  }
  const splitArr = word.split(":");
  splitArr[0] = splitArr[0] + ":";
  splitArr[1] = splitArr[1].trim();
  return splitArr.join("\n");
};

export { generateHeading };
