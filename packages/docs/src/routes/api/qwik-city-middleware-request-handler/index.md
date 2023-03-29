---
title: \@builder.io/qwik-city/middleware/request-handler API Reference
---

# **API** @builder.io/qwik-city/middleware/request-handler

<h2 id="cachecontrol" data-kind="type-alias" data-kind-label="T"><a aria-hidden="true" tabindex="-1" href="#cachecontrol"><span class="icon icon-link"></span></a>CacheControl </h2>

```typescript
export type CacheControl =
  | CacheControlOptions
  | number
  | "day"
  | "week"
  | "month"
  | "year"
  | "no-cache"
  | "immutable"
  | "private";
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="cookie" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#cookie"><span class="icon icon-link"></span></a>Cookie </h2>

```typescript
export interface Cookie
```

| Method                                   | Description                                                                                  |
| ---------------------------------------- | -------------------------------------------------------------------------------------------- |
| [delete(name, options)](#cookie-delete)  | Deletes cookie value by name using the <code>Response</code> cookie header.                  |
| [get(name)](#cookie-get)                 | Gets a <code>Request</code> cookie header value by name.                                     |
| [getAll()](#cookie-getall)               | Gets all <code>Request</code> cookie headers.                                                |
| [has(name)](#cookie-has)                 | Checks if the <code>Request</code> cookie header name exists.                                |
| [headers()](#cookie-headers)             | Returns an array of all the set <code>Response</code> <code>Set-Cookie</code> header values. |
| [set(name, value, options)](#cookie-set) | Sets a <code>Response</code> cookie header using the <code>Set-Cookie</code> header.         |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="cookieoptions" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#cookieoptions"><span class="icon icon-link"></span></a>CookieOptions </h2>

https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie

```typescript
export interface CookieOptions
```

| Property       | Modifiers | Type                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------- | --------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [domain?](#)   |           | string                                                                       | _(Optional)_ Defines the host to which the cookie will be sent. If omitted, this attribute defaults to the host of the current document URL, not including subdomains.                                                                                                                                                                                                                                                                 |
| [expires?](#)  |           | Date \| string                                                               | _(Optional)_ Indicates the maximum lifetime of the cookie as an HTTP-date timestamp. If both <code>expires</code> and <code>maxAge</code> are set, <code>maxAge</code> has precedence.                                                                                                                                                                                                                                                 |
| [httpOnly?](#) |           | boolean                                                                      | _(Optional)_ Forbids JavaScript from accessing the cookie, for example, through the <code>document.cookie</code> property.                                                                                                                                                                                                                                                                                                             |
| [maxAge?](#)   |           | number \| \[number, 'seconds' \| 'minutes' \| 'hours' \| 'days' \| 'weeks'\] | _(Optional)_ Indicates the number of seconds until the cookie expires. A zero or negative number will expire the cookie immediately. If both <code>expires</code> and <code>maxAge</code> are set, <code>maxAge</code> has precedence. You can also use the array syntax to set the max-age using minutes, hours, days or weeks. For example, <code>{ maxAge: [3, &quot;days&quot;] }</code> would set the cookie to expire in 3 days. |
| [path?](#)     |           | string                                                                       | _(Optional)_ Indicates the path that must exist in the requested URL for the browser to send the Cookie header.                                                                                                                                                                                                                                                                                                                        |
| [sameSite?](#) |           | 'strict' \| 'lax' \| 'none'                                                  | _(Optional)_ Controls whether or not a cookie is sent with cross-site requests, providing some protection against cross-site request forgery attacks (CSRF).                                                                                                                                                                                                                                                                           |
| [secure?](#)   |           | boolean                                                                      | _(Optional)_ Indicates that the cookie is sent to the server only when a request is made with the <code>https:</code> scheme (except on localhost)                                                                                                                                                                                                                                                                                     |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="cookievalue" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#cookievalue"><span class="icon icon-link"></span></a>CookieValue </h2>

```typescript
export interface CookieValue
```

| Property    | Modifiers | Type                          | Description |
| ----------- | --------- | ----------------------------- | ----------- |
| [json](#)   |           | &lt;T = unknown&gt;() =&gt; T |             |
| [number](#) |           | () =&gt; number               |             |
| [value](#)  |           | string                        |             |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="deferreturn" data-kind="type-alias" data-kind-label="T"><a aria-hidden="true" tabindex="-1" href="#deferreturn"><span class="icon icon-link"></span></a>DeferReturn </h2>

```typescript
export type DeferReturn<T> = () => Promise<T>;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="cookie-delete" data-kind="method-signature" data-kind-label="M"><a aria-hidden="true" tabindex="-1" href="#cookie-delete"><span class="icon icon-link"></span></a>delete </h2>

