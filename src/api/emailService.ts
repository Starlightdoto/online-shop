import axios from 'axios';

const apiKey = 'f8f1c907fcdc3fafb7a222a91f6fb834-us8';
const listId = '9b0fa6f1ec';

export const sendSignUpEmail = async (email: string, firstName: string, lastName: string) => {
    try {
        const apiKeyBase64 = btoa(`anystring:${apiKey}`);

        const response = await axios.post(`https://us8.api.mailchimp.com/3.0/lists/${listId}/members`,
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                },
            },
            {
                headers: {
                    Authorization: `Basic ${apiKeyBase64}`,
                },
            }
            );
        console.log('Email sent to customer', response.data);
    } catch (error: any) {
        console.error('Error sending email:', error.message);
    }
}