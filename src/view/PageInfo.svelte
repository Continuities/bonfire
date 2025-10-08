<script lang="ts">
	import { page } from '$app/state';
	import image from '$lib/assets/full-logo-placeholder.png';
	import favicon from '$lib/assets/favicon.png';
	type Props = {
		title: string;
		description?: string;
	};

	const domain = 'project-bonfire.org';
	let { title, description }: Props = $props();
	let url = $derived(`https://www.${domain}${page.url.pathname.toString()}`);
</script>

<svelte:head>
	<title>{title} | project-bonfire.org</title>
	<meta name="description" content={description} />
	<meta property="og:site_name" content={domain} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={domain} />
	<meta property="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	{@html `  <script type="application/ld+json">{
   "@context": "https://schema.org",
   "@type": "Website",
   "name": "${title} | example.com",
   "url": "${url}",
   "logo": ${image}  }</script>`}

	<link rel="icon" href={favicon} type="image/png" />
</svelte:head>

<h1>
	<div class="inner">
		{title}
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
