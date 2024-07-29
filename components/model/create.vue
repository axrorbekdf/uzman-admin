<script setup lang="ts">


    const props = defineProps({
        model: {
            type: Object,
            default: {},
            required: true
        },
        toggleShow: {
            type: Function,
            required: true
        },
        isOpen: {
            type: Boolean,
            required: true
        },
        createModel:{
            type: Function,
            required: true
        }
    })

</script>

<template>
    <div>
        <UModal v-model="props.isOpen" fullscreen>
            <UCard
                :ui="{
                base: 'h-full flex flex-col',
                rounded: '',
                divide: 'divide-y divide-gray-100 dark:divide-gray-800',
                body: {
                    base: 'grow'
                }
                }"
            >
                <template #header>
                    <div class="flex items-center justify-between">
                        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                            Ma'umtolarni yaratish va o'zgartirish.
                        </h3>
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="$props.toggleShow" />
                    </div>
                </template>

                <div>
                    <ModelForm :model-for-form="model.modelForForm" :entity-handler="createModel" :toggleShow="toggleShow"/>
                </div>
            </UCard>
        </UModal>
    </div>
</template>