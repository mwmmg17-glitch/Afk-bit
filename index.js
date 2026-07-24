const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'aloncrafts2.falix.pro',
    port: 22117,
    username: 'AFK_Bot_247',
    version: false
  });

  bot.on('spawn', () => {
    console.log('تم دخول البوت بنجاح!');
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 60000);
  });

  bot.on('end', () => {
    console.log('انقطع الاتصال، جاري إعادة الاتصال...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => console.log('خطأ:', err));
}

createBot();
