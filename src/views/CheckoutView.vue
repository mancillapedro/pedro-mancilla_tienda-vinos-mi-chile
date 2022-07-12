<template>
  <v-container id="CheckoutView">
    <v-row>
      <v-col cols="12" md="8">
        <h1 class="text-center" v-text="`Checkout`" />
        <form-component />
      </v-col>
      <v-col cols="12" md="4">
        <bag-component />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BagComponent from "@/components/BagComponent.vue";
import FormComponent from "@/components/FormComponent.vue";

export default {
  components: { BagComponent, FormComponent },
  name: "CheckoutView",
  // props: {},
  //   data: () => ({}),
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