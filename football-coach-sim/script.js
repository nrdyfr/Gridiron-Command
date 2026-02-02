function generateRoster() {
    const body = document.getElementById('roster-body');
    const positions = ["QB", "RB", "WR", "WR", "TE", "LT", "LG", "C", "RG", "RT", "DE", "DT", "LB", "CB", "S"];
    const lastNames = ["Michaels", "Vance", "Grier", "Thornton", "Reid", "Black", "Stone", "Rivers", "Nash", "Ford", "Kovacs", "Steele"];
    
    body.innerHTML = "";
    
    // Generate 53-man roster feel (looping through positions)
    for (let i = 0; i < 53; i++) {
        const pos = positions[i % positions.length];
        const isStar = Math.random() > 0.9; // 10% chance for a "star" player
        const ovr = isStar ? Math.floor(Math.random() * 10) + 90 : Math.floor(Math.random() * 15) + 72;
        
        const row = document.createElement('tr');
        row.className = isStar ? 'star-player' : '';
        row.innerHTML = `
            <td class="pos-cell">${pos}</td>
            <td class="name-cell">${lastNames[Math.floor(Math.random() * lastNames.length)]}, ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}.</td>
            <td class="ovr-cell">${ovr}</td>
            <td>${Math.floor(Math.random() * 20) + 75}</td>
            <td>${Math.floor(Math.random() * 20) + 70}</td>
            <td class="status-cell">ACTIVE</td>
        `;
        body.appendChild(row);
    }
}