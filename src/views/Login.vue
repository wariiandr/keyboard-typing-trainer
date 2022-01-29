<template>
    <div class="login">
        <h2 class="h2 text-center mt-5">Login</h2>
        <auth-form 
            :isRegistration="isRegistration"
            @submit-handler="login"
        />
    </div>
</template>

<script>
import AuthForm from '@/components/AuthForm';
import { mapMutations, mapActions } from 'vuex';

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
        ...mapMutations(['updateToken']),
        ...mapActions(['fetchUser']),
        async login(formData) {
            const res = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const token = await res.json();

            this.updateToken(token);
            localStorage.setItem('token', token);
            
            if (res.status === 200) this.$router.push({name: 'Main'});
        }
    }

}
</script>

<style scoped>
.h2 {
    color: #0088cc;
}
</style>