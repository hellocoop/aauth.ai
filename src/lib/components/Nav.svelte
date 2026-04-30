<script>
  let menuOpen = false;
  let theme = $state("dark");  // Initialize theme state

  $effect(() => {
    // Read from localStorage for initial theme
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      theme = storedTheme;
      document.documentElement.dataset.theme = theme;
    }
  });

  $effect(() => {
    // Persist theme changes to localStorage
    localStorage.setItem('theme', theme);
    document.documentElement.dataset.theme = theme;
  });

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
  }
</script>

<nav>
  <!-- other nav items -->
  <button class="text-[var(--color-text-muted)] hover:text-white p-2" on:click={toggleTheme}>
    <svg><!-- Sun/Moon Icon SVG Here --></svg>
  </button>
  <div class="hamburger-menu">
    <!-- hamburger menu code -->
  </div>
</nav>

<div class="mobile-menu">
  <button on:click={toggleTheme}>Toggle Theme</button>
  <!-- other mobile menu items -->
</div>