<template>
  <v-card id="CardWithDescriptionComponent">
    <v-img :src="product.imagen" />
    <v-card-title v-text="product.nombre" />
    <v-card-text>
      <p v-text="product.descripcion" />
      <ul>
        <li
          v-for="(caracteristica, i) in product.caracteristicas"
          :key="i"
          v-text="caracteristica"
        />
      </ul>
    </v-card-text>
    <v-card-text class="pt-0">
      <v-row class="pt-0">
        <v-col>
          <v-card-title class="pt-0" v-text="`Antes`" />
          <v-card-subtitle v-text="product.precio_normal" />
        </v-col>
        <v-col>
          <v-card-title class="pt-0" v-text="`Ahora`" />
          <v-card-subtitle v-text="product.precio_promo" />
        </v-col>
      </v-row>
      <v-btn color="primary" elevation="2" v-text="`Agregar`" @click="agregar(product.id)" block/>
    </v-card-text>
  </v-card>
  <!-- {
      "id": "1234",
      "nombre": "Cabernet Sauvignon",
      "descripcion": "Buen volumen en boca con una textura que llena el paladar",
      "caracteristicas": [
        "Cuerpo: Potente",
        "Contenido: 750cc",
        "Valle: Central"
      ],
      "precio_normal": 199000,
      "precio_promo": 99000,
      "imagen": "https://www.licoresmundiales.com/pub/media/catalog/product/cache/f928fc410fe7599d77016467e0e477ab/a/r/arg_las_moras_cabernet.png"
    }, -->
</template>


<script>
export default {
  name: "CardWithDescriptionComponent",
  props: ["product"],
  // data: () => ({}),
  // computed: {},
  methods: {
    agregar(id){
        return console.log(id)
    }
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>