const { SlashCommandBuilder } = require("@discordjs/builders")
const {MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('purge')
    .setDescription('Purge command')
    .addStringOption(option => option.setName('amount').setDescription('Set the number of how many messages you would like to delete.').setRequired(true)),
    async execute(interaction, client) {
        amount = interaction.options.getString('amount')
        
        if(!interaction.member.permissions.has("MANAGE_MESSAGES")) return interaction.reply({content:"You do not have permission to execute this command!", ephermal: true})

        if(amount > 100) return interaction.reply({content:`Purge commands does not support over 100 messages.`, ephermal: true})
    
        if (isNaN(amount)) {
            interaction.reply("Amount must be a number!", ephermal=true)
        } else {
            amount + 1
            const fetchedmessages = await interaction.channel.messages.fetch({ limit: amount });
            interaction.channel.bulkDelete(fetchedmessages, true)
            amount - 1

            interaction.reply({content: `Successfully deleted **${amount}** messages.`, ephermal: true})
        }

    },
}