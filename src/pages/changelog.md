---
title: Changelog
description: Stay up-to-date with latest changes happening around in BDFD.
hide_table_of_contents: true
---

# Changelog

### November 2022
- Deprecated `$userJoinedDiscord[]` in favor of `$creationDate[]`
- Added `Format` argument to `$creationDate[]`
- Added `$editSplitText[]`
- Added `$serverEmojis[]`
- Added `$setChannelVar[]`
- Added `$getChannelVar[]`
- Added `$resetChannelVar[]`
- Added `channel` option to `$variablesCount[]`

### October 2022
- Added `$publishMessage[]`
- Made `$useChannel[]` work with message components
- Added `$channelPosition[]`
- Added `$categoryID`
- Added `$varExists[]`
- Added `$boostCount`
- Added `$categoryCount`
- Added `$isTimedOut[]`
- Added `stage` and `forum` channel types to `$createChannel[]`
- Added `stage`, `announcement`, and `forum` channel types to `$channelType[]`
- `$enableDecimals[]` now works with `$calculate[]`
- Added `$getCustomStatus[]`
- Added `$httpStatus`
- Added `$httpGetHeader[]`
- Added `$botOwnerID`
- Added `$repliedMessageID`
- Fixed the guild list fetching issue
- Added `$parentID`
- Added development slash commands
- Added auto-synchronisation of gateway intents

### September 2022
- Added `channelID` field to `$awaitFunc[]`
- Added `$trimContent`
- Fixed fetching guilds not always working in the app
- Added `$slashID`
- Fixed slash command reordering
- Added intent autodetection 
- Added `globaluser` option to `$variablesCount[]`
- Added support for big numbers in the math functions
- Added new text tutorial
- Fixed `$checkUserPerms[]` ignoring channel permissions
- Fixed `$addReactions[]` not working on slash commands
- Fixed `Ticket number` argument not working in `$newTicket[]`
- Fixed `$httpAddHeader[]`
- Fixed some callbacks not being detected as callbacks
- Fixed attachments not working in slash commands

### August 2022
- Added `$scriptLanguage`
- Fixed `$stop` breaking `$if[]`
- Renamed `$customImage[]` argument to `Custom image tag`
- Added `$hypesquad[]`
- Added `$dmChannelID[]`
- Fixed the app's max choices limit
- Fixed `$registerGuildCommands[]` removing previously registered commands
- Fixed `$reply` not working in DMs
- Made it possible to return milliseconds and nanoseconds in `$getTimestamp`
- Fixed `$addTextInput[]` not verifying max length
- Fixed `$url[]` returning an error when no input was provided
- Added `$userServerAvatar[]`
- Fixed `$cropText[]` not supporting unicode
- Not putting required slash command options on top no longer breaks the commands

### July 2022
- Added hex to the color picker
- Fixed `$executionTime` not working inside embed fields
- App now sends notification when bot hosting is expired
- Added `$sendNotification[]` for premium bots
- Made it possible to use only one option in a select menu
- Fixed `$editChannelPerms[]`
- Fixed verification of slash command names
- Fixed `$sort` not working with `-1` as return amount

### June 2022
- Fixed `$onlyBotChannelPerms[]`
- Fixed description verification in `$addSelectMenuOption[]` and `$editSelectMenuOption[]`
- Updated limits of select menu options
- Fixed updating components which are refering to `$messageID`

### May 2022
- Fixed token issues
- Fixed disappearing slash command options
- `AllowedMentions` field is now used in `$channelSendMessage[]`, `$sendEmbedMessage[]` and `$sendMessage[]`
- Fixed black screen after bot creation
- Fixed in-app tutorial
- Fixed escaping response in interactions
- Fixed cooldown error messages
- Fixed empty values in variables not getting saved
- Fixed userID being ignored when guildID was passed to `$getUserVar[]`

