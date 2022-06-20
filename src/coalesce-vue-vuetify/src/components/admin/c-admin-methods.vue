
<template>
  <v-toolbar
    class="c-admin-editor-page--toolbar"
    dense color="primary darken-1" dark
  >

    <v-toolbar-title >
      Actions
    </v-toolbar-title>

    <v-divider class="mx-4 my-0" vertical></v-divider>

    <v-toolbar-title v-if="!isStatic">
      <c-display :model="model"></c-display>
    </v-toolbar-title>
  </v-toolbar>
  <v-expansion-panels v-if="methods.length" class="c-methods">
    <v-expansion-panel
      v-for="method in methods"
      :key="method.name"
    >
      <v-expansion-panel-title>
        <div>{{method.displayName}}</div>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <c-admin-method
          :model="model"
          :for="method"
          :autoReloadModel="autoReloadModel"
        >
        </c-admin-method>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>


<script lang="ts">

import { defineComponent } from '@vue/runtime-core';
import { Model, ViewModel, ModelType, ListViewModel } from 'coalesce-vue';
import { PropType } from 'vue';
import CAdminMethod from './c-admin-method.vue'

export default defineComponent({
  name: 'c-admin-methods',
  components: {
    CAdminMethod
  },

  props: {
    model: { required: true, type: Object as PropType<ViewModel<Model<ModelType>> | ListViewModel> },
    autoReloadModel: { required: false, type: Boolean, default: false },
  },

  computed: {
    viewModel(): ViewModel | ListViewModel {
      if (this.model instanceof ViewModel) return this.model;
      if (this.model instanceof ListViewModel) return this.model;
      throw Error("c-method: prop `model` is required, and must be a ViewModel or ListViewModel.");
    },

    metadata() {
      return this.viewModel.$metadata as ModelType;
    },

    isStatic() {
      return this.viewModel instanceof ListViewModel
    },

    methods() {
      if (this.viewModel instanceof ViewModel && !this.viewModel.$primaryKey) {
        return []
      }

      return Object
        .values(this.metadata.methods)
        .filter(m => !!m.isStatic == this.isStatic)
    }
  }
})

</script>

<style lang="scss">
</style>