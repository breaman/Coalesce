import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import sourcemaps from "rollup-plugin-sourcemaps";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import vue from "rollup-plugin-vue";
import Components from "unplugin-vue-components/rollup";
import { VuetifyResolver } from "unplugin-vue-components/resolvers";

import pkg from "./package.json";

const sharedPlugins = (exclude) => [
  nodeResolve(),
  vue({
    css: false,
  }),
  typescript({
    typescript: require("typescript"),
    tsconfig: "tsconfig.build.json",
    tsconfigOverride: {
      exclude
    }
  }),
  sourcemaps(),
  postcss({
    extract: "coalesce-vue-vuetify.css",
    use: ["sass"],
    plugins: [autoprefixer()]
  }),
  babel({
    babelHelpers: "bundled",
    extensions: [".js", ".ts", ".vue"],
    plugins: [
      // Needed for vue-cli support, since vue-cli is based on webpack4 and webpack4 can't
      // parse these syntax features. https://github.com/webpack/webpack/issues/10227
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-nullish-coalescing-operator"
    ],
    presets: [
      [
        "@vue/babel-preset-app",
        {
          useBuiltIns: false
        }
      ]
    ]
  })
];

const external = [
  ...Object.keys(pkg.dependencies),
  ...Object.keys(pkg.peerDependencies)
];

export default [
  {
    input: ["src/index.ts", "src/build.ts"],
    plugins: [
      ...sharedPlugins(["src/index.dist.ts"]),
      Components({
        dts: false,
        resolvers: [VuetifyResolver()],
        include: [/\.vue$/, /\.ts$/, /\.vue\?vue/],
      })
    ],
    external,
    output: [
      {
        sourcemap: true,
        dir: "lib/cjs",
        entryFileNames: '[name].js',
        format: "cjs"
      },
      {
        sourcemap: true,
        dir: "lib",
        entryFileNames: '[name].js',
        format: "esm"
      }
    ]
  }
];
