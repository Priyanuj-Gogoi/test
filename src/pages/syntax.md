# Syntax Highlighting

```bds
Text
[ ] ;
$authorID
$author[Text;1]
$authorURL[https://botdesignerdiscord.com]

$c[Single-line Comment]

$c[Multi-line
Comment]

$c[ Hello world \]]

%{-SEMICOL-}% \\ \;
+ - * /
true false yes no
> < != == >=
$var $setUserVar $getUserVar
$if $async $try
$sendNotification

$if[$var[a]>=100]
      $sendMessage[hi\]]
      $roleGrant[$authorID;+$roleID[a]]
$endif

$calculate[(1+2+3+4+5)/25]

$onJoined
$alwaysReply
$onInteraction[]
$reaction

$httpGet[https://wtfismyip.com]
$httpPost
$httpGetHeader
$httpAddHeader
$httpPut
$httpPatch
$httpDelete
$httpResult
$httpStatus
```

```diff
- Hi
+ Hey
```
