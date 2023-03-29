---
title: \@builder.io/qwik/testing API Reference
---

# **API** @builder.io/qwik/testing

<h2 id="createdom" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#createdom"><span class="icon icon-link"></span></a>createDOM </h2>

CreatePlatform and CreateDocument

```typescript
createDOM: () =>
  Promise<{
    render: (
      jsxElement: JSXNode
    ) => Promise<import("@builder.io/qwik").RenderResult>;
    screen: HTMLElement;
    userEvent: (
      queryOrElement: string | Element | null,
      eventNameCamel: string,
      eventPayload?: any
    ) => Promise<void>;
  }>;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/testing/library.ts" target="_blanks">Edit this section</a></p>