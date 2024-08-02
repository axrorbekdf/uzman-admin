<script setup lang="ts">

const props = defineProps({
  data: {
    type: Array,
    default: [],
    required: true
  },
  model: {
    type: Object,
    default: {},
    required: true
  },
  clearEntity:{
    type: Function,
    required: true
  },
  createModel:{
    type: Function,
    required: true
  },
  updateModel:{
    type: Function,
    required: true
  },
  deleteModel:{
    type: Function,
    required: true
  }
})

const columns = props.model.columns;
const items = props.model.items;

const q = ref('')

const selected = ref([
    // data[0]
])

function select (row: any) {
    
    selected.value = [];
    
    const index = selected.value.findIndex((item: any) => item.id === row.id)
    if (index === -1) {
        selected.value.push(row)
    } else {
        selected.value.splice(index, 1)
    }

    console.log(selected);
}

const page = ref(1)
const pageCount = 10


const filteredRows = computed(() => {
  
    if (!q.value) {
        return props.data
    }

    
    return props.data.filter((item: any) => {
        return Object.values(item).some((value) => {
            return String(value).toLowerCase().includes(q.value.toLowerCase())
        })
    })

})

const paginateRows = computed(() => {
  return filteredRows.value.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})

const statusButton = computed(() => {
  if(selected.value.length > 0){
    return true
  }

  return false
})

const isOpenView = ref(false);
const isOpenCreate = ref(false);
const isOpenUpdate = ref(false);

function modalShowView(){
    props.model.modelForForm.entity = selected.value[0];
    
    isOpenView.value = !isOpenView.value
}
function modalShowCreate(){
    isOpenCreate.value = !isOpenCreate.value;
    props.clearEntity();
}
function modalShowUpdate(){

    props.model.modelForForm.entity = selected.value[0];

    isOpenUpdate.value = !isOpenUpdate.value;
}

function modalShowDelete(){
    props.model.modelForForm.entity = selected.value[0];
    props.deleteModel();
}
</script>

<template>
    <div>
        <ModelView :model="props.model" :toggle-show="modalShowView" :is-open="isOpenView"/>
        <ModelCreate :model="props.model" :toggle-show="modalShowCreate" :is-open="isOpenCreate" :create-model="createModel"/>
        <ModelUpdate :model="props.model" :toggle-show="modalShowUpdate" :is-open="isOpenUpdate" :update-model="updateModel"/>
        <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">

            <div class="grid grid-cols-12 gap-6">
                <div class="col-start-1 col-end-3">
                    <UInput v-model="q" placeholder="Filter data..." />
                </div>
                <div class="col-end-12 col-span-2 flex">
                    <UButton label="Create" color="primary" variant="soft" class="mx-5" @click="modalShowCreate()"/>
                    <UButtonGroup size="sm" orientation="horizontal">
                        <UButton v-if="selected.length > 0" label="View" color="white" variant="solid" @click="modalShowView()" />
                        <UButton v-else disabled label="View" color="white" variant="solid" @click="modalShowView()"/>

                        <UButton v-if="selected.length > 0" label="Update" color="cyan" variant="soft" @click="modalShowUpdate()"/>
                        <UButton v-else disabled label="Update" color="cyan" variant="soft" @click="modalShowUpdate()"/>

                        <UButton v-if="selected.length > 0" label="Delete" color="pink" variant="soft" @click="modalShowDelete()"/>
                        <UButton v-else disabled label="Delete" color="pink" variant="soft" @click="modalShowDelete()"/>
                    </UButtonGroup>
                </div>
            </div>

        </div>

        <UTable :rows="paginateRows" :columns="columns" v-model="selected" @select="select" > 
        

            <!-- <template #actions-data="{ row }">
                <UDropdown :items="items(row)">
                    <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
                </UDropdown>
            </template> -->
        </UTable>

        <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
            <UPagination v-model="page" :page-count="pageCount" :total="filteredRows.length" />
        </div>
    </div>
</template>