### April 2022
- Added `"return ID of the ticket message"` argument to `$newTicket[]`
- Fixed disappearing slash commands from the app's state

### March 2022
- Added `$toTitleCase[]`
- Fixed invite permission calculator
- Fixed `$suppressErrors[]` and `$embedSuppressErrors[]` getting ignored by components errors
- Fixed updating some components
- Added `$registerGuildCommands[]`
- Added `$unregisterGuildCommands[]`
- Added `/callback_list`, `/callback_tag_list`, and `/callback/:callback_tag` endpoints to public BDFD API

### February 2022
- `$httpResult[]` can return JSON now
- Fixed `$httpResult[]` not working with multiple requests
- Saving a command in the webapp no longer restarts the bots
- Optimized slash commands resynchronization
- Fixed custom images not working after saving a command
- Made it possible to escape `\` by using `\\`
- Removed user permission check for `$ban[]`, `$banID[]`, `$unban[]` and `$unbanID[]`
- Added `$newModal[]`
- Added `$addTextInput[]`
- Added `$input[]`
- Deprecated `$channelIDFromName[]` in favor of `$channelID[]`
- Added `$onlyForCategories[]`
- Fixed `$modifyChannelPerms[]` ignoring last permission
- Added `$onAutoComplete[]` callback
- Added `$autoCompleteOptionName`
- Added `$autoCompleteOptionValue`
- Added `$appendOptionSuggestion[]`

### January 2022
-  Added `$unescape[]`
-  Added a neutral permission (`/<perm>`) to `$modifyChannelPerms[]`
-  Added stop bot button in the app
-  Added restart bot button in the app
-  Added `$editChannelPerms[]` (replacement for the deprecated `$modifyChannelPerms[]`)
-  Added `$roleGrant[]` (replacement for the deprecated `$giveRole[]` and `$takeRole[]`)
-  Fixed component functions inside `$async[]` scope
-  Increased the limit of http functions in one command to `5`
-  Fixed `$userPerms[]`
-  Fixed some bugs regarding math commands
-  Added public BDFD API
-  Added `$serverDescription[]`

---

### December 2021
- Saving a command no longer causes the bot to restart
- Fixed `$noMentionMessage[]` in BDScript 2
- Added `$timeout[]` and `$untimeout[]`
- Deprecated `$mute[]` and `$unmute[]`
- Added `guildID` argument to `$getUserVar[]` and `$setUserVar[]`
- Fixed an issue with some bots not starting with invalid intents enabled
- Fixed the role cache
- Slash command's option description is now required
- Added `$shardID[]`
- Added sharding for premium bots
- Improved interaction handling
- Added `$defer`
- Fixed getting invites
- Added debug information inside the app for translators
- Fixed `$serverNames`
- Added `%` *(modulo)* to `$calculate[]`
- Fixed ephemeral interactions
- Fixed removing custom images
- Added missing permissions
- Fixed unintentional server restarts
- Made last argument in `$replaceText[]` optional
- Added bot guild list for premium bots in the app

### November 2021
- Added `$reply[]`
- Added `$trimSpace[]`
- Added `$url[]`
- Upgraded the database
- Sped up the node starting time
- Added `$botCommands[]`
- Added `$unpinMessage[]`
- Added `$pinMessage[]`
- Fixed `$isUserDMEnabled[]` not returning false in some cases
- `$addReactions[]` now works in slash commands
- `$dm[]` now can dm to more than one mention and can be used multiple times
- `$dm` now can be used with `$dm[]`
- Made `$random[]` to support decimals
- Added `$'randomChannelID` (BDScript Unstable only)
- Fixed `$textSplit[]` removing space

