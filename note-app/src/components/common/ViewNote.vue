<script setup>
import { useNoteStore } from '@/stores/NoteStore';
const noteStore = useNoteStore();

</script>

<template>
  <div class="rs__notes-content">
    <h1 class="rs__input-title">{{ noteStore.selectedNote.title }}</h1>
    <p class="rs__content-note"> {{  noteStore.selectedNote.content }}</p>
  </div>
</template>