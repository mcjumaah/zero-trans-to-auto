import ZeroTransToAuto from './components/ZeroTransToAuto.vue'
import {
  __VLS_internalComponent,
  __VLS_componentsOption,
  __VLS_name,
  direction,
  toggleDirection
} from './App.vue'

function __VLS_template() {
  let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {}
  /* Components */
  let __VLS_otherComponents!: NonNullable<
    typeof __VLS_internalComponent extends { components: infer C } ? C : {}
  > &
    typeof __VLS_componentsOption
  let __VLS_own!: __VLS_SelfComponent<
    typeof __VLS_name,
    typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots })
  >
  let __VLS_localComponents!: typeof __VLS_otherComponents &
    Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>
  let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx
  /* Style Scoped */
  type __VLS_StyleScopedClasses = {}
  let __VLS_styleScopedClasses!:
    | __VLS_StyleScopedClasses
    | keyof __VLS_StyleScopedClasses
    | (keyof __VLS_StyleScopedClasses)[]
  /* CSS variable injection */
  /* CSS variable injection end */
  let __VLS_resolvedLocalAndGlobalComponents!: {} & __VLS_WithComponent<
    'ZeroTransToAuto',
    typeof __VLS_localComponents,
    'ZeroTransToAuto',
    'ZeroTransToAuto',
    'ZeroTransToAuto'
  >
  __VLS_intrinsicElements.main
  __VLS_intrinsicElements.main
  __VLS_components.ZeroTransToAuto
  __VLS_components.ZeroTransToAuto
  // @ts-ignore
  ;[ZeroTransToAuto, ZeroTransToAuto]
  __VLS_intrinsicElements.button
  __VLS_intrinsicElements.button
  {
    const __VLS_0 = __VLS_intrinsicElements['main']
    const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0)
    const __VLS_2 = __VLS_1({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_1))
    ;(
      ({}) as (
        props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> &
          Record<string, unknown>
      ) => void
    )({ ...{} })
    const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!
    let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>
    {
      const __VLS_5 = (
        {} as 'ZeroTransToAuto' extends keyof typeof __VLS_ctx
          ? { ZeroTransToAuto: typeof __VLS_ctx.ZeroTransToAuto }
          : typeof __VLS_resolvedLocalAndGlobalComponents
      ).ZeroTransToAuto
      const __VLS_6 = __VLS_asFunctionalComponent(
        __VLS_5,
        new __VLS_5({ ...{}, transitionDirectionAxis: __VLS_ctx.direction })
      )
      ;(({}) as { ZeroTransToAuto: typeof __VLS_5 }).ZeroTransToAuto
      ;(({}) as { ZeroTransToAuto: typeof __VLS_5 }).ZeroTransToAuto
      const __VLS_7 = __VLS_6(
        { ...{}, transitionDirectionAxis: __VLS_ctx.direction },
        ...__VLS_functionalComponentArgsRest(__VLS_6)
      )
      ;(
        ({}) as (
          props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> &
            Record<string, unknown>
        ) => void
      )({ ...{}, transitionDirectionAxis: __VLS_ctx.direction })
      const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!
      let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>
      __VLS_8.slots!.default
    }
    {
      const __VLS_10 = __VLS_intrinsicElements['button']
      const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10)
      const __VLS_12 = __VLS_11(
        { ...{ onClick: {} as any } },
        ...__VLS_functionalComponentArgsRest(__VLS_11)
      )
      ;(
        ({}) as (
          props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> &
            Record<string, unknown>
        ) => void
      )({ ...{ onClick: {} as any } })
      const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!
      let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>
      let __VLS_15 = {
        click: __VLS_pickEvent(
          __VLS_14['click'],
          ({} as __VLS_FunctionalComponentProps<typeof __VLS_11, typeof __VLS_12>).onClick
        )
      }
      __VLS_15 = { click: __VLS_ctx.toggleDirection }
      __VLS_13.slots!.default
    }
    __VLS_3.slots!.default
  }
  if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
  }
  var __VLS_slots!: {}
  // @ts-ignore
  ;[direction, direction, direction, toggleDirection]
  return __VLS_slots
}
