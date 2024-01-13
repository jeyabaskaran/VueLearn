<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goals" />
    <button @click="setGoals">Set Goals</button>
    <teleport to="body">
    <error-alert v-if="!isInputValid">
        <h2>Invalid Input</h2>
        <p>Please atlease enter one characters...</p>
    <button @click="isInputValid=true">Okay</button>
    </error-alert>
    
    </teleport>

  </div>
</template>


<script>
import ErrorAlert from './ErroAlert.vue';

export default {
    components:{
        ErrorAlert
    },
  data() {
  return{  isInputValid:true}
  },
  methods: {
    setGoals() {
      const userEnteredValue = this.$refs.goals.value;
      if (!userEnteredValue) {
        this.isInputValid=false;
      }
    },
  },
};
</script>
