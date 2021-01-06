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
    <button
      v-if="this.latestChip && this.latestChip.price"
      v-bind:style="{ maxWidth: maxWidth }"
      v-bind:class="{ 'img-transition': maxWidth }"
      class="chip"
    >
      <img
        :src="getImageUrlFromPrice()"
        class="img-transition"
        v-bind:style="{ maxWidth: maxWidth }"
        alt="100"
      />
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
  watch: {
    latestChip: {
      // the callback will be called immediately after the start of the observation
      immediate: true,
      handler(val, oldval) {
        if (
          !oldval ||
          val.isLastPlaced !== oldval.isLastPlaced ||
          val.price !== oldval.price
        )
          this.getMaxWidth();
      },
    },
  },
  props: {
    buttonData: Object,
    latestChip: Object,
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
      const latestChip = this.chips.find(
        (chip) => chip.price === this.latestChip.price
      );
      return latestChip ? latestChip.src : null;
    },
    getMaxWidth() {
      if (this.latestChip.isLastPlaced) {
        this.maxWidth = true;
        setTimeout(() => {
          this.maxWidth = false;
        }, 10);
      }
    },
  },
  data() {
    return {
      chips: chips,
      maxWidth: false,
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
  padding: 0.2vw 0 0 0.2vw;
  transition: 0.1s all cubic-bezier(0.6, -0.28, 0.74, 0.05);
  img {
    max-width: 3vw;
    transition: 0.1s all cubic-bezier(0.6, -0.28, 0.74, 0.05);
  }
}
.img-transition {
  max-width: 5vw;
  transition: none;
  img {
    transition: none;
    max-width: 5vw;
  }
}
</style>
