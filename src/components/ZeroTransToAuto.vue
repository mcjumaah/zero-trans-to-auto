<template>
  <div
    class="zero-to-auto-container"
    :class="computedClass"
    :style="`
      ${props.disableDefaultBgColor ? '' : 'background-color: gray;'} ${props.disableDefaultPadding ? '' : 'padding: 10px;'}
    `"
  >
    <div :class="props.childClass">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
export interface Props {
  childClass?: string
  isOpen?: boolean
  transitionDirectionAxis?: string
  isOnHover?: boolean
  disableDefaultBgColor?: boolean
  disableDefaultPadding?: boolean
  disableDefaultTransitionAll?: boolean
  disableWidthFit?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
  transitionDirectionAxis: 'y',
  isOnHover: true,
  disableDefaultBgColor: false,
  disableDefaultPadding: false,
  disableDefaultTransitionAll: false,
  disableWidthFit: false
})

const computedClass = computed(() => {
  let gridTemplate = props.transitionDirectionAxis === 'x' ? 'col' : 'row'
  let isOpenComputed = props.isOpen ? `grid-${gridTemplate}-1` : `grid-${gridTemplate}-0`
  let isOnHoverComputed = props.isOnHover ? `open-${gridTemplate}-on-hover` : ''
  let isOnTransition = props.disableDefaultTransitionAll ? '' : 'transition-all'
  let isWidthFit = props.disableWidthFit ? '' : 'w-fit'
  return `${isOpenComputed} ${isOnHoverComputed} ${isOnTransition} ${isWidthFit}`
})
</script>

<style scoped>
.zero-to-auto-container {
  display: grid;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.w-fit {
  width: fit-content;
}

.zero-to-auto-container > div {
  overflow: clip;
}
.open-row-on-hover:hover {
  grid-template-rows: 1fr;
}
.open-col-on-hover:hover {
  grid-template-columns: 1fr;
}

.grid-row-0 {
  grid-template-rows: 0fr;
}
.grid-row-1 {
  grid-template-rows: 1fr;
}
.grid-col-0 {
  grid-template-columns: 0fr;
}
.grid-col-1 {
  grid-template-columns: 1fr;
}
</style>
