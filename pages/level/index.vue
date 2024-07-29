<script setup lang="ts">

const loadingStore = useLoadingStore();
const modelStore = useLevelStore();


onMounted(async () => {
  modelStore.getAllList();
});

function clearEntity(){
  modelStore.model.modelForForm.entity = {
    id: undefined,
    name: undefined
  }
}

function createLevel(){
  loadingStore.set(true)
  modelStore.createLevel(modelStore.model.modelForForm.entity)
  .then((res: any) => {
    loadingStore.set(false)
  }).catch(() => {
    loadingStore.set(false)
  }).finally(() => {
    loadingStore.set(false)
  });
}

function updateLevel(){
  loadingStore.set(true)
  modelStore.updateLevel(modelStore.model.modelForForm.entity.id ?? 0, modelStore.model.modelForForm.entity)
  .then((res: any) => {
    loadingStore.set(false)
  }).catch(() => {
    loadingStore.set(false)
  }).finally(() => {
    loadingStore.set(false)
  });
}

function deleteLevel(){

  console.log(modelStore.model.modelForForm.entity.id ?? 0);
  
  loadingStore.set(true)
  modelStore.deleteLevel(modelStore.model.modelForForm.entity.id ?? 0)
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
          :create-model="createLevel"
          :update-model="updateLevel"
          :delete-model="deleteLevel"
        />
      </div>
  </template>
</template>

