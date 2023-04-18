<template>
    <div class="min-h-screen flex flex-col">
        <QRCheckBanner />

        <header class="border-b-2 border-b-grey py-3 sticky top-0 bg-white z-20">
            <div class="container flex flex-row flex-wrap place-content-between items-center">
                <div class="flex flex-row flex-wrap gap-x-10 gap-y-3 items-center">
                    <NuxtLink to="/" class="font-bold text-4xl">
                        <span class="text-primary">fischer</span>Finder
                    </NuxtLink>
                </div>
            </div>
        </header>

        <main class="container py-5 md:py-10">
            <NuxtPage />
        </main>

        <TheFooter />
    </div>
</template>

<script setup lang="ts">
useHead({
    titleTemplate:
        (titleChunk) => {
            const siteTitle = 'fischerFinder'
            return titleChunk ? `${titleChunk} – ${siteTitle}` : siteTitle
        }
})
</script>
