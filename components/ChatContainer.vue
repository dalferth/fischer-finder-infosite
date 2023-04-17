<script setup lang="ts">
const messages = [
    {
        id: 1,
        content: 'Moin',
        owner: 'me',
    },
    {
        id: 2,
        content: 'Hi! Ich helfe dir, das richtige fischer Befestigungsprodukt zu finden. Wenn du z.B. etwas an einer Wand befestigen möchtest, kannst du mir ein Bild davon schicken.',
        owner: 'fischer',
    },
    {
        id: 3,
        content: 'Hello world',
        type: 'image',
        owner: 'me',
    }
]
</script>

<template>
    <div class="min-h-full">
        <div id="messages" class="flex flex-col gap-3 overflow-x-hidden">
            <ChatMessage owner="me">
                Moin
            </ChatMessage>

            <ChatMessage owner="fischer">
                Hi! Ich helfe dir, das richtige fischer Befestigungsprodukt zu finden. Wenn du z.B. etwas an einer Wand befestigen möchtest, kannst du mir ein Bild davon schicken.
            </ChatMessage>

            <ChatMessage owner="me" padding="none">
                <img src="~/assets/img/room-g2837805aa_1920.jpg" class="rounded-t rounded-l">
            </ChatMessage>

            <ChatMessage owner="fischer">
                Ich erkenne eine Betonwand. Was möchtest du an der Wand befestigen?
            </ChatMessage>

            <ChatMessage owner="me">
                Ein kleines Bild
            </ChatMessage>

            <ChatMessage owner="fischer">
                Dafür empfehle ich dir folgenden Dübel: <a href="https://www.fischer.de/de-de/produkte/standardbefestigungen/kunststoffduebel/duopower/535210-duopower-6-x-30-k" target="_blank">https://www.fischer.de/de-de/produkte/standardbefestigungen/kunststoffduebel/duopower/535210-duopower-6-x-30-k</a>
                (Du brauchst voraussichtlich 2 Stück)
            </ChatMessage>
        </div>
    </div>
</template>
