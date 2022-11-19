let highlight = require('prism-react-renderer/themes/dracula');
let definition = {};

const add = (name = required('Name'), syntax = required('Syntax'), style = {}) => {
	if (!/^[a-z\d\-]+$/.test(name)) {
		throw new Error('Unsupported token name! Must be only lowercase ASCII letters, digits, or hyphens (-)');
	};
	highlight.styles.push({ types: `bds-${name}`, style });
	definition[`bds-${name}`] = syntax;
};

const required = (value) => {
	throw new Error(`'${value}' parameter is required!`);
};

add('comment', /\$c\[[\s\S]*?\]/, { color: '#b2afb3' });

add('nomention', /\$nomention/, { color: '#b25ae8' });

add('operator', { 'pattern': /[=!]=|[<>]=?/, 'greedy': true}, { color: '#44e2eb' });

add('escape-chars', [/\\[\\\]\[;]/,  /%(ESCAPED|\{-?(D|SEMIC)OL-?\})%/], { color: '#baeda4' });

add('callbacks', { 'pattern': /\$(?:a(?:waitedCom{2}and(?:Er{2}or)?|lwaysReply)|on(?:AutoComplete|Joined|Leave|Interaction|Mes{2}ageDelete|Ban(?:Ad{2}|Remove))|reaction|mes{2}ageContains)/, 'greedy': true}, { color: '#eb9a44' });

add('variables', { 'pattern': /\$(?:[gs]et(?:Chan{2}el|(?:Serv|Us)er)?V|v)ar/, 'greedy': true}, { color: '#eb4444' });

add('http', { 'pattern': /(?:\$)ht{2}p(?:(?:Get(?:Header)?|Ad{2}Header)|P(?:ost|ut|atch)|Delete|Result|Status)/, 'greedy': true}, { color: '#f28fd3' });

add('if', /\$(?:(?:end)?if|else(?:if)?)/, { color: '#a0eb44' });

add('async', /\$(?:endasync|a(?:wait[^R]|sync))/, { color: '#dfeb44' });

add('try', { 'pattern': /\$(?:(?:end)?try|er{2}or|catch)/, 'greedy': true }, { color: '#7eeb44' });

add('embed', [{
        'pattern': /\$(?:autho|fo{2}te)r(?:Icon|(?<=or)URL)?/,
        'lookbehind': true,
        'greedy': true
    }, {
        'pattern': /\$ad{2}[FT]i(?:eld|mestamp)/,
        'greedy': true
    }, {
        'pattern': /\$(?:image|color|embed{2}edURL|(?:t(?:humbnail|itle)))/,
        'greedy': true
    }], { color: '#34eb77' });

add('webhook', {
       'pattern': /\$webho{2}k(?:AvatarURL|C(?:reate|o(?:lor|ntent))|De(?:lete|scription)|Fo{2}ter|Send|Title|Username)/,
       'greedy': true
    }, { color: '#d8b6db' });

