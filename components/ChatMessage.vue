<script setup>
const props = defineProps({
    owner: {
        type: String,
        default: 'me',
        required: true,
    },
})

const directionClasses = computed(() => {
    if (props.owner === 'me') {
        return 'ml-auto bg-grey rounded-l-xl'
    }

    return 'bg-primary text-white rounded-r-xl'
})
</script>

<template>
    <div class="flex">
        <div class=" w-80 px-4 py-2 rounded-t-xl" :class="directionClasses">
            <div id="content">
                <slot />
            </div>
        </div>
    </div>
</template>
