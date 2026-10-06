const noteText = document.getElementById("note-text");
const charCount = document.getElementById("char-count");
const wordCount = document.getElementById("word-count");
const clearBtn = document.getElementById("clear-btn");
const themeToggle = document.getElementById("theme-toggle");


// Update character and word counts
function updateCounts() {
    const text = noteText.value;
    const characters = text.length;

    const trimmedText = text.trim();
    const words = trimmedText === "" ? 0 : trimmedText.split(/\s+/).length;

    charCount.textContent = `${characters} / 200 characters`;
    wordCount.textContent = `${words} words`;

    charCount.classList.remove("warning", "over");

    if (characters > 200) {
        charCount.classList.add("over");
    } else if (characters > 180) {
        charCount.classList.add("warning");
    }
}


// Update counts and save draft whenever the user types
noteText.addEventListener("input", function () {
    updateCounts();
    localStorage.setItem("draft", noteText.value);
});


// Clear everything
function clearNote() {
    noteText.value = "";

    updateCounts();

    localStorage.removeItem("draft");
}


// Clear button
clearBtn.addEventListener("click", clearNote);


// Escape key clears everything
noteText.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        clearNote();
    }
});


// Theme toggle
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "Light mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "Dark mode";
        localStorage.setItem("theme", "light");
    }
});


// Restore saved draft when page loads
const savedDraft = localStorage.getItem("draft");

if (savedDraft !== null) {
    noteText.value = savedDraft;
}


// Restore saved theme when page loads
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "Light mode";
} else {
    themeToggle.textContent = "Dark mode";
}


// Update counters when page loads
updateCounts();