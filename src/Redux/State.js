import { rerenderEntireTree } from "../render";

let state = {
    DialogsPage: {
        DialogsBlock: [
            { id: '1', name: 'Natasha' },
            { id: '2', name: 'Andrey' },
        ],

        MyMessages: [
            { id: '1', message: 'Хай' },
            { id: '2', message: 'Ничего)' },
        ],

        Messages: [
            { id: '1', message: 'Привет' },
            { id: '2', message: 'Че делаешь?' },
        ],
    },

    ProfilePage: {
        Posts: [
            { id: '1', message: 'Hello, good bless to you', likes: 15 },
            { id: '2', message: 'Hi from Canada', likes: 20 },
        ],
        newPostText: '',
    },

    sidebar: {
        Friends: [
            { id: '1', name: 'Alexei' },
            { id: '2', name: 'Nastya' },
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.ProfilePage.newPostText,
        likes: 0,
    }
    state.ProfilePage.Posts.push(newPost);
    state.ProfilePage.newPostText = '';
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
    state.ProfilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export default state;