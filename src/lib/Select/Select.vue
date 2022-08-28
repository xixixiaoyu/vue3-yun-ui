<template>
  <YunPopover
    ref="yunPopverRef1"
    class="yun-select-view"
    :class="{ 'yun-select-focus': isShowOptions }"
    :trigger="trigger"
    :placement="placement"
    :arrow="false"
    style="width: 100%"
    @on-show="isShowOptions = true"
    @on-hide="isShowOptions = false"
  >
    <template #trigger>
      <div ref="yunSelectRef" class="yun-select" :class="`yun-select-${size}`">
        <icon size="16px" class="yun-select-icon">
          <ChevronDown />
        </icon>
        <div
          v-if="(!multiple && labelStr.length == 0) || (multiple && multipleLabelStr.length == 0)"
          class="yun-select-placeholder"
        >
          请选择
        </div>
        <!-- 单选 -->
        <div v-show="!multiple" class="yun-select-label-single">
          {{ labelStr }}
        </div>
        <!-- 多选 -->
        <div v-show="multiple" class="yun-select-label-multiple">
          <Tag
            v-show="multipleLabelStr.length > 0"
            type="primary"
            :size="size"
            closable
            @close="delTag(0)"
          >
            {{ multipleLabelStr[0] }}</Tag
          >
          <YunPopover
            v-show="multipleLabelStr.length > 1"
            ref="yunPopverRef2"
            trigger="hover"
            placement="top"
          >
            <template #trigger>
              <div style="margin-left: 5px" class="yun-isSelect-label-num">
                <Tag v-show="multipleLabelStr.length > 1" :size="size" type="primary">
                  +{{ multipleLabelStr.length - 1 }}</Tag
                >
              </div></template
            >
            <template #popover-body>
              <Flex wrap gap="5px" x="start" class="yun-isSelect-label-box">
                <Tag
                  v-for="(item, i) in multipleLabelStr"
                  :key="`multipleLabelStr${i}`"
                  type="primary"
                  closable
                  :size="size"
                  @close="delTag(i)"
                >
                  {{ item }}</Tag
                >
              </Flex></template
            ></YunPopover
          >
        </div>
      </div>
    </template>
    <template #popover-body>
      <div
        class="yun-select-body"
        :class="{ 'yun-select-multiple-body': multiple }"
        :style="`width:${lewSelectWidth}`"
      >
        <div class="options-box">
          <div
            v-for="item in options"
            :key="item.value"
            class="item"
            :class="{
              'yun-select-checked': multiple ? multipleV.includes(item.value) : v == item.value,
            }"
            @click="changeFn(item)"
          >
            <Checkbox
              v-if="multiple"
              class="yun-select-checkbox"
              label=""
              :checked="multipleV.includes(item.value)"
            />
            <div class="yun-select-label">{{ item.label }}</div>
          </div>
        </div>
      </div>
    </template>
  </YunPopover>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import { ChevronDown } from "@vicons/ionicons5";
import { Icon } from "@vicons/utils";
import { selectProps } from "./props";

const props = defineProps(selectProps);
const v = ref<string>("");
const multipleV = ref<Array<string>>([]);
const labelStr = ref<string>("");
const multipleLabelStr = ref<Array<string>>([]);
watch(
  () => props.modelValue,
  () => {
    // 如果是多选
    if (props.multiple) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      multipleV.value = props.modelValue;
      multipleLabelStr.value = filterSelect(props.modelValue, props.options);
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      v.value = props.modelValue;
      labelStr.value = filterSelect([props.modelValue], props.options)[0] || "";
    }
  },
  { deep: true }
);
type Options = {
  label: string;
  value: string;
};
let yunSelectRef = ref();
onMounted(() => {
  // 如果是多选
  if (props.multiple) {
    multipleLabelStr.value = filterSelect(props.modelValue, props.options);
  } else {
    labelStr.value = filterSelect([props.modelValue], props.options)[0] || "";
  }
});
const filterSelect = (v: any, options: Options[]) => {
  let _v: Array<string> = [];
  if (v && options) {
    v.map((e: string) => {
      options.map((o) => {
        if (e == o.value) {
          _v.push(o.label);
        }
      });
    });
  }
  return _v;
};
const emit = defineEmits(["update:modelValue", "change"]);
const changeFn = (item: Options) => {
  if (props.multiple) {
    let index = multipleV.value.indexOf(item.value);
    if (index >= 0) {
      multipleLabelStr.value.splice(index, 1);
      multipleV.value.splice(index, 1);
    } else {
      multipleLabelStr.value.push(item.label);
      multipleV.value.push(item.value);
    }
    emit("update:modelValue", multipleV.value);
    emit("change", multipleV.value);
  } else {
    if (v.value == item.value) {
      labelStr.value = "";
      v.value = "";
    } else {
      labelStr.value = item.label;
      v.value = item.value;
    }
    setTimeout(() => {
      hide();
    }, 150);
    emit("update:modelValue", v.value);
    emit("change", v.value);
  }
};
let isShowOptions = ref(false);
let yunPopverRef1 = ref();
let yunPopverRef2 = ref();
const delTag = (i: number) => {
  multipleV.value.splice(i, 1);
  multipleLabelStr.value.splice(i, 1);
  emit("update:modelValue", multipleV.value);
  emit("change", { value: multipleV.value, show, hide });
  if (i == 0 && multipleV.value.length == 0) {
    yunPopverRef2.value.hide();
  }
};
const lewSelectWidth = computed(() => yunSelectRef.value?.offsetWidth - 12 + "px");
const show = () => {
  yunPopverRef1.value.show();
};
const hide = () => {
  yunPopverRef1.value.hide();
};
defineExpose({ show, hide });
</script>

