<script lang="ts">
  import svelteLogo from './assets/svelte.svg';
  import twLogo from './assets/tw.svg';
  import Counter from './lib/Counter.svelte';
</script>

<main class="flex min-h-screen min-w-[320px] flex-col">
  <div class="mx-0 my-auto p-8 text-center">
    <div>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src="/vite.svg" class="logo" alt="Vite Logo" />
      </a>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={twLogo} class="logo tw" alt="Tailwind CSS Logo" />
      </a>
    </div>
    <h1 class="text-5xl font-bold">Vite + Svelte + Tailwind CSS</h1>

    <div class="p-8">
      <Counter />
    </div>

    <p>
      Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">
        SvelteKit
      </a>, the official Svelte app framework powered by Vite!
    </p>

    <p class="text-[#888]">Click on the logos to learn more</p>
  </div>
</main>

<style>
  .logo {
    display: inline;
    height: 9em;
    padding: 1.5em;
    will-change: filter;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
