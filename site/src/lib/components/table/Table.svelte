<script lang="ts">
    let {columns, columnHeaders, rows} = $props();
</script>

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                {#each columnHeaders as columnHeader}
                    <th>{columnHeader}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each rows as row}
                <tr>
                    {#each columns as column}
                        <td>{row[column]}</td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style lang="scss">
    .table-wrapper{
        border-radius: 8px;
        border: var(--container-bd-primary);
        overflow: hidden;

        table{
            border-collapse: collapse;
            text-align: left;
            width: 100%;

            thead{
            
                tr{
                    border-bottom: var(--container-bd-secondary);

                    th{
                        padding: 12px 16px;
                        font-family: var(--font-family);
                        font-weight: 500;
                        color: var(--text-primary);
                        background: var(--container-bg-secondary);

                        &:not(:last-of-type){
                            border-right: var(--container-bd-secondary);
                        }
                    }
                }
            }

            tbody{

                tr{
                    &:nth-of-type(odd){
                        background: var(--container-bg-primary)
                    }
                    &:nth-of-type(even){
                        background: var(--container-bg-secondary)
                    }
                    td{
                        border: none;
                        padding: 12px 16px;
                        border-width: 0;
                        color: var(--text-secondary);
                    }
                }
            }
        }
    }
</style>