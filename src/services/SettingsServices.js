export const getDecimalPlaces = decimalPlaces =>
    decimalPlaces <= 0
        ? ''
        : [...Array(decimalPlaces)
            .keys()].reduce((acc) => acc + 0, '.')
            .toString()
