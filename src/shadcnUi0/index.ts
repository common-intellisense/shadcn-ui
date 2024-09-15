import { getComponentMap, getPropsMap } from './mapping'

export function shadcnUi0() {
  return {
    uiName: 'shadcn-Ui0',
    map: getPropsMap(),
    lib: 'shadcn-Ui',
  }
}

export function shadcnUi0Components() {
  return {
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    lib: 'shadcn-Ui0',
    isReact: true,
    dynamicLib: '@/components/ui/${name}',
  }
}
