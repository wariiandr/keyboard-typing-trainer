<template>
    <div class="registration">
        <h2 class="text-center mt-5">Registration</h2>
        <auth-form 
            :isRegistration="isRegistration"
            @submit-handler="registration"
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
            isRegistration: true,
        }
    },
    methods: {
        async registration(formData) {
            const res = await fetch('http://localhost:3000/auth/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (res.status === 400) this.$router.push({name: 'Login'});
        }
    }
}
</script>

<style>

</style>