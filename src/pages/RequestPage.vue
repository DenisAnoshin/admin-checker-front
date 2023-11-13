<template>
    <HeaderMenu />
    <div class="container">
        <div class="header-block">
            <h1>Заявки # 56</h1> 
            <button class="btn">Изменить</button>
        </div>
        
        <div class="main">
            <div class="main-inner">
                <table>
                    <tbody>
                        <tr><td>ID транзакции</td><td>{{data.id_transaction}}</td></tr>
                        <tr><td>Телефон</td><td>{{data.phone}}</td></tr>
                        <tr><td>Дата и время транзакции</td><td>{{data.date}}</td></tr>
                        <tr><td>Сумма</td><td>{{data.amount}}</td></tr>
                        <tr><td>Карта</td><td>{{data.card}}</td></tr>
                        <tr><td>Сообщение</td><td>{{data.message}}</td></tr>
                        <tr><td>Чек</td><td>{{data.receipt}}</td></tr>
                        <tr>
                            <td>Статус заявки</td>
                            <td>
                                <span class="color-green">Просмотренно</span> 
                                <br>
                                25.10.23 14:43
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default {
 
  setup(props) {


    const data:any = {
        id_transaction:1643, 
        phone: 9990235493,
        date: '25.10.23 14:43',
        amount: 1500,
        card: '****6782',
        message: 'Не пришло пополнение',
        receipt: 'Прикрпеленн',
        status: 'Просмотрено'
    }


    console.log(props) 

    return {data} 
  }

}

</script>

<style scoped>
.main-inner{
    display: block;
    width: 100%;
}
.main{
    padding: 10px;
    border-radius: 5px;
    widows: 100%;
    background: var(--surface-color) none repeat scroll 0% 0%;
    box-shadow: rgba(0, 0, 0, 0.3) 0 .5em 1.9em, rgba(0, 0, 0, 0.22) 0 .75em .6em;
}
table tr td:first-child{
    width: 30%;
}
table{
    width: 100%;
}


.color-green{
  color: green;
}
thead td {
    background:  rgba(255,255,255, 0.2)
}
table {
    border-spacing: 0;
}

table tr {
    padding: 10px;
    background:  rgba(255,255,255, 0.04)
}

td {
    padding: 10px;
    border: 1px solid rgba(255,255,255, 0.2)
}

</style>