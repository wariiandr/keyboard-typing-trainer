<template>
    <div class="auth-form">
        <form @submit.prevent ="submitHandler()" class="auth-form__form
            d-flex flex-column 
            justify-content-center align-items-center 
            border rounded
            shadow bg-body rounded">
            <div class="mb-3">
                <label for="username" class="col-form-label">Username</label>
                <div>
                    <input type="text" class="form-control" name="username"
                    v-model="username">
                </div>
            </div>

            <div class="mb-3">
                <label for="password" class="col-form-label">Password</label>
                <div>
                    <input type="password" class="form-control" name="password"
                    v-model="password">
                </div>
            </div>

            <div class="auth-form__bottom d-flex flex-row justify-content-evenly" v-if="isRegistration">
                <a class="text-decoration-none d-flex align-items-center" href="/login">Already registered ?</a>
                <button type="submit" class="btn">Sign up</button>
            </div>

            <div class="auth-form__bottom d-flex flex-row justify-content-evenly" v-else>
                <a class="text-decoration-none d-flex align-items-center" href="/registration">Not registered yet ?</a>
                <button type="submit" class="btn">Sign in</button>
            </div>

            <p class="auth-form__error text-danger text-center mt-4">{{ errorMessage }}</p>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        isRegistration: {
            type: Boolean,
            required: true
        },
        errorMessage: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        submitHandler() {
            this.$emit('submit-handler', { username: this.username, password: this.password });
            this.username = '';
            this.password = '';
        }
    }
}
</script>

<style lang="scss">
.auth-form {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: auto;

    &__form {
        width: 30%;
        height: 350px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }

    &__bottom {
        width: 100%;
    }

    &__error {
        width: 70%;
    }
}
.btn {
    background-color: #0088cc;
    color: white;
    &:hover {
        background-color: #007ab8;
        color: white;
    }
}

</style>