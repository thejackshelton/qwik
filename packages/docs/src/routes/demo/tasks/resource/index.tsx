import { component$, Resource, useResource$, useSignal } from '@qwik.dev/core';

export default component$(() => {
  const prNumber = useSignal('3576');

  const prTitle = useResource$(async ({ track }) => {
    track(() => prNumber.value); // Requires explicit tracking of inputs
    const response = await fetch(
      `https://api.github.com/repos/QwikDev/qwik/pulls/${prNumber.value}`
    );
    const data = await response.json();
    return (data.title || data.message || 'Error') as string;
  });

  return (
    <>
      <input type="number" bind:value={prNumber} />
      <h1>
        PR#{prNumber}:
        <Resource
          value={prTitle}
          onPending={() => <>Loading...</>}
          onResolved={(title) => <>{title}</>}
        />
      </h1>
    </>
  );
});
