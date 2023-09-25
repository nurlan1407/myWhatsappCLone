import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { type BuildOptions } from './types/BuildOptions'
export const buildDevServer = (buildOptions: BuildOptions): DevServerConfiguration => {
  return {
    port: buildOptions.port,
    open: true,
    historyApiFallback: true,
    hot: true
  }
}