<script lang="ts">
export default {
  name: "Select",
};
</script>

<style lang="scss" scoped>
.yun-select-view {
  width: 100%;
  border: var(--yun-form-border-width) rgba(0, 0, 0, 0) solid;
  border-radius: var(--yun-form-border-radius);
  background-color: var(--yun-form-bgcolor);
  transition: all 0.15s ease;
  box-sizing: border-box;
  > div {
    width: 100%;
  }
  .yun-select {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    user-select: none;
    box-sizing: border-box;
    .yun-select-icon {
      position: absolute;
      top: 50%;
      right: 7px;
      transform: translateY(-50%) rotate(0deg);
      transition: all 0.25s cubic-bezier(0.65, 0, 0.35, 1);
      color: var(--yun-text-color-7);
    }
    .yun-select {
      width: 100%;
    }
    .yun-select-label-multiple {
      width: 100%;
      display: flex;
      align-items: center;
      .yun-popover {
        display: flex;
        align-items: center;
        > div {
          display: flex;
          align-items: center;
        }
      }
    }
    .yun-isSelect-label-num {
      display: inline-flex;
      align-items: center;
    }
  }
  .yun-select-placeholder {
    color: rgb(165, 165, 165);
  }
  .yun-select-small {
    padding: var(--yun-form-input-padding-small);
    height: var(--yun-form-input-height-small);
    line-height: var(--yun-form-input-line-height-small);
    .yun-select-label-single,
    .yun-select-placeholder {
      font-size: var(--yun-form-font-size-small);
    }
  }
  .yun-select-medium {
    padding: var(--yun-form-input-padding-medium);
    line-height: var(--yun-form-input-line-height-medium);
    height: var(--yun-form-input-height-medium);
    .yun-select-label-single,
    .yun-select-placeholder {
      font-size: var(--yun-form-font-size-medium);
    }
  }
  .yun-select-large {
    padding: var(--yun-form-input-padding-large);
    line-height: var(--yun-form-input-line-height-large);
    height: var(--yun-form-input-height-large);
    .yun-select-label-single,
    .yun-select-placeholder {
      font-size: var(--yun-form-font-size-large);
    }
  }
}
.yun-select-view:hover {
  border: var(--yun-form-border-width) rgba(0, 0, 0, 0) solid;
  background-color: var(--yun-form-bgcolor-hover);
}
.yun-select-view:active {
  background-color: var(--yun-form-bgcolor-active);
}
.yun-select-view.yun-select-focus {
  background-color: var(--yun-form-bgcolor-focus);
  border: var(--yun-form-border-width) var(--yun-form-border-color-focus) solid;
  .yun-select-icon {
    transform: translateY(-50%) rotate(180deg);
    color: var(--yun-text-color-2);
  }
}
</style>
<style lang="scss">
.yun-isSelect-label-box {
  max-width: 250px;
}
.yun-select-body {
  width: 100%;
  box-sizing: border-box;
  .options-box {
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 300px;
    height: auto;
    box-sizing: border-box;
    padding: 3px;
    transition: all 0.25s ease;
    font-size: 0px;
    .item {
      position: relative;
      display: inline-flex;
      align-items: center;
      width: 100%;
      height: 32px;
      line-height: 32px;
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      cursor: pointer;
      color: var(--yun-text-color-7);
      box-sizing: border-box;
      border-radius: var(--yun-form-border-radius);
      padding-left: 10px;
    }
    .yun-select-label {
      user-select: none;
    }
    .item:hover {
      color: var(--yun-text-color-0);
      background-color: var(--yun-form-bgcolor);
    }
    .yun-select-checked {
      font-weight: bold;
      color: var(--yun-primary-color-dark);
    }
    .yun-select-checked:hover {
      color: var(--yun-primary-color-dark);
    }
    .yun-select-checkbox {
      position: absolute;
      z-index: 0;
      top: 50%;
      transform: translateY(-50%);
      left: 12px;
    }
  }
  .options-box::-webkit-scrollbar {
    background-color: rgb(126, 126, 126, 0);
    width: 5px;
    height: 5px;
  }
  .options-box::-webkit-scrollbar-thumb:hover {
    background-color: rgb(126, 126, 126);
  }
  .options-box::-webkit-scrollbar-thumb {
    background-color: rgb(209 213 219 / 0);
    border-radius: 5px;
  }
  .options-box:hover::-webkit-scrollbar-thumb {
    background-color: rgb(209 213 219 / 1);
    border-radius: 5px;
  }
}
.yun-select-multiple-body {
  .options-box {
    .item {
      height: 36px;
      line-height: 36px;
    }
    .yun-select-label {
      position: absolute;
      left: 0px;
      top: 50%;
      z-index: 9;
      transform: translateY(-50%);
      padding-left: 40px;
    }
  }
}
</style>
