<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { locale } from 'svelte-i18n';
	import Button, { Group, Label } from '@smui/button';

	const setLanguage = (lang: string) => {
		const newParams = new URLSearchParams(page.url.searchParams);
		newParams.set('lang', lang);
		goto(`?${newParams.toString()}`);
		locale.set(lang);
	};
</script>

<Group>
	<Button
		color="secondary"
		variant={$locale?.startsWith('en') ? 'raised' : 'text'}
		onclick={() => setLanguage('en')}
	>
		<Label>en</Label>
	</Button>
	<Button
		color="secondary"
		variant={$locale?.startsWith('fr') ? 'raised' : 'text'}
		onclick={() => setLanguage('fr')}
	>
		<Label>fr</Label>
	</Button>
</Group>
