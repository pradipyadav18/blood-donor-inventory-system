const API_URL = "http://localhost:8080/api/donors";

// Register Donor
document.getElementById('donorForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const donorData = {
        name: document.getElementById('name').value,
        bloodGroup: document.getElementById('bloodGroup').value,
        age: parseInt(document.getElementById('age').value),
        contact: document.getElementById('contact').value
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(donorData)
        });
        if(response.ok) {
            alert('Donor Registered Successfully!');
            document.getElementById('donorForm').reset();
            loadAllDonors();
        } else {
            alert('Error updating database. Verify server constraints.');
        }
    } catch (error) {
        console.error('API Error:', error);
    }
});

// Search Donor By Blood Group
async function searchDonors() {
    const bg = document.getElementById('searchGroup').value;
    if(!bg) return loadAllDonors();
    
    const res = await fetch(`${API_URL}/search?bloodGroup=${encodeURIComponent(bg)}`);
    const data = await res.json();
    renderList(data);
}

// Load Inventory
async function loadAllDonors() {
    const res = await fetch(API_URL);
    const data = await res.json();
    renderList(data);
}

function renderList(donors) {
    const list = document.getElementById('donorList');
    list.innerHTML = donors.map(d => `
        <li><strong>[${d.bloodGroup}]</strong> ${d.name} - Age: ${d.age} (📞 ${d.contact})</li>
    `).join('');
}

// Initial Call
loadAllDonors();
