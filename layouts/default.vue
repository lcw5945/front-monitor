<template>
    <div>
        <my-header/>
        <div class='wrapper'>
            <nuxt/>
        </div>
        <!--<my-footer/>-->
    </div>
</template>
<script>
import api from '~/api';
import MyHeader from '~/components/Header.vue'
import MyFooter from '~/components/Footer.vue'

export default {
    components: {
        MyHeader,
        //            MyFooter,
    }
}
</script>
<style>
.wrapper {
    padding-top: 50px;
}

.container {
    margin: 0;
    width: 100%;
    padding-top: 52px;
}

.button,
.button:visited {
    display: inline-block;
    color: black;
    letter-spacing: 1px;
    background-color: #fff;
    border: 2px solid #000;
    text-decoration: none;
    text-transform: uppercase;
    padding: 15px 45px;
}

.button:hover,
.button:focus {
    color: #fff;
    background-color: #000;
}

.title {
    color: #000;
    font-weight: 300;
    font-size: 2.5em;
    margin: 0;
}
</style>