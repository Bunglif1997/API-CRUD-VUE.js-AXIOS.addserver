<template>
  <div class="container fluid">
    <br />
    <div>
      <div class="card bg-secondary">
        <div class="card-header bg-warning">
          <h2>Add History 🌎</h2>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="addFood()">
            <div class="form-group">
              <label>
                <h5>Name</h5>
              </label>
              <input
                type="text"
                class="form-control"
                placeholder=" Fistname LastName"
                v-model="fistname"
              />
            </div>

            <div class="form-group">
              <label>
                <h5>Work done</h5>
              </label>
              <input type="text" class="form-control" placeholder=" Specify Work" v-model="name" />
            </div>

            <div class="form-group">
              <label>
                <h5>Date (Day/Mont/Year)</h5>
              </label>
              <input type="์number" class="form-control" placeholder="01011997" v-model="price" />
            </div>
            <div class="file"></div>

            <button type="submit" class="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      price: "",
      fistname: "",
    };
  },
  methods: {
    addFood() {
      if (this.name) {
        let payload = {
          fistname: this.fistname,
          name: this.name,
          price: this.price,
        };
        this.$store.dispatch("addFood", payload);
      }
    },
  },
};
</script>