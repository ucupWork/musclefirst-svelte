
const mailchimp = require('@mailchimp/mailchimp_marketing');

export const client = mailchimp.setConfig({
    apiKey: import.meta.env.VITE_MAILCHIMP_KEY,
    server: import.meta.env.VITE_MAILCHIMP_SERVER_PREFIX,
});