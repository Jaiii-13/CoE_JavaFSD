document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("routineForm");
    const routineList = document.getElementById("routineList");
    const clearRoutineButton = document.getElementById("clearRoutine");

    // Load saved routines from local storage
    let routine = JSON.parse(localStorage.getItem("routine")) || [];

    // Function to update routine list in HTML and local storage
    function updateRoutine() {
        routineList.innerHTML = "";
        routine.forEach((exercise, index) => {
            const li = document.createElement("li");
            li.textContent = `${exercise.name} - ${exercise.duration} sec`;

            // Remove button for each exercise
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.classList.add("remove-btn");
            removeBtn.onclick = () => {
                routine.splice(index, 1);
                saveRoutine();
                updateRoutine();
            };

            li.appendChild(removeBtn);
            routineList.appendChild(li);
        });

        saveRoutine();
    }

    // Save routine to local storage
    function saveRoutine() {
        localStorage.setItem("routine", JSON.stringify(routine));
    }

    // Add new exercise
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const exerciseName = document.getElementById("exerciseName").value.trim();
        const exerciseDuration = parseInt(document.getElementById("exerciseDuration").value.trim());

        if (exerciseName && exerciseDuration) {
            routine.push({ name: exerciseName, duration: exerciseDuration });
            updateRoutine();
            form.reset();
        }
    });

    // Clear all routines
    clearRoutineButton.addEventListener("click", () => {
        routine = [];
        updateRoutine();
    });

    // Initialize the routine list
    updateRoutine();
});
