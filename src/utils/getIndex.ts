export const getIndex = ((value: string, arr: any, key: string) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      return i;
    }
  }
  return -1;
});
