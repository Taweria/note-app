<script setup>
import AddNote from '@/components/common/AddNote.vue';
import Sidebar from '@/components/list/Sidebar.vue';
import Viewnote from '@/components/common/ViewNote.vue';
import EditNote from '@/components/common/EditNote.vue';
import { storeToRefs } from 'pinia';
import { useNoteStore } from '@/stores/NoteStore';
const note = useNoteStore();
const { selectedNote, editNote } = storeToRefs(note);
</script>

<template>
	<Sidebar />
    <AddNote v-if="selectedNote == null" />
    <Viewnote v-else-if="editNote == false"/>
    <EditNote v-else />
</template>