<template>
    <div class="parameter-wrapper">
        <div class="parameter-title">Parameters</div>
        <table class="parameter-table">
            <thead>
                <tr>
                    <th >Parameter</th>
                    <th >Description</th>
                    <th >Type</th>
                    <th >Necessity</th>
                    <th >Options</th>
                    <th >Default</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in parameters" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.description }}</td>
                    <td>{{ item.type }}</td>
                    <td>{{ item.necessity }}</td>
                    <td>{{ item.options }}</td>
                    <td>{{ item.default }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ParameterList',
    props:{
        parameters:{
            type: Array,
            default:[],
        }
    }
}
</script>

<style scoped>
    .parameter-wrapper{
        padding-left: 30px;
        padding-right: 30px;
        box-sizing: border-box;
    }
    .parameter-title{
        color: white;
        font-size: 18px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .parameter-table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
        color: white;
        text-align: justify;
        margin-top: 20px;
    }
    .parameter-table th,td {
        padding-top: 15px;
        padding-bottom: 15px;
        padding-right: 15px;
        box-sizing: border-box;
        line-height: 1.5;
        font-size: 14px;
    }

    .parameter-table thead{
        box-sizing: border-box;
        border-bottom: 1px solid rgba(255,255,255,0.1);
    }

    .parameter-table th:nth-child(1),
    .parameter-table td:nth-child(1) {
        width: 14%;
        padding-left: 5px;
        word-break: break-all;
    }

    /* Description */
    .parameter-table th:nth-child(2),
    .parameter-table td:nth-child(2) {
        width: 34%;
    }
    .parameter-table td:nth-child(2){
        padding-right: 30px;
    }

    /* Type */
    .parameter-table th:nth-child(3),
    .parameter-table td:nth-child(3) {
        width: 12%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /* Necessity */
    .parameter-table th:nth-child(4),
    .parameter-table td:nth-child(4) {
        width: 10%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /* Options */
    .parameter-table th:nth-child(5),
    .parameter-table td:nth-child(5) {
        width: 20%;
    }

    /* Default */
    .parameter-table th:nth-child(6),
    .parameter-table td:nth-child(6) {
        width: 10%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .parameter-table tbody tr {
        transition: background-color 0.25s ease;
    }

    .parameter-table tbody tr:hover {
        background: rgba(255, 255, 255, 0.1);
        cursor: pointer;
    }
</style>