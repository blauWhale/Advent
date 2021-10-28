export let text = "I have a present for you"

const titles = new Map();
const descriptions = new Map();

titles.set("1","First Present")
descriptions.set("1", "Your first present is...")
titles.set("2","Second Present")
descriptions.set("2", "Your second present is...")
titles.set("3","Third Present")
descriptions.set("3", "Your third present is...")


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

