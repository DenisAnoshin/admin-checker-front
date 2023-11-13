<template>
  <HeaderMenu />
  <div class="container">
    <div class="header-block">
        <h1>Создать заявку</h1> 
        <button class="btn">Прикрепить чек</button>
    </div>
    <form>
        <input type="text" placeholder="id транзакции">
        <input type="text" placeholder="Дата и время">
        <input type="text" placeholder="Сумма">
        <input type="text" placeholder="Карта">
        <input type="text" placeholder="Сообщение">
    </form>
    <div class="send-block">
        <button class="btn">Отправить заявку</button>
    </div>
   </div>



</template>
<style>
    .send-block{
        text-align: center;
        margin-top: 50px;
    }
    form{
    display: block;
    width: 100%;
    }
    input{
        width: 100%;
        margin-bottom: 5px;
        display: block;
        background: none;
        border: 1px solid rgba(255,255,255, 0.2);
        padding: 10px;
    }
</style>