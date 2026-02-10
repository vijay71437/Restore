export function currencyFormat(num: number) {
    return '$' + (num / 100).toFixed(2);
}


export function filterEmptyValues(values:object){
    return Object.fromEntries(
        Object.entries(values).filter(([, value]) =>
            value !== undefined &&
            value !== "" &&
            !(Array.isArray(value) && value.length === 0)
        )
    );
}