### October 2021
- Added `$deleteMessage[]`
- Added `$hostingExpireTime[]`
- Added timestamp option to `$premiumExpireTime`
- Fixed `$isUserDMEnabled[]`
- Fixed `image` parameter in `$sendEmbedMessage[]` and `$webhookSend[]`
- Fixed caching issue for `$serverIcon`
- Made it possible to use empty labels in the buttons
- New UI
- Added search bar in the variables section
- Made `BDScript 2` as default scripting language in the app
- Made it possible to use `https://youtu.be/` URL in the streaming statuses
- Added `$getTextSplitIndex[]`
- Added `$serverChannelExists[]`
- Fixed `$changeUsername[]` and `$changeUsernameWithID[]` not working on the current bot
- Made `$ephemeral` work with the buttons
- Fixed global variables not getting saved
- Fixed `$deletecommand` not getting catched by `$try` block
- Made it possible to open function's wiki article from the functions list

### September 2021
- Updated ToS
- Fixed `$executionTime` not working in embeds
- Added `$botNode`
- Added `$isBanned[]`
- Fixed a problem with `$charCount[]` having problems with unicode
- Added `$channelType[]`
- Added `$async[]`
- Added `$endasync`
- Added `$await[]`
- Added `$sort[]`
- Added `$userPerms[]`
- Added `$serverNames[]`
- Improved variables lookup time

### August 2021
- Added `$webhookTitle[]`
- Added `$webhookDescription[]`
- Added `$webhookFooter[]`
- Added `$webhookContent[]`
- Added `$webhookUsername[]`
- Added `$webhookAvatarURL[]`
- Added `$webhookCreate[]`
- Removed permission check from `$deleteChannelsByName[]`
- Removed permission check from `$deleteChannels[]`
- Removed permission check from `$createChannel[]`
- Fixed an issue with bots not working in threads
- Added `$startThread[]`
- Added `$webhookColor[]`
- Fixed optional field in `$getServerVar[]`
- Fixed floating points in `$onlyIf[]` conditions
- Added `$webhookDelete[]`
- Added `$webhookSend[]`
- Removed permission check from `$modifyChannelPerms[]`
- Made it possible to use multiple `$onInteraction[]`s
- Added `$onInteraction` callback (without `[]`)
- Added `$customID`
- Made it possible to use different scripting languages in callbacks
- Added `$editThread[]`
- Added `$threadAddMember[]`
- Added `$threadRemoveMember[]`
- Added `$getEmbedData[]`
- Made it possible to use block functions (`$if[]`, `$try`, etc.) inside function arguments in BDScript 2
- Fixed preprocessor failures in some corner cases in BDScript 2
- Fixed a bug with block-functions adding extra new line in BDScript 2
- Fixed and optimised `$setVar[]`
- Added `$sendEmbedMessage[]`
- Fixed condition parsing in `$if[]` for normal BDScript and BDScript Unstable
- Made command saving faster

### July 2021
- Added `$getTimestamp`
- Added support for decimals in the math functions
- Added `$newSelectMenu[]`
- Added `$addSelectMenuOption[]`
- Added `$editSelectMenu[]`
- Added `$editSelectMenuOption[]`
- Added `$removeComponent[]`
- Added `$calculate[]`
- Added `$round[]`
- Added `$enableDecimals[]`
- Added `$nickname`
- Added `row` and `column` information in BDScript 2 errors
- Fixed the issue with BDScript 2 not requiring `]`
- Adjusted the optimizer in BDScript 2
- Added `$onlyForRoleIDs[]`
- Added `$getCooldown[]`
- Fixed problems with `]` in some functions
- Fixed component functions inside `$eval[]` function
- Fixed minor bugs inside BDScript 2 parser
- Fixed author ID not showing up in `$mentioned[..;yes]`
- Fixed `$serverNames` which removed two last characters
- Fixed `$addTimestamp[]` when used for multiple embeds
- Added limits for the `$round[]` function *(max decimal place)*
- Added `$and[]`
- Added `$or[]`
- Added `$allowRoleMentions[]`
- Added `$allowUserMentions[]`
- Added `$guildExists[]`
- Fixed `$serverVerificationLvl`

