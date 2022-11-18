## Syntax Highlighting

#### Normal Text
```bds
Text
```
#### Reserved Symbol
```bds
[ ]
;
```
#### Embed Functions
```bds
$authorIcon $authorURL $author
$footerIcon $footer
$thumbnail $image
$addField
$addTimestamp
$color
$embeddedURL
$title
```
#### Comments
```bds
$c[Single-line Comment]

$c[Multi-line
Comment]

$c[Comment with Escape Char
%{-SEMICOL-}%]
```
#### Escape Chars
```bds
%{-SEMICOL-}% \;
\\
\] %ESCAPED%
\[
%{DOL}%
```
#### Relational Operators
```bds
> <
>= <=
!= ==
```
#### Variables
```bds
$var
$setUserVar $getUserVar
$setServerVar $getServerVar
$setChannelVar $getChannelVar
$setVar $getVar
```
#### If
```bds
$if
$else
$elseif
$endif
```
#### Async
```bds
$async
$endasync
$await
```
#### Try
```
$try
$catch
$endtry
$error
```
#### Premium Functions
```bds
$sendNotification
$customImage
$awaitReactions
```
#### Math Functions
```bds
$calculate
$sum $sub
$multi $divide
$round $numberSeparator
$sort
$max $min
```
#### Callbacks
```bds
$onJoined
$onLeave
$onInteraction
$awaitedCommand
$awaitedCommandError
$onAutoComplete
$onBanAdd
$onBanRemove
```
#### Premium Callbacks
```bds
$reaction
$messageContains
$alwaysReply
```
#### HTTP
```bds
$httpGet
$httpPost
$httpGetHeader
$httpAddHeader
$httpPut
$httpPatch
$httpDelete
$httpResult
$httpStatus
```
#### Webhooks
```bds
$webhookCreate
$webhookSend
$webhookTitle
$webhookContent
$webhookDelete
$webhookDescription
$webhookAvatarURL
$webhookUsername
$webhookFooter
```
