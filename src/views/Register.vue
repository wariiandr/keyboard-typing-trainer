<template>
    <auth-form 
        :isRegister="isRegister"
    />
</template>

<script>
import AuthForm from '@/components/AuthForm';

export default {
    components: {
        AuthForm
    },
    data() {
        return {
            isRegister: true,
        }
    }
}
</script>

<style>

</style>