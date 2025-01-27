document.addEventListener("DOMContentLoaded", () => {
    const calculateBtn = document.getElementById("calculate-bmi");
    const resetBtn = document.getElementById("reset-form");
    const resultDiv = document.getElementById("result-bmi");

    calculateBtn.addEventListener("click", () => {
        const weight = parseFloat(document.getElementById("input-berat-badan").value);
        const height = parseFloat(document.getElementById("input-tinggi-badan").value) / 100; // Konversi cm ke meter
        const gender = document.getElementById("gender").value; // Ambil nilai gender
        const age = parseInt(document.getElementById("input-usia").value);

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            resultDiv.innerHTML = `<p style="color: red;">Masukkan berat dan tinggi badan yang valid!</p>`;
            return;
        }

        if (!gender) {
            resultDiv.innerHTML = `<p style="color: red;">Pilih jenis kelamin!</p>`;
            return;
        }

        if (isNaN(age) || age <= 0) {
            resultDiv.innerHTML = `<p style="color: red;">Masukkan usia yang valid!</p>`;
            return;
        }

        const bmi = (weight / (height * height)).toFixed(1);
        let status = "";
        let advice = "";

        if (bmi < 18.5) {
            status = "Kekurangan Berat Badan";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            status = "Normal (Ideal)";
        } else if (bmi >= 25 && bmi <= 29.9) {
            status = "Kelebihan Berat Badan";
        } else {
            status = "Kegemukan (Obesitas)";
        }

        if (gender === "laki-laki") {
            if (bmi < 18.5) {
                advice = "Sebagai laki-laki, pertimbangkan pola makan seimbang dan latihan fisik rutin.";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                advice = "Sebagai laki-laki, berat badan Anda normal.";
            } else if (bmi >= 25 && bmi <= 29.9) {
                advice = "Sebagai laki-laki, Anda memiliki kelebihan berat badan.";
            } else {
                advice = "Sebagai laki-laki, Anda mengalami obesitas.";
            }
        } else if (gender === "perempuan") {
            if (bmi < 18.5) {
                advice = "Sebagai perempuan, pastikan kebutuhan nutrisi terpenuhi, terutama zat besi dan kalsium.";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                advice = "Sebagai perempuan, berat badan Anda normal.";
            } else if (bmi >= 25 && bmi <= 29.9) {
                advice = "Sebagai perempuan, Anda memiliki kelebihan berat badan.";
            } else {
                advice = "Sebagai perempuan, Anda mengalami obesitas.";
            }
        }

        resultDiv.innerHTML = `
            <p>BMI Anda: <strong>${bmi}</strong> - ${status}</p>
            <p>${advice}</p>
        `;

        // Auto-scroll ke hasil
        resultDiv.scrollIntoView({ behavior: "smooth" });
    });

    resetBtn.addEventListener("click", () => {
        document.getElementById("bmi-form").reset();
        resultDiv.innerHTML = `<p>Hasil akan muncul di sini.</p>`;
    });
});
