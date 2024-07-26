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
  }
})

const columns = props.model.columns;
const items = props.model.items;

const q = ref('')

const selected = ref([
    // data[0]
])

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

const isOpen = ref(false)

const state = reactive({
  email: undefined,
  password: undefined
})
</script>

<template>
    <div>
        <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
            <UButton label="Open" @click="isOpen = true" />
    
            <UModal v-model="isOpen" fullscreen>
                <UCard
                    :ui="{
                    base: 'h-full flex flex-col',
                    rounded: '',
                    divide: 'divide-y divide-gray-100 dark:divide-gray-800',
                    body: {
                        base: 'grow'
                    }
                    }"
                >
                    <template #header>
                        <div class="flex items-center justify-between">
                            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                            Modal
                            </h3>
                            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
                        </div>
                    </template>
        
                    <Placeholder class="h-full" />
                    <div>
                        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                            <UFormGroup label="Email" name="email">
                                <UInput v-model="state.email" />
                            </UFormGroup>

                            <UFormGroup label="Password" name="password">
                                <UInput v-model="state.password" type="password" />
                            </UFormGroup>

                            <UButton type="submit">
                                Submit
                            </UButton>
                        </UForm>
                    </div>
                </UCard>
            </UModal>
        </div>
      <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">

          <div class="grid grid-cols-12 gap-6">
              <div class="col-start-1 col-end-3">
                  <UInput v-model="q" placeholder="Filter data..." />
              </div>
              <div class="col-end-12 col-span-2 flex">
                  <UButton label="Create" color="primary" variant="soft" class="mx-5" @click="isOpen = true"/>
                  <UButtonGroup size="sm" orientation="horizontal">
                      <UButton label="View" color="white" variant="solid" />
                      <UButton label="Update" color="cyan" variant="soft" />
                      <UButton label="Delete" color="pink" variant="soft" />
                  </UButtonGroup>
              </div>
          </div>

      </div>

      <UTable :rows="paginateRows" :columns="columns" v-model="selected"> 
      

          <template #actions-data="{ row }">
              <UDropdown :items="items(row)">
                  <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
              </UDropdown>
          </template>
      </UTable>

      <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
        <UPagination v-model="page" :page-count="pageCount" :total="filteredRows.length" />
      </div>
    </div>
</template>

