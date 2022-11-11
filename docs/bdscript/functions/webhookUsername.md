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

$var[Name;$trimSpace[$replaceText[$message;$message[1];;1]]]

$if[$var[Name]!=]
      // highlight-next-line
      $webhookUsername[$message[1];$var[Name]]
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
These two functions are used for disabling the default command author mention and removing duplicate spaces from the author's message.

```
$argsCheck[>1;Usage: `!webhook.user <URL> (Username)`]
```
`$argsCheck[]` allows to set a custom words requirement. Here, in this case, it limits the author to supply at least one argument. If the author doesn't provide, then it throws the provided custom error message stated in the 2<sup>nd</sup> argument of `$argsCheck[]` function.

```
$var[Name;$trimSpace[$replaceText[$message;$message[1];;1]]]
```
`$replaceText[]` is used here to exclude the Webhook URL from the author's message and `$trimSpace` is used for removing leading & trailing white-space characters. Then, `$var[]` is used for storing the new username.

```
$if[$var[Name]!=]
      $webhookUsername[$message[1];$var[Name]]
$endif
````
An if condition to check whether the author has provided a new username in the message.
If the user have provided, then `$webhookUsername` function gets executed and changes the webhook username.
Otherwise, the if statement gets ignored.

```
$webhookContent[$message[1];Hello world!]
```
`$webhookUsername[]` is a pair-function i.e it relies on an another function to work properly, you are required to provide a webhook message/embed.
...(Still writing)...
To execute a normal message content webhook, use `$webhookContent[]` function or if you would like an embedded webhook, use `$webhookSend[]` function.

  </div>
</details>

### Preview
![Screenshot_20221109_233818](https://user-images.githubusercontent.com/95774950/200907743-3644a461-7e0c-49a9-89be-02a54a291f13.png)
