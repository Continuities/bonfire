<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Paper, { Title, Content } from '@smui/paper';
  import PageTitle from '@view/PageTitle.svelte';
</script>

<PageTitle>{$_('the_openburn_project')}</PageTitle>

<Paper>
  <Title>{$_('did_you_know')}</Title>
  <Content>
    {@html $_('did_you_know_content')}
  </Content>
</Paper>