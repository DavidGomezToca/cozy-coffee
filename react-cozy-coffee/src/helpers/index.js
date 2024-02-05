export const formatPrice = amount => {
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}