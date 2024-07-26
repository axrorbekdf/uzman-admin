<script setup lang="ts">

const loadingStore = useLoadingStore();
const modelStore = useCategoryStore();


onMounted(async () => {
  modelStore.getAllList();
});

</script>

<template>
    <UiLoader v-if="loadingStore.isLoading" />

  <template v-else>
      <div>
        <ModelList :data="modelStore.getList" :model="modelStore.model"/>
      </div>
  </template>
</template>