### June 2021
- Fixed `$sendMessage[]` not working in normal BDScript
- Fixed `$checkUserPerms[]`
- Added `BDScript 2` script language
- Added `$try` **(only for BDScript 2)**
- Added `$catch` **(only for BDScript 2)**
- Added `$error` **(only for BDScript 2)**
- Added `$eval[]` **(only for BDScript 2)**
- Added `$optOff[]` **(only for BDScript 2)**
- Added `$stop[]` **(only for BDScript 2)**
- Added `$var[]` **(only for BDScript 2)**
- Added custom code highlighting
- Fixed `$lowestRole` and `$highestRole`
- Added `$isBoolean[]`
- Made it possible to add 5 buttons per row
- Added optional field `return type` to `$getLeaderboardValue[]`
- Added `$deleteRole[]`
- Added `$ephemeral`
- Added `$elseif[]` **(Only for BDScript 2)**
- Fixed URL in buttons
- Fixed buttons in DMs
- Fixed problems with custom prefixes
- Added `$getUserStatus[]`
- Added `$min[]`
- Added `$max[]`
- Fixed `$customEmoji[]`
- Made it possible to edit embeds in `$editMessage[]`
- Added support for multiple embeds
- Added `$httpAddHeader[]`
- Added `$httpRemoveHeader[]`

### May 2021
- Fixed a bug which allowed executing certain types of callbacks as normal commands
- Fixed member caching issue
- Fixed caching bots
- Fixed changing tokens in the webapp
- Fixed `$isUserDMEnabled[]`
- Added `$addButton[]`
- Added `$editButton[]`
- Added `$removeButtons` and `$removeButtons[]`
- Added `$onInteraction[]` callback
- Fixed some issues with slash commands
- Added `$c[]`

### April 2021
- Added `$httpGet[]`
- Added `$httpPost[]`
- Added `$httpPut[]`
- Added `$httpDelete[]`
- Added `$httpPatch[]`
- Improved overall caching
- Added `$httpResult[]`
- Made command execution faster

### March 2021
- Added `$cropText[]`
- Added `userID` field to `$awaitFunc[]`
- Fixed removing normal commands and slash commands
- Added `$removeLinks[]`
- Made `return authorID` optional in `$findUser[]`
- Added `$slowmode[]`
- Added `$checkUserPerms[]`
- Added `$isNSFW[]`
- Fixed setting NSFW in `$modifyChannel[]`
- Fixed `$userJoined[]` and `$userJoinedDiscord[]`
- Added `$editMessage[]`
- Fixed caching for new members
- Added `$slashCommandsCount`
- Added `$botID`
- Added more permissions - AttachFiles, TTS, ManageWebhooks, EmbedLinks, ExternalEmojis
- Added `$serverCooldown[]`
- Fixed the issue with not expiring app bans
- Fixed some issues with `[` and `]`
- Fixed problems with slash commands and cooldowns

### February 2021
- Added `$sendMessage[]`
- Added `$reply`
- Added slash commands
- Fixed mentions in `$findChannel[]`
- Improved performance in the command interpreter
- Optimized reaction handlers
- Added `$isSlash`
- Added new optional field to `$message[]`
- Fixed semicolons in `$channelSendMessage[]`

### January 2021
- Fixed the problem with statuses not showing up
- Fixed an issue with mentions not working
- Fixed loading bots from database
- Increased duration to 40 minutes for `$deleteIn[]`, `$editIn[]`, `$editEmbedIn[]`, `$replyIn[]`
- Added `$if[]`
- Added `$else`
- Added `$endif`
- Guild ID instead of `everyone` is now returned in `$lowestRole[]` and `$highestRole[]`
- Removed space commands *(you can still use `$alwaysReply`)*
- Added `$channelTopic[]`
- Fixed issues with streaming status
- Fixed an issue with tag/discriminator not working for `$userID[]` and `$findUser[]` 
- Added `$findChannel[]`
- Added `$channelExists[]`
- Added `$userJoined[]`
- Added `$userJoinedDiscord[]`

