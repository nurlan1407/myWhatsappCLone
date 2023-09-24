import path from "path";
import {buildWebpackConfig} from "./config/build/BuildWebpackConfig";
import { BuildEnv } from "./config/build/types/BuildOptions";

export default (env:BuildEnv)=>{
    const paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'src','public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }
    const mode = env.mode || "development";
    const PORT = env.port || 3000;
    const isDev = mode === "development";
    return buildWebpackConfig(
        {
            paths: paths,
            mode: mode,
            isDev: isDev,
            port: PORT
        }
    )
}

