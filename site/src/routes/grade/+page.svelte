<script>
  import Pagination from "$lib/components/pagination/Pagination.svelte";
  import students from "../api/students/students.json";
</script>

<svelte:head>
	<title>British Taekwondo | Grade</title>
	<meta name="description" content="Grade a student" />
</svelte:head>

<Pagination array={students} />