---

### December 2020
- Fixed timezones in `$time[]`
- Updated Discord API version
- Added `Competing` presence
- Added `$botLeave[]`
- Fixed `$getLeaderboardValue[]`
- Added `userID` option to `$resetUserVar[]`
- Added `serverID` option to `$serverOwner`
- Added `$premiumExpireTime`

### November 2020
- Fixed disappearing bot status
- Fixed `$serverCount` in bot status
- Improved caching
- Functions which require privileged intents are now marked in the app
- Added `$getLeaderboardValue[]`
- Added `$awaitReactions[]`
- Made awaited commands available for everyone
- Added awaited reactions
- Fixed problems with DMs

### October 2020
- Optimized memory usage
- Added member and presence intents
- Added `$editEmbedIn[]`
- Added `serverID` field to server variables
- Allowed using awaited functions in awaited commands
- Fixed leaderboards
- Fixed `$randomMention`, `$randomUser` and `$randomUserID`
- Added `$awaitReactions[]` for premium bots
- Added `$usedEmoji`
- Added errors to `$deletecommand`
- Fixed `$serverVerificationLvl` not working on very high verification servers
- Fixed reconnecting bots to gateway

### September 2020
- Added `$ignoreTriggerCase` for premium bots
- Fixed caching guilds
- Made `$findUser[]` & `$findRole[]` case insensitive
- Made `$findUser[]` to return author's ID, if no user found
- Added awaited commands for premium bots
- Fixed weird brackets in embeds
- Added trigger list in the app

### August 2020
- Migrated to the new infrastructure *(new database and API)*
- Premium released
- Fixed `$isMentionable[]`
- Fixed `$isHoisted[]`
- Added `$removeSplitTextElement[]`
- Fixed `$userAvatar[]` to no longer stops code execution
- Fixed `$argCount[]`
- Added `$findUser[]`
- Added `$findRole[]`
- Added `$disableSpecialEscaping`

### July 2020
- Renamed `$splitText[]` to `$getSplitText[]` to avoid confusion *(`$splitText[]` still works)*
- Added `$joinSplitText[]`
- Added `$getInviteInfo[]`
- Added `$guildID[]`
- Fixed `$numberSeparator[]` in the bot's status
- Fixed `$roleID[]` and `$channelID[]` to no longer stop code execution
- Enabled BDScript Unstable for callbacks
- Added `$getTextSplitLength`

### June 2020
- Fixed `$getReactions[]` in BDScript Unstable
- Fixed bracket escaping for some commands in BDScript Unstable
- Fixed `$modifyChannel[]` *(random slowmodes added on channels)*

### May 2020
- Fixed `$onlyBotPerms[]`
- Bot Designer List Open Beta
- Added `$botListDescription[]`
- Added `$botListHide`
- Fixed brackets issue in `$serverNames`
- Other bug fixing for Bot Designer and Bot Designer List

### April 2020
- Fixed `$serverIcon`
- Added `$changeCooldownTime[]`
- Disabled `$randomUserID`, `$'randomUserID`, `$deleteIn` and `$dm` in `$onMessageDelete`
- Fixed `$addField[]`
- Added error message in `$getServerVar[]` when provided variable does not exist
- Fixed `$userID[]` to not stop code execution, if user is not found
- Added `$botLeave`
- Removed permission check from `$clear` command.
- Fixed `$isAdmin[]`

### March 2020
- Added `$getReactions[]`
- Added `$userReacted[]`
- New command interpreter
- Added to new parser:
    - `$'random`
    - `$'random[]`
    - `$'randomText[]`
    - `$'randomUser`
    - `$'randomMention`
    - `$'randomUserID`
    - `$'randomString[]`
