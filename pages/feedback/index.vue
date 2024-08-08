<script setup lang="ts">
import { useFeedbackStore } from '~/store/feedback.store';


const loadingStore = useLoadingStore();
const modelStore = useFeedbackStore();


onMounted(async () => {
  modelStore.getAllList();
});

function clearEntity(){
  modelStore.model.modelForForm.entity = {
    id: undefined,
    text: undefined,
    user_from_id: undefined,
    user_to_id: undefined,
  }
}

function createFeedback(){
  loadingStore.set(true)
  modelStore.createFeedback(modelStore.model.modelForForm.entity)
  .then((res: any) => {
    loadingStore.set(false)
  }).catch(() => {
    loadingStore.set(false)
  }).finally(() => {
    loadingStore.set(false)
  });
}

function updateFeedback(){
  loadingStore.set(true)
  modelStore.updateFeedback(modelStore.model.modelForForm.entity.id ?? 0, modelStore.model.modelForForm.entity)
  .then((res: any) => {
    loadingStore.set(false)
  }).catch(() => {
    loadingStore.set(false)
  }).finally(() => {
    loadingStore.set(false)
  });
}

function deleteFeedback(){

  console.log(modelStore.model.modelForForm.entity.id ?? 0);
  
  loadingStore.set(true)
  modelStore.deleteFeedback(modelStore.model.modelForForm.entity.id ?? 0)
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
          :create-model="createFeedback"
          :update-model="updateFeedback"
          :delete-model="deleteFeedback"
        />
      </div>
  </template>
</template>

