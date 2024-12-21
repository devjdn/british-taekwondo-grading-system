<script lang="ts">
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

<section class="student-list">
	<header class="student-list-header">
		<div class="student-list-heading">
			<strong>Student ID</strong>
		</div>
		<div class="student-list-heading">
			<strong>First name</strong>
		</div>
		<div class="student-list-heading">
			<strong>Last name</strong>
		</div>
		<div class="student-list-heading">
			<strong>Grade</strong>
		</div>
	</header>
	<ul class="student-list-ul">
		{#each students as student}
			<li class="student-list-li">
				<div class="student-list-column">
					<p>{student.id}</p>
				</div>
				<div class="student-list-column">
					<p>{student.firstName}</p>
				</div>
				<div class="student-list-column">
					<p>{student.lastName}</p>
				</div>
				<div class="student-list-column">
					<p>{student.taekwondoGrade}</p>
				</div>
			</li>
		{/each}
	</ul>
</section>

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

	section.student-list{
		background: var(--container-bg-primary);
		border-radius: 18px;
		border: var(--container-bd-primary);

		header.student-list-header{
			background: var(--container-bg-secondary);
			border-top-left-radius: inherit;
			border-top-right-radius: inherit;
			border-bottom: var(--container-bd-primary);
			display: grid;
			grid-template-columns: repeat(4,1fr);

			.student-list-heading{
				padding: 18px 36px;

				&:not(:last-of-type){
					border-right: var(--container-bd-primary);
				}
			}
		}

		ul.student-list-ul{
			display: grid;
			gap: 0;

			li.student-list-li{
				border-bottom: var(--container-bd-primary);
				display: grid;
				grid-template-columns: repeat(4,1fr);

				&:last-of-type{
					border-bottom: none;
				}

				.student-list-column{
					padding: 18px 36px;

					&:not(:last-of-type){
						border-right: var(--container-bd-primary);
					}
				}
			}
		}
	}

</style>
