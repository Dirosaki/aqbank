export function getInitials(name: string) {
  const [firstName, ...remainingWords] = name.split(' ')
  const firstLetter = firstName.charAt(0).toUpperCase()
  const lastLetter = remainingWords.pop()?.charAt(0).toUpperCase() ?? ''

  return `${firstLetter}${lastLetter}`
}
