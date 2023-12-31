import { Bot, webhookCallback, InlineKeyboard } from "grammy";
var T = "5640820074:AAGv9fS4bkI3IeU83WSwP0Fqk05-PyEEedI"
import { createCallbackData } from "callback-data";


// addEventListener("fetch", webhookCallback(bot, "cloudflare"));


//     const handleUpdate = webhookCallback(bot, "std/http")

//     await handleUpdate(request)
let counter = 0;


export default {
  async fetch(request) {

  var url = new URL(request.url)
    var { pathname } = url
   pathname = pathname.replace("/", "")
    const params = {}
    const queryString = url.search.slice(1).split('&')
    queryString.forEach(item => {
        const [key, value] = item.split('=')
        if (key) params[key] = value || true
    })

    
    
 if(params.t) globalThis.TOKEN = params.t


 	
const bot = new Bot(T, { botInfo: "BOT_INFO" });



const resetCounterData = createCallbackData("reset", {});
const counterData = createCallbackData("counter", {
  action: String,
  number: Number,
});

const counterKeyboard = new InlineKeyboard()
  .text(
    "+1",
    counterData.pack({
      number: 1,
      action: "plus",
    }), // callback data is equal to "counter:1:plus"
  )
  .text(
    "+5",
    counterData.pack({
      number: 5,
      action: "plus",
    }), // callback data is equal to "counter:5:plus"
  )
  .row()
  .text(
    "-1",
    counterData.pack({
      number: 1,
      action: "minus",
    }), // callback data is equal to "counter:1:minus"
  )
  .text(
    "-5",
    counterData.pack({
      number: 5,
      action: "minus",
    }), // callback data is equal to "counter:5:minus"
  )
  .row()
  .text(
    "Reset",
    resetCounterData.pack({}), // callback data is equal to "reset"
  );

bot.command("start", (ctx) =>
  ctx.reply(`Hi! Counter: ${counter}`, {
    reply_markup: counterKeyboard,
  }));

bot.callbackQuery(
  counterData.filter(),
  async (ctx) => {
    const { number, action } = counterData.unpack(
      ctx.callbackQuery.data,
    );

    if (action === "plus") {
      counter += Number(number);
    } else if (action === "minus") {
      counter -= Number(number);
    }

    await ctx.answerCallbackQuery();
    await ctx.editMessageText(`Counter: ${counter}`, {
      reply_markup: counterKeyboard,
    });
  },
);

bot.callbackQuery(
  resetCounterData.filter(),
  async (ctx) => {
    counter = 0;

    await ctx.answerCallbackQuery();
    await ctx.editMessageText(`Counter: ${counter}`, {
      reply_markup: counterKeyboard,
    });
  },
);

   try {
    
//     var bot = new Bot(TOKEN)
// bot.use(session({ initial: () => ({}) }));
// bot.use(transformWebAppData());

// bot.command("start", async (ctx) => {
//   const keyboard = new Keyboard();

//   keyboard.webApp("Date Picker", new DatePicker().build());
//   keyboard.webApp("Time Picker", new TimePicker().build()).row();
//   keyboard.webApp("Color Picker", new ColorPicker().build()).row();
//   keyboard.webApp("QR Scanner", new QrScanner().build()).row();

//   await ctx.reply("Welcome!", {
//     reply_markup: {
//       keyboard: keyboard.build(),
//       resize_keyboard: true,
//     },
//   });

//   const inlineKeyboard = new InlineKeyboard();
//   const { token } = await createWebhook();
//   const config = {
//     callback: `https://webhook.site/${token}`,
//   };

//   inlineKeyboard.url("Results »", `https://webhook.site/#!/${token}`).row();
//   inlineKeyboard.webApp("Date Picker", new DatePicker(config).build());
//   inlineKeyboard.webApp("Time Picker", new TimePicker(config).build()).row();
//   inlineKeyboard.webApp("Color Picker", new ColorPicker(config).build()).row();
//   inlineKeyboard.webApp("QR Scanner", new QrScanner(config).build()).row();

//   await ctx.reply(`Inline keyboard`, {
//     reply_markup: inlineKeyboard,
//   });
// })
// bot.filter(ColorPicker.match(), (ctx) => {
//   const result = `Data from Color Picker \n\n${formatWebAppData(ctx)}`;

//   return ctx.reply(result, {
//     parse_mode: "HTML",
//   });
// });

// bot.filter(DatePicker.match(), (ctx) => {
//   const result = `Data from Date Picker \n\n${formatWebAppData(ctx)}`;

//   return ctx.reply(result, {
//     parse_mode: "HTML",
//   });
// });

// bot.filter(TimePicker.match(), (ctx) => {
//   const result = `Data from Time Picker \n\n${formatWebAppData(ctx)}`;

//   return ctx.reply(result, {
//     parse_mode: "HTML",
//   });
// });

// bot.filter(QrScanner.match(), (ctx) => {
//   const result = `Data from QR Scanner \n\n${formatWebAppData(ctx)}`;

//   return ctx.reply(result, {
//     parse_mode: "HTML",
//   });
// });

// Handle time selected by a user
// bot.filter(TimePicker.match(), (ctx) => {
//   const { time } = ctx.webAppData;

//   return ctx.reply(`You chose ${time.getUTCHours()}:${time.getUTCMinutes()}`);
// });
// bot.catch(error => {
//   console.warn(error)
// })

// async function startup() {
//   await bot.start({
//     onStart: botInfo => {
//       console.log(new Date(), 'Bot starts as', botInfo.username)
//     },
//   })
// }

// bot.command("hunger", async (ctx) => {
//   const count = ctx.session.pizzaCount
//   await ctx.reply(`Your hunger level is ${count}!`)
// })

// bot.hears(/🍕/, (ctx) => ctx.session.pizzaCount++)

   //  bot.command("set", (ctx) => ctx.reply("Welcome! ZAluppa"))

//     bot.command("help", async (ctx) => {

//       if (ctx.config.isDeveloper) await ctx.reply("Hi mom!! <3")
//       else await ctx.reply("Welcome, human!")
//     })

//     bot.on(["::pre", "::code"], (ctx) => ctx.reply(`Pong! ${new Date()} ${Date.now()}`))

// bot.on("message", async (ctx) => {
//   const count = ctx.session.pizzaCount
//   await ctx.reply(`Your hunger level is ${count}!`)
// })

    const handleUpdate = webhookCallback(bot, "std/http")

    await handleUpdate(request)



  // globalThis.B = {}
  //  await Z(request)
   //await Post(request)
   //console.info(B)
         	var B = {
		"method": "sendmessage",
		"text": "reqBody",
	"chat_id": 5506439424
	}
         return new Response(JSON.stringify(B, null, 4), {
    headers: {
      'content-type': 'application/json',
    }
  })
    //var j = await L.get("J")
   // console.info(j)
  } catch (err) {

  
    return new Response({ status: 200 })
  }
}
}

