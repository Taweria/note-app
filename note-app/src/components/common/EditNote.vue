<script setup>
import { ref } from 'vue';
import contenteditable from 'vue-contenteditable';
import { useNoteStore } from '@/stores/NoteStore';
import { v4 as uuidv4 } from 'uuid';
import { storeToRefs } from 'pinia';

const noteStore = useNoteStore();
const { selectedNote, editNote } = storeToRefs(noteStore);
const title = ref(selectedNote.value.title);
const content = ref(selectedNote.value.content);
const id = ref(selectedNote.value.id);

const handleForm = (e) => {
    e.preventDefault();

    if (title.value.trim() !== '') { 
        noteStore.updateNote(id.value, title.value, content.value);
        editNote.value = false;
        console.log(editNote.value);
    } 
    else {
        alert('Please enter a title for the note');
    }
};
</script>

<template>
    <div class="rs__notes-content">
        <form @submit="handleForm">
            <input 
                type="text"
                class="rs__input-title"
                placeholder="What is the note about..."
                v-model="title"
            />
            <contenteditable
                tag="div"
                class="rs__content-editable"
                :contenteditable="true"
                :no-nl="false"
                :no-html="true"
                v-model="content"
            />

            <button type="submit" class="rs__form-save-btn">
                <span class="material-symbols-outlined">save</span>
            </button>
        </form>
    </div>
</template>
