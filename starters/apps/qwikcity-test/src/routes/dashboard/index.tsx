import type { DocumentHead } from "@qwik.dev/city";
import { component$ } from "@qwik.dev/core";

export default component$(() => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        <a href="/qwikcity-test/sign-out/">Sign Out</a>
      </p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Home",
};
