let notes = [
    { id: 1, text: "Buy milk and bread", category: "personal" },
    { id: 2, text: "Finish the Day 3 assignment", category: "study" },
    { id: 3, text: "Email the project report to Grace", category: "work" },
    { id: 4, text: "Revise JavaScript arrays", category: "study" },
    { id: 5, text: "Call mum", category: "personal" },
];


// 1. Search notes
function searchNotes(word) {
    return notes.filter(note =>
        note.text.toLowerCase().includes(word.toLowerCase())
    );
}


// Tests
console.log(searchNotes("javascript")); // Expected: [{ id: 4, text: "Revise JavaScript arrays", category: "study" }]
console.log(searchNotes("pizza")); // Expected: []


// 2. Find longest note
function longestNote() {
    if (notes.length === 0) {
        return null;
    }

    return notes.reduce((longest, note) => {
        return note.text.length > longest.text.length ? note : longest;
    });
}


// Tests
console.log(longestNote()); // Expected: { id: 3, text: "Email the project report to Grace", category: "work" }

let savedNotes = notes;
notes = [];
console.log(longestNote()); // Expected: null
notes = savedNotes;


// 3. Count notes by category
function countByCategory() {
    let counts = {
        personal: 0,
        work: 0,
        study: 0
    };

    notes.forEach(note => {
        counts[note.category]++;
    });

    return counts;
}


// Tests
console.log(countByCategory()); // Expected: { personal: 2, work: 1, study: 2 }

notes = [];
console.log(countByCategory()); // Expected: { personal: 0, work: 0, study: 0 }
notes = savedNotes;


// 4. Get summary
function getSummary() {
    let counts = countByCategory();
    let word = notes.length === 1 ? "note" : "notes";

    return `${notes.length} ${word}: ${counts.personal} personal, ${counts.work} work, ${counts.study} study.`;
}


// Tests
console.log(getSummary()); // Expected: "5 notes: 2 personal, 1 work, 2 study."

notes = [savedNotes[0]];
console.log(getSummary()); // Expected: "1 note: 1 personal, 0 work, 0 study."
notes = savedNotes;


// 5. Check for duplicate
function isDuplicate(text) {
    let cleanedText = text.trim().toLowerCase();

    return notes.some(note =>
        note.text.trim().toLowerCase() === cleanedText
    );
}


// Tests
console.log(isDuplicate("  CALL MUM  ")); // Expected: true
console.log(isDuplicate("Go to the gym")); // Expected: false


// 6. Add a note
function addNote(text, category) {
    if (text.trim().length < 1 || text.trim().length > 200) {
        console.log("Invalid note length.");
        return false;
    }

    if (isDuplicate(text)) {
        console.log("Duplicate note.");
        return false;
    }

    if (!["personal", "work", "study"].includes(category)) {
        console.log("Invalid category.");
        return false;
    }

    let newNote = {
        id: notes.length + 1,
        text: text.trim(),
        category: category
    };

    notes.push(newNote);

    console.log("Note added successfully.");
    return true;
}


// Tests
console.log(addNote("Study JavaScript functions", "study")); // Expected: true
console.log(addNote("Call mum", "personal")); // Expected: false