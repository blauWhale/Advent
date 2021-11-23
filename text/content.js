const titles = new Map();
const descriptions = new Map();
const html = new Map();

titles.set("1","Sweets for my sweety")
descriptions.set("1", "For your first present I got you a sweet surprise to light up your day!")

titles.set("2","And now to something useful...")
descriptions.set("2", "Hair ties for your collection! You can never have enough!")

titles.set("3","🎵 A song a day... 🎵")
descriptions.set("3","(...) I was meant to love you for the rest of my life! (...)<br><a href='https://open.spotify.com/track/5KjiL7bBqZC7qHqBOmT2fh?si=1ee4c03b51324035'>Listen</a>")


titles.set("4","Hot stuff!")
descriptions.set("4", "A pair of hand warmes for these cold days")

titles.set("5","Beanie Baby")
descriptions.set("5", "Your head is envying your hands! Let's fix t(hat)")

titles.set("6","Samichlaus")
descriptions.set("6", "A gritibänz and a samichlaus walk into a bar...")

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

titles.set("8","Oh you gonna love this one")
descriptions.set("8", "Another candle for your collection. Berry good scent")

titles.set("9","A trip to Norway")
descriptions.set("9", "You probably ran out by now, so I got you some good lip balm for your lips to balm.")

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


titles.set("11","A surprise over dinner")
descriptions.set("11", "Happy Anniversary <3 You are the best girlfriend anyone can wish for and I love you. Looking foward to dinner with you.")

titles.set("12","Relaxing Time")
descriptions.set("12", "Got you some facemasks to relax on this sunday")

titles.set("13","It's Monday, that really Socks!")
descriptions.set("13", "Ha Ha, what a joke. But I really did get you some nice christmas socks.")

titles.set("14","It's Monday, that really Socks!")
descriptions.set("14", "Ha Ha, what a joke. But I really did get you some nice christmas socks.")

titles.set("15","🎵 A song a day... 🎵")
descriptions.set("15","<br><a href='https://open.spotify.com/track/2ZiyWdqAwaXENw0l0yDVIG?si=a1a758ae32dd4a19'>Listen</a>")

titles.set("16","It's all gravy baby")
descriptions.set("16", "Let's get you excited and ready for London with your very own Gravy Set!!!!!!!")

titles.set("17","Lörking Klasse")
descriptions.set("17", "Got you a nice little shirt from the skeleton boi, hope you like it <3")

titles.set("18","🎵 A song a day... 🎵")
descriptions.set("18", "<br><a href='https://open.spotify.com/track/2yAyJTsSnsOtbA3Qups4zV?si=e14eaafe03d04b7a'>Listen</a>")

titles.set("19","Donation")
descriptions.set("19", "<br><a href='https://open.spotify.com/track/2yAyJTsSnsOtbA3Qups4zV?si=e14eaafe03d04b7a'>Da Hi</a>")


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

