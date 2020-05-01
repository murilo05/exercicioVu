<template>
  <div id="app">
    <todo/>
    <TodoForm @alterouTexto="alteraTexto($event)"/>
  </div>
</template>

<script>
import Todo from "./components/Todo.vue"
import TodoForm from "./components/TodoForm.vue"
export default {
  name: 'App',
  components: {
    Todo,TodoForm
  }, data: function(){
    return{
      caixinhas:[{
        titulo: "1"
      }, {
        titulo: "2"
      }, {
        titulo: "3"
      }]  
    }
  }, methods:{
    alteraTexto: function(event){
      console.log(event)
      this.caixinhas[event.caixa].titulo = event.titulo
    }
  }
}
</script>

<style>
</style>
