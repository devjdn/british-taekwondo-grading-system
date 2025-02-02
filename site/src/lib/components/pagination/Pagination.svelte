<script lang="ts">
	import { ChevronLeft, ChevronRight } from "lucide-svelte";
	let {array}: {array: any[]} = $props();

	const totalPages: number = array.length;
	let currentPage = $state(1);
	let currentItem = $derived(array[currentPage - 1]);

	function goToPage(page: number) {
		currentPage = page;
	}
	// function handleSubmit(event: SubmitEvent) {
	// 	event.preventDefault();
	// 	const formData = new FormData(event.target as HTMLFormElement);
	// 	const pageNumber = Number(formData.get('page'));
    // 	goToPage(pageNumber);
	// }
	function goToNextPage() {
		currentPage = currentPage + 1;
	}
	function goToPreviousPage() {
		currentPage = currentPage - 1;
	}
</script>

<div class="pagination">
	<div class="paged-content">
		{#if currentItem}
			<div class="page">
				<header class="page-header">
					<h1>{currentItem.fullName}</h1>
					<p>{currentItem.taekwondoGrade}</p>
				</header>
				<div class="grades">
					<div class="grade-item">
						<p>Poomsae 1</p>
						<input type="checkbox" name="Pass or fail"/>
					</div>
					<div class="grade-item">
						<p>Poomsae 2</p>
						<input type="checkbox" name="Pass or fail"/>
					</div>
					<div class="grade-item">
						<p>Poomsae 3</p>
						<input type="checkbox" name="Pass or fail"/>
					</div>
					<div class="grade-item">
						<p>Self defence</p>
						<input type="checkbox" name="Pass or fail"/>
					</div>
					<div class="grade-item">
						<p>Destruction</p>
						<input type="checkbox" name="Pass or fail"/>
					</div>
					<div class="grade-item">
						<p>Knife techniques</p>
						<input type="checkbox" name="Pass or fail"/>
					</div>
					<div class="grade-item">
						<p>Knife techniques</p>
						<input type="checkbox" name="Pass or fail"/>
					</div>
				</div>
			</div>
		{/if}
	</div>
	<div class="pagination-controls">
		<button class="pagination-button prev-page" aria-label="Previous page" disabled={currentPage === 1} onclick={goToPreviousPage}>
			<ChevronLeft size={18}/>
		</button>
		<div class="pagination-input-wrapper">
			<input bind:value={currentPage} placeholder="1" type="number" min="1" max={totalPages}/>
			<span>of {totalPages}</span>
		</div>
		<button class="pagination-button next-page" aria-label="Next page" disabled={currentPage === totalPages} onclick={goToNextPage}>
			<ChevronRight size={18}/>
		</button>
	</div>
</div>

<style lang="scss">
	.pagination {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: 1rem;

		.paged-content {
			// width: 100%;
			max-width: 600px;
			margin-inline: auto;

			.page{

				header.page-header {
					margin-bottom: 20px;
				}

				.grades {
					display: flex;
					flex-direction: column;
					gap: 1rem;

					.grade-item{
						display: grid;
						grid-template-columns: 150px 1fr;
						gap: 1rem;
						align-items: center;
					
						input{
							width: fit-content;
							height: 30px;
							aspect-ratio: 1;
						}
					}
				}
			}
		}

		.pagination-controls {
			display: grid;
			grid-template-columns: 1fr 4fr 1fr;
			overflow: hidden;
			border-radius: 8px;
			border: var(--container-bd-secondary);
			width: fit-content;

			button.pagination-button {
				background: var(--button-bg-primary);
				stroke: var(--text-button-primary);
				padding: 0.5rem;
			}

			.pagination-input-wrapper {
				display: flex;
				align-items: center;
				gap: .5rem;
				padding-inline: 1rem;
				background: var(--container-bg-primary);

				input{
					background: transparent;
				}
			}
		}
	}
</style>