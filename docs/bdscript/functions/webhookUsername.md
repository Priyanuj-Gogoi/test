# $webhookUsername
Changes the username of the provided webhook.

## Syntax
```
$webhookUsername[Webhook URL;Username]
```

### Parameters
- Webhook URL

   The URL of the webhook to change it's username for.
- Username

   The new username to set to the webhook. Username should not exceed more than 32 characters and not include restricted words (like `discord`, `@everyone` etc.)

## Example
### Code
```plain title="!webhook.user"
$nomention
$trimContent

$argsCheck[>1;Usage: `!webhook.user <URL> (Username)`]

$var[URL;$message[1]]
$var[Username;$replaceText[$message;$message[1];;1]]

$if[$var[Username]!=]
    // highlight-next-line
    $webhookUsername[$var[URL];$var[Username]]
$endif

$webhookContent[$var[URL];Hello world!]
```

### Preview
