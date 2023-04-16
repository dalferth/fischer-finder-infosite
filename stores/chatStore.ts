import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', {
    state: () => {
        return {
            messages: [
                {
                    id: 1,
                    content: 'Hello world',
                    owner: 'me',
                },
                {
                    id: 2,
                    content: 'Hello world',
                    owner: 'fischer',
                },
                {
                    id: 3,
                    content: 'Hello world',
                    owner: 'me',
                }
            ]
        };
    },

    actions: {
        addMessage(content: string) {
            this.messages.push({
                id: this.messages.length + 1,
                content,
                owner: 'me',
            });
        }
    }
})
