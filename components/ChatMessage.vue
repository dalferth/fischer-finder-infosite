<script setup>
const props = defineProps({
    owner: {
        type: String,
        default: 'me',
        required: true,
    },
    padding: {
        type: String,
        default: '',
        required: false
    }
})

const directionClasses = computed(() => {
    if (props.owner === 'me') {
        return 'ml-auto bg-grey rounded-l-xl'
    }

    return 'bg-primary text-white rounded-r-xl'
})
</script>

<template>
    <div class="max-w-[90%] rounded-t-xl p-3" :class="directionClasses">
        <slot />
    </div>
</template>
