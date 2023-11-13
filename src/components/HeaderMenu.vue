<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg?: string }>()

const count = ref(0)
</script>

<template>
  <main>
  <div class="main-inner">
	
    <router-link to="/" title="Заявки" class="service">
        <img src="/assets/svg/cards-page.svg" class="service-svg"> 
    </router-link>

    <router-link to="/add-request" title="Создать заявку"  class="service">
        <img class="service-svg" src="/assets/svg/telegram-page.svg"/>
    </router-link>

    <div class="delimeter"></div>

    <router-link to="/logout" class="service">
        <img class="service-svg" src="/assets/svg/logout-page.svg"/>
    </router-link>


</div>
</main>
</template>

<style scoped>
main{
  margin: auto;
    border-radius: 0.5em;
    background-color: var(--surface-color);
   
    margin-top: 30px;
    padding: 10px 0;
    display: block;
    box-shadow: 0 0;
    text-align: center;
    justify-content: center;
}

.main-inner{
 
    padding: 0 .25em;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: center;
}

.service{
    width: 3.4em;
    height: 3.4em;
    background: var(--surface-color-variant) none repeat scroll 0% 0%;
    border-radius: 0.5em;
    margin: 0 .25em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.service-svg{
    width: 2.25em;
    height: 2.25em;
}

.main-inner{
    width: 100%;
    height: 100%;
    top: 0;
    padding: 0 0.25em;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.left{
    width: 100%;
    height: 100%;
    top: 0;
    padding: 0 0.25em;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.service-left{
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    padding-right: 0;
    margin-right: 0;
}
.service-right{
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    margin-left: 0;
    width: fit-content;
    padding-right: 0.5em;
}

.delimeter{
    background: var(--surface-color-variant) none repeat scroll 0% 0%;
    height: 3em;
    width: 0.1em;
    border-radius: 5em;
    margin: 0 0.25em;
}
</style>
