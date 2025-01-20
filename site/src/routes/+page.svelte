<script lang="ts">
	import type { Student } from "../types/students";
	import Table from "$lib/components/table/Table.svelte";
	import students from "./api/students/students.json";
</script>

<svelte:head>
	<title>British Taekwondo Grading | Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="intro">
	<h1>Welcome back, Jayden.</h1>
</section>

<section class="grading-information">
	<div class="grading-code">
		<p>Your grading code</p>
		<span class="non-heading-large-text">BT-19283</span>
	</div>
	<div class="to-do">
		<p>Number of students to grade</p>
		<span class="non-heading-large-text">{students.length}</span>
	</div>
	<div class="taekwondo-class">
		<p>Your class</p>
		<span class="non-heading-large-text">Selby Taekwondo</span>
	</div>
</section>

<Table columnHeaders={["Candidate number", "Full name", "Grade"]} rows={students} columns={["candidateId", "fullName", "taekwondoGrade"]} />

<style>

	section.intro{
		margin-bottom: 20px;
	}

	section.grading-information{
		display: grid;
		grid-template-columns: repeat(3,1fr);
		gap: 10px;

		> *{
			background: var(--container-bg-primary);
			border: var(--container-bd-primary);
			padding: 20px 30px;
			border-radius: 18px;
		}
	}

</style>
