<template>
    <div class="login">
        <h2 class="text-center text-primary mt-5">Log in</h2>
        <auth-form 
            :isRegistration="isRegistration"
            @submit-handler="login"
        />
    </div>
</template>

<script>
import AuthForm from '@/components/AuthForm';

export default {
    components: { 
        AuthForm
    },
    data() {
        return {
            isRegistration: false,
        }
    },
    methods: {
        async login(formData) {
            const res = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            console.log(res.body)
            if (res.status === 200) this.$router.push({name: 'Main'});
        }
    }

}
</script>

<style>

</style>