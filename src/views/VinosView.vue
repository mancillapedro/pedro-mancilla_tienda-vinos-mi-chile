<template>
  <v-container>
    <shopping-layout :title="`Vinos Mi Chile`" :products="vinos" />
  </v-container>
</template>

<script>
import ShoppingLayout from "@/components/ShoppingLayout.vue";
export default {
  components: { ShoppingLayout },
  name: "VinosView",
  // props: {},
  data: () => ({
    vinos: null,
  }),
  // computed: {},
  methods: {
    async getVinos() {
      try {
        const response = await fetch("/productos.json");
        if (!response.ok) throw "Error en API";
        const json = await response.json();
        this.vinos = json.productos
      } catch (error) {
        console.log(error);
      }
    },
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  created(){
    this.getVinos()
  }
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>