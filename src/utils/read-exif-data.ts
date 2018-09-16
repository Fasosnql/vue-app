export default (rawExifData: object) => {
  let returnArr = [];

  for (let key in rawExifData) {
    returnArr.push({
      name: key,
      value: rawExifData[key]
    });
  }

  return returnArr;
}