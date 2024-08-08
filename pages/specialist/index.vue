<script setup lang="ts">
import { useSpecialistStore } from '~/store/specialist.store';


const loadingStore = useLoadingStore();
const modelStore = useSpecialistStore();


onMounted(async () => {
  modelStore.getAllList();
  modelStore.getAllCategories();
});

function clearEntity(){
  modelStore.model.modelForForm.entity = {
    id: undefined,
    name: undefined,
    category_id: undefined,
  }
}

function createSpecialist(){
  loadingStore.set(true)
  modelStore.createSpecialist(modelStore.model.modelForForm.entity)
  .then((res: any) => {
    loadingStore.set(false)
  }).catch(() => {
    loadingStore.set(false)
  }).finally(() => {
    loadingStore.set(false)
  });
}

function updateSpecialist(){
  loadingStore.set(true)
  modelStore.updateSpecialist(modelStore.model.modelForForm.entity.id ?? 0, modelStore.model.modelForForm.entity)
  .then((res: any) => {
    loadingStore.set(false)
  }).catch(() => {
    loadingStore.set(false)
  }).finally(() => {
    loadingStore.set(false)
  });
}

function deleteSpecialist(){
  
  loadingStore.set(true)
  modelStore.deleteSpecialist(modelStore.model.modelForForm.entity.id ?? 0)
  .then((res: any) => {
    loadingStore.set(false)
  }).catch(() => {
    loadingStore.set(false)
  }).finally(() => {
    loadingStore.set(false)
  });
}

</script>

<template>
    <UiLoader v-if="loadingStore.isLoading" />

  <template v-else>
      <div>
        <ModelList 
          :data="modelStore.getList" 
          :model="modelStore.model" 
          :clear-entity="clearEntity" 
          :create-model="createSpecialist"
          :update-model="updateSpecialist"
          :delete-model="deleteSpecialist"
        />
      </div>
  </template>
</template>

