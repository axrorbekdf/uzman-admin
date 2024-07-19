<script setup lang="ts">
import AuthService from '~/services/Auth';


const router = useRouter();
const authStore = useAuthStore();
const loadingStore = useLoadingStore()

onMounted(() => {
    loadingStore.set(true);

    AuthService.getUser()
    .then((res: any): any => {
        if (res.status) {
            
            authStore.update({
                id: res.resoult.$id,
                username: res.resoult.username,
                email: res.resoult.email,
                password: "",
                token: res.resoult.token,
            });
            
            
        }else{
            router.push('/auth/login');
        }

        loadingStore.set(false);
    })
    .catch((err: any): any => {

        router.push('/auth/login');
        loadingStore.set(false);

    }).finally(() => {
        loadingStore.set(false);
    });
});
</script>
<template>
    <UiLoader v-if="loadingStore.isLoading" />
    <template v-else>
        <LayoutsMainNavbar />
        <LayoutsSidebar />
        <section class="min-h-screen bg-white dark:bg-black pl-72 pt-[10vh]">
            <div class="p-4">
                <slot />
            </div>
        </section>
    </template>
    
</template>
  