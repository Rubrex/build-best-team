const playersData = [
  {
    name: "Lionel Messi",
    profileImage: "assets/players/player-1.png",
  },
  {
    name: "Neymar Jr",
    profileImage: "assets/players/player-2.png",
  },
  {
    name: "Kylian Mbappé",
    profileImage: "assets/players/player-3.png",
  },
  {
    name: "Vítor Machado",
    profileImage: "assets/players/player-4.png",
  },
  {
    name: "Sergio Ramos",
    profileImage: "assets/players/player-5.png",
  },
  {
    name: "Atalayar Riyad Mahrez",
    profileImage: "assets/players/player-6.jpg",
  },
  {
    name: "Erling Haaland",
    profileImage: "assets/players/player-7.jpg",
  },
  {
    name: "Mesut Özil",
    profileImage: "assets/players/player-8.jpg",
  },
  {
    name: "Renato Sanches",
    profileImage: "assets/players/player-9.png",
  },
];
const injectInside = document.getElementById("cardsContainer");

for (const player of playersData) {
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="rounded-md bg-primaryColor">
        <!-- Top Image -->
        <div>
            <img
            src=${player.profileImage}
            alt=""
            class="w-full h-full rounded-t-md"
            />
        </div>
        <!-- Bottom Descriptions -->
        <div class="text-center">
            <h2 class="text-xl font-semibold py-3" id="playerName">${player.name}</h2>
            <div
            class="flex justify-around items-center text-ourTextSecondary w-2/3 mx-auto"
            >
            <p>35 Goals</p>
            <span>-</span>
            <p>127 Assist</p>
            </div>
            <button
            class="bg-btnColor hover:ring ring-btnHover w-4/5 m-5 py-2 rounded-sm font-medium canDisable"
            >
            SELECT
            </button>
        </div>
    </div>
  `;
  injectInside.appendChild(div);
}
