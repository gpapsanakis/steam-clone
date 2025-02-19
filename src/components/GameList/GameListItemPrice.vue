<script setup lang="ts">
const { priceOverview } = defineProps({
  priceOverview: Object,
})
</script>

<template>
  <div v-if="priceOverview?.discount_percent" class="text-h6 discount">
    -{{ priceOverview?.discount_percent }}%
  </div>
  <div class="price" v-if="priceOverview">
    <div class="text-decoration-line-through font-weight-thin">
      {{ priceOverview.initial_formatted }}
    </div>
    <div class="text-h7 new-price">
      {{ priceOverview.final_formatted }}
    </div>
  </div>
</template>

<style scoped>
.discount {
  padding: 0.5rem;
  position: absolute;
  bottom: 5px;
  right: 100px;
  color: #beee11ff;
  background-color: #4c6b22ff;
}

.price {
  padding: 0.5rem;
  position: absolute;
  bottom: 0;
  right: 10px;
}

.new-price {
  color: #b1dd1a;
}
</style>
