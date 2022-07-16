

const disputesController = require('../controller/disputes');
const txnController = require('../controller/transactions');

const handler = (event) => {
    try {
        if (event.event_type === 'transactions') {
            txnController.getAllTransactions(event)
        } else if (event.event_type === 'disputes') {
            disputesController.getAllDisputes(event)
        } else {
            return {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*"
                },
                body: { result: "its  generic event" },
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: { error },
        };
    }

}

module.exports = handler