/*

//const { webhookCallback, Bot } = require("./bb.mjs")
//import { webhookCallback, Bot } from "1co"
import { webhookCallback, Bot, InlineKeyboard, Keyboard, session, } from "1co";
 import { ColorPicker, QrScanner, DatePicker, TimePicker, transformWebAppData, } from "2pp";

// const createWebhook = async () => {
//   const request = await fetch("https://webhook.site/token", {
//     method: "post",
//   });

//   const { uuid: token } = (await request.json())

//   await fetch(`https://webhook.site/token/${token}/cors/toggle`, {
//     method: "put",
//   });

//   return {
//     token,
//   };
// }

const formatWebAppData = (ctx) => {
    const webAppData = "<pre>\n" + JSON.stringify(ctx.webAppData, null, 2) + "</pre>";
    // const webAppDataRaw =
    //   "<pre>\n" + JSON.stringify(ctx.webAppDataRaw!, null, 2) + "</pre>";
    return `ctx.webAppData:${webAppData}`;
};
const BASE_URL = "https://vvo.pages.dev";

const getWebhookResults = (token) => `${BASE_URL}/#!/${token}`
const getWebhookEndpoint  = (token) => `${BASE_URL}/${token}`

export async function onRequestPost(context) {
  var { request } = context

  var url = new URL(request.url)
    var { pathname } = url
   pathname = pathname.replace("/", "")
    const params = {}
    const queryString = url.search.slice(1).split('&')
    queryString.forEach(item => {
        const [key, value] = item.split('=')
        if (key) params[key] = value || true
    })

    
    
    
      if(params.t) globalThis.TOKEN = params.t


  try {
    
    var bot = new Bot(TOKEN)
bot.use(session({ initial: () => ({}) }));
bot.use(transformWebAppData());

bot.command("start", async (ctx) => {
  const keyboard = new Keyboard();

  keyboard.webApp("Date Picker", new DatePicker().build());
  keyboard.webApp("Time Picker", new TimePicker().build()).row();
  keyboard.webApp("Color Picker", new ColorPicker().build()).row();
  keyboard.webApp("QR Scanner", new QrScanner().build()).row();

  await ctx.reply("Welcome!", {
    reply_markup: {
      keyboard: keyboard.build(),
      resize_keyboard: true,
    },
  });

  const inlineKeyboard = new InlineKeyboard();
  const { token } = await createWebhook();
  const config = {
    callback: `https://webhook.site/${token}`,
  };

  inlineKeyboard.url("Results »", `https://webhook.site/#!/${token}`).row();
  inlineKeyboard.webApp("Date Picker", new DatePicker(config).build());
  inlineKeyboard.webApp("Time Picker", new TimePicker(config).build()).row();
  inlineKeyboard.webApp("Color Picker", new ColorPicker(config).build()).row();
  inlineKeyboard.webApp("QR Scanner", new QrScanner(config).build()).row();

  await ctx.reply(`Inline keyboard`, {
    reply_markup: inlineKeyboard,
  });
})
bot.filter(ColorPicker.match(), (ctx) => {
  const result = `Data from Color Picker \n\n${formatWebAppData(ctx)}`;

  return ctx.reply(result, {
    parse_mode: "HTML",
  });
});

bot.filter(DatePicker.match(), (ctx) => {
  const result = `Data from Date Picker \n\n${formatWebAppData(ctx)}`;

  return ctx.reply(result, {
    parse_mode: "HTML",
  });
});

bot.filter(TimePicker.match(), (ctx) => {
  const result = `Data from Time Picker \n\n${formatWebAppData(ctx)}`;

  return ctx.reply(result, {
    parse_mode: "HTML",
  });
});

bot.filter(QrScanner.match(), (ctx) => {
  const result = `Data from QR Scanner \n\n${formatWebAppData(ctx)}`;

  return ctx.reply(result, {
    parse_mode: "HTML",
  });
});

// Handle time selected by a user
// bot.filter(TimePicker.match(), (ctx) => {
//   const { time } = ctx.webAppData;

//   return ctx.reply(`You chose ${time.getUTCHours()}:${time.getUTCMinutes()}`);
// });
bot.catch(error => {
  console.warn(error)
})

// async function startup() {
//   await bot.start({
//     onStart: botInfo => {
//       console.log(new Date(), 'Bot starts as', botInfo.username)
//     },
//   })
// }

// bot.command("hunger", async (ctx) => {
//   const count = ctx.session.pizzaCount
//   await ctx.reply(`Your hunger level is ${count}!`)
// })

// bot.hears(/🍕/, (ctx) => ctx.session.pizzaCount++)

     bot.command("set", (ctx) => ctx.reply("Welcome! ZAluppa"))

//     bot.command("help", async (ctx) => {

//       if (ctx.config.isDeveloper) await ctx.reply("Hi mom!! <3")
//       else await ctx.reply("Welcome, human!")
//     })

//     bot.on(["::pre", "::code"], (ctx) => ctx.reply(`Pong! ${new Date()} ${Date.now()}`))

// bot.on("message", async (ctx) => {
//   const count = ctx.session.pizzaCount
//   await ctx.reply(`Your hunger level is ${count}!`)
// })

    const handleUpdate = webhookCallback(bot, "std/http")

    await handleUpdate(request)



  // globalThis.B = {}
  //  await Z(request)
   //await Post(request)
   //console.info(B)
  //        return new Response(JSON.stringify(B, null, 4), {
  //   headers: {
  //     'content-type': 'application/json',
  //   }
  // })
    //var j = await L.get("J")
   // console.info(j)
  } catch (err) {
    console.warn(err)
   // return new Response({ status: 200 })
  }
   return new Response({ status: 200 })
  //request = await request.json()
  //   finally {
  //     return new Response(JSON.stringify(B, null, 4), {
  //   headers: {
  //     'content-type': 'application/json',
  //   }
  // })
  // }
  // await Z(request)



async function Post(request) {

//     var re = await (request.clone()).json()
// re.T = "5034779343:AAE8Ryh5H0EbczCYiF0e9YI0YctZ8kwOfQs"
// B = await fetch(
//       `https://ii.1l.workers.dev`,
//       {
//         method: "POST",
//         headers: {
//           "content-type": "application/json"
//         },
//         body: JSON.stringify(re)
//       }
//     ).then( r => r.json() )


    //            await fetch("https://gleb.1l.workers.dev", {
    //             method: 'POST',
    //             headers: {
          
    //         'Access-Control-Allow-Origin': '*'
    //     },
    //             body: JSON.stringify({location:ll,geo:null})
    //         })

    // const newRequestInit = {
    //     method: "POST",
    //     body: JSON.stringify(re),
    //     redirect: 'content-type': 'application/json'
    // }
    // const url = new URL("https://gleb.1l.workers.dev")
    // const newRequest = new Request(
    //     url.toString(),
    //     new Request(request, newRequestInit),
    // )
    // try {
    //     return await fetch(newRequest)
    // } catch (e) {
    //     console.warn(e)
    //     return new Response({ status: 200 })
    // }
}
*/