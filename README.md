# ringcentral-personal-bot-template-js

Template for [RingCentral personal chatbot js](https://github.com/rc-personal-bot-framework/ringcentral-personal-chatbot-js).

## Quick start

Let's start a simple chatbot server and login to it with you sandbox glip account, and you account will auto respond to keywords set by you.

```bash
# get the code
git clone git@github.com:rc-personal-bot-framework/ringcentral-personal-bot-template-js.git
cd ringcentral-personal-bot-template-js

# install dependecies
npm i

# start proxy server, this will make your local bot server can be accessed by RingCentral service
npm run ngrok

# will show
Forwarding                    https://xxxx.ap.ngrok.io -> localhost:4100
# Remember the https://xxxx.ap.ngrok.io, we will use it later
```

Login to [developer.ringcentral.com](https://developer.ringcentral.com/) and create Web-based App:

- Application Type: Public
- Platform Type: Browser-based
- Carrier: accept the default values
- Permissions Needed: Accounts, Contacts, Glip, Glip Internal, Read Accounts, Read Client Info, Read Contacts, Read Presence, Webhook Subscriptions
- Set OAuth Redirect URI: Using your ngrok HTTPS URL from above, enter in the following value: `https://xxxx.ap.ngrok.io/rc/oauth`.

<a href="https://developer.ringcentral.com/new-app?name=Sample+Personal+Bot+App&desc=A+sample+app+created+in+conjunction+with+the+ringcentral+personal+bot+framework&public=true&type=BrowserBased&carriers=7710,7310,3420&permissions=Glip,ReadAccounts,ReadMessages,ReadContacts,ReadPresence,SubscriptionWebhook&redirectUri=" target="_blank">Click to create app</a>

```bash
cp .env.sample .env
# then fill all required fields in .env, you can get client ID / secret from app setting

# run sample hello bot
npm start

```

Then visit [https://xxxx.ap.ngrok.io](https://xxxx.ap.ngrok.io) to login, after auth, you can set `Bot skill: FAQ`'s keywords and answers from its skill setting page. Then try the keywords with another account.

## Build

```bash
# build
npm run build

```