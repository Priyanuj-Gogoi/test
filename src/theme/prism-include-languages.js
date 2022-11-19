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
     // $c
    'bds-comment': /\$c\[[\s\S]*?\]/,
    // $nomention
    'bds-nomention': /\$nomention/,
    // != == > < >= <=
    'bds-operator': {
        'pattern': /[=!]=|[<>]=?/,
        'greedy': true
    },
    'bds-escape-chars': [
        // \] \\ \; \[
        /\\[\\\]\[;]/,
        // %{-SEMICOL-}% %ESCAPED% %{DOL}%
       /%(ESCAPED|\{-?(D|SEMIC)OL-?\})%/
    ],
    'bds-callbacks': {
        'pattern': /\$(?:a(?:waitedCom{2}and(?:Er{2}or)?|lwaysReply)|on(?:AutoComplete|Joined|Leave|Interaction|Mes{2}ageDelete|Ban(?:Ad{2}|Remove))|reaction|mes{2}ageContains)/,
        'greedy': true
    },
    'bds-variables': {
        'pattern': /\$(?:[gs]et(?:Chan{2}el|(?:Serv|Us)er)?V|v)ar/,
        'greedy': true
    },
    'bds-http-funcs': {
        'pattern': /(?:\$)ht{2}p(?:(?:Get(?:Header)?|Ad{2}Header)|P(?:ost|ut|atch)|Delete|Result|Status)/,
        'greedy': true
    },
    'bds-if': /\$(?:(?:end)?if|else(?:if)?)/,
    'bds-async': /\$(?:endasync|a(?:wait[^R]|sync))/,
    'bds-try': {
        'pattern': /\$(?:(?:end)?try|er{2}or|catch)/,
        'greedy': true
    },
    'bds-embeds': [{
        'pattern': /\$(?:autho|fo{2}te)r(?:Icon|(?<=or)URL)?/,
        'lookbehind': true,
        'greedy': true
    }, {
        'pattern': /\$ad{2}[FT]i(?:eld|mestamp)/,
        'greedy': true
    },
       /\$(?:image|color|embeddedURL|(?:t(?:humbnail|itle)))/
    ],
    'bds-webhooks': {
       'pattern': /\$webho{2}k(?:AvatarURL|C(?:reate|o(?:lor|ntent))|De(?:lete|scription)|Fo{2}ter|Send|Title|Username)/,
       'greedy': true
    },
    'bds-math-funcs': /\$(?:s(?:ort|u[mb])|m(?:ax|in)|enableDecimals|divide|m(?:ulti|odulo)|calculate|round|numberSeparator)/,
    'bds-time-funcs': /\$(?:da(?:y|te)|getTimestamp|time|minute|second|hour|month|year)/,
    'bds-funcs': {
        'pattern': /\$(addButton|addCmdReactions|addEmoji|addReactions|addSelectMenuOption|addTextInput|allMembersCount|allowMention|allowRoleMentions|allowUserMentions|alternativeParsing|and|appendOptionSuggestion|argCount|argsCheck|async|authorAvatar|authorID|authorOfMessage|autoCompleteOptionName|autoCompleteOptionValue|awaitFunc|awaitReactions|await|ban|banID|blackListIDs|blackListRolesIDs|blackListRoles|blackListServers|blackListUsers|boostCount|botCommands|botID|botLeave|botListDescription|botListHide|botNode|botOwnerID|botTyping|catch|categoryCount|categoryID|changeCooldownTime|changeUsernameWithID|changeUsername|channelCount|channelExists|channelID|channelIDFromName|channelName|channelPosition|channelSendMessage|channelTopic|channelType|charCount|checkCondition|checkContains|checkUserPerms|clear|clearReactions|clear|closeTicket|colorRole|color|commandsCount|cooldown|createChannel|createRole|creationDate|cropText|customEmoji|customID|customImage|defer|deleteChannelsByName|deleteChannels|deleteIn|deleteRole|deletecommand|description|disableSpecialEscaping|discriminator|dm|dmChannelID|editButton|editChannelPerms|editEmbedIn|editIn|editMessage|editSelectMenuOption|editSelectMenu|editThread|elseif|else|embedSuppressErrors|embeddedURL|emoteCount|enabled|endasync|endif|endtry|ephemeral|error|eval|executionTime|findChannel|findRole|findUser|footerIcon|footer|getBotInvite|getCooldown|getCustomStatus|getEmbedData|getInviteInfo|getLeaderboardValue|getMessage|getReactions|getRoleColor|getServerInvite|getTextSplitIndex|getTextSplitLength|getUserStatus|giveRole|globalCooldown|globalUserLeaderboard|guildExists|guildID|hasRole|highestRole|highestRoleWithPerms|highestRole|hostingExpireTime|hour|httpAddHeader|httpDelete|httpGetHeader|httpGet|httpPatch|httpPost|httpPut|httpRemoveHeader|httpResult|httpStatus|hypesquad|if|ignoreChannels|ignoreLinks|ignoreTriggerCase|image|input|isAdmin|isBanned|isBoolean|isBot|isHoisted|isMentionable|isNSFW|isNumber|isSlash|isTimedOut|isUserDMEnabled|isValidHex|joinSplitText|kick|kickMention|lowestRole|lowestRoleWithPerms|lowestRole|membersCount|membersCount|mentionedChannels|mentionedRoles|mentioned|message|messageID|minute|modifyChannelPerms|modifyChannel|modifyRolePerms|modifyRole|month|mute|newModal|newSelectMenu|newTicket|nickname|noMentionMessage|onlyAdmin|onlyBotChannelPerms|onlyBotPerms|onlyForCategories|onlyForChannels|onlyForIDs|onlyForRoleIDs|onlyForRoles|onlyForServers|onlyForUsers|onlyIfMessageContains|onlyIf|onlyNSFW|onlyPerms|optOff|or|pinMessage|ping|premiumExpireTime|publishMessage|random|randomChannelID|randomMention|randomString|randomText|randomUser|randomUserID|random|registerGuildCommands|removeButtons|removeComponent|removeContains|removeLinks|removeSplitTextElement|repeatMessage|replaceText|repliedMessageID|reply|replyIn|resetServerVar|resetUserVar|roleCount|roleExists|roleGrant|roleID|roleInfo|roleName|roleNames|rolePosition|scriptLanguage|sendEmbedMessage|sendMessage|sendNotification|serverChannelExists|serverCooldown|serverCount|serverDescription|serverIcon|serverInfo|serverLeaderboard|serverName|serverNames|serverOwner|serverRegion|serverVerificationLvl|shardID|slashCommandsCount|slashID|slowmode|splitText|startThread|stop|suppressErrors|textSplit|threadAddMember|threadRemoveMember|timeout|toLowercase|toTitleCase|toUppercase|trimContent|trimSpace|tts|unban|unbanID|unescape|unmute|unpinMessage|unregisterGuildCommands|untimeout|uptime|url|useChannel|usedEmoji|userAvatar|userExists|userID|userInfo|userJoined|userLeaderboard|userPerms|userReacted|userRoles|userServerAvatar|username|varExistError|varExists|variablesCount)/
    },
    'bds-symbol': /[\[\;\]]/
};

Prism.languages.bds = Prism.languages.bdscript;
}
