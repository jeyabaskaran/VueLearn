<template>

<form ref="form" @submit.prevent="addContact">
    <div>
        <label>Enter the name : </label>
        <input type="text" v-model="userName" />
    </div>
      <div>
        <label>Enter the email : </label>
        <input type="email" v-model="userEmail" />
    </div>
    <div>
        <button>Add contact</button>
    </div>
</form>

</template>

<script>

export default{
    data(){
        return{
            userEmail: "",
            userName : ""
        }
    },
    emits:["add-friend-contact"],
    methods:{
        addContact(){
            this.$emit("add-friend-contact",this.userName,this.userEmail);
            this.userEmail="";
            this.userName="";
        }
    }
}

</script>