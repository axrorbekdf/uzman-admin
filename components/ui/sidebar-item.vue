<script setup lang="ts">

import { sidebarItems  } from '~/constants';

const route = useRoute();
</script>

<template>
    <NuxtLink :to="item.path" v-for="(item, index) in sidebarItems" :key="item.name">
        <UButton 
            class="w-full text-left h-12 flex justify-start rounded-none"
            :variant="route.fullPath === item.path ? 'solid':'ghost'"
            color="blue"
        >
            <Icon :name="item.icon" size="20" class="mr-2"/>
            <span>{{ item.name }}</span>
        </UButton>
    </NuxtLink>
</template>