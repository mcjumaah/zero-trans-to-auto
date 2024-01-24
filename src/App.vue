<script setup lang="ts">
import { ref } from 'vue'
import ZeroTransToAuto from './components/ZeroTransToAuto.vue'

let isOpen = ref(false)
let isOnHover = ref(true)
let direction = ref('y')
let isPaddingDisabled = ref(false)
let isTransitionDisabled = ref(false)
let isWidthFitDisabled = ref(false)

function toggleDirection() {
  direction.value = direction.value === 'y' ? 'x' : direction.value === 'x' ? 'y' : 'x'
}
function toggleHoverabilityzitationalismister() {
  isOpen.value = false
  isOnHover.value = !isOnHover.value
}
function togglePaddingabilityzitationalismister() {
  isOnHover.value = false
  isPaddingDisabled.value = !isPaddingDisabled.value
}
</script>

<template>
  <main>
    <div class="testing-container">
      <div class="header">
        <h1>Testing Area</h1>
        <p>Currently in <span :class="isOnHover ? 'highlight' : 'muted'">Hover</span></p>
      </div>
      <div class="ztta-container">
        <ZeroTransToAuto
          :isOpen="isOpen"
          :transitionDirectionAxis="direction"
          :isOnHover="isOnHover"
          :disableDefaultPadding="isPaddingDisabled"
          :disableDefaultTransitionAll="isTransitionDisabled"
          :disableWidthFit="isWidthFitDisabled"
        >
          <span>HelloMadapaka!!</span>
        </ZeroTransToAuto>
      </div>
      <div class="buttons">
        <button :disabled="isOnHover" @click="isOpen = !isOpen">
          {{
            isOnHover ? 'Hover the Element inside the Blue Border' : `${isOpen ? 'Close' : 'Open'}`
          }}
        </button>
        <div>
          <button :disabled="isPaddingDisabled" @click="toggleHoverabilityzitationalismister()">
            Toggle Hoverabilityzitationalismister
          </button>
          <button @click="toggleDirection()">Toggle Direction</button>
          <button @click="togglePaddingabilityzitationalismister()">
            Padding {{ isPaddingDisabled ? 'Disabled' : 'Enabled' }}
          </button>
          <button @click="isTransitionDisabled = !isTransitionDisabled">
            Transition {{ isTransitionDisabled ? 'Disabled' : 'Enabled' }}
          </button>
          <button @click="isWidthFitDisabled = !isWidthFitDisabled">
            Width {{ isWidthFitDisabled ? 'Fit' : 'Auto' }}
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100svh;
  display: flex;
}
main > * {
  width: 50%;
}
.testing-container {
  display: grid;
  row-gap: 1rem;
  border: 1px solid;
  padding: 2rem;
  margin: auto;
}
.highlight {
  color: brown;
  font-weight: bold;
}
.muted {
  color: #a9a9a9;
}
.buttons {
  display: grid;
  gap: 1rem;
}
.buttons > div {
  display: flex;
  gap: 1rem;
}
.header {
  display: grid;
  gap: 1rem;
}
.header > * {
  margin: 0;
}
.ztta-container {
  padding: 1rem;
  border: 1px solid blue;
}
.ztta-container span {
  color: white;
}
</style>
