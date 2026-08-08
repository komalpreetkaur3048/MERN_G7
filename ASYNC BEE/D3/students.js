const tBody = document.getElementById("tBody");

async function fetchData() {
        const response = await fetch("http://localhost:3000/students");
        const data = await response.json();

        data.forEach(user => {
            tBody.innerHTML += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.age}</td>
                </tr>
            `;
        });
}
fetchData();