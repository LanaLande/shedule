export function shortName(bigName: string): string{
 const  splittedArr = bigName.split(' ')
 
  const shortedName = splittedArr[1][0] + '.'

  const shortedThirdName = splittedArr[2][0] + '.'

   return splittedArr[0] + ' ' + shortedName + shortedThirdName

}