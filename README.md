# zero-trans-to-auto

Vue Component to Transition sizes(width, height) from `0` to `auto`. Not really, but we can get the same result by utilizing Grid.

https://www.npmjs.com/package/@mcjumaah/zero-trans-to-auto

### The Problem:

Normally, we can't transition elements from height/width of `0` to `auto`.

### Reference

My reference to the approach I utilized in this component is mainly from the YT video of @kevin-powell:

- https://youtu.be/B_n4YONte5A?si=qK1lGhhttpftBzYp
- https://keithjgrant.com/posts/2023/04/transitioning-to-height-auto/

## Get started

**Zero Transition To Auto**

Install:

```bash
npm install @mcjumaah/zero-trans-to-auto
```

Then, import and register the component.
The component itself does not include any CSS. You'll need to include it separately for the component to work

```js
// main.ts or main.js

import { createApp } from "vue";
import App from "./App.vue";

import ZeroTransToAuto from "@mcjumaah/zero-trans-to-auto";
import "@mcjumaah/zero-trans-to-auto/styles.css";

createApp(App)
    .use(ZeroTransToAuto);
    .mount("#app");
```

Then insert the element you want to transition inside the component:

```vue
<template>
  <div>
    <ZeroTransToAuto> Insert Elements Here </ZeroTransToAuto>
  </div>
</template>
```

### Props

| Prop                        | Description                                                                                                                                                                                                     | Type      | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| customClass                 | custom class                                                                                                                                                                                                    | `string`  | -       |
| isOpen                      | indicate the status of the component if it's open                                                                                                                                                               | `boolean` | false   |
| transitionDirectionAxis     | input 'y' for y-axis (i.e., vertical transition), 'x' for x-axis (i.e., horizontal transition)                                                                                                                  | `string`  | 'y'     |
| isOnHover                   | to transition when hovered by the cursor                                                                                                                                                                        | `boolean` | true    |
| disableDefaultBgColor       | remove the default background color (i.e., gray). You can put your custom background color on `customClass` prop                                                                                                | `boolean` | false   |
| disableDefaultPadding       | remove the default padding (i.e., 10px). You can put your custom padding on `customClass` prop                                                                                                                  | `boolean` | false   |
| disableDefaultTransitionAll | remove the default transition (i.e., transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;). You can put your custom transition on `customClass` prop | `boolean` | false   |
| disableWidthFit             | remove the default width (i.e., fit-content). You can put your custom width on `customClass` prop                                                                                                               | `boolean` | false   |
