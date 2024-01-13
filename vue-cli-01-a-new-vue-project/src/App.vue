
<template>
  <h1>My Friends</h1>

  <add-contact @add-friend-contact="addFriendContact"></add-contact>
  <ul>
    <friend-contact
      v-for="friend in friends"
      :key="friend.id"
      :friend="friend"
      @toggle-favourite="toggleFavourite"
      @delete-contact="deleteContact"
    >
    </friend-contact>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "jeyabaskaran",
          email: "jeya@nkt.com",
          isFavourite: true,
        },
        { id: 2, name: "sem", email: "sem@gmail.com", isFavourite: false },
      ],
    };
  },
  methods: {
    toggleFavourite(friendId) {
      const identifiedUser = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedUser.isFavourite = !identifiedUser.isFavourite;
    },
    addFriendContact(name,email){
        const contact={ id:Math.random(),email:email,name:name};
        this.friends.unshift(contact);
    },
    deleteContact(friend){
        this.friends=this.friends.filter(fri=> fri.id!==friend.id);
    }
  },
};
</script>