<template>
    <div class="game d-flex flex-column justify-content-center align-items-center mt-5">

        <div v-if="!words.length" class="spinner-border text-primary" role="status"></div>

        <div v-if="words.length" class="game__words text-center">
            <span class="d-inline-block fs-5"
                v-for="(word, idx) in words"
                :key="idx">
                {{ word }}&nbsp;
            </span>
        </div>

        <input class="game__input mt-3" 
        type="text" name="text" 
        id="text" autocomplete="off"
        v-model="inputValue"
        @keyup.enter.space="clearInput()">
    </div>
</template>

<script>
export default {
    data() {
        return {
            time: 60,
            words: [],
            inputValue: '',
            currentWord: '',
            currentWordIndex: 0,
            isCorrect: false,
        }
    },
    methods: {
        async fetchWords() {
            const res = await fetch('https://random-word-api.herokuapp.com/word?number=30')
            this.words = await res.json();
        },
        clearInput() {
            this.currentWord = this.words[(this.currentWordIndex++)];
            this.inputValue = '';
        },
        compareValues() {
            this.currentWord = this.words[this.currentWordIndex];
            if (this.currentWord.startsWith(this.inputValue)) return true;
            else return false;
        },
        colorHandler() {
            
        }
    },
    mounted() {
        this.fetchWords();
    },
    watch: {
        inputValue: function () {
            console.log(this.inputValue, this.compareValues())
        }
    }   
}
</script>

<style lang="scss" scoped>
.game {
    width: 50%;

    &__words{
        width: 100%;
    }
    &__input {
        width: 50%;
        padding: 5px;
        border-radius: 15px;
        border: 2px #4db2e5 solid;
        text-align: center;

        &:focus {
            outline: none;
            border: 2px #1a7fb3 solid;
        }
    }
}
</style>