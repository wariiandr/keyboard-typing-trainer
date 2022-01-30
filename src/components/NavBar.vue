<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid d-flex justify-content-between">
                <a class="navbar-brand d-flex align-items-center fs-3 p-0" href="/">
                    <img src="/img/keyboard.svg" alt="logo" width="38" class="navbar__logo">
                    Trainer
                </a>

                <div class="d-flex flex-row align-items-center">
                    <a class="nav-link text-decoration-none text-white" href="/login">Login</a>
                    <span class="text-white">or</span>
                    <a class="nav-link text-decoration-none text-white" href="/registration">Registration</a>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
 .navbar {
    background-color: #00aaff;
 }
</style>