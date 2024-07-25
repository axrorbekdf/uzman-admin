<script setup lang="ts">
import CategoryService from '~/services/Category';
import { useCategoryStore } from '~/store/category.store';

const loadingStore = useLoadingStore()
const categoryStore = useCategoryStore();



onMounted(async () => {
  try {
    loadingStore.set(true);

    CategoryService.forOptions()
    .then((res: any) => {
        // console.log(res);
        
        categoryStore.setData(res.resoult.data)
        
        loadingStore.set(false);
    }).catch(() => {
        loadingStore.set(false);
    }).finally(() => {
        loadingStore.set(false);
        
    });

  } catch (error) {
    console.error('Failed to load posts:', error);
    loadingStore.set(false);
  } finally {
    loadingStore.set(false);
  }

});

</script>

<template>
  <div>
      <CategoryIndex/>
  </div>
</template>

