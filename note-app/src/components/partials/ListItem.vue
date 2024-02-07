<script setup>
import { useNoteStore } from '@/stores/NoteStore';
const noteStore = useNoteStore();
const props = defineProps(['notes', 'title', 'icon', 'type']);

</script>

<template>
	<h4 class="rs__sidebar-title" v-if="'list' === type">
		<span class="rs__sidebar-title-note-icon material-symbols-outlined">{{ icon }}</span>
		{{ title }}
	</h4>
	<ul class="rs__note-list" v-if="'list' === type">
		<li v-for="note in notes" :key="note.id">
			<p>{{note.title}}</p>
            <span v-if="note.pinned" @click="noteStore.markedAsUnpinned(note.id)" class="rs__note-list-icon material-symbols-outlined">do_not_disturb_on</span>
            <span v-else @click="noteStore.markedAsPinned(note.id)" class="rs__note-list-icon material-symbols-outlined">push_pin</span>
		</li>
	</ul>
</template>