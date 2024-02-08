import { defineStore } from 'pinia'

export const useNoteStore = defineStore('note', {
    state: () => ({
        notes: [],
        lastNoteID: '',
        selectedNote: null,
        editNote: false,

    }),
    getters: {
        allNotes: (state) => {
            return state.notes
        },

        pinnedNotes: (state) => {
            return state.notes.filter(note => note.pinned)
        },
    },

    actions: {

        addNote(note){
            const newNoteArr = [note, ...this.notes];
            this.notes = newNoteArr;
        },

        markedAsPinned(id){
            const updateNotes = this.notes.map( item =>{
                if(id === item.id){
                    item.pinned = true;
                    return item;
                }
                return item;
            });

            this.notes = updateNotes;
        },

         markedAsUnpinned(id){
            const updateNotes = this.notes.map( item =>{
                if(id === item.id){
                    item.pinned = false;
                    return item;
                }
                return item;
            });

            this.notes = updateNotes;
        },

        updateNote(id, title, content){
            const updateNotes = this.notes.map( item =>{
                if(id === item.id){
                    item.title = title;
                    item.content = content;
                    return item;
                }
                return item;
            });

            this.notes = updateNotes;

        }
    }

});
