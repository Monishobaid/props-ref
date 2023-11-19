<script setup>
import { ref, onMounted } from 'vue';
import {ProductService} from '../service/ProductService.js' ;
import DataTable from 'primevue/datatable';
import Column from 'primevue/column'; 
  
const products = ref();
const columns = [
    { field: 'props', header: 'PROPS' },
    { field: 'refs', header: 'REFS' },
  ];
  
  onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
  });
</script>
<template>
    <div class="card">
      <DataTable :value="products" tableStyle="min-width: 50rem">
        <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
      </DataTable>
    </div>
</template>
  
  
<style>
.card {
    background: white;
    border-radius: 10px;
    color: black;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.p-datatable {
    width: 100vh;
}


th {
    background-color: #f2f2f2; /* Light gray background color */
    color: #333; /* Dark text color */
    font-weight: 900;
    padding: 20px;
}


td {
    border-bottom: 1px solid #ddd; /* Bottom border for each cell */
    padding: 20px;
    font-weight: 100;
}

tr:nth-child(even) {
    background-color: #f9f9f9; /* Lighter gray background for even rows */
}
</style>
  