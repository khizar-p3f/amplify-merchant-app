

const disputesController = require('../controller/disputes');
const txnController = require('../controller/transactions');

const handler = async (event) => {
    let response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: { result: "its  generic event" },
    };
    try {
        if (event.event_type === 'transactions') {
            response = await txnController.getAllTransactions(event)
        } else if (event.event_type === 'disputes') {
            response = await disputesController.getAllDisputes(event)
        }
        return response
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