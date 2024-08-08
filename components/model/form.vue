<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
const loadingStore = useLoadingStore();

const props = defineProps({
    modelForForm: {
      type: Object,
      default: {},
      required: true
    },
    entityHandler:{
      type: Function,
      required: true
    },
    toggleShow: {
        type: Function,
        required: true
    },
})

  const state: any = reactive(props.modelForForm.entity)
  

  const validate = (state: any): FormError[] => {
    const errors: any = []

    Object.values(props.modelForForm.rules).forEach((value: any, index) => {
        const key = Object.keys(props.modelForForm.rules)[index];
      
        if (!state[`${key}`]) errors.push({ path: `${key}`, message: value.message })
    });
    
    return errors
  }

  async function onSubmit (event: FormSubmitEvent<any>) {

    props.entityHandler()    

    if(!loadingStore.isLoading){
      props.toggleShow();
    }
  }

  const people = ['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']

  const selected = ref(people[0])
</script>

<template>

  <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">

    <UFormGroup v-for="item in props.modelForForm.formTemplate" :key="item" :label="item.label" :name="item.name">
      <UInput v-if="item.relation == null" v-model="state[`${item.name}`]"/>

      <USelectMenu 
          v-if="item.relation != null" 
          searchable 
          searchable-placeholder="Qidiring... " 
          v-model="state[`${item.name}`]" 
          :options="props.modelForForm.relations[`${item.relation.name}`]" 
          :value-attribute="item.relation.value"
          :option-attribute="item.relation.options"
      />
    </UFormGroup>

    <UButton type="submit" :disabled="loadingStore.isLoading">
      Jo'natish  <Icon v-if="loadingStore.isLoading" name="svg-spinners:3-dots-fade" class="w-5 h-5"/>
    </UButton>
  </UForm>
</template>