Deletes cookie value by name using the `Response` cookie header.

```typescript
delete(name: string, options?: Pick<CookieOptions, 'path' | 'domain'>): void;
```

| Parameter | Type                                                            | Description  |
| --------- | --------------------------------------------------------------- | ------------ |
| name      | string                                                          |              |
| options   | Pick&lt;[CookieOptions](#cookieoptions), 'path' \| 'domain'&gt; | _(Optional)_ |

**Returns:**

void

<h2 id="cookie-get" data-kind="method-signature" data-kind-label="M"><a aria-hidden="true" tabindex="-1" href="#cookie-get"><span class="icon icon-link"></span></a>get </h2>

Gets a `Request` cookie header value by name.

```typescript
get(name: string): CookieValue | null;
```

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| name      | string |             |

**Returns:**

[CookieValue](#cookievalue) \| null

<h2 id="cookie-getall" data-kind="method-signature" data-kind-label="M"><a aria-hidden="true" tabindex="-1" href="#cookie-getall"><span class="icon icon-link"></span></a>getAll </h2>

Gets all `Request` cookie headers.

```typescript
getAll(): Record<string, CookieValue>;
```

**Returns:**

Record&lt;string, [CookieValue](#cookievalue)&gt;

<h2 id="geterrorhtml" data-kind="function" data-kind-label="F"><a aria-hidden="true" tabindex="-1" href="#geterrorhtml"><span class="icon icon-link"></span></a>getErrorHtml </h2>

```typescript
export declare function getErrorHtml(status: number, e: any): string;
```

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| status    | number |             |
| e         | any    |             |

**Returns:**

string

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/error-handler.ts" target="_blanks">Edit this section</a></p>

<h2 id="cookie-has" data-kind="method-signature" data-kind-label="M"><a aria-hidden="true" tabindex="-1" href="#cookie-has"><span class="icon icon-link"></span></a>has </h2>

Checks if the `Request` cookie header name exists.

```typescript
has(name: string): boolean;
```

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| name      | string |             |

**Returns:**

boolean

<h2 id="cookie-headers" data-kind="method-signature" data-kind-label="M"><a aria-hidden="true" tabindex="-1" href="#cookie-headers"><span class="icon icon-link"></span></a>headers </h2>

Returns an array of all the set `Response` `Set-Cookie` header values.

```typescript
headers(): string[];
```

**Returns:**

string\[\]

<h2 id="mergeheaderscookies" data-kind="variable" data-kind-label="V"><a aria-hidden="true" tabindex="-1" href="#mergeheaderscookies"><span class="icon icon-link"></span></a>mergeHeadersCookies </h2>

```typescript
mergeHeadersCookies: (headers: Headers, cookies: CookieInterface) => Headers;
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/cookie.ts" target="_blanks">Edit this section</a></p>

<h2 id="requestevent" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#requestevent"><span class="icon icon-link"></span></a>RequestEvent </h2>

```typescript
export interface RequestEvent<PLATFORM = QwikCityPlatform> extends RequestEventCommon<PLATFORM>
```

**Extends:** [RequestEventCommon](#requesteventcommon)&lt;PLATFORM&gt;

| Property               | Modifiers             | Type                                      | Description                                                                                                                                                                                 |
| ---------------------- | --------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [exited](#)            | <code>readonly</code> | boolean                                   |                                                                                                                                                                                             |
| [getWritableStream](#) | <code>readonly</code> | () =&gt; WritableStream&lt;Uint8Array&gt; | Low-level access to write to the HTTP response stream. Once <code>getWritableStream()</code> is called, the status and headers can no longer be modified and will be sent over the network. |
| [headersSent](#)       | <code>readonly</code> | boolean                                   |                                                                                                                                                                                             |
| [next](#)              | <code>readonly</code> | () =&gt; Promise&lt;void&gt;              |                                                                                                                                                                                             |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="requesteventaction" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#requesteventaction"><span class="icon icon-link"></span></a>RequestEventAction </h2>

```typescript
export interface RequestEventAction<PLATFORM = QwikCityPlatform> extends RequestEventCommon<PLATFORM>
```

**Extends:** [RequestEventCommon](#requesteventcommon)&lt;PLATFORM&gt;

| Property  | Modifiers | Type                                                                                                 | Description |
| --------- | --------- | ---------------------------------------------------------------------------------------------------- | ----------- |
| [fail](#) |           | &lt;T extends Record&lt;string, any&gt;&gt;(status: number, returnData: T) =&gt; FailReturn&lt;T&gt; |             |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="requesteventbase" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#requesteventbase"><span class="icon icon-link"></span></a>RequestEventBase </h2>

```typescript
export interface RequestEventBase<PLATFORM = QwikCityPlatform>
```

| Property          | Modifiers             | Type                                                     | Description                                                                                                                                                                                                                                                                                                                                                         |
| ----------------- | --------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [basePathname](#) | <code>readonly</code> | string                                                   | The base pathname of the request, which can be configured at build time. Defaults to <code>/</code>.                                                                                                                                                                                                                                                                |
| [cacheControl](#) | <code>readonly</code> | (cacheControl: [CacheControl](#cachecontrol)) =&gt; void | <p>Convenience method to set the Cache-Control header.</p><p>https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control</p>                                                                                                                                                                                                                            |
| [cookie](#)       | <code>readonly</code> | [Cookie](#cookie)                                        | <p>HTTP request and response cookie. Use the <code>get()</code> method to retrieve a request cookie value. Use the <code>set()</code> method to set a response cookie value.</p><p>https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies</p>                                                                                                                    |
| [env](#)          | <code>readonly</code> | EnvGetter                                                | Platform provided environment variables.                                                                                                                                                                                                                                                                                                                            |
| [headers](#)      | <code>readonly</code> | Headers                                                  | <p>HTTP response headers.</p><p>https://developer.mozilla.org/en-US/docs/Glossary/Response\_header</p>                                                                                                                                                                                                                                                              |
| [method](#)       | <code>readonly</code> | string                                                   | <p>HTTP request method.</p><p>https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods</p>                                                                                                                                                                                                                                                                         |
| [params](#)       | <code>readonly</code> | Readonly&lt;Record&lt;string, string&gt;&gt;             | URL path params which have been parsed from the current url pathname segments. Use <code>query</code> to instead retrieve the query string search params.                                                                                                                                                                                                           |
| [parseBody](#)    | <code>readonly</code> | () =&gt; Promise&lt;unknown&gt;                          | <p>This method will check the request headers for a <code>Content-Type</code> header and parse the body accordingly. It supports <code>application/json</code>, <code>application/x-www-form-urlencoded</code>, and <code>multipart/form-data</code> content types.</p><p>If the <code>Content-Type</code> header is not set, it will return <code>null</code>.</p> |
| [pathname](#)     | <code>readonly</code> | string                                                   | <p>URL pathname. Does not include the protocol, domain, query string (search params) or hash.</p><p>https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname</p>                                                                                                                                                                                               |
| [platform](#)     | <code>readonly</code> | PLATFORM                                                 | Platform specific data and functions                                                                                                                                                                                                                                                                                                                                |
| [query](#)        | <code>readonly</code> | URLSearchParams                                          | <p>URL Query Strings (URL Search Params). Use <code>params</code> to instead retrieve the route params found in the url pathname.</p><p>https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams</p>                                                                                                                                                        |
| [request](#)      | <code>readonly</code> | Request                                                  | HTTP request information.                                                                                                                                                                                                                                                                                                                                           |
| [sharedMap](#)    | <code>readonly</code> | Map&lt;string, any&gt;                                   | Shared Map across all the request handlers. Every HTTP request will get a new instance of the shared map. The shared map is useful for sharing data between request handlers.                                                                                                                                                                                       |
| [url](#)          | <code>readonly</code> | URL                                                      | HTTP request URL.                                                                                                                                                                                                                                                                                                                                                   |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="requesteventcommon" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#requesteventcommon"><span class="icon icon-link"></span></a>RequestEventCommon </h2>

```typescript
export interface RequestEventCommon<PLATFORM = QwikCityPlatform> extends RequestEventBase<PLATFORM>
```

**Extends:** [RequestEventBase](#requesteventbase)&lt;PLATFORM&gt;

| Property      | Modifiers             | Type                                                          | Description                                                                                                                                                                                                                                                                                  |
| ------------- | --------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [error](#)    | <code>readonly</code> | (statusCode: number, message: string) =&gt; ErrorResponse     | When called, the response will immediately end with the given status code. This could be useful to end a response with <code>404</code>, and use the 404 handler in the routes directory. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status for which status code should be used. |
| [exit](#)     | <code>readonly</code> | () =&gt; AbortMessage                                         |                                                                                                                                                                                                                                                                                              |
| [html](#)     | <code>readonly</code> | (statusCode: number, html: string) =&gt; AbortMessage         | Convenience method to send an HTML body response. The response will be automatically set the <code>Content-Type</code> header to<code>text/html; charset=utf-8</code>. An <code>html()</code> response can only be called once.                                                              |
| [json](#)     | <code>readonly</code> | (statusCode: number, data: any) =&gt; AbortMessage            | Convenience method to JSON stringify the data and send it in the response. The response will be automatically set the <code>Content-Type</code> header to <code>application/json; charset=utf-8</code>. A <code>json()</code> response can only be called once.                              |
| [locale](#)   | <code>readonly</code> | (local?: string) =&gt; string                                 | <p>Which locale the content is in.</p><p>The locale value can be retrieved from selected methods using <code>getLocale()</code>:</p>                                                                                                                                                         |
| [redirect](#) | <code>readonly</code> | (statusCode: RedirectCode, url: string) =&gt; RedirectMessage | <p>URL to redirect to. When called, the response will immediately end with the correct redirect status and headers.</p><p>https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections</p>                                                                                                 |
| [send](#)     | <code>readonly</code> | SendMethod                                                    | Send a body response. The <code>Content-Type</code> response header is not automatically set when using <code>send()</code> and must be set manually. A <code>send()</code> response can only be called once.                                                                                |
| [status](#)   | <code>readonly</code> | (statusCode?: number) =&gt; number                            | <p>HTTP response status code. Sets the status code when called with an argument. Always returns the status code, so calling <code>status()</code> without an argument will can be used to return the current status code.</p><p>https://developer.mozilla.org/en-US/docs/Web/HTTP/Status</p> |
| [text](#)     | <code>readonly</code> | (statusCode: number, text: string) =&gt; AbortMessage         | Convenience method to send an text body response. The response will be automatically set the <code>Content-Type</code> header to<code>text/plain; charset=utf-8</code>. An <code>text()</code> response can only be called once.                                                             |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="requesteventloader" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#requesteventloader"><span class="icon icon-link"></span></a>RequestEventLoader </h2>

```typescript
export interface RequestEventLoader<PLATFORM = QwikCityPlatform> extends RequestEventAction<PLATFORM>
```

**Extends:** [RequestEventAction](#requesteventaction)&lt;PLATFORM&gt;

| Property          | Modifiers | Type                                                                                                              | Description |
| ----------------- | --------- | ----------------------------------------------------------------------------------------------------------------- | ----------- |
| [defer](#)        |           | &lt;T&gt;(returnData: Promise&lt;T&gt; \| (() =&gt; Promise&lt;T&gt;)) =&gt; [DeferReturn](#deferreturn)&lt;T&gt; |             |
| [resolveValue](#) |           | [ResolveValue](#resolvevalue)                                                                                     |             |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="requesthandler" data-kind="function" data-kind-label="F"><a aria-hidden="true" tabindex="-1" href="#requesthandler"><span class="icon icon-link"></span></a>requestHandler </h2>

```typescript
export type RequestHandler<PLATFORM = QwikCityPlatform> = (
  ev: RequestEvent<PLATFORM>
) => Promise<void> | void;
```

**References:** [RequestEvent](#requestevent)

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/request-handler.ts" target="_blanks">Edit this section</a></p>

<h2 id="requesthandler" data-kind="type-alias" data-kind-label="T"><a aria-hidden="true" tabindex="-1" href="#requesthandler"><span class="icon icon-link"></span></a>RequestHandler </h2>

```typescript
export type RequestHandler<PLATFORM = QwikCityPlatform> = (
  ev: RequestEvent<PLATFORM>
) => Promise<void> | void;
```

**References:** [RequestEvent](#requestevent)

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="resolvesyncvalue" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#resolvesyncvalue"><span class="icon icon-link"></span></a>ResolveSyncValue </h2>

```typescript
export interface ResolveSyncValue
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="resolvevalue" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#resolvevalue"><span class="icon icon-link"></span></a>ResolveValue </h2>

```typescript
export interface ResolveValue
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="serverrenderoptions" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#serverrenderoptions"><span class="icon icon-link"></span></a>ServerRenderOptions </h2>

```typescript
export interface ServerRenderOptions extends RenderOptions
```

**Extends:** RenderOptions

| Property          | Modifiers | Type         | Description |
| ----------------- | --------- | ------------ | ----------- |
| [qwikCityPlan](#) |           | QwikCityPlan |             |
| [render](#)       |           | Render       |             |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="serverrequestevent" data-kind="interface" data-kind-label="I"><a aria-hidden="true" tabindex="-1" href="#serverrequestevent"><span class="icon icon-link"></span></a>ServerRequestEvent </h2>

Request event created by the server.

```typescript
export interface ServerRequestEvent<T = any>
```

| Property               | Modifiers | Type                                                     | Description |
| ---------------------- | --------- | -------------------------------------------------------- | ----------- |
| [env](#)               |           | EnvGetter                                                |             |
| [getWritableStream](#) |           | [ServerResponseHandler](#serverresponsehandler)&lt;T&gt; |             |
| [locale](#)            |           | string \| undefined                                      |             |
| [mode](#)              |           | [ServerRequestMode](#serverrequestmode)                  |             |
| [platform](#)          |           | any                                                      |             |
| [request](#)           |           | Request                                                  |             |
| [url](#)               |           | URL                                                      |             |

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="serverrequestmode" data-kind="type-alias" data-kind-label="T"><a aria-hidden="true" tabindex="-1" href="#serverrequestmode"><span class="icon icon-link"></span></a>ServerRequestMode </h2>

```typescript
export type ServerRequestMode = "dev" | "static" | "server";
```

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="serverresponsehandler" data-kind="type-alias" data-kind-label="T"><a aria-hidden="true" tabindex="-1" href="#serverresponsehandler"><span class="icon icon-link"></span></a>ServerResponseHandler </h2>

```typescript
export type ServerResponseHandler<T = any> = (
  status: number,
  headers: Headers,
  cookies: Cookie,
  resolve: (response: T) => void,
  requestEv: RequestEventInternal
) => WritableStream<Uint8Array>;
```

**References:** [Cookie](#cookie)

<p class="api-edit"><a href="https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts" target="_blanks">Edit this section</a></p>

<h2 id="cookie-set" data-kind="method-signature" data-kind-label="M"><a aria-hidden="true" tabindex="-1" href="#cookie-set"><span class="icon icon-link"></span></a>set </h2>

Sets a `Response` cookie header using the `Set-Cookie` header.

```typescript
set(name: string, value: string | number | Record<string, any>, options?: CookieOptions): void;
```

| Parameter | Type                                          | Description  |
| --------- | --------------------------------------------- | ------------ |
| name      | string                                        |              |
| value     | string \| number \| Record&lt;string, any&gt; |              |
| options   | [CookieOptions](#cookieoptions)               | _(Optional)_ |

**Returns:**

void