function getItemById(items, id) {
    return items.find(item => item.id === id)
}

function buildTransactions(sales, items) {
    return sales.map(sale => {
        const itemId = sale.itemId
        const item = getItemById(items, itemId)

        return {
            ...sale,
            description: item.description,
            price: item.price,
        }
    })
}

function getTransactionsByItemDescription(transction, description) {
    return transction.filter(transction => transction.description === description)
}

module.exports = {
    // Uncomment these as you write them
    getItemById,
    buildTransactions,
    getTransactionsByItemDescription
}