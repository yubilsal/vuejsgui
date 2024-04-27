import { defineConfig } from '@vue/cli-service'
export default defineConfig({
  transpileDependencies: true
})

export const devServer = {
  allowedHosts: "all",
  port: 8080,
}


