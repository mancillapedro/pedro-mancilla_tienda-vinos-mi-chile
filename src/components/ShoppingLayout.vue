<template>
  <v-row id="ShoppingLayout">
    <v-col cols="12" md="4">
        <bag-component/>
    </v-col>
    <v-col cols="12" md="8">
      <h1 v-text="title" />
      <v-row>
        <v-col cols="4" v-for="product in products" :key="product.id">
            <card-with-description-component :product="product" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import BagComponent from './BagComponent.vue';
import CardWithDescriptionComponent from './CardWithDescriptionComponent.vue';
export default {
  components: { CardWithDescriptionComponent, BagComponent },
  name: "ShoppingLayout",
  props: ["title", "products"],
  // data: () => ({}),
  // computed: {},
  // methods: {},
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>