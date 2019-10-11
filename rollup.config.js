import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import svg from 'rollup-plugin-svg'

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      typescript({
        typescript: require('typescript'),
        objectHashIgnoreUnknownHack: true,
      }),
      svg({ base64: true })
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
      {
        file: 'dist/index.js',
        format: 'es',
        banner: '/* eslint-disable */',
      }
    ]
  }
]
