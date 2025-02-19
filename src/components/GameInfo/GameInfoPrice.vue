<script setup lang="ts">
import { TEXT } from '@/utils/constants'
import type { PriceOverview } from '@/types'

const props = defineProps<{
  priceOverview: PriceOverview
}>()
</script>

<template>
  <v-list lines="two">
    <v-list-item :title="TEXT.discount">
      <template v-slot:subtitle>
        <div v-if="priceOverview?.discount_percent" class="text-h6 discount">
          -{{ priceOverview.discount_percent }}%
        </div>
      </template>
    </v-list-item>
    <v-list-item :title="TEXT.oldPrice">
      <template v-slot:subtitle>
        <div class="text-decoration-line-through font-weight-thin">
          {{ priceOverview?.initial_formatted }}
        </div>
      </template>
    </v-list-item>
    <v-list-item :title="TEXT.newPrice">
      <template v-slot:subtitle>
        <div class="text-h7 new-price">
          {{ priceOverview?.final_formatted }}
        </div>
      </template>
    </v-list-item>
  </v-list>
</template>

<style scoped>
.discount {
  width: fit-content;
  padding: 0.5rem;
  color: #beee11ff;
  background-color: #4c6b22ff;
}

.new-price {
  color: #b1dd1a;
}
</style>
