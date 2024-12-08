<template>
  <div>
    <h1>Listings</h1>
    <ul>
      <li v-for="listing in listings" :key="listing.id">
        {{ listing.name }} - {{ listing.location }} - ${{ listing.price }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listings: []
    };
  },
  created() {
    fetch('http://localhost:3000/api/listings')
      .then(response => response.json())
      .then(data => {
        this.listings = data;
      });
  }
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
