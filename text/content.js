const titles = new Map();
const descriptions = new Map();
const html = new Map();

titles.set("1","Vegan Sweets for my sweety")
descriptions.set("1", "For your first present I got you a sweet surprise to light up your day!")

titles.set("2","A hairy situation")
descriptions.set("2", "More hairties to loose all ova the apartment")

titles.set("3","🎵 A song a day... 🎵")
descriptions.set("3","(...) I was meant to love you for the rest of my life! (...)<br><a href='https://open.spotify.com/track/5KjiL7bBqZC7qHqBOmT2fh?si=1ee4c03b51324035'>Listen</a>")


titles.set("4","A cold one")
descriptions.set("4", "yummy sip sip drink to enjoy")

titles.set("5","Stockimaker 9000")
descriptions.set("5", "I bought you the peak of Stockimaking technologie as of today.")

titles.set("6","Samichlaus")
descriptions.set("6", "Samichlaustag - lets see who has the coolest vegan säckli")

titles.set("7","🎵 A song a day... 🎵")
descriptions.set("7","(...) Ahh, the first, my last, my everything\n" +
    "And the answer to all my dreams<br>" +
    "You're my sun, my moon, my guiding star<br>" +
    "My kind of wonderful, that's what you are<br>" +
    "I know there's only, only one like you<br>" +
    "There's no way, they could have made two<br>" +
    "You're all I'm living for<br>" +
    "Your love I'll keep for evermore<br>" +
    "You're the first, you're the last, my everything (...)<br><a href='https://open.spotify.com/track/5dXJ1SoksFkgdx3yxIoYNO?si=e5c3cb10ce1c4405'>Listen</a>")

titles.set("8","A song of Scent and Fire")
descriptions.set("8", "Hopefully not a Firestarter but a nice cozy smelling candle for these cold days")

titles.set("9","A dinner in Colmar")
descriptions.set("9", "Dinner reservation waiting at <a>Restaurant</a><br>")

titles.set("10","🎵 A song a day... 🎵")
descriptions.set("10","If I ever do you wrong<br>" +
    "If I ever leave you all alone<br>" +
    "If I ever tell you a lie<br>" +
    "And, if I ever make you cry<br>" +
    "Baby, I hope a fire (I hope a fire)<br>" +
    "Light on my pie (light on my pie)<br>" +
    "I hope a bee sting me over my eye (over my eye)<br>" +
    "You know I love my pie (I love my pie)<br>" +
    "And I love my eye, baby (I love my eye)<br>" +
    "So you know I'll never do you wrong (...)<br><a href='https://open.spotify.com/track/6hG59WXc951utGHcrbhr4V?si=c80200574e544081'>Listen</a>")


titles.set("11","A surprise over breakfast")
descriptions.set("11", "Happy Anniversary <3 You are the best girlfriend anyone can wish for and I love you. Looking foward to many many years (&breakfast) with you.")

titles.set("12","Duck Duck go")
descriptions.set("12", "a ducking suprise in the morning")

titles.set("13","Wow, that really Socks!")
descriptions.set("13", "Ha Ha, what a joke. But I really did get you some nice christmas socks.")

titles.set("14","Schoki und so")
descriptions.set("14", "Yummy sweets for u today")

titles.set("15","🎵 A song a day... 🎵")
descriptions.set("15","Very nice spoken word over a lo-fi beat. Give it a listen:" +
    "<br><a href='https://open.spotify.com/track/2ZiyWdqAwaXENw0l0yDVIG?si=a1a758ae32dd4a19'>Listen</a>")

titles.set("16","even more schoki")
descriptions.set("16", "had enough yet? let me know")

titles.set("17","Comy warm and rep the Stadclub")
descriptions.set("17", "FCZ beste")

titles.set("18","Donation")
descriptions.set("18", "10CHF donation to:" +
"<br><a href='https://mirsindvoda.ch/spenden/'>Kollektiv vo da</a>"+
"<br><a href='https://feministischerstreikzuerich.ch/jetzt-spenden/'>Frauenstreik</a>"+
"<br><a href='https://www.zuerchertierschutz.ch/de/helfen/spenden/weihnachtsaktion-welpen-retten'>Tierschutz Zürich</a>")

titles.set("19","Last schoki I swear")
descriptions.set("19", "can never have enough tho")

titles.set("20","mög")
descriptions.set("20", "mögface")

titles.set("21","🎵 Enjoy this Jazzy Christmas playlist🎵")
descriptions.set("21", "🎅❤<br>" +
    "<br><a href='https://open.spotify.com/playlist/37i9dQZF1DX5D4gDh3HAsM?si=8c444cc2fe7147f0'>Listen</a>")


titles.set("22","snack attack")
descriptions.set("22", "salty yummy snack for u today")

titles.set("23","A nice calandar for you")
descriptions.set("23", "I know you don't want one but have one anyway, its on the house")

titles.set("24","🎵 A song for christmas🎵")
descriptions.set("24", "Merry Christmas baby love you so much and excited for dinner at mine tonight ❤<br>" +
    "<br><a href='https://open.spotify.com/track/4kKdvXD0ez7jp1296JmAts?si=4edcdef37d9c457b'>Listen</a>")


export const getTitle = (date) => {
    for (let [key, value] of titles) {
        if(key === date ){
            return value;
        }
    }
}

export const getDescription = (date) => {
    for (let [key, value] of descriptions) {
        if(key === date ){
            return value;
        }
    }
}

export const getHTML = (date) => {
    for (let [key, value] of html) {
        if(key === date ){
            return value;
        }
    }
}