- Fixed brackets in `$getMessage[]`
- Changed behaviour of `$onlyPerms[]` command
- Added `$charCount[]`
- Added `$clearReactions[]`
- Added new options to `$getMessage[]`
- Fixed adding slowmode when using `$modifyChannel[]`
- Added `$checkContains[]`
- Added `$addEmoji[]`
- Added `$unbanID[]`
- Added `$hasRole[]`
- Optimized the leaderboard commands
- Fixed permissions in some commands
- Fixed `$onlyPerms[]`
- Fixed a bug with `$` in command prefix, `$message`, and `$noMentionMessage`

### February 2020
- Fixed errors in `$addField`
- Added `$serverRegion`
- Added `$serverOwner`
- Added `$emoteCount`
- Added `$isMentionable[]`
- Added `$isHoisted[]`
- Added `$serverIcon[]`
- Fixed suppressing errors in some variable commands
- Fixed bug with `$replaceText[]` inside `$description`
- Added `$isValidHex[]`
- Added `$isAdmin[]`
- Made `$userID[]` to not require discriminator
- Added `$serverVerificationLvl`
- Fixed stopping command when `$changeUsernameWithID[]` or `$changeUsername[]` throws an exception
- Added `$modifyRolePerms[]`
- Added `$isUserDMEnabled[]`
- Added new option to `$mentioned[]`
- Made `$discriminator[]` to use author's ID, if `userID` is not provided
- Added `$argCount[]`
- Added `$roleExists[]`
- Added `$varExistError[]`
- Removed permissions check for `$kick[]` function
- Fixed brackets issue in `$message` and `$noMentionMessage`
- Fixed `$globalUserLeaderboard[]`
- `$repeatMessage[]` won't send an error when there is `0` provided

### January 2020
- Final premium preparations
- Space commands for premium bots
- Added `sendChannelMessage()` to JS
- Added `$isNumber[]`
- Better description for` $replaceText[]`
- Removed `#` from `$getRoleColor[]`
- Added possibility of adding custom error message to `$suppressErrors[]`
- Added `$embedSuppressErrors[]`
- Added `$getServerVar[]` in command's name for premium bots
- Added custom separators to `$numberSeparator[]`
- Fixed issue with `+` and `-` in `$numberSeparator[]`
- iOS release
- Added `$isBot[]`
- Added `userID` option to `$takeRole[]`
- Fixed problems with timezones
- `@everyone` role shows up now when it's a highest/lowest role in `$highestRole/$lowestRole`
- `@everyone` role now works in `$rolePosition[]`
- Multiline support for `$replaceText[]`
- Fixed no errors in `$roleID[]`
- Added `$toUppercase[]`
- Added `$toLowercase[]`
- Added `roleID` and `userID` to `$modifyChannelPerms[]`
- Added `$authorOfMessage[]`
- Added `$userID[]`
- Improved servers response time by over 10x
- Fixed issues with `$setServerVar[]` and `$setUserVar[]`
- Multiline support for `$textSplit[]`
- Fixed brackets in `$username`

---

### December 2019
- Fixed high ping issues
- Fixed whole bunch of other issues
- Added to JS
    - `authorId`
    - `channelId`
    - `userMentions`
    - `roleMentions`
    - `unban()`
    - `takeRole()`
    - `giveRole()`
    - `channelTyping()`
    - `createChannel()`
    - `removeChannel()`
    - `unpinMessage()`
    - `banWithReason()`
    - `kickWithReason()`
    - `removeRole()`
    - `createRole()`
- Created status website *([https://status.botdesignerdiscord.com](https://botdesignerdiscord.com/status))*
- Web version of **Bot Designer for Discord** has been moved to new address *(https://botdesignerdiscord.com)*
- Fixed some issues in web version
- Fixed `$banID[]`
- Preparations for premium points

### November 2019
- Added `$rolePosition[]`
- Released translation strings to volunteers
- Added to JS
    - `kick()`
    - `ban()`
- Released new stable version
