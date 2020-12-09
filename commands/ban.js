// Ban a user by ID (or with a user/guild member object)
if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need the Ban Members permission.")
if (!message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])) return message.channel.send("You need to provide a valid user.")

guild.members.ban(message.mentions.users.first().id || message.guild.members.get(args[0])
  .then(user => console.log(`Banned ${user.username || user.id || user} from ${guild.name}`))
  .catch(console.error);
  
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions")
let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
if (!User) return message.channel.send("Invalid User")
if (User.hasPermission("BAN_MEMBERS")) return message.reply("Invalid Permissions")
let banReason = args.join(" ").slice(22);
if (!banReason) {
  banReason = "None"
}

User.ban({reason: banReason})
