

import Vue, { defineComponent, Prop, h as _c, toHandlerKey, PropType} from "vue";
import { buildVuetifyAttrs, ForSpec, getValueMeta } from "../c-metadata-component";
import { Model, ClassType, DataSource, DataSourceType, mapValueToModel, AnyArgCaller, ApiState, parseValue } from "coalesce-vue";

import CSelect from './c-select.vue'
import CSelectManyToMany from './c-select-many-to-many.vue'
import CSelectValues from './c-select-values.vue'
import CDisplay from '../display/c-display';
import CDatetimePicker from './c-datetime-picker.vue';
import { VCheckbox, VFileInput, VListItemSubtitle, VListItemTitle, VSelect, VSwitch, VTextarea, VTextField } from "vuetify/components";

const primitiveTypes = ["string", "number", "date", "enum", "boolean"];

export default defineComponent({
  name: "c-input",

  inject: {
    'c-input-props': { default: {} }
  },

  props: {
    for: { required: false, type: [String, Object] as PropType<ForSpec> },
    model: { required: false, type: Object as PropType<Model<ClassType> | DataSource<DataSourceType> | AnyArgCaller> },
    value: <Prop<any>>{ required: false },
  },

	render() {
    // NOTE: CreateElement fn must be named `_c` for unplugin-vue-components to work correctly.

    let model = this.model; 
    const modelMeta = model ? model.$metadata : null;
    
    let _valueMeta = getValueMeta(this.for, modelMeta, this.$coalesce.metadata);
    if (!_valueMeta || !("role" in _valueMeta)) {
      throw Error("c-input requires value metadata. Specify it with the 'for' prop'");
    }
    const valueMeta = _valueMeta; // Alias so type inside closures will be correct;

    // Support binding to method args via `:model="myModel.myMethod" for="myArg"`.
    // getValueMeta will resolve to the metadata of the specific parameter;
    // we then have to resolve the args object from the ApiState.
    if (model instanceof ApiState && "args" in model && valueMeta.name in model.args) {
      model = model.args
    }

    const props = this.$props;

    let data = {
      ...this.$attrs, // Includes any non-props, as well as event handlers.
      modelValue: model
        ? (model as any)[valueMeta.name]
        : primitiveTypes.includes(valueMeta.type)
        ? mapValueToModel(props.value, valueMeta) 
        : props.value
    } as any;

    
    // Handle components that delegate to other c-metadata-component based components.
    // These components don't need to have complex attributes computed
    // because they will perform the same computation of attributes themselves.
    // They do this because they're designed to be used as standalone components
    // (and not strictly as components that have been delegated to by c-input).
    switch (valueMeta.type) {

      // case 'date':
      //   data.model = props.model;
      //   data.for = props.for;
      //   return _c(CDatetimePicker, data);

      // case 'model':
      //   data.model = props.model;
      //   data.for = props.for;
      //   return _c(CSelect, data);

      // case 'collection':
      //   data.model = props.model;
      //   data.for = props.for;

      //   if ('manyToMany' in valueMeta) {
      //     return _c(CSelectManyToMany, data);
      //   } else if (
      //     valueMeta.itemType.type != 'model' && 
      //     valueMeta.itemType.type != 'object' && 
      //     valueMeta.itemType.type != 'file'
      //   ) {
      //     return _c(CSelectValues, data);
      //   } else {
      //     // console.warn(`Unsupported collection type ${valueMeta.itemType.type} for v-input`)
      //   }
    }


    // We've now handled any components that will do their own computation of these
    // attributes via c-metadata-component's inputBindAttrs.
    // We now need to compute them in order to render components 
    // that delegate directly to vuetify components.
    data = {
      ...buildVuetifyAttrs(valueMeta, model, data),
      ...data
    };

    const onInput = function(value: any) {
      if (model && valueMeta) {
        (model as any)[valueMeta.name] = parseValue(value, valueMeta);
      }
    }

    // Handle components that delegate immediately to Vuetify
    switch (valueMeta.type) {
      case 'string':
      case 'number':
        if (valueMeta.type == 'number') {
          // For numeric values, use a numeric text field.
          data.type = 'number'
        }

        if (valueMeta.role == "primaryKey") { 
          // If this is an editable primary key, emit the value on change (leaving the field)
          // instead of on every keystroke. If we were to emit on every keystroke,
          // the very first character the user types would end up as the PK.
          addHandler(data, "change", onInput);
        } else {
          addHandler(data, "update:modelValue", onInput);
        }

        if ('textarea' in data && data.textarea !== false) {
          return _c(VTextarea, data);
        }
        return _c(VTextField, data);

      case 'boolean':
        // TODO: I'd imagine these caveats are no longer true in 3?
        // // v-switch uses 'change' as its event, not 'input'.
        // addHandler(data, "change", onInput);
        // // It also uses 'input-value' instead of 'value' for its value prop.
        // data['input-value'] = data.value;
        // delete data.value;
        
        if ('checkbox' in data && data.checkbox !== false) {
          return _c(VCheckbox, data);
        }
        return _c(VSwitch, data);
      
      case 'enum':
        addHandler(data, "update:modelValue", onInput);
        data.items = valueMeta.typeDef.values
        data['item-text'] = 'displayName';
        data['item-value'] = 'value';
        var slots: any = {};
        if (valueMeta.typeDef.values.some(v => v.description)) {
          slots.item = ({item}: any) => [
            _c(VListItemTitle, [item.displayName]),
            item.description ? _c(VListItemSubtitle, [item.description]) : null /*_c()*/,
          ];
        }
        return _c(VSelect, data, slots);

      case 'file': 
        // v-file-input uses 'change' as its event, not 'input'.
        addHandler(data, "change", onInput);
        return _c(VFileInput, data);

      case 'collection': 
        if (valueMeta.itemType.type == 'file') {
          // This is how static bool flag props are passed in vue.
          // We don't use `props` because `multiple` as an explicit prop
          // for `v-file-input` was only added quite recently.
          // Doing it like this will work in older vuetify versions too.
          data.multiple = "";

          // v-file-input uses 'change' as its event, not 'input'.
          addHandler(data, "change", onInput);
          return _c(VFileInput, data);
        }
    }

    // Fall back to just displaying the value.
    // Note that this probably looks bad on Vuetify 2+ because we're
    // abusing its internal classes to try to emulate the look of a text field,
    // but this hasn't been updated for 2.0.
    if (this.$slots) {
      // TODO: this.$slots might be always defined
      return _c("div", {}, this.$slots)
    }
    return _c('div', {
        staticClass: "input-group input-group--dirty input-group--text-field"
      },[
        _c('label', data.label),
        _c('p', [
          _c(CDisplay, {
            staticClass: "subtitle-1",
            props:{
              value: data.value,
              model: props.model,
              for: props.for
            }
          })
        ])
      ]
    )
  }
});

function addHandler(data: any, eventName: string, handler: Function) {
  eventName = toHandlerKey(eventName);
  const oldValue = data[eventName];
  if (oldValue == null) {
    data[eventName] = handler;
  } else if (typeof oldValue == "function") {
    // TODO: Does this work in vue3?
    data[eventName] = [oldValue, handler];
  } else {
    oldValue.push(handler);
  }
}

