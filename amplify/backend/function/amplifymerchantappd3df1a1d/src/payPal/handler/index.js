

const disputesController = require('../controller/disputes');
const txnController = require('../controller/transactions');

const handler = async (event) => {
    let response = { result: "Please define event_type" }    
    try {
        if (event.event_type === 'transactions') {
            response = await txnController.getAllTransactions(event)
        } else if (event.event_type === 'disputes') {
            response = await disputesController.getAllDisputes(event)
        }
        return response
    } catch (error) {
        return {
            error
        }

    }
}

module.exports = handler