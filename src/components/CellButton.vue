<template>
  <div
    class="btn"
    :class="this.buttonData.buttonType"
    @mouseover="enterCell"
    @mouseleave="leaveCell"
    @dragleave="leaveCell"
    @click="clickCell"
    @drop="dropDrag"
    @dragover="enterCell"
    @dragover.prevent
    @dragenter.prevent
  >
    <button v-if="this.buttonData.chips.length" class="chip">
      <img :src="getImageUrlFromPrice()" alt="100" />
    </button>
  </div>
</template>

<script>
import { chips } from "./Chips";
import { mapState } from "vuex";

export default {
  name: "CellButton",
  computed: {
    ...mapState(["drag", "dragPrice"]),
  },
  props: {
    buttonData: Object,
  },
  methods: {
    enterCell() {
      if (this.drag) this.$parent.enterCell(this.buttonData.cells);
    },
    leaveCell() {
      this.$parent.leaveCell();
    },
    clickCell() {
      if (this.drag && this.dragPrice) {
        this.$parent.clickCell(this.buttonData.id, this.dragPrice);
      }
    },
    dropDrag() {
      if (this.drag && this.dragPrice) {
        this.$parent.clickCell(this.buttonData.id, this.dragPrice);
      }
      this.$store.dispatch("dropDrag");
    },
    getImageUrlFromPrice() {
      const placedChips = this.buttonData.chips;
      if (!placedChips || !placedChips.length) return;

      const maxPrice = Math.max.apply(
        Math,
        placedChips.map(function(c) {
          return c.price;
        })
      );
      const maxChip = this.chips.find((chip) => chip.price === maxPrice);
      return maxChip ? maxChip.src : null;
    },
  },
  data() {
    return {
      chips: chips,
    };
  },
};
</script>

<style lang="scss" scoped>
.vertical {
  width: 1vw;
  height: 6.3vw;
  transform: translateX(-50%);
  // background-color: blue;
  z-index: 4;
}
.horizontal {
  width: 6.3vw;
  height: 1vw;
  transform: translateY(-50%);
  // background-color: red;
  z-index: 4;
}
.center {
  width: 2vw;
  height: 2vw;
  transform: translate(-50%, -50%);
  // background-color: #c7a1a100;
  z-index: 5;
}
.self {
  width: 6.25vw;
  height: 6.25vw;
  z-index: 3;
}
.chip {
  width: 3vw;
  padding: 0.2vw 0 0 0.2vw;
  img {
    max-width: 3vw;
  }
}
</style>
