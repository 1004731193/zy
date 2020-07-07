import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderStep : {},
    hospitalDetail : {},
    doctorDetail : {}
  },
  getters : {
    getOrderStep(state){
      return state.orderStep;
    },
    getHospitalDetail(state){
      return state.hospitalDetail;
    },
    getDoctorDetail(state){
      return state.doctorDetail;
    }
  },
  mutations: {
    setOrderStep(state,obj){
      state.orderStep[obj.name] = obj.val;
    },
    setHospitalDetail(state,obj){
      state.hospitalDetail = obj;
    },
    setDoctorDetail(state,obj){
      state.doctorDetail = obj;
    }
  },
  actions: {
  },
  modules: {
  }
})
