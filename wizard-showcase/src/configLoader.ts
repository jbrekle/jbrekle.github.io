import { Config } from './configTypes'

export async function loadConfig(): Promise<Config> {
  const params = new URLSearchParams(window.location.search);
  const tenant = params.get("tenant") || "demo";
  // Dynamically import tenant config and cast to Config type.
  const configModule = await import('./configs/tenant-'+tenant+'-config'/* @vite-ignore */);
  //TODO this ^ gives a warning, not sure why but it works and is loaded a HTTP GET at runtime, which is nice, 
  // probably not gets bundled and will fail on PROD. need to learn this magic...
  return configModule.default as Config;
}