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
})
</script>

<template>
  <div>
    <UModal v-model="props.isOpen" prevent-close>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Modelni ko'rish!
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="$props.toggleShow" />
          </div>
        </template>

        
        <p>{{ model.modelForForm.entity.name }}</p>
        <UCarousel v-slot="{ item }" :items="[model.modelForForm.entity.name]" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden">
            <img :src="item" class="w-full" draggable="false">
        </UCarousel>
      </UCard>
    </UModal>
  </div>
</template>