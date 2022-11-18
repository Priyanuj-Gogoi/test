// BDScript Language Syntax Definition
// By Priyanuj Gogoi 
//
// License under MIT
// Copyright (c) 2022 Priyanuj Gogoi
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
// to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
// and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

export default function prismIncludeLanguages(Prism) {

  Prism.languages.bdscript = {
     'operator': {
         'pattern': /(?<Arithmetic>[+\-*\/%])|(?<Relational>[=!]=|[<>]=?)/,
         'greedy': true
     },
     'escape-characters': [
           { 'pattern': /\\[\\\]\[;]/, 'alias': 'entity' },
           { 'pattern': /%(ESCAPED|\{-?(D|SEMIC)OL-?\})%/, 'alias': 'entity' }
      ],
     'important': {
         'pattern': /^\$a(?:waitedCom{2}and(?:Er{2}or)?|lwaysReply)|on(?:AutoComplete|Joined|Leave|Interaction|Mes{2}ageDelete|Ban(?:Ad{2}|Remove))|reaction|mes{2}ageContains/,
         'greedy': true
      },
     'variable': {
          'pattern': /\$(?:[gs]et(?:Chan{2}el|(?:Serv|Us)er)?V|v)ar/,
          'greedy': true
      },
     'entity': {
         'pattern': /(?:\$)ht{2}p(?:(?:Get(?:Header)?|Ad{2}Header)|P(?:ost|ut|atch)|Delete|Result|Status)/,
         'greedy': true
     },
     'keyword': {
          'pattern': /\$(addButton|addCmdReactions|addEmoji|addField|addReactions|addSelectMenuOption|addTextInput|addTimestamp|allMembersCount|allowMention|allowRoleMentions|allowUserMentions|alternativeParsing|and|appendOptionSuggestion|argCount|argsCheck|async|authorAvatar|authorID|authorIcon|authorOfMessage|authorURL|author|autoCompleteOptionName|autoCompleteOptionValue|awaitFunc|awaitReactions|await|ban|banID|blackListIDs|blackListRolesIDs|blackListRoles|blackListServers|blackListUsers|boostCount|botCommands|botID|botLeave|botListDescription|botListHide|botNode|botOwnerID|botTyping|calculate|catch|categoryCount|categoryID|changeCooldownTime|changeUsernameWithID|changeUsername|channelCount|channelExists|channelID|channelIDFromName|channelName|channelPosition|channelSendMessage|channelTopic|channelType|charCount|checkCondition|checkContains|checkUserPerms|clear|clearReactions|clear|closeTicket|colorRole|color|commandsCount|cooldown|createChannel|createRole|creationDate|cropText|customEmoji|customID|customImage|date|day|defer|deleteChannelsByName|deleteChannels|deleteIn|deleteRole|deletecommand|description|disableSpecialEscaping|discriminator|divide|dm|dmChannelID|editButton|editChannelPerms|editEmbedIn|editIn|editMessage|editSelectMenuOption|editSelectMenu|editThread|elseif|else|embedSuppressErrors|embeddedURL|emoteCount|enableDecimals|enabled|endasync|endif|endtry|ephemeral|error|eval|executionTime|findChannel|findRole|findUser|footerIcon|footer|getBotInvite|getCooldown|getCustomStatus|getEmbedData|getInviteInfo|getLeaderboardValue|getMessage|getReactions|getRoleColor|getServerInvite|getTextSplitIndex|getTextSplitLength|getTimestamp|getUserStatus|giveRole|globalCooldown|globalUserLeaderboard|guildExists|guildID|hasRole|highestRole|highestRoleWithPerms|highestRole|hostingExpireTime|hour|httpAddHeader|httpDelete|httpGetHeader|httpGet|httpPatch|httpPost|httpPut|httpRemoveHeader|httpResult|httpStatus|hypesquad|if|ignoreChannels|ignoreLinks|ignoreTriggerCase|image|input|isAdmin|isBanned|isBoolean|isBot|isHoisted|isMentionable|isNSFW|isNumber|isSlash|isTimedOut|isUserDMEnabled|isValidHex|joinSplitText|kick|kickMention|lowestRole|lowestRoleWithPerms|lowestRole|max|membersCount|membersCount|mentionedChannels|mentionedRoles|mentioned|message|messageID|min|minute|modifyChannelPerms|modifyChannel|modifyRolePerms|modifyRole|modulo|month|multi|mute|newModal|newSelectMenu|newTicket|nickname|noMentionMessage|nomention|numberSeparator|onlyAdmin|onlyBotChannelPerms|onlyBotPerms|onlyForCategories|onlyForChannels|onlyForIDs|onlyForRoleIDs|onlyForRoles|onlyForServers|onlyForUsers|onlyIfMessageContains|onlyIf|onlyNSFW|onlyPerms|optOff|or|pinMessage|ping|premiumExpireTime|publishMessage|random|randomChannelID|randomMention|randomString|randomText|randomUser|randomUserID|random|registerGuildCommands|removeButtons|removeComponent|removeContains|removeLinks|removeSplitTextElement|repeatMessage|replaceText|repliedMessageID|reply|replyIn|resetServerVar|resetUserVar|roleCount|roleExists|roleGrant|roleID|roleInfo|roleName|roleNames|rolePosition|round|scriptLanguage|second|sendEmbedMessage|sendMessage|sendNotification|serverChannelExists|serverCooldown|serverCount|serverDescription|serverIcon|serverInfo|serverLeaderboard|serverName|serverNames|serverOwner|serverRegion|serverVerificationLvl|shardID|slashCommandsCount|slashID|slowmode|sort|splitText|startThread|stop|sub|sum|suppressErrors|takeRole|textSplit|threadAddMember|threadRemoveMember|thumbnail|time|timeout|title|toLowercase|toTitleCase|toUppercase|trimContent|trimSpace|try|tts|unban|unbanID|unescape|unmute|unpinMessage|unregisterGuildCommands|untimeout|uptime|url|useChannel|usedEmoji|userAvatar|userExists|userID|userInfo|userJoinedDiscord|userJoined|userLeaderboard|userPerms|userReacted|userRoles|userServerAvatar|username|varExistError|varExists|variablesCount|webhookAvatarURL|webhookColor|webhookContent|webhookCreate|webhookDelete|webhookDescription|webhookFooter|webhookSend|webhookTitle|webhookUsername|year)/
       },
     'comment': /\$c\[[\s\S]*?\]/,
     'symbol': /[\[\;\]]/
   };

  Prism.languages.bds = Prism.languages.bdscript;
}
