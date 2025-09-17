<script lang="ts">
	import { resolveText } from '$lib/i18n';
	import DataTable, { Body, Row, Cell } from '@smui/data-table';
	import ValorList from '@view/ValorList.svelte';
	import { locale } from 'svelte-i18n';
	type Props = {
		communities: Model.Community[];
		fullWidth?: boolean;
	};
	let { communities, fullWidth }: Props = $props();
</script>

<DataTable style={fullWidth ? 'width: 100%' : undefined}>
	<Body>
		{#each communities as community (community.id)}
			<Row style="height:auto;">
				<Cell>
					<div class="community-cell">
						<div class="community-info">
							<div class="community-name">
								{community.name}
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
	.community-url {
		margin-top: 0.3rem;
	}
	.community-description {
		margin-top: 1rem;
	}
</style>
