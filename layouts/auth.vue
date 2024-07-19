<script setup lang="ts">
import AuthService from '~/services/Auth';

const router = useRouter();
const authStore = useAuthStore();
const loadingStore = useLoadingStore()

onMounted(() => {
    loadingStore.set(true);
    
    AuthService.getUser()
    .then((res: any) => {
        
        if(res.status){
            authStore.update({
                id: res.resoult.$id,
                username: res.resoult.username,
                email: res.resoult.email,
                password: "",
                token: res.resoult.token,
            });

            loadingStore.set(false);
            router.push('/');
        }
        
    }).catch(() => {
        loadingStore.set(false);
    }).finally(() => {
        loadingStore.set(false);
    });;
});
</script>

<template>
    <UiLoader v-if="loadingStore.isLoading" />

    <template v-else>
        <div class="min-h-screen bg-white dark:bg-black">
            <slot />
        </div>
    </template>

</template>
  