require("dotenv").config();

const { Bot } = require("grammy");

const bot = new Bot(process.env.BOT_TOKEN);

bot.command("start", async (ctx) => {
  await ctx.reply(
    "🚀 Welcome to Novixa!\n\nYour journey starts here."
  );
});

bot.start();

console.log("✅ Novixa Bot is running...");
