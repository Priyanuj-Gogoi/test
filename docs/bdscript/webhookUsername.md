# $webhookUsername
Temporarily changes the username of the provided webhook.

## Syntax
```
$webhookUsername[Webhook URL;Username]
```

### Parameters
- **Webhook URL**

   The URL of the webhook to change it's username for.
- **Username**

   The new username to set to the webhook.

## Example
### Code
```plain title="!webhook.user"
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

<details>
  <summary>Code Breakdown!</summary>
  <div>

```
$nomention
$trimContent
```
These two functions were used for disabling the default command author mention and remove multiple spaces from the author's message.

```
$argsCheck[>1;Usage: `!webhook.user <URL> (Username)`]
```
`$argsCheck[]` is being used here for limiting the author to supply at least one argument.

```
$var[Name;$replaceText[$message;$message[1];;1]]
```
absnsnsns

```
$if[$var[Name]!=]
     $webhookUsername[$message[1];$var[Name]]
$endif
````
sjsjsksms

```
$webhookContent[$message[1];Hello world!]
```
Finally, this function is used for

  </div>
</details>

### Preview
![Screenshot_20221109_233818](https://user-images.githubusercontent.com/95774950/200907743-3644a461-7e0c-49a9-89be-02a54a291f13.png)
