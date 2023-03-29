---
title: \@builder.io/qwik-city/middleware/vercel-edge API Reference
---

# **API** @builder.io/qwik-city/middleware/vercel-edge

<h2 id="createqwikcity" data-kind="function" data-kind-label="F"><a aria-hidden="true" tabindex="-1" href="#createqwikcity"><span class="icon icon-link"></span></a>createQwikCity </h2>

```typescript
export declare function createQwikCity(
  opts: QwikCityVercelEdgeOptions
): (request: Request) => Promise<Response>;
```

| Parameter | Type                                                    | Description |
| --------- | ------------------------------------------------------- | ----------- |
| opts      | [QwikCityVercelEdgeOptions](#qwikcityverceledgeoptions) |             |

**Returns:**

(request: Request) =&gt; Promise&lt;Response&gt;

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/vercel-edge/index.ts" target="_blanks">Edit this section</a></p>

<h2 id="platformvercel" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#platformvercel"><span class="icon icon-link"></span></a>PlatformVercel </h2>

```typescript
export interface PlatformVercel
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/vercel-edge/index.ts" target="_blanks">Edit this section</a></p>

<h2 id="qwikcityverceledgeoptions" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#qwikcityverceledgeoptions"><span class="icon icon-link"></span></a>QwikCityVercelEdgeOptions </h2>

```typescript
export interface QwikCityVercelEdgeOptions extends ServerRenderOptions
```

**Extends:** ServerRenderOptions

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/vercel-edge/index.ts" target="_blanks">Edit this section</a></p>