document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("progressChart").getContext("2d");
    const workoutData = JSON.parse(localStorage.getItem("workoutData")) || [];

    // Initialize Chart.js
    let progressChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: workoutData.map((entry) => entry.date),
            datasets: [{
                label: "Workout Duration (mins)",
                data: workoutData.map((entry) => entry.duration),
                backgroundColor: "rgba(0, 123, 255, 0.2)",
                borderColor: "#007bff",
                borderWidth: 2,
                fill: true,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Add Workout Data
    document.getElementById("addWorkout").addEventListener("click", function () {
        const workoutDate = document.getElementById("workoutDate").value;
        const workoutDuration = parseInt(document.getElementById("workoutDuration").value);

        if (workoutDate && workoutDuration > 0) {
            workoutData.push({ date: workoutDate, duration: workoutDuration });
            localStorage.setItem("workoutData", JSON.stringify(workoutData));
            updateChart();
        } else {
            alert("Please enter a valid date and workout duration.");
        }
    });

    // Function to Update Chart
    function updateChart() {
        progressChart.data.labels = workoutData.map((entry) => entry.date);
        progressChart.data.datasets[0].data = workoutData.map((entry) => entry.duration);
        progressChart.update();
    }

    // Clear Workout Progress
    document.getElementById("clearProgress").addEventListener("click", function () {
        localStorage.removeItem("workoutData");
        workoutData.length = 0;
        updateChart();
    });

    // Back to Home Button
    document.getElementById("backHome").addEventListener("click", function () {
        window.location.href = "index.html";
    });

    // View Achievements Button
    document.getElementById("viewAchievements").addEventListener("click", function () {
        window.location.href = "achievements.html";
    });

    // Load Data on Page Load
    updateChart();
});
