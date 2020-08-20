
<template>
  <div class="container fluid">
    <br />
    <div>
      <div class="card ">
        <div class="card-header bg-warning">
          <h2>History</h2>
        </div>
        <div class="card-body">
          <table class="table table-hover">
            <thead>
              <tr>
                <th style="width: 10%">NO.</th>
                     <th style="width: 25%">Name</th>
                
               
                 <th style="width: 30%">History List</th>
                  <th style="width: 20%">Date</th>
               
                <th style="width: 0%">The Operation</th>
                
              </tr>
            </thead>
            <tbody>
              <tr v-for="(food,index) in $store.getters.foods" :key="index">
                <td>{{ index + 1 }}</td>
                <td v-if="index !== editIndex">{{ food.fistname}}</td>
                <td v-if="index !== editIndex">{{ food.name }}</td>
                <td v-if="index !== editIndex">{{ food.price }}</td>
                
                <td v-if="index !== editIndex">
                  
                  
                  <button
                    type="button"
                    class="btn btn-danger mr-2"
                    v-on:click="deleteFood(index,food._id)"
                  >Delect</button>
                  <button
                    type="button"
                    class="btn btn-warning"
                    v-on:click="openEdit(index,food)"
                  >Edit</button>
                </td>

                <td v-if="index === editIndex">
                  <input
                    type="text"
                    :value="food.name"
                    class="form-control"
                    v-on:change="name = $event.target.value"
                  />
                </td>
                <td v-if="index === editIndex">
                  <input
                    type="number"
                    :value="food.price"
                    class="form-control"
                    v-on:change="price = $event.target.value"
                  />
                </td>
                <td v-if="index === editIndex">
                  <input
                    type="text"
                    :value="food.fistname"
                    class="form-control"
                    v-on:change="fistname = $event.target.value"
                  />
                </td>
                <td v-if="index === editIndex">
                  <button
                    type="button"
                    class="btn btn-success mr-2"
                    v-on:click="editFood(food._id)"
                  >Submit</button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    v-on:click="closeEdit(index)"
                  >Cancel</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  </div>
</template>


<script>
export default {
  data() {
    return {
      editIndex: -1,
      name: "",
      price: "",
      fistname:""
    };
  },
  created() {
    this.fetchFood();
  },
  methods: {
    fetchFood() {
      this.$store.dispatch("fetchFood");
    },
    deleteFood(index, _id) {
      let payload = { index: index, _id: _id };
      this.$store.dispatch("deleteFood", payload);
    },
    openEdit(index, food) {
      this.editIndex = index;
      this.name = food.name;
      this.price = food.price;
       this.fistname = food.fistname;
   
    },
    closeEdit(index, food){
      this.editIndex= -1;
      this.name = food.name;
      this.price = food.price;
       this.fistname = food.fistname;

    },

    editFood(_id){
      let payload = {
        index: this.editIndex,
        _id: _id,
        name: this.name,
        price: this.price,
        fistname: this.fistname
      };
      this.$store.dispatch("editFood", payload).then(this.closeEdit());
    }
    
    
  }
};
</script>