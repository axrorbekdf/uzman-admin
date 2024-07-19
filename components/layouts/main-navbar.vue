<script setup lang="ts">
import AuthService from '~/services/Auth';

const {currentUser, clear} = useAuthStore()
const loadingStore = useLoadingStore()
const router = useRouter();
const toast = useToast();
const errors = ref('');


const items = [
  [{
    label: currentUser.email,
    slot: 'account',
    disabled: true
  }], [{
    label: 'Settings',
    icon: 'i-heroicons-cog-8-tooth'
  }], [{
    label: 'Log out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click: () => {
      logout()
    }
  }]
]

const logout = async () => {
    loadingStore.set(true);

    AuthService.logout()
    .then(() => {
        loadingStore.set(false);
        router.push('auth/login')    

        toast.add({
            title: 'Tizimdan chiqildi!',
        })

        clear();

    }).catch(error => {
        loadingStore.set(false);
        errors.value = error;
        toast.add({
            title: 'Error',
            description: error.message
        })
        
    })
    .finally(() => {
        loadingStore.set(false)
    }); 
}
</script>

<template>
    <div class="h-[10vh] fixed top-0 left-0 right-0 bg-gray-100 dark:bg-gray-900 z-50">
        
        <div class="container-fluid mx-10 flex items-center h-full justify-between">
            <nuxt-link to="/" class="flex items-center space-x-1">
                <NuxtImg src="/logo.png" width="50" height="50" />

                <span class="text-2xl font-medium">Uzman LLC</span>
            </nuxt-link>

            <div class="flex items-center space-x-2">
                <SharedColorMode />

                <template v-if="currentUser">
                    <UChip>
                        <UButton class="font-sans" color="white" variant="solid" >
                            <div class="mx-2">
                                {{ currentUser.username}}
                            </div>
                            <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
                                <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />
        
                                <template #account="{ item }">
                                    <div class="text-left">
                                        <p>
                                            {{currentUser.username}}
                                        </p>
                                        <p>
                                            {{currentUser.email}}
                                        </p>
                                        <p class="truncate font-medium text-gray-900 dark:text-white">
                                            {{ item.label }}
                                        </p>
                                    </div>
                                </template>
        
                                <template #item="{ item }">
                                    <span class="truncate">{{ item.label }}</span>
        
                                    <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
                                </template>
                            </UDropdown>
                        </UButton> 
                    </UChip>

                </template>

            </div>
        </div>
    </div>
</template>