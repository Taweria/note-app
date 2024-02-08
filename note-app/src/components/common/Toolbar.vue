<script setup>
import { useNoteStore } from '@/stores/NoteStore';

const noteStore = useNoteStore();

const handleResetView = () => {
    noteStore.selectedNote = null;
};

const handleEdit = () => {
    noteStore.editNote = true;
};
</script>

<template>
	<div class="rs__top-toolbar">
		<div class="rs__toolbar-title">
			<span @click="handleResetView">RS Notes</span>
			<span class="rs__action-icon material-symbols-outlined" @click="handleEdit">edit_note</span>
		</div>
		<div class="rs__action-icons">
			<span class="material-symbols-outlined">delete</span>
		</div>
		<div class="rs__action-icons rs__justify-end">
			<span class="material-symbols-outlined">search</span>
			<span class="material-symbols-outlined">view_list</span>
			<span class="material-symbols-outlined">grid_view</span>
		</div>
	</div>
</template>