add('function', {
        'pattern': /\$(addButton|addCmdReactions|addEmoji|addReactions|addSelectMenuOption|addTextInput|allMembersCount|allowMention|allowRoleMentions|allowUserMentions|alternativeParsing|and|appendOptionSuggestion|argCount|argsCheck|async|authorAvatar|authorID|authorOfMessage|autoCompleteOptionName|autoCompleteOptionValue|awaitFunc|awaitReactions|await|ban|banID|blackListIDs|blackListRolesIDs|blackListRoles|blackListServers|blackListUsers|boostCount|botCommands|botID|botLeave|botListDescription|botListHide|botNode|botOwnerID|botTyping|catch|categoryCount|categoryID|changeCooldownTime|changeUsernameWithID|changeUsername|channelCount|channelExists|channelID|channelIDFromName|channelName|channelPosition|channelSendMessage|channelTopic|channelType|charCount|checkCondition|checkContains|checkUserPerms|clear|clearReactions|clear|closeTicket|colorRole|color|commandsCount|cooldown|createChannel|createRole|creationDate|cropText|customEmoji|customID|customImage|defer|deleteChannelsByName|deleteChannels|deleteIn|deleteRole|deletecommand|description|disableSpecialEscaping|discriminator|dm|dmChannelID|editButton|editChannelPerms|editEmbedIn|editIn|editMessage|editSelectMenuOption|editSelectMenu|editThread|elseif|else|embedSuppressErrors|embeddedURL|emoteCount|enabled|endasync|endif|endtry|ephemeral|error|eval|executionTime|findChannel|findRole|findUser|footerIcon|footer|getBotInvite|getCooldown|getCustomStatus|getEmbedData|getInviteInfo|getLeaderboardValue|getMessage|getReactions|getRoleColor|getServerInvite|getTextSplitIndex|getTextSplitLength|getUserStatus|giveRole|globalCooldown|globalUserLeaderboard|guildExists|guildID|hasRole|highestRole|highestRoleWithPerms|highestRole|hostingExpireTime|hour|httpAddHeader|httpDelete|httpGetHeader|httpGet|httpPatch|httpPost|httpPut|httpRemoveHeader|httpResult|httpStatus|hypesquad|if|ignoreChannels|ignoreLinks|ignoreTriggerCase|image|input|isAdmin|isBanned|isBoolean|isBot|isHoisted|isMentionable|isNSFW|isNumber|isSlash|isTimedOut|isUserDMEnabled|isValidHex|joinSplitText|kick|kickMention|lowestRole|lowestRoleWithPerms|lowestRole|membersCount|membersCount|mentionedChannels|mentionedRoles|mentioned|message|messageID|minute|modifyChannelPerms|modifyChannel|modifyRolePerms|modifyRole|month|mute|newModal|newSelectMenu|newTicket|nickname|noMentionMessage|onlyAdmin|onlyBotChannelPerms|onlyBotPerms|onlyForCategories|onlyForChannels|onlyForIDs|onlyForRoleIDs|onlyForRoles|onlyForServers|onlyForUsers|onlyIfMessageContains|onlyIf|onlyNSFW|onlyPerms|optOff|or|pinMessage|ping|premiumExpireTime|publishMessage|random|randomChannelID|randomMention|randomString|randomText|randomUser|randomUserID|random|registerGuildCommands|removeButtons|removeComponent|removeContains|removeLinks|removeSplitTextElement|repeatMessage|replaceText|repliedMessageID|reply|replyIn|resetServerVar|resetUserVar|roleCount|roleExists|roleGrant|roleID|roleInfo|roleName|roleNames|rolePosition|scriptLanguage|sendEmbedMessage|sendMessage|sendNotification|serverChannelExists|serverCooldown|serverCount|serverDescription|serverIcon|serverInfo|serverLeaderboard|serverName|serverNames|serverOwner|serverRegion|serverVerificationLvl|shardID|slashCommandsCount|slashID|slowmode|splitText|startThread|stop|suppressErrors|textSplit|threadAddMember|threadRemoveMember|timeout|toLowercase|toTitleCase|toUppercase|trimContent|trimSpace|tts|unban|unbanID|unescape|unmute|unpinMessage|unregisterGuildCommands|untimeout|uptime|url|useChannel|usedEmoji|userAvatar|userExists|userID|userInfo|userJoined|userLeaderboard|userPerms|userReacted|userRoles|userServerAvatar|username|varExistError|varExists|variablesCount)/
    }, { color: '#5aade8' });

add('symbol', /[\[\;\]]/, { color: '#eb446b' });

// add('math', /\$(?:s(?:ort|u[mb])|m(?:ax|in)|enableDecimals|divide|m(?:ulti|odulo)|calculate|round|numberSeparator)/);

// add('time', /\$(?:da(?:y|te)|getTimestamp|time|minute|second|hour|month|year)/);

console.log(highlight)
console.log(definition)

module.exports = { highlight, definition };
