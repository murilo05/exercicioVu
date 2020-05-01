<template>
  <div id="caixa">
	<div class="caixinhas" v-for="(caixa, index) in caixinhas" :key="index">
		{{caixa.titulo}}
	</div>	
  </div>
</template>

<script>

export default {
	name: "Todo",
	computed: {
		caixinhas(){
		return this.$store.state.caixinhas
		}
	}
}
</script>

<style>
	#caixa {
		width: 600px;
		height: 200px;
		border: 1px solid #ffff;
		margin: 30px auto 10px auto;
		display: flex;
		flex-wrap: wrap;
	}
	.caixinhas{
		width: 120px;
		height: 100px;
		border: 1px solid #fff;
		margin: 50px 40px 0 38px;
	}
</style>
