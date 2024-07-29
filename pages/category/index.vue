<script setup lang="ts">

const loadingStore = useLoadingStore();
const modelStore = useCategoryStore();


onMounted(async () => {
  modelStore.getAllList();
});

function clearEntity(){
  modelStore.model.modelForForm.entity = {
    id: undefined,
    name: undefined,
    icon: undefined,
  }
}

function createCategory(){
  loadingStore.set(true)
  modelStore.createCategory(modelStore.model.modelForForm.entity)
  .then((res: any) => {
    loadingStore.set(false)
  }).catch(() => {
    loadingStore.set(false)
  }).finally(() => {
    loadingStore.set(false)
  });
}

function updateCategory(){
  loadingStore.set(true)
  modelStore.updateCategory(modelStore.model.modelForForm.entity.id ?? 0, modelStore.model.modelForForm.entity)
  .then((res: any) => {
    loadingStore.set(false)
  }).catch(() => {
    loadingStore.set(false)
  }).finally(() => {
    loadingStore.set(false)
  });
}

function deleteCategory(){

  console.log(modelStore.model.modelForForm.entity.id ?? 0);
  
  loadingStore.set(true)
  modelStore.deleteCategory(modelStore.model.modelForForm.entity.id ?? 0)
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
          :create-model="createCategory"
          :update-model="updateCategory"
          :delete-model="deleteCategory"
        />
      </div>
  </template>
</template>

