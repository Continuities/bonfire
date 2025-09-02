<script lang="ts">
  let { children } = $props();
</script>

<h1>
  <div class='inner'>
    {@render children?.()}
  </div>
</h1>

<style>
  .inner {
    font-size: 4rem;
  }

  @media (min-width: 600px) {
    .inner {
      font-size: inherit;
    }
  }
</style>