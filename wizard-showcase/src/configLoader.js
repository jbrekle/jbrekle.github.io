﻿export async function loadConfig() {
  const params = new URLSearchParams(window.location.search);
  const tenant = params.get("tenant") || "demo";
  if (tenant === "steuerberater") {
    // Dynamically import tenant2 (Steuerberater) config
    const configModule = await import('./configs/tenant2-steuerberater-config.js');
    return configModule.default;
  } else {
    // Default to demo config
    const configModule = await import('./configs/tenant1-demo-config.js');
    return configModule.default;
  }
}
  
