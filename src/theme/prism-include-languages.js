export default function prismIncludeLanguages(Prism) {

  Prism.languages.bdscript = {
     // URL validation RegEx by Diego Perini (https://gist.github.com/dperini/729294)
     'url': {
          'pattern':  /(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?/i,
          'greedy': true
      },
     'operator': /(?:==|[<>!]=|<|>)/,
     'variable': {
          'pattern': /\$(?:[sg]et(?:Channel|(?:Us|Serv)er)?V|v)?ar\[/,
          'greedy': true
      },
     'keyword': {
          'pattern': /\$(addButton|addCmdReactions|addEmoji|addField|addReactions|addSelectMenuOption|addTextInput|addTimestamp|allMembersCount|allowMention|allowRoleMentions|allowUserMentions|alternativeParsing|and|appendOptionSuggestion|argCount|argsCheck|async|authorAvatar|authorID|authorIcon|authorOfMessage|authorURL|author|autoCompleteOptionName|autoCompleteOptionValue|awaitFunc|awaitReactions|await|ban|banID|blackListIDs|blackListRolesIDs|blackListRoles|blackListServers|blackListUsers|boostCount|botCommands|botID|botLeave|botListDescription|botListHide|botNode|botOwnerID|botTyping|calculate|catch|categoryCount|categoryID|changeCooldownTime|changeUsernameWithID|changeUsername|channelCount|channelExists|channelID|channelIDFromName|channelName|channelPosition|channelSendMessage|channelTopic|channelType|charCount|checkCondition|checkContains|checkUserPerms|clear|clearReactions|clear|closeTicket|colorRole|color|commandsCount|cooldown|createChannel|createRole|creationDate|cropText|customEmoji|customID|customImage|date|day|defer|deleteChannelsByName|deleteChannels|deleteIn|deleteRole|deletecommand|description|disableSpecialEscaping|discriminator|divide|dm|dmChannelID|editButton|editChannelPerms|editEmbedIn|editIn|editMessage|editSelectMenuOption|editSelectMenu|editThread|elseif|else|embedSuppressErrors|embeddedURL|emoteCount|enableDecimals|enabled|endasync|endif|endtry|ephemeral|error|eval|executionTime|findChannel|findRole|findUser|footerIcon|footer|getBotInvite|getCooldown|getCustomStatus|getEmbedData|getInviteInfo|getLeaderboardValue|getMessage|getReactions|getRoleColor|getServerInvite|getTextSplitIndex|getTextSplitLength|getTimestamp|getUserStatus|giveRole|globalCooldown|globalUserLeaderboard|guildExists|guildID|hasRole|highestRole|highestRoleWithPerms|highestRole|hostingExpireTime|hour|httpAddHeader|httpDelete|httpGetHeader|httpGet|httpPatch|httpPost|httpPut|httpRemoveHeader|httpResult|httpStatus|hypesquad|if|ignoreChannels|ignoreLinks|ignoreTriggerCase|image|input|isAdmin|isBanned|isBoolean|isBot|isHoisted|isMentionable|isNSFW|isNumber|isSlash|isTimedOut|isUserDMEnabled|isValidHex|joinSplitText|kick|kickMention|lowestRole|lowestRoleWithPerms|lowestRole|max|membersCount|membersCount|mentionedChannels|mentionedRoles|mentioned|message|messageID|min|minute|modifyChannelPerms|modifyChannel|modifyRolePerms|modifyRole|modulo|month|multi|mute|newModal|newSelectMenu|newTicket|nickname|noMentionMessage|nomention|numberSeparator|onlyAdmin|onlyBotChannelPerms|onlyBotPerms|onlyForCategories|onlyForChannels|onlyForIDs|onlyForRoleIDs|onlyForRoles|onlyForServers|onlyForUsers|onlyIfMessageContains|onlyIf|onlyNSFW|onlyPerms|optOff|or|pinMessage|ping|premiumExpireTime|publishMessage|random|randomChannelID|randomMention|randomString|randomText|randomUser|randomUserID|random|registerGuildCommands|removeButtons|removeComponent|removeContains|removeLinks|removeSplitTextElement|repeatMessage|replaceText|repliedMessageID|reply|replyIn|resetServerVar|resetUserVar|roleCount|roleExists|roleGrant|roleID|roleInfo|roleName|roleNames|rolePosition|round|scriptLanguage|second|sendEmbedMessage|sendMessage|sendNotification|serverChannelExists|serverCooldown|serverCount|serverDescription|serverIcon|serverInfo|serverLeaderboard|serverName|serverNames|serverOwner|serverRegion|serverVerificationLvl|shardID|slashCommandsCount|slashID|slowmode|sort|splitText|startThread|stop|sub|sum|suppressErrors|takeRole|textSplit|threadAddMember|threadRemoveMember|thumbnail|time|timeout|title|toLowercase|toTitleCase|toUppercase|trimContent|trimSpace|try|tts|unban|unbanID|unescape|unmute|unpinMessage|unregisterGuildCommands|untimeout|uptime|url|useChannel|usedEmoji|userAvatar|userExists|userID|userInfo|userJoinedDiscord|userJoined|userLeaderboard|userPerms|userReacted|userRoles|userServerAvatar|username|varExistError|varExists|variablesCount|webhookAvatarURL|webhookColor|webhookContent|webhookCreate|webhookDelete|webhookDescription|webhookFooter|webhookSend|webhookTitle|webhookUsername|year)/
       },
     'comment': /(?:\$c\[)(?<Comment_Text>[\s\S]+)(?:\])/m,
     'escape-characters': [
           { 'pattern': /\\[\\\]\[;]/, 'alias': 'entity' },
           { 'pattern': /%(ESCAPED|\{-?(D|SEMIC)OL-?\})%/, 'alias': 'entity' }
      ],
     'brackets': {
          'pattern': /[\[\;\]]/,
          'alias': 'string'
        }
   };

  Prism.languages.bds = Prism.languages.bdscript;
}
