<script lang="ts">
	import { resolveText } from '$lib/i18n';
	import DataTable, { Body, Row, Cell } from '@smui/data-table';
	import ValorList from '@view/ValorList.svelte';
	import { _, locale } from 'svelte-i18n';
	import Location from './Location.svelte';
	import { parseCity } from '$lib/city';
	type Props = {
		communities: Model.Community[];
		fullWidth?: boolean;
	};
	let { communities, fullWidth }: Props = $props();
</script>

<DataTable style={fullWidth ? 'width: 100%' : undefined}>
	<Body>
		{#if communities.length === 0}
			<Row>
				<Cell>
					<div class="empty">{$_('no_one_yet')}</div>
				</Cell>
			</Row>
		{:else}
			{#each communities as community (community.id)}
				<Row style="height:auto;">
					<Cell>
						<div class="community-cell">
							<div class="community-info">
								<div class="community-name">
									{community.name}
								</div>
								<div class="community-location">
									<Location location={parseCity(community.location)} />
								</div>
								<div class="community-url">
									<a href={community.url} target="_blank" rel="noopener">
										{community.url}
									</a>
								</div>
								<div class="community-description">
									{resolveText(community.description, $locale)}
								</div>
							</div>
							<ValorList valors={community.valors} />
						</div>
					</Cell>
				</Row>
			{/each}
		{/if}
	</Body>
</DataTable>

<style>
	.community-cell {
		display: flex;
		flex-direction: column;
		white-space: normal;
		gap: 1rem;
		min-height: 100px;
		padding: 1rem 0;
	}
	.community-name {
		font-weight: bold;
		font-size: 1.5rem;
	}
	.community-location {
		margin-top: 0.3rem;
	}
	.community-description {
		margin-top: 1rem;
	}
	.empty {
		text-align: center;
		padding: 2rem;
		font-style: italic;
	}
</style>
