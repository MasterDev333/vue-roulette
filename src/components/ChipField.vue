<template>
  <div class="chipfield">
    <button v-for="chip in chips" :key="chip.price" class="chip">
      <img
        :src="chip.src"
        :alt="chip.alt"
        draggable
        @click="startDrag(chip.price)"
        @dragstart="startDrag(chip.price)"
        @dragend="endDrag"
      />
    </button>
  </div>
</template>

<script>
import { chips } from "./Chips";
export default {
  name: "ChipField",
  props: {
    msg: String,
  },
  data() {
    return {
      chips: chips,
    };
  },
  methods: {
    startDrag(price) {
      this.$store.dispatch("startDrag", {
        price,
      });
    },
    endDrag() {
      this.$store.dispatch("dropDrag");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chipfield {
  padding: 20px;
  max-width: 140px;
  background-color: #104703;
  border-radius: 20px;
}
.chip {
  padding: 0;
  margin-bottom: 10px;
}

@media screen and (max-width: 1080px) {
  .chipfield {
    padding: 10px;
  }
}
</style>
