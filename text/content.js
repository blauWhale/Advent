const titles = new Map();
const descriptions = new Map();
const html = new Map();

titles.set("1","Vegan Sweets for my sweety")
descriptions.set("1", "For your first present I got you a sweet surprise to light up your day!")

titles.set("2","A hairy situation")
descriptions.set("2", "More hairties to loose all ova the apartment")

titles.set("3","🎵 A song a day... 🎵")
descriptions.set("3","(...) You can spend all of my money, all of my money<br>"+
"All of my money, all of my time<br>" +
"You can spend all of my money, all of my money<br>"+
"All of my money, all of my time<br>(...)<br><a href='https://open.spotify.com/track/0XzbAAWtu0zx6bnDbBUcOs?si=c50e61fa38f2483c'>Listen</a>")


titles.set("4","A cold one")
descriptions.set("4", "yummy sip sip drink to enjoy")

titles.set("5","Stockimaker 9000")
descriptions.set("5", "I bought you the peak of Stockimaking technologie as of today.🥔")

titles.set("6","Samichlaus")
descriptions.set("6", "Samichlaustag - lets see who has the coolest vegan säckli")

titles.set("7","🎵 A song a day... 🎵")
descriptions.set("7","(...) Ain't nothing without a woman though<br>"+
"Woman to woman, I just wanna see you glow<br>" +
"Tell 'em what's up (...)<br><a href='https://open.spotify.com/track/2ruY7BpsZRwr6UUzLeDSk1?si=203ddd9e062141d1'>Listen</a>")

titles.set("8","A song of Scent and Fire")
descriptions.set("8", "Hopefully not a Firestarter but a nice cozy smelling candle for these cold days")

titles.set("9","A dinner in Colmar")
descriptions.set("9", "Dinner on me at <a href='https://goo.gl/maps/AScNhSFrYA7CEsi5A'>La Cour des Anges</a><br>or anywhere else<br>maybe some cheeky pre-dinner drinks aty<br>"+
"<a href='https://goo.gl/maps/EjqFrEv99GfTSEteA'>Chez moi</a><br>")

titles.set("10","🎵 A song a day... 🎵")
descriptions.set("10","In the meantime let me tell you that I love you<br>" +
    "Buona sera, signorina kiss me goodnight    <br>" +
    "Buona sera, signorina kiss me goodnight    <br>" +
    "<a href='https://open.spotify.com/track/3kG1JhcsWlWbG0SHncyn36?si=5d36f2d269f04f7e'>Listen</a>")


titles.set("11","breakfast at tiffany's")
descriptions.set("11", "Happy Anniversary <3 You are the best girlfriend anyone can wish for and I love you. Looking foward to many many years (&breakfast) with you.<br>"+
"i hope i already bought you nice jelwery otherwise now is the time to go out and purchase some")

titles.set("12","Cozy socks to start of your week")
descriptions.set("12", "🧦🧦🧦🧦🧦")

titles.set("13","Wow, that really Socks! Even more socks")
descriptions.set("13", "Ha Ha, what a joke. But I really did get you some nice christmas socks for your christmas socks.")

titles.set("14","Schoki und so")
descriptions.set("14", "Yummy sweets for u today")

titles.set("15","🎵 A song a day... 🎵")
descriptions.set("15","I want you to stay forever" +
    "<br><a href='https://open.spotify.com/track/4uToWVHXLtKEEboNsG3n2u?si=05e3283480134c6c'>Listen</a>")

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

