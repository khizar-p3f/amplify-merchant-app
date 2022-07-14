/* Amplify Params - DO NOT EDIT
    ENV
    REGION
    AUTH_AMPLIFYMERCHANTAPP_USERPOOLID
    API_AMPLIFYMERCHANTAPP_GRAPHQLAPIIDOUTPUT
    API_AMPLIFYMERCHANTAPP_GRAPHQLAPIENDPOINTOUTPUT
    API_AMPLIFYMERCHANTAPP_GRAPHQLAPIKEYOUTPUT
    hostname
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
import mock from './mock'
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(mock),
    };
};
