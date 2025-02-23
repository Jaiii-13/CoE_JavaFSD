document.addEventListener("DOMContentLoaded", () => {
    const routineForm = document.getElementById("routineForm");
    const exerciseNameInput = document.getElementById("exerciseName");
    const setsInput = document.getElementById("sets");
    const repsInput = document.getElementById("reps");
    const routineTable = document.getElementById("routineTable");
    const routineTableBody = document.querySelector("#routineTable tbody");
    const clearRoutineButton = document.getElementById("clearRoutine");
    const routineTitle = document.getElementById("routineTitle");

    let routineData = JSON.parse(localStorage.getItem("routine")) || [];

    function updateTable() {
        routineTableBody.innerHTML = "";

        if (routineData.length > 0) {
            routineTable.style.display = "table";
            clearRoutineButton.style.display = "block";
            routineTitle.style.display = "block";
        } else {
            routineTable.style.display = "none";
            clearRoutineButton.style.display = "none";
            routineTitle.style.display = "none";
        }

        routineData.forEach((exercise, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${exercise.name}</td>
                <td>${exercise.sets}</td>
                <td>${exercise.reps}</td>
                <td><button class="delete-btn" data-index="${index}">❌ Remove</button></td>
            `;
            routineTableBody.appendChild(row);
        });

        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", (event) => {
                const index = event.target.getAttribute("data-index");
                routineData.splice(index, 1);
                saveRoutine();
            });
        });
    }

    function saveRoutine() {
        localStorage.setItem("routine", JSON.stringify(routineData));
        updateTable();
    }

    routineForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const exerciseName = exerciseNameInput.value.trim();
        const sets = parseInt(setsInput.value.trim());
        const reps = parseInt(repsInput.value.trim());

        if (exerciseName && sets > 0 && reps > 0) {
            routineData.push({ name: exerciseName, sets, reps });
            saveRoutine();
            routineForm.reset();
        }
    });

    clearRoutineButton.addEventListener("click", () => {
        localStorage.removeItem("routine");
        routineData = [];
        updateTable();
    });

    updateTable();
});
