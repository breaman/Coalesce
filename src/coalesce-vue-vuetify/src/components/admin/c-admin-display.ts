import { defineComponent, PropType, h as _c } from "vue";
import { ForSpec, getValueMeta } from "../c-metadata-component";
import { propDisplay, Model, ClassType, ViewModelCollection } from "coalesce-vue";

import CDisplay from '../display/c-display'

export default defineComponent({
  name: "c-admin-display",
  
  props: {
    for: { required: false, type: [String, Object] as PropType<ForSpec> },
    model: { required: false, type: Object as PropType<Model<ClassType>> },
  },

	render() {
    const props = this.$props;
    const { model } = props;

    if (model == null) {
      // If no model was provided, just display nothing.
      // This isn't an error case - it just means the thing we're trying to display 
      // is `null`-ish, and should be treated the same way that vue would treat {{null}}
      return _c('span');
    }

    const modelMeta = model ? model.$metadata : null;
    let meta = getValueMeta(props.for, modelMeta, this.$coalesce.metadata);
    if (!meta && modelMeta && "displayProp" in modelMeta) {
      meta = modelMeta.displayProp || null;
    }

    if (!meta) {
      throw Error("Provided model has no $metadata property, and no specific value was provided via the 'for' component prop to c-display.");
    }

    if ("params" in meta) {
      throw Error("Cannot display a method");
    }

    if (modelMeta?.type == "model") {
      const pkValue = (model as any)[modelMeta.keyProp.name]

      // Display collection navigations as counts with links to the c-admin-table-page for the collection
      if (pkValue && meta.role == "collectionNavigation" && "foreignKey" in meta) {
        return _c(
          'router-link', {
            props: {
              // Resolve to an href to allow overriding of admin routes in userspace.
              // If we just gave a named raw location, it would always use the coalesce admin route
              // instead of the user-overridden one (that the user overrides by declaring another
              // route with the same path).
              to: this.$router.resolve({ 
                name: 'coalesce-admin-list', 
                params: { type: meta.itemType.typeDef.name },
                query: { ['filter.' + meta.foreignKey.name]: pkValue }
              }).resolved.fullPath
            } 
          },
          // Use `propDisplay` for our formatted count, forcing the count always by preventing enumeration.
          propDisplay(model, meta, { collection: { enumeratedItemsMax: 0 }})
            || (
              ((model as any)[meta.name] as ViewModelCollection<any>)?.$hasLoaded === false
                ? "View"
                : "None"
            )
        )
      }
      
      // Display reference navigations with links to the editor page for the item.
      if (pkValue && meta.role == "referenceNavigation" && "foreignKey" in meta) {
        const fkValue = (model as any)[meta.foreignKey.name]
        if (fkValue) {
          return _c(
            'router-link', {
              props: {
                // Resolve to an href to allow overriding of admin routes in userspace.
                // If we just gave a named raw location, it would always use the coalesce admin route
                // instead of the user-overridden one (that the user overrides by declaring another
                // route with the same path).
                to: this.$router.resolve({ 
                  name: 'coalesce-admin-item', 
                  params: { 
                    type: meta.typeDef.name,
                    id: (model as any)[meta.foreignKey.name]
                  },
                }).resolved.fullPath
              } 
            },
            propDisplay(model, meta) ?? fkValue
          )
        }
      }
    }
    
    return _c(CDisplay, { ...this.$attrs, ...this.$props }, this.$slots);
  }
});
