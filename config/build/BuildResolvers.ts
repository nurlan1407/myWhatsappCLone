import type webpack from 'webpack'
import { type BuildOptions } from './types/BuildOptions'

export const buildResolvers = (buildOptions: BuildOptions): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [buildOptions.paths.src, 'node_modules'],
    alias: {},
    mainFiles: ['index']
  }
}
