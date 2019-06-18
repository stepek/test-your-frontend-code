const add = (augend, addend) => {
  if (augend === undefined && addend === undefined) {
    return 0
  }
  if (augend !== undefined && addend === undefined) {
    return augend
  }
  if (addend !== undefined && augend === undefined) {
    return addend
  }
  if (typeof addend === 'string' || typeof augend === 'string') {
    return `${addend}${augend}`
  }

  return augend + addend
}

export default add
