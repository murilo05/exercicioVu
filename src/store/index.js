import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		caixinhas:[{
        titulo: "1"
      }, {
        titulo: "2"
      }, {
        titulo: "3"
      }]
	},
	mutations: {
		alterouTexto(state, texto){
			state.caixinhas[texto.caixa].titulo = texto.titulo
		}
	},
	actions: {
	},
	modules: {
	}
})