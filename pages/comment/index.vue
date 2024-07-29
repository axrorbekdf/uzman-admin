<script setup lang="ts">

const loadingStore = useLoadingStore();
const modelStore = useCommentStore();


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

function createComment(){
  loadingStore.set(true)
  modelStore.createComment(modelStore.model.modelForForm.entity)
  .then((res: any) => {
    loadingStore.set(false)
  }).catch(() => {
    loadingStore.set(false)
  }).finally(() => {
    loadingStore.set(false)
  });
}

function updateComment(){
  loadingStore.set(true)
  modelStore.updateComment(modelStore.model.modelForForm.entity.id ?? 0, modelStore.model.modelForForm.entity)
  .then((res: any) => {
    loadingStore.set(false)
  }).catch(() => {
    loadingStore.set(false)
  }).finally(() => {
    loadingStore.set(false)
  });
}

function deleteComment(){

  console.log(modelStore.model.modelForForm.entity.id ?? 0);
  
  loadingStore.set(true)
  modelStore.deleteComment(modelStore.model.modelForForm.entity.id ?? 0)
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
          :create-model="createComment"
          :update-model="updateComment"
          :delete-model="deleteComment"
        />
      </div>
  </template>
</template>

