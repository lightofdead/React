let state = {

    ProfilePage: {
        posts: [{id: 1, message: "Im putin", likeCounts: "(1)"},
            {id: 2, message: "huh me too", likeCounts: "(3)"},
            {id: 3, message: "okay", likeCounts: "(5)"},
            {id: 4, message: "stop", likeCounts: "(23)"},
            {id: 5, message: "lol what it is", likeCounts: "(645)"}],

    },

    messagesPage: {
        dialogs: [{id: 1, name: "Саня"},
            {id: 2, name: "Петя"},
            {id: 3, name: "Вася"},
            {id: 4, name: "Гена"},],
        messages: [{id: 1, message: "hi"},
            {id: 1, message: "Yo"},
            {id: 1, message: "Lol"},
            {id: 1, message: "Mdaaa"},]
    },

    sideBar:
        {
            sideBar: {
                friends: [
                    {id: 1, name:"Vasya", url: "https://sun9-12.userapi.com/c850608/v850608803/1b7811/-grqeTQHWcQ.jpg"},
                    {id: 2, name:"Petya",  url: "https://sun9-12.userapi.com/c850608/v850608803/1b7811/-grqeTQHWcQ.jpg"},
                    {id: 3, name:"Anton",  url: "https://sun9-12.userapi.com/c850608/v850608803/1b7811/-grqeTQHWcQ.jpg"},]
            }
        }

};

export let addPost = (postMessage) =>
{
    let newPost =  {id: 5 , message: postMessage, likeCounts: "(0)" }
    state.ProfilePage.posts.push(newPost);

}


export default state;