<template>
  <v-card class="c-admin-editor">
    <v-toolbar
      class="c-admin-editor-page--toolbar"
      dense
      color="primary darken-1"
      dark
    >
      <v-toolbar-title>
        <template v-if="showContent">
          <span v-if="!canEdit">View</span>
          <span v-else-if="!hasPk">Create</span>
          <span v-else>Edit</span>
        </template>
        {{ metadata.displayName }}
      </v-toolbar-title>

      <v-divider class="mx-4 my-0" vertical></v-divider>

      <v-toolbar-title v-if="hasPk" class="hidden-xs-only">
        <c-display :model="model"></c-display>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn @click="model.$load()" text :disabled="!hasPk">
        <v-icon left>fa fa-sync-alt</v-icon>
        <span class="hidden-sm-and-down">Reload</span>
      </v-btn>
    </v-toolbar>

    <v-card-text>
      <v-form ref="form">
        <c-loader-status
          :loaders="{
            [!showContent ? 'no-initial-content' : 'no-error-content']: [
              model.$load
            ],
            '': [model.$save]
          }"
        >
          <template #default>
            <v-row v-for="prop in showProps" :key="prop.name" class="c-admin-editor--row">
              <v-col
                cols="12"
                md="2"
                class="py-0 py-md-3 font-weight-bold text-md-right"
                align-self="start"
              >
                {{ prop.displayName }}
              </v-col>
              <v-col class="py-0">
                <c-input
                  :model="model"
                  :for="prop"
                  v-bind="propInputBinds(prop)"
                  label=""
                  hide-details="auto"
                >
                  <c-admin-display :model="model" :for="prop" />
                </c-input>
              </v-col>
              <v-col
                v-if="prop.role == 'referenceNavigation'"
                class="py-0 flex-grow-0"
              >
                <v-btn
                  class="c-admin-editor--ref-nav-link"
                  outlined
                  color="grey"
                  :disabled="!model[prop.foreignKey.name]"
                  :to="{
                    name: 'coalesce-admin-item',
                    params: {
                      type: prop.typeDef.name,
                      id: model[prop.foreignKey.name]
                    }
                  }"
                >
                  <v-icon class="black--text">fa fa-ellipsis-h</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </template>
        </c-loader-status>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import {
  Model,
  ClassType,
  ViewModel,
  Property,
  ModelType,
  BehaviorFlags,
  HiddenAreas
} from "coalesce-vue";

import CInput from "../input/c-input";
import CAdminDisplay from "./c-admin-display";
import CDisplay from "../display/c-display";

import { isPropReadOnly } from "../../util";

@Component({
  name: "c-admin-editor",
  components: {
    CInput,
    CAdminDisplay,
    CDisplay
  }
})
export default class extends Vue {
  @Prop({ required: true, type: Object })
  public model!: ViewModel<Model<ModelType>>;

  get metadata(): ModelType {
    if (this.model) {
      return this.model.$metadata;
    }
    throw `No metadata available.`;
  }

  get showContent() {
    const model = this.model;
    return (
      // If we have loaded at least once, we're in an edit scenario and the object is loaded.
      model.$load.wasSuccessful ||
      // If we're not loading now, we're in a create scenario.
      !model.$load.isLoading
    );
  }

  get hasPk() {
    return this.model.$primaryKey != null;
  }

  get canEdit() {
    const metadata = this.metadata;
    if (!metadata) return false;

    return (
      (metadata.behaviorFlags &
        (this.hasPk ? BehaviorFlags.Edit : BehaviorFlags.Create)) !=
      0
    );
  }

  propInputBinds(p: Property) {
    let readonly = isPropReadOnly(p, this.model);
    
    return {
      readonly
    };
  }

  get showProps() {
    if (!this.model) return [];

    return Object.values(this.metadata.props).filter(
      (p: Property) =>
        p.hidden === undefined || (p.hidden & HiddenAreas.Edit) == 0
      // && (!p.dontSerialize || p.role == "referenceNavigation" || p.role == "collectionNavigation")
    );
  }

  mounted() {
    (this.$refs.form as any).validate();
  }
}
</script>

<style lang="scss">
.c-admin-editor--ref-nav-link {
  height: 40px !important;
}
.c-admin-editor--row {
  // Center each row so that things are nicely aligned,
  // especially in the case where labels are long enough to have to wrap.
  align-items: center;
  padding: 4px 0;

  // Remove extra padding on the top of v-switch components
  // so they align nicely with other components.
  .v-input--switch,
  .v-input--checkbox {
    margin-top: 0;
    padding-top: 0px;
    td & {
      padding-top: 0;
    }
  }
}
</style>
