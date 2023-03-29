---
title: \@builder.io/qwik-city API Reference
---

# **API** @builder.io/qwik-city

<h2 id="action" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#action"><span class="icon icon-link"></span></a>Action </h2>

```typescript
export interface Action<RETURN, INPUT = Record<string, any>, OPTIONAL extends boolean = true>
```

| Method               | Description |
| -------------------- | ----------- |
| [use()](#action-use) |             |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="action_" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#action_"><span class="icon icon-link"></span></a>action$ </h2>

> Warning: This API is now obsolete.
>
> - use `globalAction$()` instead

```typescript
action$: ActionConstructor;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts" target="_blanks">Edit this section</a></p>

<h2 id="actionconstructor" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#actionconstructor"><span class="icon icon-link"></span></a>ActionConstructor </h2>

```typescript
export interface ActionConstructor
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="actionoptions" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#actionoptions"><span class="icon icon-link"></span></a>ActionOptions </h2>

```typescript
export interface ActionOptions
```

| Property         | Modifiers             | Type              | Description  |
| ---------------- | --------------------- | ----------------- | ------------ |
| [id?](#)         | <code>readonly</code> | string            | _(Optional)_ |
| [validation?](#) | <code>readonly</code> | DataValidator\[\] | _(Optional)_ |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="actionoptionswithvalidation" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#actionoptionswithvalidation"><span class="icon icon-link"></span></a>ActionOptionsWithValidation </h2>

```typescript
export interface ActionOptionsWithValidation<B extends TypedDataValidator = TypedDataValidator>
```

| Property        | Modifiers             | Type                                | Description  |
| --------------- | --------------------- | ----------------------------------- | ------------ |
| [id?](#)        | <code>readonly</code> | string                              | _(Optional)_ |
| [validation](#) | <code>readonly</code> | \[val: B, ...a: DataValidator\[\]\] |              |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="actionqrl" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#actionqrl"><span class="icon icon-link"></span></a>actionQrl </h2>

> Warning: This API is now obsolete.
>
> - use `globalAction$()` instead

```typescript
actionQrl: ActionConstructorQRL;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts" target="_blanks">Edit this section</a></p>

<h2 id="actionstore" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#actionstore"><span class="icon icon-link"></span></a>ActionStore </h2>

```typescript
export interface ActionStore<RETURN, INPUT, OPTIONAL extends boolean = true>
```

| Property        | Modifiers             | Type   | Description                                                                                                    |
| --------------- | --------------------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| [actionPath](#) | <code>readonly</code> | string | <p>It's the "action" path that a native <code>&lt;form&gt;</code> should have in order to call the action.</p> |

```tsx
<form action={action.actionPath} />
```

<p>Most of the time this property should not be used directly, instead use the <code>Form</code> component:</p>
```tsx
import {action$, Form} from '@builder.io/qwik-city';

export const useAddUser = action$(() => { ... });

export default component$(() => {
const action = useAddUser();
return (
<Form action={action}/>
);
});

````
 |
|  [formData](#) | <code>readonly</code> | FormData \| undefined | <p>When calling an action through a <code>&lt;form&gt;</code>, this property contains the previously submitted <code>FormData</code>.</p><p>This is useful to keep the filled form data even after a full page reload.</p><p>It's <code>undefined</code> before the action is first called.</p> |
|  [isRunning](#) | <code>readonly</code> | boolean | <p>Reactive property that becomes <code>true</code> only in the browser, when a form is submitted and switched back to false when the action finish, ie, it describes if the action is actively running.</p><p>This property is specially useful to disable the submit button while the action is processing, to prevent multiple submissions, and to inform visually to the user that the action is actively running.</p><p>It will be always <code>false</code> in the server, and only becomes <code>true</code> briefly while the action is running.</p> |
|  [run](#) | <code>readonly</code> | QRL&lt;OPTIONAL extends true ? (form?: INPUT \| FormData \| SubmitEvent) =&gt; Promise&lt;ActionReturn&lt;RETURN&gt;&gt; : (form: INPUT \| FormData \| SubmitEvent) =&gt; Promise&lt;ActionReturn&lt;RETURN&gt;&gt;&gt; |  |
|  [status?](#) | <code>readonly</code> | number | <p>_(Optional)_ Returned HTTP status code of the action after its last execution.</p><p>It's <code>undefined</code> before the action is first called.</p> |
|  [submit](#) | <code>readonly</code> | QRL&lt;OPTIONAL extends true ? (form?: INPUT \| FormData \| SubmitEvent) =&gt; Promise&lt;ActionReturn&lt;RETURN&gt;&gt; : (form: INPUT \| FormData \| SubmitEvent) =&gt; Promise&lt;ActionReturn&lt;RETURN&gt;&gt;&gt; | Method to execute the action programmatically from the browser. Ie, instead of using a <code>&lt;form&gt;</code>, a 'click' handle can call the <code>run()</code> method of the action in order to execute the action in the server. |
|  [value](#) | <code>readonly</code> | RETURN \| undefined | <p>Returned successful data of the action. This reactive property will contain the data returned inside the <code>action$</code> function.</p><p>It's <code>undefined</code> before the action is first called.</p> |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="content" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#content"><span class="icon icon-link"></span></a>Content </h2>

> Warning: This API is now obsolete.
>
> Please use `RouterOutlet` instead.
>


```typescript
Content: import("@builder.io/qwik").Component<{}>
````

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/router-outlet-component.ts" target="_blanks">Edit this section</a></p>

<h2 id="contentheading" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#contentheading"><span class="icon icon-link"></span></a>ContentHeading </h2>

```typescript
export interface ContentHeading
```

| Property   | Modifiers             | Type   | Description |
| ---------- | --------------------- | ------ | ----------- |
| [id](#)    | <code>readonly</code> | string |             |
| [level](#) | <code>readonly</code> | number |             |
| [text](#)  | <code>readonly</code> | string |             |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="contentmenu" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#contentmenu"><span class="icon icon-link"></span></a>ContentMenu </h2>

```typescript
export interface ContentMenu
```

| Property    | Modifiers             | Type                            | Description  |
| ----------- | --------------------- | ------------------------------- | ------------ |
| [href?](#)  | <code>readonly</code> | string                          | _(Optional)_ |
| [items?](#) | <code>readonly</code> | [ContentMenu](#contentmenu)\[\] | _(Optional)_ |
| [text](#)   | <code>readonly</code> | string                          |              |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="documenthead" data-kind="type-alias" data-kind-label="T"><a aria-hidden="true" tabindex="-1" href="#documenthead"><span class="icon icon-link"></span></a>DocumentHead </h2>

```typescript
export type DocumentHead =
  | DocumentHeadValue
  | ((props: DocumentHeadProps) => DocumentHeadValue);
```

**References:** [DocumentHeadValue](#documentheadvalue), [DocumentHeadProps](#documentheadprops)

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="documentheadprops" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#documentheadprops"><span class="icon icon-link"></span></a>DocumentHeadProps </h2>

```typescript
export interface DocumentHeadProps extends RouteLocation
```

**Extends:** [RouteLocation](#routelocation)

| Property          | Modifiers             | Type                                          | Description |
| ----------------- | --------------------- | --------------------------------------------- | ----------- |
| [head](#)         | <code>readonly</code> | [ResolvedDocumentHead](#resolveddocumenthead) |             |
| [resolveValue](#) | <code>readonly</code> | ResolveSyncValue                              |             |
| [withLocale](#)   | <code>readonly</code> | &lt;T&gt;(fn: () =&gt; T) =&gt; T             |             |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="documentheadvalue" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#documentheadvalue"><span class="icon icon-link"></span></a>DocumentHeadValue </h2>

```typescript
export interface DocumentHeadValue
```

| Property          | Modifiers             | Type                                         | Description                                                                                                                                                                                                                                                           |
| ----------------- | --------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [frontmatter?](#) | <code>readonly</code> | Readonly&lt;Record&lt;string, any&gt;&gt;    | _(Optional)_ Arbitrary object containing custom data. When the document head is created from markdown files, the frontmatter attributes that are not recognized as a well-known meta names (such as title, description, author, etc...), are stored in this property. |
| [links?](#)       | <code>readonly</code> | readonly [DocumentLink](#documentlink)\[\]   | _(Optional)_ Used to manually append <code>&lt;link&gt;</code> elements to the <code>&lt;head&gt;</code>.                                                                                                                                                             |
| [meta?](#)        | <code>readonly</code> | readonly [DocumentMeta](#documentmeta)\[\]   | _(Optional)_ Used to manually set meta tags in the head. Additionally, the <code>data</code> property could be used to set arbitrary data which the <code>&lt;head&gt;</code> component could later use to generate <code>&lt;meta&gt;</code> tags.                   |
| [styles?](#)      | <code>readonly</code> | readonly [DocumentStyle](#documentstyle)\[\] | _(Optional)_ Used to manually append <code>&lt;style&gt;</code> elements to the <code>&lt;head&gt;</code>.                                                                                                                                                            |
| [title?](#)       | <code>readonly</code> | string                                       | _(Optional)_ Sets <code>document.title</code>.                                                                                                                                                                                                                        |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="documentlink" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#documentlink"><span class="icon icon-link"></span></a>DocumentLink </h2>

```typescript
export interface DocumentLink
```

| Property             | Modifiers | Type    | Description  |
| -------------------- | --------- | ------- | ------------ |
| [as?](#)             |           | string  | _(Optional)_ |
| [crossorigin?](#)    |           | string  | _(Optional)_ |
| [disabled?](#)       |           | boolean | _(Optional)_ |
| [href?](#)           |           | string  | _(Optional)_ |
| [hreflang?](#)       |           | string  | _(Optional)_ |
| [id?](#)             |           | string  | _(Optional)_ |
| [imagesizes?](#)     |           | string  | _(Optional)_ |
| [imagesrcset?](#)    |           | string  | _(Optional)_ |
| [integrity?](#)      |           | string  | _(Optional)_ |
| [key?](#)            |           | string  | _(Optional)_ |
| [media?](#)          |           | string  | _(Optional)_ |
| [prefetch?](#)       |           | string  | _(Optional)_ |
| [referrerpolicy?](#) |           | string  | _(Optional)_ |
| [rel?](#)            |           | string  | _(Optional)_ |
| [sizes?](#)          |           | string  | _(Optional)_ |
| [title?](#)          |           | string  | _(Optional)_ |
| [type?](#)           |           | string  | _(Optional)_ |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="documentmeta" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#documentmeta"><span class="icon icon-link"></span></a>DocumentMeta </h2>

```typescript
export interface DocumentMeta
```

| Property        | Modifiers             | Type   | Description  |
| --------------- | --------------------- | ------ | ------------ |
| [content?](#)   | <code>readonly</code> | string | _(Optional)_ |
| [httpEquiv?](#) | <code>readonly</code> | string | _(Optional)_ |
| [itemprop?](#)  | <code>readonly</code> | string | _(Optional)_ |
| [key?](#)       | <code>readonly</code> | string | _(Optional)_ |
| [name?](#)      | <code>readonly</code> | string | _(Optional)_ |
| [property?](#)  | <code>readonly</code> | string | _(Optional)_ |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="documentstyle" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#documentstyle"><span class="icon icon-link"></span></a>DocumentStyle </h2>

```typescript
export interface DocumentStyle
```

| Property    | Modifiers             | Type                                              | Description  |
| ----------- | --------------------- | ------------------------------------------------- | ------------ |
| [key?](#)   | <code>readonly</code> | string                                            | _(Optional)_ |
| [props?](#) | <code>readonly</code> | Readonly&lt;{ \[propName: string\]: string; }&gt; | _(Optional)_ |
| [style](#)  | <code>readonly</code> | string                                            |              |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="endpointhandler" data-kind="type-alias" data-kind-label="T"><a aria-hidden="true" tabindex="-1" href="#endpointhandler"><span class="icon icon-link"></span></a>EndpointHandler </h2>

> Warning: This API is now obsolete.
>
> Please use `RequestHandler` instead.

```typescript
export type EndpointHandler<BODY = unknown> = RequestHandler<BODY>;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="failreturn" data-kind="type-alias" data-kind-label="T"><a aria-hidden="true" tabindex="-1" href="#failreturn"><span class="icon icon-link"></span></a>FailReturn </h2>

```typescript
export type FailReturn<T> = T & {
  failed: true;
};
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="form" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#form"><span class="icon icon-link"></span></a>Form </h2>

```typescript
Form: <O, I>(
  { action, spaReset, reloadDocument, onSubmit$, ...rest }: FormProps<O, I>,
  key: string | null
) => QwikJSX.Element;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/form-component.tsx" target="_blanks">Edit this section</a></p>

<h2 id="formprops" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#formprops"><span class="icon icon-link"></span></a>FormProps </h2>

```typescript
export interface FormProps<O, I> extends Omit<QwikJSX.IntrinsicElements['form'], 'action' | 'method'>
```

**Extends:** Omit&lt;QwikJSX.IntrinsicElements\['form'\], 'action' \| 'method'&gt;

| Property                 | Modifiers | Type                                                                                                                                               | Description                                                                                                                                                                      |
| ------------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [action?](#)             |           | [ActionStore](#actionstore)&lt;O, I, true \| false&gt;                                                                                             | _(Optional)_ Reference to the action returned by <code>action()</code>.                                                                                                          |
| [key?](#)                |           | string \| number \| null                                                                                                                           | _(Optional)_                                                                                                                                                                     |
| [onSubmit$?](#)          |           | (event: Event, form: HTMLFormElement) =&gt; ValueOrPromise&lt;void&gt;                                                                             | _(Optional)_ Event handler executed right when the form is submitted.                                                                                                            |
| [onSubmitCompleted$?](#) |           | (event: CustomEvent&lt;[FormSubmitCompletedDetail](#formsubmitsuccessdetail)&lt;O&gt;&gt;, form: HTMLFormElement) =&gt; ValueOrPromise&lt;void&gt; | _(Optional)_ Event handler executed right after the action is executed successfully and returns some data.                                                                       |
| [reloadDocument?](#)     |           | boolean                                                                                                                                            | _(Optional)_ When <code>true</code> the form submission will cause a full page reload, even if SPA mode is enabled and JS is available.                                          |
| [spaReset?](#)           |           | boolean                                                                                                                                            | <p>_(Optional)_ When <code>true</code> all the form inputs will be reset in SPA mode, just like happens in a full page form submission.</p><p>Defaults to <code>false</code></p> |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/form-component.tsx" target="_blanks">Edit this section</a></p>

<h2 id="formsubmitsuccessdetail" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#formsubmitsuccessdetail"><span class="icon icon-link"></span></a>FormSubmitSuccessDetail </h2>

```typescript
export interface FormSubmitCompletedDetail<T>
```

| Property    | Modifiers | Type   | Description |
| ----------- | --------- | ------ | ----------- |
| [status](#) |           | number |             |
| [value](#)  |           | T      |             |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/form-component.tsx" target="_blanks">Edit this section</a></p>

<h2 id="globalaction_" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#globalaction_"><span class="icon icon-link"></span></a>globalAction$ </h2>

```typescript
globalAction$: ActionConstructor;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts" target="_blanks">Edit this section</a></p>

<h2 id="globalactionqrl" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#globalactionqrl"><span class="icon icon-link"></span></a>globalActionQrl </h2>

```typescript
globalActionQrl: ActionConstructorQRL;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts" target="_blanks">Edit this section</a></p>

<h2 id="html" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#html"><span class="icon icon-link"></span></a>Html </h2>

> Warning: This API is now obsolete.
>
> - The "Html" component has been renamed to "QwikCityProvider".

```typescript
Html: import("@builder.io/qwik").Component<QwikCityProps>;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/qwik-city-component.tsx" target="_blanks">Edit this section</a></p>

<h2 id="link" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#link"><span class="icon icon-link"></span></a>Link </h2>

```typescript
Link: import("@builder.io/qwik").Component<LinkProps>;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/link-component.tsx" target="_blanks">Edit this section</a></p>

<h2 id="linkprops" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#linkprops"><span class="icon icon-link"></span></a>LinkProps </h2>

```typescript
export interface LinkProps extends AnchorAttributes
```

**Extends:** AnchorAttributes

| Property       | Modifiers | Type    | Description  |
| -------------- | --------- | ------- | ------------ |
| [prefetch?](#) |           | boolean | _(Optional)_ |
| [reload?](#)   |           | boolean | _(Optional)_ |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/link-component.tsx" target="_blanks">Edit this section</a></p>

<h2 id="loader" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#loader"><span class="icon icon-link"></span></a>Loader </h2>

```typescript
export interface Loader<RETURN>
```

| Method     | Description |
| ---------- | ----------- |
| [use()](#) |             |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="loader_" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#loader_"><span class="icon icon-link"></span></a>loader$ </h2>

> Warning: This API is now obsolete.
>
> - use `routeLoader$()` instead

```typescript
loader$: LoaderConstructor;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts" target="_blanks">Edit this section</a></p>

<h2 id="loaderqrl" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#loaderqrl"><span class="icon icon-link"></span></a>loaderQrl </h2>

> Warning: This API is now obsolete.
>
> - use `routeLoader$()` instead

```typescript
loaderQrl: LoaderConstructorQRL;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts" target="_blanks">Edit this section</a></p>

<h2 id="loadersignal" data-kind="type-alias" data-kind-label="T"><a aria-hidden="true" tabindex="-1" href="#loadersignal"><span class="icon icon-link"></span></a>LoaderSignal </h2>

```typescript
export type LoaderSignal<T> = T extends () => ValueOrPromise<infer B>
  ? Readonly<Signal<ValueOrPromise<B>>>
  : Readonly<Signal<T>>;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="menudata" data-kind="type-alias" data-kind-label="T"><a aria-hidden="true" tabindex="-1" href="#menudata"><span class="icon icon-link"></span></a>MenuData </h2>

```typescript
export type MenuData = [pathname: string, menuLoader: MenuModuleLoader];
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="pagemodule" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#pagemodule"><span class="icon icon-link"></span></a>PageModule </h2>

```typescript
export interface PageModule extends RouteModule
```

**Extends:** RouteModule

| Property               | Modifiers             | Type                                            | Description  |
| ---------------------- | --------------------- | ----------------------------------------------- | ------------ |
| [default](#)           | <code>readonly</code> | any                                             |              |
| [head?](#)             | <code>readonly</code> | ContentModuleHead                               | _(Optional)_ |
| [headings?](#)         | <code>readonly</code> | [ContentHeading](#contentheading)\[\]           | _(Optional)_ |
| [onStaticGenerate?](#) | <code>readonly</code> | [StaticGenerateHandler](#staticgeneratehandler) | _(Optional)_ |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="pathparams" data-kind="type-alias" data-kind-label="T"><a aria-hidden="true" tabindex="-1" href="#pathparams"><span class="icon icon-link"></span></a>PathParams </h2>

```typescript
export declare type PathParams = Record<string, string>;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="qwikcity" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#qwikcity"><span class="icon icon-link"></span></a>QwikCity </h2>

> Warning: This API is now obsolete.
>
> - The "QwikCity" component has been renamed to "QwikCityProvider".

```typescript
QwikCity: import("@builder.io/qwik").Component<QwikCityProps>;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/qwik-city-component.tsx" target="_blanks">Edit this section</a></p>

<h2 id="qwikcitymockprovider" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#qwikcitymockprovider"><span class="icon icon-link"></span></a>QwikCityMockProvider </h2>

```typescript
QwikCityMockProvider: import("@builder.io/qwik").Component<QwikCityMockProps>;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/qwik-city-component.tsx" target="_blanks">Edit this section</a></p>

<h2 id="qwikcityplan" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#qwikcityplan"><span class="icon icon-link"></span></a>QwikCityPlan </h2>

```typescript
export interface QwikCityPlan
```

| Property            | Modifiers             | Type                        | Description  |
| ------------------- | --------------------- | --------------------------- | ------------ |
| [basePathname?](#)  | <code>readonly</code> | string                      | _(Optional)_ |
| [cacheModules?](#)  | <code>readonly</code> | boolean                     | _(Optional)_ |
| [menus?](#)         | <code>readonly</code> | [MenuData](#menudata)\[\]   | _(Optional)_ |
| [routes](#)         | <code>readonly</code> | [RouteData](#routedata)\[\] |              |
| [serverPlugins?](#) | <code>readonly</code> | RouteModule\[\]             | _(Optional)_ |
| [trailingSlash?](#) | <code>readonly</code> | boolean                     | _(Optional)_ |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="qwikcityprovider" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#qwikcityprovider"><span class="icon icon-link"></span></a>QwikCityProvider </h2>

```typescript
QwikCityProvider: import("@builder.io/qwik").Component<QwikCityProps>;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/qwik-city-component.tsx" target="_blanks">Edit this section</a></p>

<h2 id="resolveddocumenthead" data-kind="type-alias" data-kind-label="T"><a aria-hidden="true" tabindex="-1" href="#resolveddocumenthead"><span class="icon icon-link"></span></a>ResolvedDocumentHead </h2>

```typescript
export type ResolvedDocumentHead = Required<DocumentHeadValue>;
```

**References:** [DocumentHeadValue](#documentheadvalue)

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="routeaction_" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#routeaction_"><span class="icon icon-link"></span></a>routeAction$ </h2>

```typescript
routeAction$: ActionConstructor;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts" target="_blanks">Edit this section</a></p>

<h2 id="routeactionqrl" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#routeactionqrl"><span class="icon icon-link"></span></a>routeActionQrl </h2>

```typescript
routeActionQrl: ActionConstructorQRL;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts" target="_blanks">Edit this section</a></p>

<h2 id="routedata" data-kind="type-alias" data-kind-label="T"><a aria-hidden="true" tabindex="-1" href="#routedata"><span class="icon icon-link"></span></a>RouteData </h2>

```typescript
export type RouteData =
  | [pattern: RegExp, loaders: ModuleLoader[]]
  | [pattern: RegExp, loaders: ModuleLoader[], paramNames: string[]]
  | [
      pattern: RegExp,
      loaders: ModuleLoader[],
      paramNames: string[],
      originalPathname: string,
      routeBundleNames: string[]
    ];
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="routeloader_" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#routeloader_"><span class="icon icon-link"></span></a>routeLoader$ </h2>

```typescript
routeLoader$: LoaderConstructor;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts" target="_blanks">Edit this section</a></p>

<h2 id="routeloaderqrl" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#routeloaderqrl"><span class="icon icon-link"></span></a>routeLoaderQrl </h2>

```typescript
routeLoaderQrl: LoaderConstructorQRL;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts" target="_blanks">Edit this section</a></p>

<h2 id="routelocation" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#routelocation"><span class="icon icon-link"></span></a>RouteLocation </h2>

```typescript
export interface RouteLocation
```

| Property          | Modifiers             | Type                                         | Description |
| ----------------- | --------------------- | -------------------------------------------- | ----------- |
| [href](#)         | <code>readonly</code> | string                                       |             |
| [isNavigating](#) | <code>readonly</code> | boolean                                      |             |
| [params](#)       | <code>readonly</code> | Readonly&lt;Record&lt;string, string&gt;&gt; |             |
| [pathname](#)     | <code>readonly</code> | string                                       |             |
| [query](#)        | <code>readonly</code> | URLSearchParams                              |             |
| [url](#)          | <code>readonly</code> | URL                                          |             |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="routenavigate" data-kind="type-alias" data-kind-label="T"><a aria-hidden="true" tabindex="-1" href="#routenavigate"><span class="icon icon-link"></span></a>RouteNavigate </h2>

```typescript
export type RouteNavigate = QRL<
  (path?: string, forceReload?: boolean) => Promise<void>
>;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="routeparams" data-kind="type-alias" data-kind-label="T"><a aria-hidden="true" tabindex="-1" href="#routeparams"><span class="icon icon-link"></span></a>RouteParams </h2>

> Warning: This API is now obsolete.
>
> Please update to `PathParams` instead

```typescript
export declare type RouteParams = Record<string, string>;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="routeroutlet" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#routeroutlet"><span class="icon icon-link"></span></a>RouterOutlet </h2>

```typescript
RouterOutlet: import("@builder.io/qwik").Component<{}>;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/router-outlet-component.ts" target="_blanks">Edit this section</a></p>

<h2 id="server_" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#server_"><span class="icon icon-link"></span></a>server$ </h2>

```typescript
server$: <T extends import("./types").ServerFunction>(first: T) => QRL<T>;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts" target="_blanks">Edit this section</a></p>

<h2 id="serverqrl" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#serverqrl"><span class="icon icon-link"></span></a>serverQrl </h2>

```typescript
serverQrl: ServerConstructorQRL;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts" target="_blanks">Edit this section</a></p>

<h2 id="serviceworkerregister" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#serviceworkerregister"><span class="icon icon-link"></span></a>ServiceWorkerRegister </h2>

```typescript
ServiceWorkerRegister: (props: { nonce?: string }) =>
  import("@builder.io/qwik").JSXNode<"script">;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/sw-component.tsx" target="_blanks">Edit this section</a></p>

<h2 id="staticgenerate" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#staticgenerate"><span class="icon icon-link"></span></a>StaticGenerate </h2>

```typescript
export interface StaticGenerate
```

| Property     | Modifiers | Type                          | Description  |
| ------------ | --------- | ----------------------------- | ------------ |
| [params?](#) |           | [PathParams](#pathparams)\[\] | _(Optional)_ |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="staticgeneratehandler" data-kind="type-alias" data-kind-label="T"><a aria-hidden="true" tabindex="-1" href="#staticgeneratehandler"><span class="icon icon-link"></span></a>StaticGenerateHandler </h2>

```typescript
export type StaticGenerateHandler = () =>
  | Promise<StaticGenerate>
  | StaticGenerate;
```

**References:** [StaticGenerate](#staticgenerate)

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="action-use" data-kind="method-signature" data-kind-label="M"><a aria-hidden="true" tabindex="-1" href="#action-use"><span class="icon icon-link"></span></a>use </h2>

> Warning: This API is now obsolete.
>
> - call as a function instead

```typescript
use(): ActionStore<RETURN, INPUT, OPTIONAL>;
```

**Returns:**

[ActionStore](#actionstore)&lt;RETURN, INPUT, OPTIONAL&gt;

<h2 id="usecontent" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#usecontent"><span class="icon icon-link"></span></a>useContent </h2>

```typescript
useContent: () => import("./types").ContentState;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/use-functions.ts" target="_blanks">Edit this section</a></p>

<h2 id="usedocumenthead" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#usedocumenthead"><span class="icon icon-link"></span></a>useDocumentHead </h2>

```typescript
useDocumentHead: () => Required<ResolvedDocumentHead>;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/use-functions.ts" target="_blanks">Edit this section</a></p>

<h2 id="uselocation" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#uselocation"><span class="icon icon-link"></span></a>useLocation </h2>

```typescript
useLocation: () => RouteLocation;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/use-functions.ts" target="_blanks">Edit this section</a></p>

<h2 id="usenavigate" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#usenavigate"><span class="icon icon-link"></span></a>useNavigate </h2>

```typescript
useNavigate: () => RouteNavigate;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/use-functions.ts" target="_blanks">Edit this section</a></p>

<h2 id="validator_" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#validator_"><span class="icon icon-link"></span></a>validator$ </h2>

```typescript
validator$: ValidatorConstructor;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts" target="_blanks">Edit this section</a></p>

<h2 id="validatorqrl" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#validatorqrl"><span class="icon icon-link"></span></a>validatorQrl </h2>

```typescript
validatorQrl: ValidatorConstructorQRL;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts" target="_blanks">Edit this section</a></p>

<h2 id="zod_" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#zod_"><span class="icon icon-link"></span></a>zod$ </h2>

```typescript
zod$: ZodConstructor;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts" target="_blanks">Edit this section</a></p>

<h2 id="zodconstructor" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#zodconstructor"><span class="icon icon-link"></span></a>ZodConstructor </h2>

```typescript
export interface ZodConstructor
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="zodqrl" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#zodqrl"><span class="icon icon-link"></span></a>zodQrl </h2>

```typescript
zodQrl: ZodConstructorQRL;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts" target="_blanks">Edit this section</a></p>