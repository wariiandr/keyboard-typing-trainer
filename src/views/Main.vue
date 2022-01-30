<template>
    <div class="main d-flex justify-content-center">
        <div v-if="!isStart" class="d-flex justify-content-center mt-5">
            <img class="main__img shadow bg-body" src="/img/keyboard.webp" alt="keyboard">

            <div class="main__content ml-5">
                <h1 class="main__h1">Keyboard Typing Trainer</h1>
                <p class="mt-5">Find out your typing speed</p>
                <button class="btn" type="submit" @click="isStart = true">Let's go!</button>
            </div>
        </div>

        <game 
            v-if="isStart"
        />
    </div>
</template>

<script>
import Game from '../components/Game.vue';

export default {
    components: {
        Game 
    },
    data() {
        return {
            isStart: false,
        }
    },
    methods: {
        
    },
    mounted() {
        
    }
}
</script>

<style lang="scss" scoped>
.main {
    &__h1 {
        color: #0088cc;
    }
    &__img {
        width: 35%;
    }
    &__content {
        margin-left: 50px;
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