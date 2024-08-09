<script setup lang="ts">

const loadingStore = useLoadingStore();
const modelStore = useMasterStore();


onMounted(async () => {
  modelStore.getAllList();
  modelStore.getAllLevels();
  modelStore.getAllSpecialists();
});

function clearEntity(){
  modelStore.model.modelForForm.entity = {
    id: undefined,
    name: undefined,
    phone: undefined,
    price: undefined,
    time: undefined,
    verify: undefined,
    experience: undefined,
    image: undefined,
    pasport_image: undefined,
    about: undefined,
    level_id: undefined,
    specialist_id: undefined,
    user_id: undefined,
  }
}

function createMaster(){
  loadingStore.set(true)
  modelStore.createMaster(modelStore.model.modelForForm.entity)
  .then((res: any) => {
    loadingStore.set(false)
  }).catch(() => {
    loadingStore.set(false)
  }).finally(() => {
    loadingStore.set(false)
  });
}

function updateMaster(){
  loadingStore.set(true)
  modelStore.updateMaster(modelStore.model.modelForForm.entity.id ?? 0, modelStore.model.modelForForm.entity)
  .then((res: any) => {
    loadingStore.set(false)
  }).catch(() => {
    loadingStore.set(false)
  }).finally(() => {
    loadingStore.set(false)
  });
}

function deleteMaster(){

  console.log(modelStore.model.modelForForm.entity.id ?? 0);
  
  loadingStore.set(true)
  modelStore.deleteMaster(modelStore.model.modelForForm.entity.id ?? 0)
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
          :create-model="createMaster"
          :update-model="updateMaster"
          :delete-model="deleteMaster"
        />
      </div>
  </template>
</template>

