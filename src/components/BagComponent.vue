<template>
  <v-card id="BagComponent">
    <v-card-title v-text="`Bolsa de Compra Vinos Mi Chile`" />
    <v-divider />
    <v-card-text>
      <v-card v-for="(product, i) in products" :key="i"></v-card>
    </v-card-text>
    <v-divider />
    <v-card-text>
      <v-row>
        <template v-for="(total, i) in totales">
          <v-col cols="6" :key="`text${i}`" v-text="total.text" />
          <v-col cols="6" :key="`total${i}`" v-text="total.total" />
        </template>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "BagComponent",
  // props: {},
  data: () => ({
    products: [],
  }),
  computed: {
    totales() {
      return [
        { text: "Subtotal Productos", total: 12 },
        { text: "Descuentos", total: 23 },
        { text: "Total", total: 34 },
      ];
    },
  },
  // methods: {},
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>