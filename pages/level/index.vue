<script setup lang="ts">
import { useLevelStore } from '~/store/level.store';


const loadingStore = useLoadingStore();
const modelStore = useLevelStore();


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

