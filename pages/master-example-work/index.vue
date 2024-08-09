<script setup lang="ts">

const loadingStore = useLoadingStore();
const modelStore = useMasterExampleWorkStore();


onMounted(async () => {
  modelStore.getAllList();
  modelStore.getAllMasters();
});

function clearEntity(){
  modelStore.model.modelForForm.entity = {
    id: undefined,
    images: undefined,
    master_id: undefined,
  }
}

function createMasterExampleWork(){
  loadingStore.set(true)
  modelStore.createMasterExampleWork(modelStore.model.modelForForm.entity)
  .then((res: any) => {
    loadingStore.set(false)
  }).catch(() => {
    loadingStore.set(false)
  }).finally(() => {
    loadingStore.set(false)
  });
}

function updateMasterExampleWork(){
  loadingStore.set(true)
  modelStore.updateMasterExampleWork(modelStore.model.modelForForm.entity.id ?? 0, modelStore.model.modelForForm.entity)
  .then((res: any) => {
    loadingStore.set(false)
  }).catch(() => {
    loadingStore.set(false)
  }).finally(() => {
    loadingStore.set(false)
  });
}

function deleteMasterExampleWork(){

  console.log(modelStore.model.modelForForm.entity.id ?? 0);
  
  loadingStore.set(true)
  modelStore.deleteMasterExampleWork(modelStore.model.modelForForm.entity.id ?? 0)
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
          :create-model="createMasterExampleWork"
          :update-model="updateMasterExampleWork"
          :delete-model="deleteMasterExampleWork"
        />
      </div>
  </template>
</template>

