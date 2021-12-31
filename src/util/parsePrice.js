export default function parsePrice(priceString) {
    return parseInt(priceString.split(' + ')[0].replace('$', '').replace(',',''))
}