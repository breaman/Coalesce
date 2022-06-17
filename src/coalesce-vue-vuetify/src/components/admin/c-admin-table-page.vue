<template>
  <v-container fluid class="c-admin-table-page">
    <c-admin-table 
      class="c-admin-table-page--table"
      :list="listVM"
      query-bind
    >
    </c-admin-table>
    
    <c-admin-methods 
      class="c-admin-table-page--methods" 
      :model="listVM"
      auto-reload-model
    ></c-admin-methods>
  </v-container>
</template>

<script lang="ts">
import { useMetadataProps } from '../c-metadata-component'
import { ListViewModel, ModelType } from 'coalesce-vue';

import CAdminMethods from './c-admin-methods.vue';
import CAdminTable from './c-admin-table.vue';
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';

export default defineComponent({

  name: 'c-admin-table-page',
  components: {
    CAdminMethods, CAdminTable
  },

  props: {
    type: { required: false, type: String, default: null },
    list: { required: false, type: Object as PropType<ListViewModel> },
  },

  setup() {
    return { ...useMetadataProps() }
  },

  data() {
    let listVM;
    if (this.list) {
      listVM = this.list;
    } else {
      if (!this.type) {
        throw Error("c-admin-table-page: If prop `list` is not provided, `type` is required.")
      } else if (!ListViewModel.typeLookup![this.type]) {
        // TODO: Bake a `getOrThrow` into `typeLookup`.
        throw Error(`No model named ${this.type} is registered to ListViewModel.typeLookup`)
      }
      listVM = new ListViewModel.typeLookup![this.type]
    }

    return {
      listVM
    }
  },

  computed: {
    /** Support for common convention of exposing 'pageTitle' from router-view hosted components. */
    pageTitle() {
      return this.metadata.displayName + " List"
    },
      
    metadata(): ModelType {
      if (this.listVM) {
        return this.listVM.$metadata
      }
      // TODO: this message is bad.
      throw `No metadata available - no list provided, and couldn't create one.`
    }
  }
})
</script>


<style lang="scss">
  .c-admin-table-page {
    .c-admin-table-page--methods {
      margin-top: 30px;
    }
  }
</style>
