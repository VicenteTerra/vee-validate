import Field from './core/field';

export default {
  bind (el, binding, vnode) {
    const field = Field.from(el, vnode) || new Field(el, binding, vnode);
    field.onUpdate(el, binding, vnode);
  },
  update (el, binding, vnode, oldVnode) {
    const field = Field.from(el, vnode);
    if (vnode === oldVnode || !field) {
      return;
    }

    field.onUpdate(el, binding, vnode);
  },
  unbind (el, _, vnode) {
    const field = Field.from(el, vnode);
    if (field) {
      field.destroy();
    }
  }
};