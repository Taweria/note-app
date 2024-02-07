<script setup>
import { ref } from 'vue';
import contenteditable from 'vue-contenteditable';
import { useNoteStore } from '@/stores/NoteStore';
import { v4 as uuidv4 } from 'uuid';

const title = ref('');
const content = ref('');
const noteStore = useNoteStore();

const handleForm = (e) => {
    e.preventDefault();

    if (title.value.trim() !== '') { 
        const insertId = uuidv4();
        noteStore.addNote({
            id: insertId,
            title: title.value,
            content: content.value,
            timestamp: Date.now(),
            pinned: false,
        });

        // Reset form
        title.value = '';
        content.value = '';
    } else {
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
