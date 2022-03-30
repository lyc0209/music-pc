export function useNumberFormat(number: number): string {
  if (number > 100000000) {
    return Number((number / 100000000).toFixed(1)) + " 亿"
  }

  if (number > 10000) {
    return Number((number / 10000).toFixed(1)) + " 万"
  }

  return number.toString()
}
