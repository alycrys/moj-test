const sortedWord = (word) => {
  const chars = word.toLowerCase().split("")
  const sortedChars = chars.sort()
  return sortedChars.join("")
}

export default sortedWord
