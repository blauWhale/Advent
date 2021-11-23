const titles = new Map();
const descriptions = new Map();
const html = new Map();

titles.set("1","Sweets for my sweety")
descriptions.set("1", "For your first present I got you a sweet surprise to light up your day!")

titles.set("2","And now to something useful...")
descriptions.set("2", "Hair ties for your collection! You can never have enough!")

titles.set("3","A song a day,...")
descriptions.set("3","(...) I was meant to love you for the rest of my life! (...)<br><a href='https://open.spotify.com/track/5KjiL7bBqZC7qHqBOmT2fh?si=1ee4c03b51324035'>Listen</a>")


titles.set("4","Hot stuff!")
descriptions.set("4", "A pair of hand warmes for these cold days")

titles.set("5","Beanie Baby")
descriptions.set("5", "Your head is envying your hands! Let's fix t(hat)")

titles.set("6","Samichlaus")
descriptions.set("6", "A gritibänz and a samichlaus walk into a bar...")

titles.set("7","I am a poet")
descriptions.set("7", "A poem")

titles.set("8","Oh you gonna love this one")
descriptions.set("8", "Another candle for your collection. Berry good scent")

titles.set("9","A trip to Norway")
descriptions.set("9", "You probably ran out by now, so I got you some good lip balm for your lips to balm.")

titles.set("10","I am a poet")
descriptions.set("10", "A poem.")

titles.set("11","A surprise over dinner")
descriptions.set("11", "Happy Anniversary <3 You are the best girlfriend anyone can wish for and I love you. Looking foward to dinner with you.")

titles.set("12","Relaxing Time")
descriptions.set("12", "Got you some facemasks to relax on this sunday")

titles.set("13","It's Monday, that really Socks!")
descriptions.set("13", "Ha Ha, what a joke. But I really did get you some nice christmas socks.")

titles.set("14","It's Monday, that really Socks!")
descriptions.set("14", "Ha Ha, what a joke. But I really did get you some nice christmas socks.")

titles.set("15","I am a poet")
descriptions.set("15", "A poem.")





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

