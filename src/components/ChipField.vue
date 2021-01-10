<template>
  <div class="history">
    <div class="chipfield">
      <button v-for="chip in chips" :key="chip.price" class="chip">
        <img
          :src="chip.src"
          :alt="chip.alt"
          v-bind:class="[
            classBindHovering(chip.price),
            {
              disabled: isAvailableTurn(),
            },
          ]"
          draggable
          @click="startDrag(chip.price)"
          @dragstart="startDrag(chip.price)"
          @dragend="endDrag"
        />
      </button>
    </div>
    <div class="history-tooltip">
      <p class="history-min">
        MIN €<span class="history-min__value">0.10</span>
      </p>
      <p class="history-max">
        MAX €<span class="history-max__value">100</span>
      </p>
      <p class="history-max-table">
        MAX TAVOLO €<span class="history-max-table__vale">1000</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { chips } from "./Chips";
export default {
  name: "ChipField",
  computed: {
    ...mapState(["dragPrice", "is_turning", "mode"]),
  },
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
    classBindHovering: function(price) {
      return {
        "hover-number": this.isHovering(price),
      };
    },
    isHovering: function(price) {
      return this.dragPrice === price;
    },
    isAvailableTurn() {
      return (
        this.is_turning ||
        this.mode === "autoStart-start" ||
        this.mode === " normalSpin-start"
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.history {
  display: flex;
  flex-direction: column;
  margin-top: 1vw;
  .chipfield {
    padding: 2vw;
    background-color: #104703;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    gap: 0.5vw;
    width: 100%;
    .hover-number {
      box-shadow: 0px 0px 4px 3px #f9d53e;
      border-radius: 100%;
    }
  }
  .chip {
    padding: 0;
  }

  .history-tooltip {
    margin-left: clamp(10px, 1.5vw, 30px);
    color: white;
    font-size: clamp(16px, 1vw, 20px);
    display: flex;
    gap: 1vw;
    justify-content: flex-end;
    padding-right: 3vw;
    width: 100%;
  }
  .history-tooltip p {
    margin: 0;
    line-height: 1.5;
  }
}
.disabled {
  filter: grayscale(1);
  cursor: not-allowed;
  pointer-events: none;
}
@media screen and (max-width: 1080px) {
  .history {
    position: absolute;
    left: 9.2vw;
    top: calc(40vw - 68px);
    flex-direction: column;
    .chipfield {
      padding: 1.3vw;
      flex-direction: column;
      order: 2;
      width: 9vw;
    }
    .history-tooltip {
      margin-top: 1.8vw;
      margin-left: 0;
      order: 1;
      flex-direction: column;
      gap: 0;
    }
  }
}
</style>
