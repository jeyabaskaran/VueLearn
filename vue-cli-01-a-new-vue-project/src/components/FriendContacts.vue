<template>
  <h1>{{ friend.name }} {{ friend.isFavourite ? "(favourite)" : "" }}</h1>
  <ul v-if="isShow">
    <li>
      <strong>{{ friend.email }}</strong>
    </li>
  </ul>
  <button @click="showButton">Show button</button>
  <button @click="addFavourite">Favourite</button>
  <button @click="$emit('delete-contact',friend)" >Delete contact</button>
</template>

<script>
export default {
  props: {
    /** Binding All Props on a Component*/
    friend: {
      type: Object,
      requied: true,
    },

    /** get a individual props one by one */
    // id: {
    //   type: Number,
    //   required: false,
    // },
    // name: {
    //   type: String,
    //   required: true,
    // },
    // email: {
    //   type: String,
    //   required: true,
    // },
    // isFavourite: {
    //   type: Boolean,
    //   required: false,
    //   default: true,
    // },
  },
  emits: ["toggle-favourite",'delete-contact'],
  //   emits:{
  //     "toggle-favourite": function(id){
  // if(id){
  //   return true;
  // }else{
  //   console.log("Id is missing");
  //   return false;
  // }
  //     }
  //   },
  data() {
    return {
      isShow: true,
      friendFav: this.friend.isFavourite,
    };
  },
  methods: {
    showButton() {
      this.isShow = !this.isShow;
    },
    addFavourite() {
      this.$emit("toggle-favourite", this.friend.id);
    },
  },
};
</script>

<style>
#app button {
  width: 100px;
  color: rgb(93, 98, 93);
  background-color: rgb(249, 250, 250);
}
</style>