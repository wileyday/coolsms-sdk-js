# CoolSMS SDK for Javascript
You can send text messages, Kakaotalk in Korea using this package.

## Installing
To use the SDK, simply use npm package manager CLI. Type the following into a terminal window.

```bash
npm install coolsms-sdk
```

## Usage

```javascript
const coolsms = require('coolsms-sdk')

coolsms.setCredential({
  apiKey: 'Input API Key',
  apiSecret: 'Input API Secret'
})

coolsms.sendSimpleMessages(
  {
    messages: [
      {
        "to": {
          "recipient": "01000000001"
        },
        "from": "0200000001",
        "text": "COOLSMS Test Message",
        "type": "SMS",
      }
    ]
  },
  (error, result) => {
    if (error) {
      return console.log(error)
    }
    console.log(result)
  }
)
```

## Examples

[Group Message](https://github.com/coolsms/coolsms-sdk-js/tree/master/examples/groupMessage), 
[Simple Message](https://github.com/coolsms/coolsms-sdk-js/tree/master/examples/simpleMessage),
[KakaoTalk](https://github.com/coolsms/coolsms-sdk-js/tree/master/examples/kakaoTalk),
[Uploading Images](https://github.com/coolsms/coolsms-sdk-js/tree/master/examples/images),
[Message Logs](https://github.com/coolsms/coolsms-sdk-js/tree/master/examples/messageLog),
[Scheduled Messages](https://github.com/coolsms/coolsms-sdk-js/tree/master/examples/scheduledMessage),
[Balance](https://github.com/coolsms/coolsms-sdk-js/blob/master/examples/getBalance.js)

## Opening Issues

If you encounter a bug with the COOLSMS SDK for Javascript we would like to hear about it. Search the [existing issues](https://github.com/coolsms/coolsms-sdk-js/issues) and try to make sure your problem doesn’t already exist before opening a new issue. It’s helpful if you include the version of the SDK, Node.js or browser environment and OS you’re using. Please include a stack trace and reduced repro case when appropriate, too.

## License

Licensed under the MIT License.
