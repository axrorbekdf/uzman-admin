<script setup lang="ts">
import CategoryService from '~/services/Category';
import { useCategoryStore } from '~/store/category.store';

const loadingStore = useLoadingStore()
const categoryStore = useCategoryStore();
const columns = [{
  key: 'id',
  label: 'ID',
  sortable: true
}, {
  key: 'name',
  label: 'Name',
  sortable: true
}, {
  key: 'icon',
  label: 'Icon',
  sortable: true
}, {
  key: 'date',
  label: 'Sana',
  sortable: true
},{
  key: 'actions'
}]

const items = (row: any) => [
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => console.log('Edit', row.id)
  }, {
    label: 'View',
    icon: 'i-heroicons-arrow-right-circle-20-solid'
  }, {
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid'
  }]
]



function getData(){

    // CategoryService.view(1)
    // .then((res: any) => {
    //     console.log(res);
    //     loadingStore.set(false);
    // })

}

// let data = [
// {
//     id: 1,
//     name:"Bamboo Watch",
//     code:"f230fh0g3",
//     price:"65",
//     status:"INSTOCK"
    
// },
// {
//     id: 2,
//     name:"Black Watch",
//     code:"nvklal433",
//     price:"72",
//     status:"INSTOCK"
    
// },
// {
//     id: 3,
//     name:"Blue Band",
//     code:"zz21cz3c1",
//     price:"79",
//     status:"LOWSTOCK"
    
// },
// {
//     id: 4,
//     name:"Blue T-Shirt",
//     code:"244wgerg2",
//     price:"29",
//     status:"INSTOCK"
    
// },
// {
//     id: 5,
//     name:"Bracelet",
//     code:"h456wer53",
//     price:"15",
//     status:"INSTOCK"
    
// },
// {
//     id: 6,
//     name:"Brown Purse",
//     code:"av2231fwg",
//     price:"120",
//     status:"OUTOFSTOCK"
    
// },
// {
//     id: 7,
//     name:"Chakra Bracelet",
//     code:"bib36pfvm",
//     price:"32",
//     status:"LOWSTOCK"
    
// },
// {
//     id: 8,
//     name:"Galaxy Earrings",
//     code:"mbvjkgip5",
//     price:"34",
//     status:"INSTOCK"
    
// },
// {
//     id: 9,
//     name:"Game Controller",
//     code:"vbb124btr",
//     price:"99",
//     status:"LOWSTOCK"
    
// },
// {
//     id: 10,
//     name:"Gaming Set",
//     code:"cm230f032",
//     price:"299",
//     status:"INSTOCK"
    
// },
// {
//     id: 11,
//     name:"Gold Phone Case",
//     code:"plb34234v",
//     price:"24",
//     status:"OUTOFSTOCK"
    
// },
// {
//     id: 12,
//     name:"Green Earbuds",
//     code:"4920nnc2d",
//     price:"89",
//     status:"INSTOCK"
    
// },
// {
//     id: 13,
//     name:"Green T-Shirt",
//     code:"250vm23cc",
//     price:"49",
//     status:"INSTOCK"
    
// },
// {
//     id: 14,
//     name:"Grey T-Shirt",
//     code:"fldsmn31b",
//     price:"48",
//     status:"OUTOFSTOCK"
    
// },
// {
//     id: 15,
//     name:"Headphones",
//     code:"waas1x2as",
//     price:"175",
//     status:"LOWSTOCK"
    
// },
// {
//     id: 16,
//     name:"Light Green T-Shirt",
//     code:"vb34btbg5",
//     price:"49",
//     status:"INSTOCK"
    
// },
// {
//     id: 17,
//     name:"Lime Band",
//     code:"k8l6j58jl",
//     price:"79",
//     status:"INSTOCK"
    
// },
// {
//     id: 18,
//     name:"Mini Speakers",
//     code:"v435nn85n",
//     price:"85",
//     status:"INSTOCK"
    
// },
// {
//     id: 19,
//     name:"Painted Phone Case",
//     code:"09zx9c0zc",
//     price:"56",
//     status:"INSTOCK"
    
// },
// {
//     id: 20,
//     name:"Pink Band",
//     code:"mnb5mb2m5",
//     price:"79",
//     status:"INSTOCK"
    
// },
// {
//     id: 21,
//     name:"Pink Purse",
//     code:"r23fwf2w3",
//     price:"110",
//     status:"OUTOFSTOCK"
    
// },
// {
//     id: 22,
//     name:"Purple Band",
//     code:"pxpzczo23",
//     price:"79",
//     status:"LOWSTOCK"
    
// },
// {
//     id: 23,
//     name:"Purple Gemstone Necklace",
//     code:"2c42cb5cb",
//     price:"45",
//     status:"INSTOCK"
    
// },
// {
//     id: 24,
//     name:"Purple T-Shirt",
//     code:"5k43kkk23",
//     price:"49",
//     status:"LOWSTOCK"
    
// },
// {
//     id: 25,
//     name:"Shoes",
//     code:"lm2tny2k4",
//     price:"64",
//     status:"INSTOCK"
    
// },
// {
//     id: 26,
//     name:"Sneakers",
//     code:"nbm5mv45n",
//     price:"78",
//     status:"INSTOCK"
    
// },
// {
//     id: 27,
//     name:"Teal T-Shirt",
//     code:"zx23zc42c",
//     price:"49",
//     status:"LOWSTOCK"
    
// },
// {
//     id: 28,
//     name:"Yellow Earbuds",
//     code:"acvx872gc",
//     price:"89",
//     status:"INSTOCK"
    
// },
// {
//     id: 29,
//     name:"Yoga Mat",
//     code:"tx125ck42",
//     price:"20",
//     status:"INSTOCK"
    
// },
// {
//     id: 30,
//     name:"Yoga Set",
//     code:"gwuby345v",
//     price:"20",
//     status:"INSTOCK"
    
// }
// ]

let data: any = [];


onUpdated(async () => {
  try {
    loadingStore.set(true);

    CategoryService.forOptions()
    .then((res: any) => {
        console.log(res);
        
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

const q = ref('')

const selected = ref([
    // data[0]
])

const page = ref(1)
const pageCount = 5



const filteredRows = computed(() => {
    
    if (!q.value) {
        return data
    }
    
    return data.filter((item: any) => {
        return Object.values(item).some((value) => {
            return String(value).toLowerCase().includes(q.value.toLowerCase())
        })
    })

})

const paginateRows = computed(() => {
  return filteredRows.value.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})


</script>

<template>
  <div>
    <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">

        <div class="grid grid-cols-12 gap-6">
            <div class="col-start-1 col-end-3">
                <UInput v-model="q" placeholder="Filter data..." />
            </div>
            <div class="col-end-12 col-span-2 flex">
                <UButton label="Create" color="primary" variant="soft" class="mx-5" @click="getData"/>
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

