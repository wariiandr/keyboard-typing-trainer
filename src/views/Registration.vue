<template>
    <div class="registration">
        <h2 class="h2 text-center mt-5">Registration</h2>
        <auth-form 
            :isRegistration="isRegistration"
            @submit-handler="registration"
            :errorMessage="errorMessage"
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
            errorMessage: ''
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
            const data = await res.json()
            
            if (res.status === 200) this.$router.push({name: 'Login'});
            else {
                this.errorMessage = data.errors === undefined ? data.message : `${data.message}. ${data.errors[0].msg}.`;
            }
        }
    }
}
</script>

<style scoped>
.h2 {
    color: #0088cc;
}
</style>