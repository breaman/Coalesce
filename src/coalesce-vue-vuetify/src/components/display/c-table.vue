<template>
  <div class="c-table" :class="{ 'c-table--editable': editable }">
    <c-loader-status :loaders="{ 'no-initial-content': [list.$load] }" #default>
      <v-simple-table>
        <thead>
          <tr>
            <th
              v-for="header in headers"
              :key="'header-' + header.value"
              class="text-left"
              :class="{
                sortable: header.sortable
              }"
              @click="header.sortable ? orderByToggle(header.value) : void 0"
            >
              {{ header.text }}
              <v-icon v-if="list.$params.orderBy == header.value">
                fa fa-sort-up
              </v-icon>
              <v-icon
                v-else-if="list.$params.orderByDescending == header.value"
              >
                fa fa-sort-down
              </v-icon>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in list.$items" :key="index">
            <td
              v-for="prop in effectiveProps"
              :key="prop.name"
              :class="['prop-' + prop.name]"
              class="text-xs-left"
            >
              <c-input
                v-if="editable"
                :model="item"
                :for="prop"
                :readonly="isPropReadOnly(prop, item)"
                label=""
                hide-details="auto"
              >
                <c-admin-display v-if="admin" :model="item" :for="prop" />
                <c-display v-else :model="item" :for="prop" />
              </c-input>

              <c-admin-display v-else-if="admin" :model="item" :for="prop" />
              <c-display v-else :model="item" :for="prop" />
            </td>
            <slot name="item.append" :item="item" />
          </tr>
        </tbody>
      </v-simple-table>
    </c-loader-status>
  </div>

  <!-- <v-data-table
    class="c-table"
    v-bind="$attrs"
    :headers="$attrs.headers || headers"
    :items="list.$items"
    :sort-by.sync="sortBy"
    :sort-desc.sync="sortDesc"
    :server-items-length="list.$load.totalCount"
    hide-default-footer
    >
    <template #item="{ item, index }">
      <slot 
        name="item"
        :item="item"
        >
        <c-table-row :item="item" :effectiveProps="effectiveProps" :key="index">
          <template #item.append="{item}">
            <slot name="item.append" :item="item" />
          </template>
        </c-table-row>
      </slot>
    </template>
  </v-data-table> -->
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import {
  Model,
  ClassType,
  ListViewModel,
  Property,
  ModelType,
  HiddenAreas,
  BehaviorFlags,
  ViewModel
} from "coalesce-vue";

import CAdminDisplay from "../admin/c-admin-display";
import CInput from "../input/c-input";

import { isPropReadOnly } from "../../util";

@Component({
  name: "c-table",
  components: {
    CAdminDisplay,
    CInput
  }
})
export default class extends Vue {
  @Prop({ required: true, type: Object })
  public list!: ListViewModel<any, any>;

  @Prop({ required: false, type: Array })
  public props?: Array<string>;

  @Prop({ required: false, type: Boolean })
  public admin?: boolean;

  @Prop({ required: false, type: Boolean })
  public editable?: boolean;

  @Prop({ required: false, type: Array })
  public extraHeaders?: Array<string>;

  // For v-data-table impl.
  // sortBy: string | string[] = '';
  // sortDesc: boolean | boolean[] = false;

  get metadata(): ModelType {
    return this.list.$metadata;
  }

  isPropReadOnly(p: Property, model: ViewModel) {
    return isPropReadOnly(p, model);
  }

  get effectiveProps() {
    if (this.props && this.props.length) {
      return this.props
        .map(propName => this.metadata.props[propName])
        .filter(prop => !!prop);
    }

    return Object.values(this.metadata.props).filter(
      (p) => p.hidden === undefined || (p.hidden & HiddenAreas.List) == 0
    );
  }

  get headers() {
    return [
      ...this.effectiveProps.map(o => ({
        text: o.displayName,
        value: o.name,
        sortable: o.type != "collection",
        align: "left"
      })),
      ...(this.extraHeaders || []).map(h => ({
        text: h,
        value: h,
        sortable: false
      }))
    ];
  }

  // TODO: put orderByToggle on ListViewModel.
  orderByToggle(field: string) {
    const list = this.list;
    const params = list.$params;

    if (params.orderBy == field && !params.orderByDescending) {
      params.orderBy = null;
      params.orderByDescending = field;
    } else if (!params.orderBy && params.orderByDescending == field) {
      params.orderBy = null;
      params.orderByDescending = null;
    } else {
      params.orderBy = field;
      params.orderByDescending = null;
    }
  }

  mounted() {
    // For v-data-table impl
    // this.$watch(() => [this.sortBy, this.sortDesc], () => {
    //     // Always default to null to prevent reloading if this becomes emptystring
    //     // (vuetify will set it to emptystring).
    //     const unwrap = <T>(x: T | T[]) => Array.isArray(x) ? x[0] : x;
    //     const sortBy = unwrap(this.sortBy);
    //     const sortDesc = unwrap(this.sortDesc);
    //     this.list.$params.orderBy = sortDesc
    //       ? null : sortBy;
    //     this.list.$params.orderByDescending = sortDesc
    //       ? sortBy : null
    //   }
    // )
  }
}
</script>

<style lang="scss">
.c-table {
  word-break: initial;
  th,
  td {
    padding: 4px 8px;
    font-size: 12px;
  }
  &.c-table--editable {
    th,
    td {
      padding: 2px 2px !important;
      .v-input__slot {
        margin-bottom: 0px;
      }
    }
    td > *:not(.v-input) {
      padding: 4px 8px;
    }
  }

  th {
    vertical-align: bottom;
    .v-icon {
      font-size: 16px;
    }
  }
}
</style>
