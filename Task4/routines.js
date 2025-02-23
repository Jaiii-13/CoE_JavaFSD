document.addEventListener("DOMContentLoaded", () => {
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

        // Attach event listeners to delete buttons
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

    clearRoutineButton.addEventListener("click", () => {
        localStorage.removeItem("routine");
        routineData = [];
        updateTable();
    });

    updateTable(); // Load saved routines on page load
});
