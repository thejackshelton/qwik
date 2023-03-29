---
title: \@builder.io/qwik-city/middleware/cloudflare-pages API Reference
---

# **API** @builder.io/qwik-city/middleware/cloudflare-pages

<h2 id="createqwikcity" data-kind="function" data-kind-label="F"><a aria-hidden="true" tabindex="-1" href="#createqwikcity"><span class="icon icon-link"></span></a>createQwikCity </h2>

```typescript
export declare function createQwikCity(
  opts: QwikCityCloudflarePagesOptions
): ({ request, env, waitUntil, next }: EventPluginContext) => Promise<Response>;
```

| Parameter | Type                                                              | Description |
| --------- | ----------------------------------------------------------------- | ----------- |
| opts      | [QwikCityCloudflarePagesOptions](#qwikcitycloudflarepagesoptions) |             |

**Returns:**

({ request, env, waitUntil, next }: [EventPluginContext](#eventplugincontext)) =&gt; Promise&lt;Response&gt;

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/cloudflare-pages/index.ts" target="_blanks">Edit this section</a></p>

<h2 id="eventplugincontext" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#eventplugincontext"><span class="icon icon-link"></span></a>EventPluginContext </h2>

```typescript
export interface EventPluginContext
```

| Property       | Modifiers | Type                                                                          | Description |
| -------------- | --------- | ----------------------------------------------------------------------------- | ----------- |
| [env](#)       |           | Record&lt;string, any&gt;                                                     |             |
| [next](#)      |           | (input?: Request \| string, init?: RequestInit) =&gt; Promise&lt;Response&gt; |             |
| [request](#)   |           | Request                                                                       |             |
| [waitUntil](#) |           | (promise: Promise&lt;any&gt;) =&gt; void                                      |             |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/cloudflare-pages/index.ts" target="_blanks">Edit this section</a></p>

<h2 id="platformcloudflarepages" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#platformcloudflarepages"><span class="icon icon-link"></span></a>PlatformCloudflarePages </h2>

```typescript
export interface PlatformCloudflarePages
```

| Property  | Modifiers | Type                                               | Description  |
| --------- | --------- | -------------------------------------------------- | ------------ |
| [env?](#) |           | [EventPluginContext](#eventplugincontext)\['env'\] | _(Optional)_ |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/cloudflare-pages/index.ts" target="_blanks">Edit this section</a></p>

<h2 id="qwikcitycloudflarepagesoptions" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#qwikcitycloudflarepagesoptions"><span class="icon icon-link"></span></a>QwikCityCloudflarePagesOptions </h2>

```typescript
export interface QwikCityCloudflarePagesOptions extends ServerRenderOptions
```

**Extends:** ServerRenderOptions

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/cloudflare-pages/index.ts" target="_blanks">Edit this section</a></p>