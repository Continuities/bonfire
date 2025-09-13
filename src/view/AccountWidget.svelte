<script lang="ts">
	import type { Session } from '@supabase/supabase-js';
	import Button from '@smui/button';
	import { _ } from 'svelte-i18n';

	type Props = {
		session: Session | null;
		login: () => Promise<void>;
		logout: () => Promise<void>;
	};

	let { session, login, logout }: Props = $props();
</script>

{#if session}
	<Button onclick={logout}>{$_('log_out')}</Button>
{:else}
	<Button onclick={login}>{$_('log_in')}</Button>
{/if}
