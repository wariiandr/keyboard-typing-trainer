<template>
    <auth-form 
        :isRegister="isRegister"
    />
</template>

<script>
import AuthForm from '@/components/AuthForm.vue';

export default {
    components: { 
        AuthForm
    },
    data() {
        return {
            isRegister: false,
        }
    }

}
</script>

<style>

</style>