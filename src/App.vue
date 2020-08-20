<template>

  <div >
  <div>
    <Navbar/>
    </div>
    <nav class="navbar navbar-expand-lg  navbar-light bg-dark">
      <router-link :to="{name: 'FoodList'}" class="nav-link text-warning "> <h1> History </h1> </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navContent"
        aria-controls="navContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navContent">
        <ul class="navbar-nav ml-auto">
           
          <li class="nav-item ">
            <router-link  :to="{name: 'FoodList'}" class="nav-link has-text-success"> List </router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{name: 'CreateFood'}" class="nav-link  has-text-success">Add History</router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{name: 'Oasis'}" class="nav-link  has-text-success">Oasis</router-link>
          </li>

        </ul>
      </div>
    </nav>
    <router-view></router-view>
    
  </div>
</template>

// ทำการประกาศ store โดยต้องประกาศ path ให้ตรงกับ store.js
<script>
import { store } from "./store/store";

export default {
 
  store

};
</script>