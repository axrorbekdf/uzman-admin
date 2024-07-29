<script setup lang="ts">

const loadingStore = useLoadingStore();
const modelStore = useLanguageStore();


onMounted(async () => {
  modelStore.getAllList();
});

function clearEntity(){
  modelStore.model.modelForForm.entity = {
    id: undefined,
    name: undefined,
    slug: undefined,
  }
}

function createLanguage(){
  loadingStore.set(true)
  modelStore.createLanguage(modelStore.model.modelForForm.entity)
  .then((res: any) => {
    loadingStore.set(false)
  }).catch(() => {
    loadingStore.set(false)
  }).finally(() => {
    loadingStore.set(false)
  });
}

function updateLanguage(){
  loadingStore.set(true)
  modelStore.updateLanguage(modelStore.model.modelForForm.entity.id ?? 0, modelStore.model.modelForForm.entity)
  .then((res: any) => {
    loadingStore.set(false)
  }).catch(() => {
    loadingStore.set(false)
  }).finally(() => {
    loadingStore.set(false)
  });
}

function deleteLanguage(){

  console.log(modelStore.model.modelForForm.entity.id ?? 0);
  
  loadingStore.set(true)
  modelStore.deleteLanguage(modelStore.model.modelForForm.entity.id ?? 0)
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
          :create-model="createLanguage"
          :update-model="updateLanguage"
          :delete-model="deleteLanguage"
        />
      </div>
  </template>
</template>

