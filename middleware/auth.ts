import AuthService from "~/services/Auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  
    AuthService.getUser()
    .then((res: any): any => {
        if (!res.status) {
            // Agar foydalanuvchi avtorizatsiyadan o'tmagan bo'lsa, login sahifasiga yo'naltirish
            console.log("AUTH run");
            
            return navigateTo('/auth/login');
        }
    })
    .catch((err: any): any => {
        return navigateTo('/auth/login');
    });


});
