<template>
    <div class="min-h-screen flex flex-col">
        <header class="border-b-2 border-b-grey py-3 sticky top-0 bg-white z-20">
            <div class="container flex flex-row flex-wrap place-content-between items-center">
                <div class="flex flex-row flex-wrap gap-x-10 gap-y-3 items-center">
                    <NuxtLink to="/">
                        <img src="https://media.fischer.group/v7/https://media-prod.ugfischer.com/-/media/national/samples/logos/fischer-logo-s-pos-rgb.ashx?h=30&func=bound"
                             alt="Fischer Logo">
                    </NuxtLink>
                </div>
            </div>
        </header>

        <main class="container py-10">
            <NuxtPage />
        </main>

        <TheFooter />
    </div>
</template>
<script setup lang="ts">
</script>
