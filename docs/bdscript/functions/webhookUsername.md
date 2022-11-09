# $webhookUsername
Temporarily changes the username of the provided webhook.

## Syntax
```
$webhookUsername[Webhook URL;Username]
```

### Parameters
- Webhook URL

   The URL of the webhook to change it's username for.
- Username

   The new username to set to the webhook.

## Example
### Code
```plain title="!webhook.user" showLineNumbers
$nomention
$trimContent

$argsCheck[>1;Usage: `!webhook.user <URL> (Username)`]

$var[Username;$replaceText[$message;$message[1];;1]]

$if[$var[Username]!=]
    // highlight-next-line
    $webhookUsername[$message[1];$var[Username]]
$endif

$webhookContent[$message[1];Hello world!]
```

### Preview
![Screenshot_20221109_233818](https://user-images.githubusercontent.com/95774950/200907743-3644a461-7e0c-49a9-89be-02a54a291f13.png)
