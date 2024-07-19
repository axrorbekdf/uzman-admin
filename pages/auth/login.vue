<script lang="ts" setup>
import AuthService from '~/services/Auth';

    definePageMeta({
        layout: "auth"
    })

    useHead({
        title: "Kirish | UZMAN.UZ"
    })

    const router = useRouter();

    onMounted(() => {
        AuthService.getUser()
        .then((res: any) => {
            
            if(res.status){
                router.push('/');
            }
            
        });
    });

</script>
<template>
    <div class="flex items-center justify-center h-screen w -full relative">
        <NuxtImg src="/bg-auth.jpg" class="absolute inset-0 w-full h-full object-cover z-10" />
        <div class="absolute inset-0 w-full h-full z-20 dark:bg-black/60 bg-white/40"></div>

        <UCard class="z-50 w-1/4 relative " :ui="{body: {base: 'flex gap-12'}}">
            <div class="space-y-6 flex-1">
                
                <h1 class="text-5xl font-bold flex justify-between mt-6 mb-0">
                    Kirish
                    <SharedColorMode />
                </h1>

                <h1 class="opacity-70 text-2xl mt-0">
                    <p>uzman.uz sayti boshqaruv paneliga kirish.</p>
                </h1>

                <div>
                    <AuthLogin />
                </div>
            </div>
        </UCard>
    </div>
</template>