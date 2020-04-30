const Discord = require('discord.js');
const config = require('./config.json');
const { prefix, token } = require('./config.json');
const PREFIX = '-';
const client = new Discord.Client();
client.once('ready', () => {
    console.log(`Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`);
    client.user.setActivity("The server, Created and codded by: Hicham#0001", {type: "WATCHING"}).catch(console.error);
});
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(message.content.startsWith(`${prefix}ping`)) {
        message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");        
}
if (message.content === `${prefix}help` ) {
    const exampleEmbed = new Discord.MessageEmbed()
.setTitle("Help commands:")
.setDescription('Prefix is:-')
.addField("Kick", "to kick a member")
.addField("ban", "to ban a member")
.addField("server", "informations about your server")
.addField("user-info", "give your informations")
.addField("help", "give you most used commands")
.setColor([199, 21, 133])
.setThumbnail("https://www.specimen-editions.fr/wp-content/uploads/2016/08/Lettre-M.png")
message.author.send(exampleEmbed);
message.reply('All commands has sent to your DM')
}
if (message.content === 'react bullet') {
    message.react('705228895124848680')
}
if (message.content === 'react discord gif') {
    message.react('705229023772672071')
}
if (message.content === `${prefix}`) {
    message.channel.send("Please use the right args or check the help command by typing -help")
}
if (message.content.startsWith('-ban')) {
    const user = message.mentions.users.first();
if (user) {
    const member = message.guild.member(user);
if (member) {
    member.ban({
    reason: 'They were bad!',
    }).then(() => {
    message.reply(`Successfully banned ${user.tag}`);
    }).catch(err => {
    message.reply('I was unable to ban the member');
    console.error(err);
    });
    } else {
    message.reply('That user isn\'t in this guild!');
    }
    } else {
    message.reply('You didn\'t mention the user to ban!');
    }
    }
if (message.content.startsWith('-kick')) {
    const user = message.mentions.users.first();
if (user) {
    const member = message.guild.member(user);
if (member) {
    member.kick('Optional reason that will display in the audit logs').then(() => {
    message.reply(`Successfully kicked ${user.tag}`);
    }).catch(err => {
    message.reply('I was unable to kick the member');
    console.error(err);
    });
    } else {
    message.reply('That user isn\'t in this guild!');
    }
    } else {
     message.reply('You didn\'t mention the user to kick!');
    }
    }

else if (message.content === '-avatar') {
    if (!message.mentions.users.size) {
        return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
    }

    const avatarList = message.mentions.users.map(user => {
        return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
    });

    // send the entire array of strings as a message
    // by default, discord.js will `.join()` the array with `\n`
    message.channel.send(avatarList);
}

else if (message.content === `${prefix}server`) {
    const exampleEmbed = new Discord.MessageEmbed()
}
else if (message.content === `${prefix}user-info`) {
	message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
}
});


client.login(config.token);