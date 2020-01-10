//Dédicace Arouf Gangta et Optimus
//Fuck Israël

const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.TOKEN1);

client.on("message", (message) => {
    if ((message.content.toLocaleLowerCase().includes("ping")) & message.channel.type !== 'dm') {
      client.users.get("469928163674161174").send("T'es trop un génie sous coté frérot https://cdn.discordapp.com/attachments/616759752529019013/662775694882897921/599612030361534474.png");
    } else;

    if ((message.content.toLocaleLowerCase().includes("zero two") || message.content.toLocaleLowerCase().includes("02")) & (message.channel.type !== 'dm')) {
      client.users.get("329744571732983830").send("Zero Two Best Waifu https://media.discordapp.net/attachments/651869739424940046/662107511519838208/maxresdefault_1.png?width=864&height=487");
    } else; //Shika

    if ((message.content.toLocaleLowerCase().includes("wong wong") || message.content.toLocaleLowerCase().includes("tower of god") || message.content.toLocaleLowerCase().includes("tog")) & (message.channel.type !== 'dm')) {
      client.users.get("244835423262736385").send("Rachel meilleur perso de TOG Best Waifu >>>>> Tsuyuko (une pute qui aime la bite celle là) http://i.imgur.com/SmlAHOu.jpg");
    } else; //Blue

    if ((message.content.toLocaleLowerCase().includes("rainbow") || message.content.toLocaleLowerCase().includes("aya") || message.content.toLocaleLowerCase().includes("sakuragi") || message.content.toLocaleLowerCase().includes("mario")) & (message.channel.type !== 'dm')) {
      client.users.get("381187083718492160").send("Rainbow gros manga pour homosexuels https://cdn.discordapp.com/attachments/651869739424940046/662773809064968203/unknown.png");
    } else; //Yanis

    if ((message.content.toLocaleLowerCase().includes("eren") || message.content.toLocaleLowerCase().includes("snk") || message.content.toLocaleLowerCase().includes("livai") || message.content.toLocaleLowerCase().includes("titan")) & (message.channel.type !== 'dm')) {
      client.users.get("439783004106391552").send("Palmarès d'Eren : https://media.discordapp.net/attachments/651869739424940046/662772593824366603/1562261430230.png?width=673&height=487");
    } else; //Santaku

    if ((message.content.toLocaleLowerCase().includes("saber") || message.content.toLocaleLowerCase().includes("gilgamesh") || message.content.toLocaleLowerCase().includes("fate")) & (message.channel.type !== 'dm')) {
      client.users.get("353617857910931458").send("Fuck Gilgamesh pire perso de Fate https://media.discordapp.net/attachments/651869739424940046/662777312952975361/unknown.png?width=646&height=487");
    } else; //Xifou

    if ((message.content.toLocaleLowerCase().includes("toshiro") || message.content.toLocaleLowerCase().includes("bleach") || message.content.toLocaleLowerCase().includes("gilgamesh")) & (message.channel.type !== 'dm')) {
      client.users.get("261522102069362689").send("Voici une vérité générale: La Terre tourne autour du Soleil. En voici une autre: https://cdn.discordapp.com/attachments/651869739424940046/662110137842008085/unknown.png");
    } else; //Bankai

    if ((message.content.toLocaleLowerCase().includes("steins gate") || message.content.toLocaleLowerCase().includes("sg") || message.content.toLocaleLowerCase().includes("okabe") || message.content.toLocaleLowerCase().includes("lukak")) & (message.channel.type !== 'dm')) {
      client.users.get("243774074432520192").send("Starfoullah c'est quoi ça Steins Gates qui prone le mariage gay AYAAA la dernière fois le pseudo Okabe + Lukaku = :smiling_face_with_3_hearts: c'était nofake alors https://vignette.wikia.nocookie.net/steins-gate/images/d/d5/CGlukaend.jpg/revision/latest/scale-to-width-down/340?cb=20151017082608");
    } else; //Samalairbien

    if ((message.content.toLocaleLowerCase().includes("kj") || message.content.toLocaleLowerCase().includes(" ie") || message.content.toLocaleLowerCase().includes("inazuma") || message.content.toLocaleLowerCase().includes("josuke")) & (message.channel.type !== 'dm')) {
      client.users.get("235819020048269312").send("Sale gros feuj t'es un KJ mais t'assumes pas tiens un peu de paix avec ton jeu de pyjs futur gay https://i.pinimg.com/originals/73/73/c0/7373c04653791c87ffac90d8c3d752fb.jpg");
    } else; //Hakai

    if ((message.content.toLocaleLowerCase().includes("feuj") || message.content.toLocaleLowerCase().includes("juif")) & (message.channel.type !== 'dm')) {
      client.users.get("398580594595987458").send("Frérot t'es trop fort pour nous on a rien trouvé contre toi donc passe une bonne journée frérot et paix à toi");
    } else; //Guren

    if ((message.content.toLocaleLowerCase().includes("saber") || message.content.toLocaleLowerCase().includes("mikoto")) & (message.channel.type !== 'dm')) {
      client.users.get("387241120276545547").send("Voici une vérité générale: La Lune tourne autour de la Terre. En voici une autre: https://cdn.discordapp.com/attachments/651869739424940046/662798104742854666/unknown.png");
    } else; //Kaizen

    if ((message.content.toLocaleLowerCase().includes("paix") || message.content.toLocaleLowerCase().includes("ronaldo") || message.content.toLocaleLowerCase().includes("psg") || message.content.toLocaleLowerCase().includes("paz")) & (message.channel.type !== 'dm')) {
      client.users.get("292720337353834497").send('"Le PSG est une bonne équipe" :joy_cat: https://cdn.discordapp.com/attachments/651869739424940046/662803107658596409/unknown.png https://cdn.discordapp.com/attachments/651869739424940046/662803314735579199/unknown.png https://cdn.discordapp.com/attachments/651869739424940046/662803858015256577/unknown.png');
    } else; //Iataku

    if (message.content.startsWith("test")) {
      message.channel.send("réussi");
    } 
  });
