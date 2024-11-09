---
title: \@qwik.dev/qwik-router API Reference
---

# [API](/api) &rsaquo; @qwik.dev/qwik-router

## Action

```typescript
export type Action<
  RETURN,
  INPUT = Record<string, unknown>,
  OPTIONAL extends boolean = true,
> = {
  (): ActionStore<RETURN, INPUT, OPTIONAL>;
};
```

**References:** [ActionStore](#actionstore)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## ActionConstructor

```typescript
export type ActionConstructor = {
  <
    OBJ extends Record<string, any> | void | null,
    VALIDATOR extends TypedDataValidator,
    REST extends [DataValidator, ...DataValidator[]],
  >(
    actionQrl: (
      data: GetValidatorOutputType<VALIDATOR>,
      event: RequestEventAction,
    ) => ValueOrPromise<OBJ>,
    options: {
      readonly id?: string;
      readonly validation: [VALIDATOR, ...REST];
    },
  ): Action<
    StrictUnion<
      | OBJ
      | FailReturn<ValidatorErrorType<GetValidatorInputType<VALIDATOR>>>
      | FailReturn<FailOfRest<REST>>
    >,
    GetValidatorInputType<VALIDATOR>,
    false
  >;
  <
    OBJ extends Record<string, any> | void | null,
    VALIDATOR extends TypedDataValidator,
  >(
    actionQrl: (
      data: GetValidatorOutputType<VALIDATOR>,
      event: RequestEventAction,
    ) => ValueOrPromise<OBJ>,
    options: {
      readonly id?: string;
      readonly validation: [VALIDATOR];
    },
  ): Action<
    StrictUnion<
      OBJ | FailReturn<ValidatorErrorType<GetValidatorInputType<VALIDATOR>>>
    >,
    GetValidatorInputType<VALIDATOR>,
    false
  >;
  <
    OBJ extends Record<string, any> | void | null,
    REST extends [DataValidator, ...DataValidator[]],
  >(
    actionQrl: (
      data: JSONObject,
      event: RequestEventAction,
    ) => ValueOrPromise<OBJ>,
    options: {
      readonly id?: string;
      readonly validation: REST;
    },
  ): Action<StrictUnion<OBJ | FailReturn<FailOfRest<REST>>>>;
  <
    OBJ extends Record<string, any> | void | null,
    VALIDATOR extends TypedDataValidator,
    REST extends [DataValidator, ...DataValidator[]],
  >(
    actionQrl: (
      data: GetValidatorOutputType<VALIDATOR>,
      event: RequestEventAction,
    ) => ValueOrPromise<OBJ>,
    options: VALIDATOR,
    ...rest: REST
  ): Action<
    StrictUnion<
      | OBJ
      | FailReturn<ValidatorErrorType<GetValidatorInputType<VALIDATOR>>>
      | FailReturn<FailOfRest<REST>>
    >,
    GetValidatorInputType<VALIDATOR>,
    false
  >;
  <
    OBJ extends Record<string, any> | void | null,
    VALIDATOR extends TypedDataValidator,
  >(
    actionQrl: (
      data: GetValidatorOutputType<VALIDATOR>,
      event: RequestEventAction,
    ) => ValueOrPromise<OBJ>,
    options: VALIDATOR,
  ): Action<
    StrictUnion<
      OBJ | FailReturn<ValidatorErrorType<GetValidatorInputType<VALIDATOR>>>
    >,
    GetValidatorInputType<VALIDATOR>,
    false
  >;
  <
    OBJ extends Record<string, any> | void | null,
    REST extends [DataValidator, ...DataValidator[]],
  >(
    actionQrl: (
      form: JSONObject,
      event: RequestEventAction,
    ) => ValueOrPromise<OBJ>,
    ...rest: REST
  ): Action<StrictUnion<OBJ | FailReturn<FailOfRest<REST>>>>;
  <OBJ>(
    actionQrl: (
      form: JSONObject,
      event: RequestEventAction,
    ) => ValueOrPromise<OBJ>,
    options?: {
      readonly id?: string;
    },
  ): Action<StrictUnion<OBJ>>;
};
```

**References:** [TypedDataValidator](#typeddatavalidator), [DataValidator](#datavalidator), [GetValidatorOutputType](#getvalidatoroutputtype), [Action](#action), [StrictUnion](#strictunion), [FailReturn](#failreturn), [ValidatorErrorType](#validatorerrortype), [GetValidatorInputType](#getvalidatorinputtype), [FailOfRest](#failofrest), [JSONObject](#jsonobject)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## ActionReturn

```typescript
export type ActionReturn<RETURN> = {
  readonly status?: number;
  readonly value: RETURN;
};
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## ActionStore

```typescript
export type ActionStore<RETURN, INPUT, OPTIONAL extends boolean = true> = {
  readonly actionPath: string;
  readonly isRunning: boolean;
  readonly status?: number;
  readonly formData: FormData | undefined;
  readonly value: RETURN | undefined;
  readonly submit: QRL<
    OPTIONAL extends true
      ? (form?: INPUT | FormData | SubmitEvent) => Promise<ActionReturn<RETURN>>
      : (form: INPUT | FormData | SubmitEvent) => Promise<ActionReturn<RETURN>>
  >;
  readonly submitted: boolean;
};
```

**References:** [ActionReturn](#actionreturn)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## ContentHeading

```typescript
export interface ContentHeading
```

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[id](./router.contentheading.id.md)

</td><td>

`readonly`

</td><td>

string

</td><td>

</td></tr>
<tr><td>

[level](./router.contentheading.level.md)

</td><td>

`readonly`

</td><td>

number

</td><td>

</td></tr>
<tr><td>

[text](./router.contentheading.text.md)

</td><td>

`readonly`

</td><td>

string

</td><td>

</td></tr>
</tbody></table>

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## ContentMenu

```typescript
export interface ContentMenu
```

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[href?](./router.contentmenu.href.md)

</td><td>

`readonly`

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[items?](./router.contentmenu.items.md)

</td><td>

`readonly`

</td><td>

[ContentMenu](#contentmenu)[]

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[text](./router.contentmenu.text.md)

</td><td>

`readonly`

</td><td>

string

</td><td>

</td></tr>
</tbody></table>

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## DataValidator

```typescript
export type DataValidator<T extends Record<string, any> = {}> = {
  validate(ev: RequestEvent, data: unknown): Promise<ValidatorReturn<T>>;
};
```

**References:** [ValidatorReturn](#validatorreturn)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## DocumentHead

```typescript
export type DocumentHead =
  | DocumentHeadValue
  | ((props: DocumentHeadProps) => DocumentHeadValue);
```

**References:** [DocumentHeadValue](#documentheadvalue), [DocumentHeadProps](#documentheadprops)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## DocumentHeadProps

```typescript
export interface DocumentHeadProps extends RouteLocation
```

**Extends:** [RouteLocation](#routelocation)

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[head](./router.documentheadprops.head.md)

</td><td>

`readonly`

</td><td>

[ResolvedDocumentHead](#resolveddocumenthead)

</td><td>

</td></tr>
<tr><td>

[resolveValue](./router.documentheadprops.resolvevalue.md)

</td><td>

`readonly`

</td><td>

ResolveSyncValue

</td><td>

</td></tr>
<tr><td>

[withLocale](./router.documentheadprops.withlocale.md)

</td><td>

`readonly`

</td><td>

&lt;T&gt;(fn: () =&gt; T) =&gt; T

</td><td>

</td></tr>
</tbody></table>

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## DocumentHeadValue

```typescript
export interface DocumentHeadValue<FrontMatter extends Record<string, any> = Record<string, unknown>>
```

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[frontmatter?](./router.documentheadvalue.frontmatter.md)

</td><td>

`readonly`

</td><td>

Readonly&lt;FrontMatter&gt;

</td><td>

_(Optional)_ Arbitrary object containing custom data. When the document head is created from markdown files, the frontmatter attributes that are not recognized as a well-known meta names (such as title, description, author, etc...), are stored in this property.

</td></tr>
<tr><td>

[links?](./router.documentheadvalue.links.md)

</td><td>

`readonly`

</td><td>

readonly [DocumentLink](#documentlink)[]

</td><td>

_(Optional)_ Used to manually append `<link>` elements to the `<head>`.

</td></tr>
<tr><td>

[meta?](./router.documentheadvalue.meta.md)

</td><td>

`readonly`

</td><td>

readonly [DocumentMeta](#documentmeta)[]

</td><td>

_(Optional)_ Used to manually set meta tags in the head. Additionally, the `data` property could be used to set arbitrary data which the `<head>` component could later use to generate `<meta>` tags.

</td></tr>
<tr><td>

[scripts?](./router.documentheadvalue.scripts.md)

</td><td>

`readonly`

</td><td>

readonly [DocumentScript](#documentscript)[]

</td><td>

_(Optional)_ Used to manually append `<script>` elements to the `<head>`.

</td></tr>
<tr><td>

[styles?](./router.documentheadvalue.styles.md)

</td><td>

`readonly`

</td><td>

readonly [DocumentStyle](#documentstyle)[]

</td><td>

_(Optional)_ Used to manually append `<style>` elements to the `<head>`.

</td></tr>
<tr><td>

[title?](./router.documentheadvalue.title.md)

</td><td>

`readonly`

</td><td>

string

</td><td>

_(Optional)_ Sets `document.title`.

</td></tr>
</tbody></table>

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## DocumentLink

```typescript
export interface DocumentLink
```

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[as?](./router.documentlink.as.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[crossorigin?](./router.documentlink.crossorigin.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[disabled?](./router.documentlink.disabled.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[href?](./router.documentlink.href.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[hreflang?](./router.documentlink.hreflang.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[id?](./router.documentlink.id.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[imagesizes?](./router.documentlink.imagesizes.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[imagesrcset?](./router.documentlink.imagesrcset.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[integrity?](./router.documentlink.integrity.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[key?](./router.documentlink.key.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[media?](./router.documentlink.media.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[prefetch?](./router.documentlink.prefetch.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[referrerpolicy?](./router.documentlink.referrerpolicy.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[rel?](./router.documentlink.rel.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[sizes?](./router.documentlink.sizes.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[title?](./router.documentlink.title.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[type?](./router.documentlink.type.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
</tbody></table>

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## DocumentMeta

```typescript
export interface DocumentMeta
```

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[content?](./router.documentmeta.content.md)

</td><td>

`readonly`

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[httpEquiv?](./router.documentmeta.httpequiv.md)

</td><td>

`readonly`

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[itemprop?](./router.documentmeta.itemprop.md)

</td><td>

`readonly`

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[key?](./router.documentmeta.key.md)

</td><td>

`readonly`

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[media?](./router.documentmeta.media.md)

</td><td>

`readonly`

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[name?](./router.documentmeta.name.md)

</td><td>

`readonly`

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[property?](./router.documentmeta.property.md)

</td><td>

`readonly`

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
</tbody></table>

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## DocumentScript

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

```typescript
export interface DocumentScript
```

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[key?](./router.documentscript.key.md)

</td><td>

`readonly`

</td><td>

string

</td><td>

**_(BETA)_** _(Optional)_

</td></tr>
<tr><td>

[props?](./router.documentscript.props.md)

</td><td>

`readonly`

</td><td>

Readonly&lt;QwikIntrinsicElements['script']&gt;

</td><td>

**_(BETA)_** _(Optional)_

</td></tr>
<tr><td>

[script?](./router.documentscript.script.md)

</td><td>

`readonly`

</td><td>

string

</td><td>

**_(BETA)_** _(Optional)_

</td></tr>
</tbody></table>

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## DocumentStyle

```typescript
export interface DocumentStyle
```

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[key?](./router.documentstyle.key.md)

</td><td>

`readonly`

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[props?](./router.documentstyle.props.md)

</td><td>

`readonly`

</td><td>

Readonly&lt;QwikIntrinsicElements['style']&gt;

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[style](./router.documentstyle.style.md)

</td><td>

`readonly`

</td><td>

string

</td><td>

</td></tr>
</tbody></table>

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## FailOfRest

```typescript
export type FailOfRest<REST extends readonly DataValidator[]> =
  REST extends readonly DataValidator<infer ERROR>[] ? ERROR : never;
```

**References:** [DataValidator](#datavalidator)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## FailReturn

```typescript
export type FailReturn<T> = T & Failed;
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## Form

```typescript
Form: <O, I>(
  { action, spaReset, reloadDocument, onSubmit$, ...rest }: FormProps<O, I>,
  key: string | null,
) => import("@qwik.dev/core").JSXOutput;
```

<table><thead><tr><th>

Parameter

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

{ action, spaReset, reloadDocument, onSubmit$, ...rest }

</td><td>

[FormProps](#formprops)&lt;O, I&gt;

</td><td>

</td></tr>
<tr><td>

key

</td><td>

string \| null

</td><td>

</td></tr>
</tbody></table>
**Returns:**

import("@qwik.dev/core").JSXOutput

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/form-component.tsx)

## FormProps

```typescript
export interface FormProps<O, I> extends Omit<QwikJSX.IntrinsicElements['form'], 'action' | 'method'>
```

**Extends:** Omit&lt;QwikJSX.IntrinsicElements['form'], 'action' \| 'method'&gt;

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[action?](./router.formprops.action.md)

</td><td>

</td><td>

[ActionStore](#actionstore)&lt;O, I, true \| false&gt;

</td><td>

_(Optional)_ Reference to the action returned by `action()`.

</td></tr>
<tr><td>

[key?](./router.formprops.key.md)

</td><td>

</td><td>

string \| number \| null

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[onSubmit$?](./router.formprops.onsubmit_.md)

</td><td>

</td><td>

QRLEventHandlerMulti&lt;SubmitEvent, HTMLFormElement&gt; \| undefined

</td><td>

_(Optional)_ Event handler executed right when the form is submitted.

</td></tr>
<tr><td>

[onSubmitCompleted$?](./router.formprops.onsubmitcompleted_.md)

</td><td>

</td><td>

QRLEventHandlerMulti&lt;CustomEvent&lt;[FormSubmitCompletedDetail](#formsubmitsuccessdetail)&lt;O&gt;&gt;, HTMLFormElement&gt; \| undefined

</td><td>

_(Optional)_ Event handler executed right after the action is executed successfully and returns some data.

</td></tr>
<tr><td>

[reloadDocument?](./router.formprops.reloaddocument.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ When `true` the form submission will cause a full page reload, even if SPA mode is enabled and JS is available.

</td></tr>
<tr><td>

[spaReset?](./router.formprops.spareset.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ When `true` all the form inputs will be reset in SPA mode, just like happens in a full page form submission.

Defaults to `false`

</td></tr>
</tbody></table>

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/form-component.tsx)

## FormSubmitSuccessDetail

```typescript
export interface FormSubmitCompletedDetail<T>
```

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[status](./router.formsubmitsuccessdetail.status.md)

</td><td>

</td><td>

number

</td><td>

</td></tr>
<tr><td>

[value](./router.formsubmitsuccessdetail.value.md)

</td><td>

</td><td>

T

</td><td>

</td></tr>
</tbody></table>

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/form-component.tsx)

## GetValidatorInputType

```typescript
export type GetValidatorInputType<VALIDATOR extends TypedDataValidator> =
  VALIDATOR extends ValibotDataValidator<infer TYPE>
    ? v.InferInput<TYPE>
    : VALIDATOR extends ZodDataValidator<infer TYPE>
      ? z.input<TYPE>
      : never;
```

**References:** [TypedDataValidator](#typeddatavalidator)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## GetValidatorOutputType

```typescript
export type GetValidatorOutputType<VALIDATOR extends TypedDataValidator> =
  VALIDATOR extends ValibotDataValidator<infer TYPE>
    ? v.InferOutput<TYPE>
    : VALIDATOR extends ZodDataValidator<infer TYPE>
      ? z.output<TYPE>
      : never;
```

**References:** [TypedDataValidator](#typeddatavalidator)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## GetValidatorType

```typescript
export type GetValidatorType<VALIDATOR extends TypedDataValidator> =
  GetValidatorOutputType<VALIDATOR>;
```

**References:** [TypedDataValidator](#typeddatavalidator), [GetValidatorOutputType](#getvalidatoroutputtype)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## globalAction$

```typescript
globalAction$: ActionConstructor;
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/server-functions.ts)

## JSONObject

```typescript
export type JSONObject = {
  [x: string]: JSONValue;
};
```

**References:** [JSONValue](#jsonvalue)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## JSONValue

```typescript
export type JSONValue =
  | string
  | number
  | boolean
  | {
      [x: string]: JSONValue;
    }
  | Array<JSONValue>;
```

**References:** [JSONValue](#jsonvalue)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## Link

```typescript
Link: import("@qwik.dev/core").Component<LinkProps>;
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/link-component.tsx)

## LinkProps

```typescript
export interface LinkProps extends AnchorAttributes
```

**Extends:** AnchorAttributes

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[prefetch?](./router.linkprops.prefetch.md)

</td><td>

</td><td>

boolean \| 'js'

</td><td>

_(Optional)_ \*\*Defaults to \_true\_.\*\*

Whether Qwik should prefetch and cache the target page of this \*\*`Link`\*\*, this includes invoking any \*\*`routeLoader$`\*\*, \*\*`onGet`\*\*, etc.

This \*\*improves UX performance\*\* for client-side (\*\*SPA\*\*) navigations.

Prefetching occurs when a the Link enters the viewport in production (\*\*`on:qvisibile`\*\*), or with \*\*`mouseover`/`focus`\*\* during dev.

Prefetching will not occur if the user has the \*\*data saver\*\* setting enabled.

Setting this value to \*\*`"js"`\*\* will prefetch only javascript bundles required to render this page on the client, \*\*`false`\*\* will disable prefetching altogether.

</td></tr>
<tr><td>

[reload?](./router.linkprops.reload.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[replaceState?](./router.linkprops.replacestate.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[scroll?](./router.linkprops.scroll.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_

</td></tr>
</tbody></table>

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/link-component.tsx)

## Loader_2

```typescript
export type Loader<RETURN> = {
  (): LoaderSignal<RETURN>;
};
```

**References:** [LoaderSignal](#loadersignal)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## LoaderSignal

```typescript
export type LoaderSignal<TYPE> = TYPE extends () => ValueOrPromise<
  infer VALIDATOR
>
  ? ReadonlySignal<ValueOrPromise<VALIDATOR>>
  : ReadonlySignal<TYPE>;
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## MenuData

```typescript
export type MenuData = [pathname: string, menuLoader: MenuModuleLoader];
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## NavigationType

```typescript
export type NavigationType = "initial" | "form" | "link" | "popstate";
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## omitProps

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Creates a new object from `obj` by omitting a set of `keys`.

```typescript
export declare function omitProps<T, KEYS extends keyof T>(
  obj: T,
  keys: KEYS[],
): Omit<T, KEYS>;
```

<table><thead><tr><th>

Parameter

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

obj

</td><td>

T

</td><td>

</td></tr>
<tr><td>

keys

</td><td>

KEYS[]

</td><td>

</td></tr>
</tbody></table>
**Returns:**

Omit&lt;T, KEYS&gt;

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/typed-routes.ts)

## PageModule

```typescript
export interface PageModule extends RouteModule
```

**Extends:** RouteModule

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[default](./router.pagemodule.default.md)

</td><td>

`readonly`

</td><td>

unknown

</td><td>

</td></tr>
<tr><td>

[head?](./router.pagemodule.head.md)

</td><td>

`readonly`

</td><td>

ContentModuleHead

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[headings?](./router.pagemodule.headings.md)

</td><td>

`readonly`

</td><td>

[ContentHeading](#contentheading)[]

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[onStaticGenerate?](./router.pagemodule.onstaticgenerate.md)

</td><td>

`readonly`

</td><td>

[StaticGenerateHandler](#staticgeneratehandler)

</td><td>

_(Optional)_

</td></tr>
</tbody></table>

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## PathParams

```typescript
export declare type PathParams = Record<string, string>;
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## PreventNavigateCallback

```typescript
export type PreventNavigateCallback = (
  url?: number | URL,
) => ValueOrPromise<boolean>;
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## QWIK_CITY_SCROLLER

> Warning: This API is now obsolete.
>
> Use `QWIK_ROUTER_SCROLLER` instead (will be removed in V3)

```typescript
QWIK_CITY_SCROLLER = "_qCityScroller";
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/qwik-router-component.tsx)

## QWIK_ROUTER_SCROLLER

```typescript
QWIK_ROUTER_SCROLLER = "_qRouterScroller";
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/qwik-router-component.tsx)

## QwikCityMockProps

> Warning: This API is now obsolete.
>
> Use `QwikRouterMockProps` instead. will be removed in V3

```typescript
export type QwikCityMockProps = QwikRouterMockProps;
```

**References:** [QwikRouterMockProps](#qwikroutermockprops)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/qwik-router-component.tsx)

## QwikCityMockProvider

> Warning: This API is now obsolete.
>
> Use `QwikRouterMockProvider` instead. Will be removed in V3

```typescript
QwikCityMockProvider: import("@qwik.dev/core").Component<QwikRouterMockProps>;
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/qwik-router-component.tsx)

## QwikCityPlan

> Warning: This API is now obsolete.
>
> Use `QwikRouterConfig` instead. Will be removed in V3.

```typescript
export type QwikCityPlan = QwikRouterConfig;
```

**References:** [QwikRouterConfig](#qwikrouterconfig)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## QwikCityProps

> Warning: This API is now obsolete.
>
> Use `QwikRouterProps` instead. will be removed in V3

```typescript
export type QwikCityProps = QwikRouterProps;
```

**References:** [QwikRouterProps](#qwikrouterprops)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/qwik-router-component.tsx)

## QwikCityProvider

> Warning: This API is now obsolete.
>
> Use `QwikRouterProvider` instead. will be removed in V3

```typescript
QwikCityProvider: import("@qwik.dev/core").Component<QwikRouterProps>;
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/qwik-router-component.tsx)

## QwikRouterConfig

```typescript
export interface QwikRouterConfig
```

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[basePathname?](./router.qwikrouterconfig.basepathname.md)

</td><td>

`readonly`

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[cacheModules?](./router.qwikrouterconfig.cachemodules.md)

</td><td>

`readonly`

</td><td>

boolean

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[menus?](./router.qwikrouterconfig.menus.md)

</td><td>

`readonly`

</td><td>

[MenuData](#menudata)[]

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[routes](./router.qwikrouterconfig.routes.md)

</td><td>

`readonly`

</td><td>

[RouteData](#routedata)[]

</td><td>

</td></tr>
<tr><td>

[serverPlugins?](./router.qwikrouterconfig.serverplugins.md)

</td><td>

`readonly`

</td><td>

RouteModule[]

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[trailingSlash?](./router.qwikrouterconfig.trailingslash.md)

</td><td>

`readonly`

</td><td>

boolean

</td><td>

_(Optional)_

</td></tr>
</tbody></table>

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## QwikRouterMockProps

```typescript
export interface QwikRouterMockProps
```

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[goto?](./router.qwikroutermockprops.goto.md)

</td><td>

</td><td>

[RouteNavigate](#routenavigate)

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[params?](./router.qwikroutermockprops.params.md)

</td><td>

</td><td>

Record&lt;string, string&gt;

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[url?](./router.qwikroutermockprops.url.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
</tbody></table>

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/qwik-router-component.tsx)

## QwikRouterMockProvider

```typescript
QwikRouterMockProvider: import("@qwik.dev/core").Component<QwikRouterMockProps>;
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/qwik-router-component.tsx)

## QwikRouterProps

```typescript
export interface QwikRouterProps
```

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[viewTransition?](./router.qwikrouterprops.viewtransition.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ Enable the ViewTransition API

Default: `true`

</td></tr>
</tbody></table>

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/qwik-router-component.tsx)

## QwikRouterProvider

```typescript
QwikRouterProvider: import("@qwik.dev/core").Component<QwikRouterProps>;
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/qwik-router-component.tsx)

## ResolvedDocumentHead

```typescript
export type ResolvedDocumentHead<
  FrontMatter extends Record<string, any> = Record<string, unknown>,
> = Required<DocumentHeadValue<FrontMatter>>;
```

**References:** [DocumentHeadValue](#documentheadvalue)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## routeAction$

```typescript
routeAction$: ActionConstructor;
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/server-functions.ts)

## RouteData

```typescript
export type RouteData =
  | [routeName: string, loaders: ModuleLoader[]]
  | [
      routeName: string,
      loaders: ModuleLoader[],
      originalPathname: string,
      routeBundleNames: string[],
    ];
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## routeLoader$

```typescript
routeLoader$: LoaderConstructor;
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/server-functions.ts)

## RouteLocation

```typescript
export interface RouteLocation
```

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[isNavigating](./router.routelocation.isnavigating.md)

</td><td>

`readonly`

</td><td>

boolean

</td><td>

</td></tr>
<tr><td>

[params](./router.routelocation.params.md)

</td><td>

`readonly`

</td><td>

Readonly&lt;Record&lt;string, string&gt;&gt;

</td><td>

</td></tr>
<tr><td>

[prevUrl](./router.routelocation.prevurl.md)

</td><td>

`readonly`

</td><td>

URL \| undefined

</td><td>

</td></tr>
<tr><td>

[url](./router.routelocation.url.md)

</td><td>

`readonly`

</td><td>

URL

</td><td>

</td></tr>
</tbody></table>

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## RouteNavigate

```typescript
export type RouteNavigate = QRL<
  (
    path?: string | number | URL,
    options?:
      | {
          type?: Exclude<NavigationType, "initial">;
          forceReload?: boolean;
          replaceState?: boolean;
          scroll?: boolean;
        }
      | boolean,
  ) => Promise<void>
>;
```

**References:** [NavigationType](#navigationtype)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## RouterOutlet

```typescript
RouterOutlet: import("@qwik.dev/core").Component<unknown>;
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/router-outlet-component.tsx)

## server$

```typescript
server$: <T extends ServerFunction>(
  qrl: T,
  options?: ServerConfig | undefined,
) => ServerQRL<T>;
```

<table><thead><tr><th>

Parameter

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

qrl

</td><td>

T

</td><td>

</td></tr>
<tr><td>

options

</td><td>

ServerConfig \| undefined

</td><td>

_(Optional)_

</td></tr>
</tbody></table>
**Returns:**

[ServerQRL](#serverqrl)&lt;T&gt;

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/server-functions.ts)

## ServerFunction

```typescript
export type ServerFunction = {
  (this: RequestEventBase, ...args: any[]): any;
  options?: ServerConfig;
};
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## ServerQRL

You can pass an AbortSignal as the first argument of a `server$` function and it will use it to abort the fetch when fired.

```typescript
export type ServerQRL<T extends ServerFunction> = QRL<
  | ((abort: AbortSignal, ...args: Parameters<T>) => ReturnType<T>)
  | ((...args: Parameters<T>) => ReturnType<T>)
>;
```

**References:** [ServerFunction](#serverfunction)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## ServiceWorkerRegister

```typescript
ServiceWorkerRegister: (props: { nonce?: string }) =>
  import("@qwik.dev/core").JSXNode<"script">;
```

<table><thead><tr><th>

Parameter

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

props

</td><td>

{ nonce?: string; }

</td><td>

</td></tr>
</tbody></table>
**Returns:**

import("@qwik.dev/core").JSXNode&lt;"script"&gt;

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/sw-component.tsx)

## StaticGenerate

```typescript
export interface StaticGenerate
```

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[params?](./router.staticgenerate.params.md)

</td><td>

</td><td>

[PathParams](#pathparams)[]

</td><td>

_(Optional)_

</td></tr>
</tbody></table>

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## StaticGenerateHandler

```typescript
export type StaticGenerateHandler = ({
  env,
}: {
  env: EnvGetter;
}) => Promise<StaticGenerate> | StaticGenerate;
```

**References:** [StaticGenerate](#staticgenerate)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## StrictUnion

```typescript
export type StrictUnion<T> = Prettify<StrictUnionHelper<T, T>>;
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## TypedDataValidator

```typescript
export type TypedDataValidator = ValibotDataValidator | ZodDataValidator;
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## untypedAppUrl

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

```typescript
untypedAppUrl: (
  route: string,
  params?: Record<string, string>,
  paramsPrefix?: string,
) => string;
```

<table><thead><tr><th>

Parameter

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

route

</td><td>

string

</td><td>

</td></tr>
<tr><td>

params

</td><td>

Record&lt;string, string&gt;

</td><td>

_(Optional)_

</td></tr>
<tr><td>

paramsPrefix

</td><td>

string

</td><td>

_(Optional)_

</td></tr>
</tbody></table>
**Returns:**

string

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/typed-routes.ts)

## useContent

```typescript
useContent: () => import("./types").ContentState;
```

**Returns:**

import("./types").ContentState

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/use-functions.ts)

## useDocumentHead

Returns the document head for the current page. The generic type describes the front matter.

```typescript
useDocumentHead: <
  FrontMatter extends Record<string, unknown> = Record<string, any>,
>() => Required<ResolvedDocumentHead<FrontMatter>>;
```

**Returns:**

Required&lt;[ResolvedDocumentHead](#resolveddocumenthead)&lt;FrontMatter&gt;&gt;

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/use-functions.ts)

## useLocation

```typescript
useLocation: () => RouteLocation;
```

**Returns:**

[RouteLocation](#routelocation)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/use-functions.ts)

## useNavigate

```typescript
useNavigate: () => RouteNavigate;
```

**Returns:**

[RouteNavigate](#routenavigate)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/use-functions.ts)

## usePreventNavigate$

Prevent navigation attempts. This hook registers a callback that will be called before SPA or browser navigation.

Return `true` to prevent navigation.

\#### SPA Navigation

For Single-Page-App (SPA) navigation (via `<Link />`, `const nav = useNavigate()`, and browser backwards/forwards inside SPA history), the callback will be provided with the target, either a URL or a number. It will only be a number if `nav(number)` was called to navigate forwards or backwards in SPA history.

If you return a Promise, the navigation will be blocked until the promise resolves.

This can be used to show a nice dialog to the user, and wait for the user to confirm, or to record the url, prevent the navigation, and navigate there later via `nav(url)`.

\#### Browser Navigation

However, when the user navigates away by clicking on a regular `<a />`, reloading, or moving backwards/forwards outside SPA history, this callback will not be awaited. This is because the browser does not provide a way to asynchronously prevent these navigations.

In this case, returning returning `true` will tell the browser to show a confirmation dialog, which cannot be customized. You are also not able to show your own `window.confirm()` dialog during the callback, the browser won't allow it. If you return a Promise, it will be considered as `true`.

When the callback is called from the browser, no url will be provided. Use this to know whether you can show a dialog or just return `true` to prevent the navigation.

```typescript
usePreventNavigate$: (qrl: PreventNavigateCallback) => void
```

<table><thead><tr><th>

Parameter

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

qrl

</td><td>

[PreventNavigateCallback](#preventnavigatecallback)

</td><td>

</td></tr>
</tbody></table>
**Returns:**

void

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/use-functions.ts)

## valibot$

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

```typescript
valibot$: ValibotConstructor;
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/server-functions.ts)

## validator$

```typescript
validator$: ValidatorConstructor;
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/server-functions.ts)

## ValidatorErrorKeyDotNotation

```typescript
export type ValidatorErrorKeyDotNotation<T, Prefix extends string = ""> =
  IsAny<T> extends true
    ? never
    : T extends object
      ? {
          [K in keyof T & string]: IsAny<T[K]> extends true
            ? never
            : T[K] extends (infer U)[]
              ? IsAny<U> extends true
                ? never
                : U extends object
                  ?
                      | `${Prefix}${K}[]`
                      | ValidatorErrorKeyDotNotation<U, `${Prefix}${K}[].`>
                  : `${Prefix}${K}[]`
              : T[K] extends object
                ? ValidatorErrorKeyDotNotation<T[K], `${Prefix}${K}.`>
                : `${Prefix}${K}`;
        }[keyof T & string]
      : never;
```

**References:** [ValidatorErrorKeyDotNotation](#validatorerrorkeydotnotation)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## ValidatorErrorType

```typescript
export type ValidatorErrorType<T, U = string> = {
  formErrors: U[];
  fieldErrors: Partial<{
    [K in ValidatorErrorKeyDotNotation<T>]: K extends `${infer _Prefix}[]${infer _Suffix}`
      ? U[]
      : U;
  }>;
};
```

**References:** [ValidatorErrorKeyDotNotation](#validatorerrorkeydotnotation)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## ValidatorReturn

```typescript
export type ValidatorReturn<T extends Record<string, any> = {}> =
  | ValidatorReturnSuccess
  | ValidatorReturnFail<T>;
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)

## zod$

```typescript
zod$: ZodConstructor;
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/server-functions.ts)

## ZodConstructor

```typescript
export type ZodConstructor = {
  <T extends z.ZodRawShape>(schema: T): ZodDataValidator<z.ZodObject<T>>;
  <T extends z.ZodRawShape>(
    schema: (zod: typeof z.z, ev: RequestEvent) => T,
  ): ZodDataValidator<z.ZodObject<T>>;
  <T extends z.Schema>(schema: T): ZodDataValidator<T>;
  <T extends z.Schema>(
    schema: (zod: typeof z.z, ev: RequestEvent) => T,
  ): ZodDataValidator<T>;
};
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/runtime/src/types.ts)