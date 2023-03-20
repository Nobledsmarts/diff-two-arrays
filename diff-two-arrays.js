function diffArray(arr1, arr2) {
  return [... new Set([...arr1, ...arr2])].filter(item => !arr1.includes(item) || !arr2.includes(item));
}
