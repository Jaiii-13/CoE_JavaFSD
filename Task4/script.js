document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("routineForm");
    const routineList = document.getElementById("routineList");
    const clearRoutineButton = document.getElementById("clearRoutine");


    let routine = JSON.parse(localStorage.getItem("routine")) || [];


    function updateRoutine() {
        routineList.innerHTML = "";
        routine.forEach((exercise, index) => {
            const li = document.createElement("li");
            li.textContent = `${exercise.name} - ${exercise.duration} sec`;


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


    function saveRoutine() {
        localStorage.setItem("routine", JSON.stringify(routine));
    }


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


    clearRoutineButton.addEventListener("click", () => {
        routine = [];
        updateRoutine();
    });


    updateRoutine();
});
