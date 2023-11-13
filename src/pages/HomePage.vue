<template>
    <HeaderMenu />
    <div class="container">
        <h1>Заявки</h1>
        <main>
            <div class="main-inner">
                <table>
                    <thead>
                    <tr>
                        <td>#</td>
                        <td>Транзакция</td>
                        <td>Телефон</td>
                        <td>Дата</td>
                        <td>Сумма</td>
                        <td>Карта</td>
                        <td>Сообщение</td>
                        <td>Статус</td>
                        <td>More</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="tr" v-for="(item, i) in data" :key="item.id_transaction">
                        <td>{{ i+1 }}</td>
                        <td>{{ item.id_transaction }}</td>
                        <td>{{ item.phone }}</td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.amount }}</td>
                        <td>{{ item.card }}</td>
                        <td>{{ item.message }}</td>
                        <td>{{ item.status }}</td>
                        <td><a :href="`/request/${item.id_transaction}`">Подробнее</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </main>
    </div>
</template>

<script lang="ts">

export default {
 
  setup(props) {


    const data:any = [
        {
            id_transaction:1345, 
            phone: 9990235493,
            date: '25.10.23 14:43',
            amount: 1500,
            card: '****6782',
            message: 'Не пришло пополнение',
            status: 'Просмотрено'
        },
        {
            id_transaction:1653, 
            phone: 9990235493,
            date: '25.10.23 14:43',
            amount: 1500,
            card: '****6782',
            message: 'Не пришло пополнение',
            status: 'Просмотрено'
        },
        {
            id_transaction:1643, 
            phone: 9990235493,
            date: '25.10.23 14:43',
            amount: 1500,
            card: '****6782',
            message: 'Не пришло пополнение',
            status: 'Просмотрено'
        }
    ]

    console.log(props) 

    return {data} 
  }

}

</script>

<style >

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