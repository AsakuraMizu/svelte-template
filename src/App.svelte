<script lang="ts">
  import svelteLogo from './assets/svelte.svg';
  import unoLogo from './assets/uno.svg';
  import Counter from './lib/Counter.svelte';
</script>

<main
  min-h="screen"
  min-w="320px"
  flex="~ col"
  bg="white dark:#242424"
  text="base #213547 dark:#ffffffde"
  font="normal synthesis-none"
  antialiased
>
  <div mx0 mya p8 text="center">
    <div>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src="/vite.svg" class="logo" alt="Vite Logo" />
      </a>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
      <a href="https://github.com/unocss/unocss" target="_blank" rel="noreferrer">
        <img src={unoLogo} class="logo uno" alt="UnoCSS Logo" />
      </a>
    </div>
    <h1 text="5xl" font="bold">Vite + Svelte + UnoCSS</h1>

    <div p="8">
      <Counter />
    </div>

    <p>
      Check out <a
        href="https://github.com/sveltejs/kit#readme"
        target="_blank"
        rel="noreferrer"
        color="#646cff hover:#747bff dark:#535bf2"
        text="decoration-inherit"
        font="medium"
      >
        SvelteKit
      </a>, the official Svelte app framework powered by Vite!
    </p>

    <p text="#888">Click on the logos to learn more</p>
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

  .logo.uno:hover {
    filter: drop-shadow(0 0 2em #484848aa);
  }
</style>
