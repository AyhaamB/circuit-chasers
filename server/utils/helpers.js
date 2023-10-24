module.exports = {
    calculateTotalAmount: (items) => {
        let totalAmount = 0;

        for (item of items) {
            totalAmount += item.price;
        }

        return totalAmount
    }
}