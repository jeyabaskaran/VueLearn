<template>
  <div>
    <the-header></the-header>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>

    <course-goals #default="selectedProps">
      <h1>{{ selectedProps.goal}}
      </h1>
      <h2>{{selectedProps.anotherProps}}</h2>
    </course-goals> -->
    <button @click="setSelectedComponents('active-goals')">Active Goals</button>
        <button  @click="setSelectedComponents('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent==='active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent==='manage-goals'"></manage-goals> -->
<keep-alive>
    <component :is="selectedComponent"></component>
  </keep-alive>
  </div>
</template>

<script>
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
import TheHeader from './components/TheHeader.vue';
import ManageGoals from './components/ManageGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';

export default {
  selectedComponent:'active-goals',
  components:{
// BadgeList,
// UserInfo,
ManageGoals,
ActiveGoals,
TheHeader
  },
  data() {
    return {
      selectedComponent:'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods:{
    setSelectedComponents(val){
      this.selectedComponent=val;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>