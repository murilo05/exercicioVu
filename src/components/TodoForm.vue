<template>
	<div id="TodoForm">
		<select v-model="caixaSel">
			<option value="" selected disabled>Selecione uma caixa</option>
			<option v-for="(caixa, index) in caixinhas" :key="index" :value="index">
				{{caixa.titulo}}
			</option>
		</select>
		<input type="" placeholder="Digite o nome da caixa" v-model="titulo">
		<button @click="alterarTexto">OK</button>
	</div>
</template>

<script>
	export default {
		name: "TodoForm",
		computed: {
			caixinhas() {
				return this.$store.state.caixinhas
			}
		},
		data: function(){
			return{
				caixaSel: '',
				titulo: ''
			}
		}, methods:{
			alterarTexto: function(){
				this.$store.commit('alterouTexto', {
					titulo: this.titulo,
					caixa: this.caixaSel
				})
			}
		}
	}
</script>

<style>
	#TodoForm{
		width: 600px;
		height: 200px;
		border: 1px solid #fff;
		margin: 5px auto 0 auto; 
	}
</style>
