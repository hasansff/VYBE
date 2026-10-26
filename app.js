// ==========================================
// 1. SONG DATABASE (Royalty-Free Tracks)
// ==========================================
const SONGS = [
  {
    id: "song-1",
    title: "Acoustic Breeze",
    artist: "Bensound",
    album: "Sweet Melodies",
    duration: "2:36",
    durationSec: 156,
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=80",
    lyrics: [
      { time: 0, text: "♪ (Instrumental Acoustic Intro) ♪" },
      { time: 8, text: "Breathing in the morning breeze" },
      { time: 16, text: "Rustling wind through ancient trees" },
      { time: 24, text: "Every worry starts to fade away" },
      { time: 32, text: "Underneath the golden light of day" },
      { time: 40, text: "We find our peace in simple things" },
      { time: 48, text: "The silent hope the morning brings" },
      { time: 56, text: "♪ (Soft Acoustic Refrain) ♪" },
      { time: 72, text: "Step by step, the path we tread" },
      { time: 80, text: "No more looking back, we look ahead" },
      { time: 88, text: "A melody that sets us free" },
      { time: 96, text: "Dancing on the edge of memory" },
      { time: 104, text: "♪ (Violin Harmonies) ♪" },
      { time: 120, text: "Now the evening comes to stay" },
      { time: 128, text: "Whispering goodbye to day" },
      { time: 136, text: "But the breeze will still remain" },
      { time: 144, text: "Washing out the dust and pain" },
      { time: 150, text: "♪ (Gentle Outro Fading) ♪" }
    ]
  },
  {
    id: "song-2",
    title: "Retro Synthwave",
    artist: "Neon Skyline",
    album: "Outrun 1984",
    duration: "7:05",
    durationSec: 425,
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&auto=format&fit=crop&q=80",
    lyrics: [
      { time: 0, text: "♪ (Analog Synth Ambient Pads) ♪" },
      { time: 15, text: "Grid lines glowing in the dark" },
      { time: 28, text: "Waiting for the laser spark" },
      { time: 42, text: "Driving through the neon night" },
      { time: 56, text: "Visions of a future bright" },
      { time: 70, text: "Accelerating past the line" },
      { time: 84, text: "Lost inside this endless time" },
      { time: 98, text: "♪ (Driving 808 Drums & Bassline) ♪" },
      { time: 126, text: "Synthesized emotions rise" },
      { time: 140, text: "Reflected in your chrome-plated eyes" },
      { time: 154, text: "We are riders of the beat" },
      { time: 168, text: "Paving down the virtual street" },
      { time: 182, text: "♪ (Arpeggiated Synth Solo) ♪" },
      { time: 220, text: "Outrun the stars, catch the sun" },
      { time: 234, text: "Before the digital race is done" },
      { time: 248, text: "Just a ghost inside the screen" },
      { time: 262, text: "Living out a cyber dream" },
      { time: 276, text: "♪ (High-octane Keyboard Riff) ♪" }
    ]
  },
  {
    id: "song-3",
    title: "Cyberpunk Beats",
    artist: "Pixel Glitch",
    album: "Mega City Sector 7",
    duration: "5:44",
    durationSec: 344,
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&auto=format&fit=crop&q=80",
    lyrics: [
      { time: 0, text: "♪ (Glitchy Sound Effects Intro) ♪" },
      { time: 10, text: "Netrunner hacking the main core" },
      { time: 20, text: "System overload at the door" },
      { time: 30, text: "Firewall falling, code on the run" },
      { time: 40, text: "Battle in cyberspace has begun" },
      { time: 50, text: "♪ (Heavy Distorted Synth Bass) ♪" },
      { time: 70, text: "Data streams flowing, black and red" },
      { time: 80, text: "Voices inside the neural net" },
      { time: 90, text: "Upgrade the module, bypass the lock" },
      { time: 100, text: "Running against the system clock" },
      { time: 110, text: "♪ (Industrial Electronic Breakbeat) ♪" }
    ]
  },
  {
    id: "song-4",
    title: "Lofi Dreams",
    artist: "Chilled Hop",
    album: "Coffee & Rain",
    duration: "5:02",
    durationSec: 302,
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&auto=format&fit=crop&q=80",
    lyrics: [
      { time: 0, text: "♪ (Vinyl Crackle and Chill Rhodes Piano) ♪" },
      { time: 12, text: "Raindrops hitting against the glass" },
      { time: 24, text: "Hoping that these hours pass" },
      { time: 36, text: "Warm tea in a ceramic cup" },
      { time: 48, text: "No reason to hurry, no need to look up" },
      { time: 60, text: "Just study, relax, let the beat flow" },
      { time: 72, text: "Everything moving in half-speed, slow" },
      { time: 84, text: "♪ (Relaxed Saxophone Improvisation) ♪" },
      { time: 120, text: "Dusk turning into a starry night" },
      { time: 132, text: "Everything feels so cozy and right" },
      { time: 144, text: "Under the shadow of the desk lamp shine" },
      { time: 156, text: "Lost in a peaceful space and time" },
      { time: 168, text: "♪ (Chill Hop Drum Groove) ♪" }
    ]
  },
  {
    id: "song-5",
    title: "Ambient Chill",
    artist: "Solaris Project",
    album: "Ethereal Echoes",
    duration: "6:03",
    durationSec: 363,
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    cover: "https://images.unsplash.com/photo-1446057032654-9d8885bd76c6?w=400&auto=format&fit=crop&q=80",
    lyrics: [
      { time: 0, text: "♪ (Deep Atmospheric Drones) ♪" },
      { time: 20, text: "Floating in an open space" },
      { time: 40, text: "Time has left no single trace" },
      { time: 60, text: "Drifting past the cosmic tide" },
      { time: 80, text: "Nowhere left for us to hide" },
      { time: 100, text: "♪ (Swell of Harmonious Pads) ♪" },
      { time: 140, text: "Quiet thoughts begin to fly" },
      { time: 160, text: "Like shooting stars across the sky" },
      { time: 180, text: "Infinite depth, a silver gleam" },
      { time: 200, text: "Waking from a cosmic dream" },
      { time: 220, text: "♪ (Ethereal Choral Echoes) ♪" }
    ]
  },
  {
    id: "song-6",
    title: "Funky Groove",
    artist: "The Brass Knights",
    album: "Disco Revival",
    duration: "5:26",
    durationSec: 326,
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    lyrics: [
      { time: 0, text: "♪ (Funky Bass & Guitar Strut) ♪" },
      { time: 8, text: "Get on up, and feel the heat" },
      { time: 16, text: "Tap your fingers to the beat" },
      { time: 24, text: "Brass horns calling down the hall" },
      { time: 32, text: "Tonight we're dancing wall to wall" },
      { time: 40, text: "♪ (Slap Bass Solo) ♪" },
      { time: 56, text: "Shake it off, let loose and play" },
      { time: 64, text: "Throw the heavy stress away" },
      { time: 72, text: "Feel the syncopated groove" },
      { time: 80, text: "Everybody got to move" },
      { time: 88, text: "♪ (Energetic Trumpet Refrain) ♪" }
    ]
  },
  {
    id: "song-7",
    title: "Summer Chillout",
    artist: "Beach Wave",
    album: "Tropical Vibe",
    duration: "5:18",
    durationSec: 318,
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&auto=format&fit=crop&q=80",
    lyrics: [
      { time: 0, text: "♪ (Waves Crashing & Acoustic Guitar) ♪" },
      { time: 10, text: "Golden sand between our toes" },
      { time: 20, text: "Where the salty sea-wind blows" },
      { time: 30, text: "Sun goes down, the fire starts" },
      { time: 40, text: "Rhythm beats inside our hearts" },
      { time: 50, text: "♪ (Warm Reggae Rhythm Guitar) ♪" },
      { time: 70, text: "Sipping drinks under the palm" },
      { time: 80, text: "Summer nights are soft and calm" },
      { time: 90, text: "Dancing till the break of day" },
      { time: 100, text: "Wish this vibe would always stay" },
      { time: 110, text: "♪ (Relaxed Steel Drum Beat) ♪" }
    ]
  },
  {
    id: "song-8",
    title: "Midnight Jazz",
    artist: "The Blue Notes Trio",
    album: "Dim Lights",
    duration: "5:38",
    durationSec: 338,
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&auto=format&fit=crop&q=80",
    lyrics: [
      { time: 0, text: "♪ (Double Bass and Soft Jazz Drums) ♪" },
      { time: 12, text: "Dimly lit, the smoky lounge" },
      { time: 24, text: "Lost thoughts that we try to scavenge" },
      { time: 36, text: "Muted trumpet starts to wail" },
      { time: 48, text: "Telling an old bluesy tale" },
      { time: 60, text: "♪ (Warm Piano Solo) ♪" },
      { time: 84, text: "Midnight clocks are striking slow" },
      { time: 96, text: "Shadows dance in amber glow" },
      { time: 108, text: "Whispered secrets in the dark" },
      { time: 120, text: "Leaving a romantic mark" },
      { time: 132, text: "♪ (Brushed Drum Rolls & Bass Solo) ♪" }
    ]
  }
];

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
let state = {
  currentTrackIndex: null,
  queue: [...SONGS],      // Current active playlist tracklist queue
  isPlaying: false,
  volume: 0.7,
  isMuted: false,
  isShuffle: false,
  isRepeat: false,        // false = no repeat, 'all' = repeat queue, 'one' = repeat single
  likedTracks: [],        // Saved song IDs
  customPlaylists: [],    // User created playlists
  currentView: "home",    // 'home', 'search', 'liked', 'playlist', 'lyrics'
  activePlaylistId: null, // ID of custom playlist currently viewed
  viewHistory: ["home"],  // Navigation history tracker
  historyIndex: 0,
  currentThemeIndex: 0    // Track current UI visual theme
};

// Available background themes (used by wand theme switcher)
const THEMES = [
  { name: "Spotify Dark", class: "theme-spotify", primary: "#1db954" },
  { name: "Neon Synthwave", class: "theme-synthwave", primary: "#ec4899" },
  { name: "Ocean Breeze", class: "theme-ocean", primary: "#0ea5e9" },
  { name: "Cyber Sunset", class: "theme-sunset", primary: "#f59e0b" }
];

// Cache DOM Elements
const audio = document.getElementById("audio-player");
const btnPlayPause = document.getElementById("btn-play-pause");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnShuffle = document.getElementById("btn-shuffle");
const btnRepeat = document.getElementById("btn-repeat");

const progressFill = document.getElementById("progress-fill");
const progressHandle = document.getElementById("progress-handle");
const progressSlider = document.getElementById("progress-slider");
const timeCurrent = document.getElementById("time-current");
const timeTotal = document.getElementById("time-total");

const volumeSlider = document.getElementById("volume-slider");
const volumeFill = document.getElementById("volume-fill");
const btnVolume = document.getElementById("btn-volume");

const playerTrackCover = document.getElementById("player-track-cover");
const playerTrackTitle = document.getElementById("player-track-title");
const playerTrackArtist = document.getElementById("player-track-artist");
const playerLikeBtn = document.getElementById("player-like-btn");
const playerVisualizerBtn = document.getElementById("player-visualizer-btn");

const sidebarPlaylistsList = document.getElementById("sidebar-playlists-list");
const sidebarLikedCount = document.getElementById("sidebar-liked-count");

const welcomeGreeting = document.getElementById("welcome-greeting");
const recentsGrid = document.getElementById("recents-grid");
const madeForYouGrid = document.getElementById("made-for-you-grid");
const recentlyPlayedGrid = document.getElementById("recently-played-grid");

const searchBarContainer = document.getElementById("search-bar-container");
const searchInput = document.getElementById("search-input");
const searchClearBtn = document.getElementById("search-clear-btn");
const searchDefaultView = document.getElementById("search-default-view");
const searchResultsView = document.getElementById("search-results-view");
const browseGrid = document.getElementById("browse-grid");
const searchTopResult = document.getElementById("search-top-result");
const searchSongsList = document.getElementById("search-songs-list");
const searchPlaylistsGrid = document.getElementById("search-playlists-grid");

const viewContainer = document.getElementById("view-container");
const viewHome = document.getElementById("view-home");
const viewSearch = document.getElementById("view-search");
const viewLiked = document.getElementById("view-liked");
const viewPlaylist = document.getElementById("view-playlist");
const viewLyrics = document.getElementById("view-lyrics");

const likedSongsTableBody = document.getElementById("liked-songs-table-body");
const likedSongCount = document.getElementById("liked-song-count");
const playLikedBtn = document.getElementById("play-liked-btn");
const shuffleLikedBtn = document.getElementById("shuffle-liked-btn");
const likedEmptyMsg = document.getElementById("liked-empty-msg");

const playlistCustomTitle = document.getElementById("playlist-custom-title");
const playlistCustomDesc = document.getElementById("playlist-custom-desc");
const playlistCoverArt = document.getElementById("playlist-cover-art");
const playlistCustomSongCount = document.getElementById("playlist-custom-song-count");
const playlistSongsTableBody = document.getElementById("playlist-songs-table-body");
const customPlaylistEmptyMsg = document.getElementById("custom-playlist-empty-msg");
const playCustomPlaylistBtn = document.getElementById("play-custom-playlist-btn");
const deletePlaylistBtn = document.getElementById("delete-playlist-btn");
const playlistRecsSection = document.getElementById("playlist-recommendations-section");
const recSongsListContainer = document.getElementById("rec-songs-list-container");
const refreshRecsBtn = document.getElementById("refresh-recommendations-btn");

const lyricsTrackCover = document.getElementById("lyrics-track-cover");
const lyricsTrackTitle = document.getElementById("lyrics-track-title");
const lyricsTrackArtist = document.getElementById("lyrics-track-artist");
const lyricsScroller = document.getElementById("lyrics-scroller");

const playlistModal = document.getElementById("playlist-modal");
const createPlaylistBtn = document.getElementById("create-playlist-btn");
const closePlaylistModal = document.getElementById("close-playlist-modal");
const cancelPlaylistCreation = document.getElementById("cancel-playlist-creation");
const confirmPlaylistCreation = document.getElementById("confirm-playlist-creation");
const modalPlaylistName = document.getElementById("modal-playlist-name");
const modalPlaylistDesc = document.getElementById("modal-playlist-desc");

const queuePanel = document.getElementById("queue-panel");
const btnQueueToggle = document.getElementById("btn-queue-toggle");
const closeQueuePanel = document.getElementById("close-queue-panel");
const queueNowPlaying = document.getElementById("queue-now-playing");
const queueNextUpList = document.getElementById("queue-next-up-list");

const songContextMenu = document.getElementById("song-context-menu");
const ctxPlaylistsSubmenu = document.getElementById("ctx-playlists-submenu");
const ctxRemoveFromPlaylist = document.getElementById("ctx-remove-from-playlist");
const ctxLike = document.getElementById("ctx-like");

const profileMenuTrigger = document.getElementById("profile-menu-trigger");
const profileDropdown = document.getElementById("profile-dropdown");

// ==========================================
// 3. STORAGE SYNC & INITIALIZATION
// ==========================================
function initApp() {
  loadLocalStorageData();
  setWelcomeGreeting();
  setupEventListeners();
  renderSidebarPlaylists();
  renderHomeContent();
  renderBrowseCategories();
  
  // Set initial volume
  audio.volume = state.volume;
  updateVolumeUI();

  // Load first track into player without autoplaying
  loadTrack(0, false);
}

function loadLocalStorageData() {
  const savedLikes = localStorage.getItem("spotify_liked_tracks");
  if (savedLikes) {
    state.likedTracks = JSON.parse(savedLikes);
  } else {
    // Add 2 default likes for testing
    state.likedTracks = ["song-1", "song-4"];
    saveLikesToStorage();
  }
  
  const savedPlaylists = localStorage.getItem("spotify_custom_playlists");
  if (savedPlaylists) {
    state.customPlaylists = JSON.parse(savedPlaylists);
  } else {
    // Pre-populate with a demo playlist
    state.customPlaylists = [
      {
        id: "playlist-demo-1",
        name: "Late Night Drive",
        description: "Atmospheric synthesizer vibes and retro beats for driving under neon lights.",
        cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&auto=format&fit=crop&q=80",
        songs: ["song-2", "song-3", "song-5"],
        dateCreated: new Date().toLocaleDateString()
      }
    ];
    savePlaylistsToStorage();
  }
}

function saveLikesToStorage() {
  localStorage.setItem("spotify_liked_tracks", JSON.stringify(state.likedTracks));
  sidebarLikedCount.textContent = state.likedTracks.length;
}

function savePlaylistsToStorage() {
  localStorage.setItem("spotify_custom_playlists", JSON.stringify(state.customPlaylists));
  renderSidebarPlaylists();
}

function setWelcomeGreeting() {
  const hr = new Date().getHours();
  let msg = "Good evening";
  if (hr >= 5 && hr < 12) msg = "Good morning";
  else if (hr >= 12 && hr < 17) msg = "Good afternoon";
  welcomeGreeting.textContent = msg;
}

// ==========================================
// 4. NAVIGATION ROUTER
// ==========================================
function switchView(viewName, playlistId = null) {
  // Hide all view elements
  viewHome.style.display = "none";
  viewSearch.style.display = "none";
  viewLiked.style.display = "none";
  viewPlaylist.style.display = "none";
  viewLyrics.style.display = "none";

  // Hide Search bar in header unless we are in search view
  if (viewName === "search") {
    searchBarContainer.style.display = "flex";
  } else {
    searchBarContainer.style.display = "none";
  }

  // Update active sidebar nav indicators
  document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
  document.getElementById("lib-liked-songs").classList.remove("active");
  document.querySelectorAll(".library-item").forEach(item => item.classList.remove("active"));

  if (viewName === "home") {
    viewHome.style.display = "block";
    document.getElementById("nav-home").classList.add("active");
  } else if (viewName === "search") {
    viewSearch.style.display = "block";
    document.getElementById("nav-search").classList.add("active");
  } else if (viewName === "liked") {
    viewLiked.style.display = "block";
    document.getElementById("lib-liked-songs").classList.add("active");
    renderLikedSongsView();
  } else if (viewName === "playlist") {
    viewPlaylist.style.display = "block";
    state.activePlaylistId = playlistId;
    
    // Highlight sidebar playlist if active
    const playlistEl = document.querySelector(`.library-item[data-id="${playlistId}"]`);
    if (playlistEl) playlistEl.classList.add("active");
    
    renderPlaylistView(playlistId);
  } else if (viewName === "lyrics") {
    viewLyrics.style.display = "flex";
    renderLyricsView();
  }

  state.currentView = viewName;

  // Add view to history if it's different from the latest entry
  if (state.viewHistory[state.viewHistory.length - 1] !== viewName) {
    // Truncate forward history if we navigated after going back
    if (state.historyIndex < state.viewHistory.length - 1) {
      state.viewHistory = state.viewHistory.slice(0, state.historyIndex + 1);
    }
    state.viewHistory.push(viewName);
    state.historyIndex = state.viewHistory.length - 1;
  }
}

// Navigation back/forward handlers
document.getElementById("nav-back-btn").addEventListener("click", () => {
  if (state.historyIndex > 0) {
    state.historyIndex--;
    const prevView = state.viewHistory[state.historyIndex];
    switchView(prevView);
    // Remove duplicate entry created by switchView
    state.viewHistory.pop();
  }
});

document.getElementById("nav-forward-btn").addEventListener("click", () => {
  if (state.historyIndex < state.viewHistory.length - 1) {
    state.historyIndex++;
    const nextView = state.viewHistory[state.historyIndex];
    switchView(nextView);
    // Remove duplicate entry created by switchView
    state.viewHistory.pop();
  }
});

// ==========================================
// 5. PLAYER AUDIO CONTROLLER
// ==========================================
function loadTrack(index, autoplay = true) {
  if (state.queue.length === 0) return;
  
  // Constrain bounds
  if (index < 0) index = state.queue.length - 1;
  if (index >= state.queue.length) index = 0;

  state.currentTrackIndex = index;
  const track = state.queue[index];

  // Set audio source
  audio.src = track.url;
  audio.load();

  // Update Player UI details
  playerTrackCover.src = track.cover;
  playerTrackTitle.textContent = track.title;
  playerTrackArtist.textContent = track.artist;
  timeTotal.textContent = track.duration;

  // Check if liked
  if (state.likedTracks.includes(track.id)) {
    playerLikeBtn.querySelector("i").className = "fa-solid fa-heart";
    playerLikeBtn.classList.add("liked");
  } else {
    playerLikeBtn.querySelector("i").className = "fa-regular fa-heart";
    playerLikeBtn.classList.remove("liked");
  }

  // Update active status in tables if a list is displayed
  updateTracksTableStatus();
  updateQueuePanelUI();

  if (autoplay) {
    playTrack();
  } else {
    pauseTrack();
  }
  
  // If lyrics overlay is open, refresh lyrics
  if (state.currentView === "lyrics") {
    renderLyricsView();
  }
}

function playTrack() {
  audio.play().then(() => {
    state.isPlaying = true;
    btnPlayPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    btnPlayPause.setAttribute("title", "Pause");
    updateTracksTableStatus();
  }).catch(e => {
    console.error("Playback failed", e);
    // If autoplays block, update state anyway
    state.isPlaying = false;
    btnPlayPause.innerHTML = `<i class="fa-solid fa-play"></i>`;
  });
}

function pauseTrack() {
  audio.pause();
  state.isPlaying = false;
  btnPlayPause.innerHTML = `<i class="fa-solid fa-play"></i>`;
  btnPlayPause.setAttribute("title", "Play");
  updateTracksTableStatus();
}

function togglePlayPause() {
  if (state.isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
}

function nextTrack() {
  if (state.queue.length === 0) return;

  if (state.isRepeat === "one") {
    // Just loop single
    audio.currentTime = 0;
    playTrack();
    return;
  }

  let nextIndex = state.currentTrackIndex + 1;
  if (state.isShuffle) {
    nextIndex = Math.floor(Math.random() * state.queue.length);
  }

  loadTrack(nextIndex, true);
}

function prevTrack() {
  if (state.queue.length === 0) return;

  // If song played for more than 3 seconds, reset track instead of skipping backward
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }

  let prevIndex = state.currentTrackIndex - 1;
  if (state.isShuffle) {
    prevIndex = Math.floor(Math.random() * state.queue.length);
  }

  loadTrack(prevIndex, true);
}

// Progress slider updates
audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  
  const current = audio.currentTime;
  const duration = audio.duration;
  const pct = (current / duration) * 100;
  
  progressFill.style.width = pct + "%";
  progressHandle.style.left = pct + "%";
  progressSlider.value = pct;
  
  timeCurrent.textContent = formatTime(current);

  // Auto-scroll lyrics if open
  if (state.currentView === "lyrics") {
    highlightLyricsLine(current);
  }
});

audio.addEventListener("ended", () => {
  if (state.isRepeat === "one") {
    audio.currentTime = 0;
    playTrack();
  } else if (state.currentTrackIndex === state.queue.length - 1 && !state.isRepeat) {
    // End of queue, no repeat
    pauseTrack();
  } else {
    nextTrack();
  }
});

// Slider scrubbing
progressSlider.addEventListener("input", (e) => {
  if (!audio.duration) return;
  const pct = e.target.value;
  const time = (pct / 100) * audio.duration;
  progressFill.style.width = pct + "%";
  progressHandle.style.left = pct + "%";
  timeCurrent.textContent = formatTime(time);
});

progressSlider.addEventListener("change", (e) => {
  if (!audio.duration) return;
  const pct = e.target.value;
  audio.currentTime = (pct / 100) * audio.duration;
});

// Volume slider scrubbing
volumeSlider.addEventListener("input", (e) => {
  const volVal = e.target.value / 100;
  state.volume = volVal;
  audio.volume = volVal;
  state.isMuted = volVal === 0;
  updateVolumeUI();
});

btnVolume.addEventListener("click", () => {
  state.isMuted = !state.isMuted;
  if (state.isMuted) {
    audio.volume = 0;
    volumeFill.style.width = "0%";
    volumeSlider.value = 0;
  } else {
    audio.volume = state.volume;
    volumeFill.style.width = (state.volume * 100) + "%";
    volumeSlider.value = state.volume * 100;
  }
  updateVolumeUI();
});

function updateVolumeUI() {
  volumeFill.style.width = (audio.volume * 100) + "%";
  const icon = btnVolume.querySelector("i");
  if (state.isMuted || audio.volume === 0) {
    icon.className = "fa-solid fa-volume-xmark";
  } else if (audio.volume < 0.3) {
    icon.className = "fa-solid fa-volume-off";
  } else if (audio.volume < 0.7) {
    icon.className = "fa-solid fa-volume-low";
  } else {
    icon.className = "fa-solid fa-volume-high";
  }
}

function toggleShuffle() {
  state.isShuffle = !state.isShuffle;
  btnShuffle.classList.toggle("active", state.isShuffle);
  btnShuffle.setAttribute("title", state.isShuffle ? "Disable shuffle" : "Enable shuffle");
}

function toggleRepeat() {
  if (!state.isRepeat) {
    state.isRepeat = "all";
    btnRepeat.classList.add("active");
    btnRepeat.querySelector("i").className = "fa-solid fa-repeat";
    btnRepeat.setAttribute("title", "Repeat one");
  } else if (state.isRepeat === "all") {
    state.isRepeat = "one";
    btnRepeat.classList.add("active");
    // Change repeat button to custom repeat-1 look or indicator
    btnRepeat.setAttribute("title", "Disable repeat");
  } else {
    state.isRepeat = false;
    btnRepeat.classList.remove("active");
    btnRepeat.querySelector("i").className = "fa-solid fa-repeat";
    btnRepeat.setAttribute("title", "Enable repeat");
  }
}

// Helpers
function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

// Double click to play a track from list
function playSelectedTrack(trackId, contextTracksList) {
  // Set queue to the current view list
  state.queue = [...contextTracksList];
  
  // Find index in queue
  const idx = state.queue.findIndex(t => t.id === trackId);
  if (idx !== -1) {
    loadTrack(idx, true);
  }
}

// ==========================================
// 6. DOM RENDERING ENGINE
// ==========================================

// SIDEBAR PLAYLISTS LIST
function renderSidebarPlaylists() {
  sidebarPlaylistsList.innerHTML = "";
  sidebarLikedCount.textContent = state.likedTracks.length;

  state.customPlaylists.forEach(playlist => {
    const item = document.createElement("div");
    item.className = "library-item";
    item.setAttribute("data-view", "playlist");
    item.setAttribute("data-id", playlist.id);
    
    let coverHtml = `<div class="playlist-icon-placeholder"><i class="fa-solid fa-music"></i></div>`;
    if (playlist.cover) {
      coverHtml = `<img src="${playlist.cover}" alt="${playlist.name}">`;
    }

    item.innerHTML = `
      ${coverHtml}
      <div class="item-info">
        <span class="item-name">${playlist.name}</span>
        <span class="item-meta">Playlist • ${playlist.songs.length} songs</span>
      </div>
    `;

    item.addEventListener("click", () => {
      switchView("playlist", playlist.id);
    });

    sidebarPlaylistsList.appendChild(item);
  });
}

// HOME CONTENT (Recents, Made for you)
function renderHomeContent() {
  recentsGrid.innerHTML = "";
  madeForYouGrid.innerHTML = "";
  recentlyPlayedGrid.innerHTML = "";

  // 1. Recents: Mix of custom playlists and default items
  const recents = [
    { type: 'liked', name: 'Liked Songs', img: null },
    ...state.customPlaylists.map(p => ({ type: 'playlist', id: p.id, name: p.name, img: p.cover })),
    { type: 'song', id: 'song-1', name: 'Acoustic Breeze', img: SONGS[0].cover },
    { type: 'song', id: 'song-2', name: 'Retro Synthwave', img: SONGS[1].cover }
  ].slice(0, 6);

  recents.forEach(item => {
    const card = document.createElement("div");
    card.className = "recent-card";

    let coverArt = `<div class="liked-badge" style="width:80px;height:80px;border-radius:0;font-size:24px;"><i class="fa-solid fa-heart"></i></div>`;
    if (item.img) {
      coverArt = `<img src="${item.img}" alt="${item.name}">`;
    } else if (item.type === 'playlist') {
      coverArt = `<div class="liked-badge" style="width:80px;height:80px;border-radius:0;font-size:24px;background:#2a2a2a;"><i class="fa-solid fa-music"></i></div>`;
    }

    card.innerHTML = `
      ${coverArt}
      <div class="recent-card-info">${item.name}</div>
      <button class="play-btn-card"><i class="fa-solid fa-play"></i></button>
    `;

    card.addEventListener("click", (e) => {
      // If clicking play button, play it directly
      if (e.target.closest(".play-btn-card")) {
        e.stopPropagation();
        playContextItem(item);
      } else {
        if (item.type === 'liked') switchView("liked");
        else if (item.type === 'playlist') switchView("playlist", item.id);
        else playSelectedTrack(item.id, SONGS);
      }
    });

    recentsGrid.appendChild(card);
  });

  // 2. Made For You (Show default tracks as playlist cards)
  SONGS.slice(0, 4).forEach(song => {
    const card = createMusicCard(song.title, `By ${song.artist}`, song.cover, () => {
      playSelectedTrack(song.id, SONGS);
    });
    madeForYouGrid.appendChild(card);
  });

  // 3. Recently Played
  SONGS.slice(4, 8).forEach(song => {
    const card = createMusicCard(song.title, `Album • ${song.album}`, song.cover, () => {
      playSelectedTrack(song.id, SONGS);
    });
    recentlyPlayedGrid.appendChild(card);
  });
}

function playContextItem(item) {
  if (item.type === 'liked') {
    const likedTracks = SONGS.filter(s => state.likedTracks.includes(s.id));
    if (likedTracks.length > 0) {
      state.queue = [...likedTracks];
      loadTrack(0, true);
    }
  } else if (item.type === 'playlist') {
    const playlist = state.customPlaylists.find(p => p.id === item.id);
    if (playlist && playlist.songs.length > 0) {
      const playlistSongs = SONGS.filter(s => playlist.songs.includes(s.id));
      state.queue = [...playlistSongs];
      loadTrack(0, true);
    }
  } else if (item.type === 'song') {
    playSelectedTrack(item.id, SONGS);
  }
}

function createMusicCard(title, subtitle, coverUrl, onPlayClick) {
  const card = document.createElement("div");
  card.className = "music-card";
  card.innerHTML = `
    <div class="card-img-wrapper">
      <img src="${coverUrl}" alt="${title}">
      <button class="play-btn-card"><i class="fa-solid fa-play"></i></button>
    </div>
    <h3>${title}</h3>
    <p>${subtitle}</p>
  `;

  card.querySelector(".play-btn-card").addEventListener("click", (e) => {
    e.stopPropagation();
    onPlayClick();
  });

  card.addEventListener("click", onPlayClick);
  return card;
}

// BROWSE CATEGORIES IN SEARCH
function renderBrowseCategories() {
  browseGrid.innerHTML = "";
  const categories = [
    { title: "Podcasts", color: "#27856a", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=150&q=80" },
    { title: "Made For You", color: "#1e3264", img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=150&q=80" },
    { title: "New Releases", color: "#e8115b", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&q=80" },
    { title: "Pop", color: "#148a08", img: "https://images.unsplash.com/photo-1529518969858-8abd65152f64?w=150&q=80" },
    { title: "Hip-Hop", color: "#bc5900", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=150&q=80" },
    { title: "Rock", color: "#77212e", img: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=150&q=80" },
    { title: "Latin", color: "#e1118c", img: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=150&q=80" },
    { title: "Dance & Electronic", color: "#d7f27e", img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=150&q=80" }
  ];

  categories.forEach(cat => {
    const card = document.createElement("div");
    card.className = "browse-card";
    card.style.backgroundColor = cat.color;
    card.innerHTML = `
      <h3>${cat.title}</h3>
      <img src="${cat.img}" alt="${cat.title}">
    `;

    card.addEventListener("click", () => {
      // Clicking a browse card autofills search input and runs search
      searchInput.value = cat.title;
      searchBarContainer.querySelector("#search-clear-btn").style.display = "block";
      performSearch(cat.title);
    });

    browseGrid.appendChild(card);
  });
}

// SEARCH FILTER LOGIC
function performSearch(query) {
  if (!query || query.trim() === "") {
    searchDefaultView.style.display = "block";
    searchResultsView.style.display = "none";
    return;
  }

  searchDefaultView.style.display = "none";
  searchResultsView.style.display = "block";

  const q = query.toLowerCase().trim();

  // Find matching songs
  const matchedSongs = SONGS.filter(song => 
    song.title.toLowerCase().includes(q) || 
    song.artist.toLowerCase().includes(q) || 
    song.album.toLowerCase().includes(q)
  );

  // Render top result
  searchTopResult.innerHTML = "";
  if (matchedSongs.length > 0) {
    const top = matchedSongs[0];
    searchTopResult.innerHTML = `
      <img src="${top.cover}" alt="${top.title}">
      <h3>${top.title}</h3>
      <div class="result-meta">
        <span class="artist-name">${top.artist}</span>
        <span class="type-badge">Song</span>
      </div>
      <button class="play-btn-card"><i class="fa-solid fa-play"></i></button>
    `;
    searchTopResult.querySelector(".play-btn-card").addEventListener("click", (e) => {
      e.stopPropagation();
      playSelectedTrack(top.id, matchedSongs);
    });
    searchTopResult.onclick = () => playSelectedTrack(top.id, matchedSongs);
  } else {
    searchTopResult.innerHTML = `<div style="padding:40px;color:var(--text-muted)">No results found</div>`;
  }

  // Render songs list
  searchSongsList.innerHTML = "";
  matchedSongs.slice(0, 4).forEach(song => {
    const row = document.createElement("div");
    row.className = "search-song-row";
    row.innerHTML = `
      <img src="${song.cover}" alt="${song.title}">
      <div class="search-song-details">
        <span class="search-song-title">${song.title}</span>
        <span class="search-song-artist">${song.artist}</span>
      </div>
      <span class="search-song-duration">${song.duration}</span>
    `;

    row.addEventListener("click", () => {
      playSelectedTrack(song.id, matchedSongs);
    });

    searchSongsList.appendChild(row);
  });

  // Render Playlists search results
  searchPlaylistsGrid.innerHTML = "";
  const matchedPlaylists = state.customPlaylists.filter(p => p.name.toLowerCase().includes(q));
  
  if (matchedPlaylists.length > 0) {
    matchedPlaylists.forEach(playlist => {
      const card = createMusicCard(playlist.name, `${playlist.songs.length} songs`, playlist.cover || "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&q=80", () => {
        switchView("playlist", playlist.id);
      });
      searchPlaylistsGrid.appendChild(card);
    });
  } else {
    searchPlaylistsGrid.innerHTML = `<p style="color:var(--text-muted); grid-column:1/-1;">No playlists match "${query}"</p>`;
  }
}

// LIKED SONGS VIEW TABLE
function renderLikedSongsView() {
  likedSongsTableBody.innerHTML = "";
  
  // Filter core songs list for liked IDs
  const likedTracks = SONGS.filter(song => state.likedTracks.includes(song.id));
  
  likedSongCount.textContent = `${likedTracks.length} song${likedTracks.length === 1 ? "" : "s"}`;

  if (likedTracks.length === 0) {
    likedEmptyMsg.style.display = "flex";
    document.querySelector(".songs-table").style.display = "none";
    playLikedBtn.style.display = "none";
    shuffleLikedBtn.style.display = "none";
    return;
  }

  likedEmptyMsg.style.display = "none";
  document.querySelector(".songs-table").style.display = "table";
  playLikedBtn.style.display = "flex";
  shuffleLikedBtn.style.display = "inline-block";

  likedTracks.forEach((song, idx) => {
    const row = document.createElement("tr");
    row.setAttribute("data-id", song.id);
    
    // Check if this song is currently playing in player
    const isCurrent = state.currentTrackIndex !== null && state.queue[state.currentTrackIndex]?.id === song.id;
    if (isCurrent) row.className = "active-track";

    row.innerHTML = `
      <td class="col-num">
        <span class="row-index">${idx + 1}</span>
        <span class="row-play-btn"><i class="fa-solid fa-play"></i></span>
      </td>
      <td class="col-title">
        <div class="table-track-info">
          <img src="${song.cover}" alt="${song.title}">
          <div class="table-track-text">
            <span class="table-track-title">${song.title}</span>
            <span class="table-track-artist">${song.artist}</span>
          </div>
        </div>
      </td>
      <td class="col-album">${song.album}</td>
      <td class="col-date">May 25, 2026</td>
      <td class="col-actions">
        <button class="row-heart-btn liked" title="Remove from Liked"><i class="fa-solid fa-heart"></i></button>
        <button class="row-more-btn" title="More options"><i class="fa-solid fa-ellipsis"></i></button>
      </td>
      <td class="col-duration">${song.duration}</td>
    `;

    // Row click listeners
    row.addEventListener("dblclick", () => {
      playSelectedTrack(song.id, likedTracks);
    });

    row.querySelector(".row-play-btn").addEventListener("click", () => {
      playSelectedTrack(song.id, likedTracks);
    });

    // Heart toggle
    row.querySelector(".row-heart-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleLikeTrack(song.id);
      renderLikedSongsView(); // Refresh table
    });

    // Ellipsis options trigger
    row.querySelector(".row-more-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      showSongContextMenu(e, song.id, false); // false = not in custom playlist
    });

    likedSongsTableBody.appendChild(row);
  });
}

// CUSTOM PLAYLIST DETAIL VIEW TABLE
function renderPlaylistView(playlistId) {
  const playlist = state.customPlaylists.find(p => p.id === playlistId);
  if (!playlist) return;

  // Render headers
  playlistCustomTitle.textContent = playlist.name;
  playlistCustomDesc.textContent = playlist.description || "Add description...";
  
  if (playlist.cover) {
    playlistCoverArt.innerHTML = `<img src="${playlist.cover}" alt="${playlist.name}">`;
  } else {
    playlistCoverArt.innerHTML = `<i class="fa-solid fa-music"></i>`;
  }

  playlistSongsTableBody.innerHTML = "";
  
  // Get songs matching playlist IDs
  const playlistTracks = SONGS.filter(song => playlist.songs.includes(song.id));
  
  playlistCustomSongCount.textContent = `${playlistTracks.length} song${playlistTracks.length === 1 ? "" : "s"}`;

  if (playlistTracks.length === 0) {
    customPlaylistEmptyMsg.style.display = "flex";
    viewPlaylist.querySelector(".songs-table").style.display = "none";
    playCustomPlaylistBtn.style.display = "none";
  } else {
    customPlaylistEmptyMsg.style.display = "none";
    viewPlaylist.querySelector(".songs-table").style.display = "table";
    playCustomPlaylistBtn.style.display = "flex";

    playlistTracks.forEach((song, idx) => {
      const row = document.createElement("tr");
      row.setAttribute("data-id", song.id);
      
      const isCurrent = state.currentTrackIndex !== null && state.queue[state.currentTrackIndex]?.id === song.id;
      if (isCurrent) row.className = "active-track";

      const isLiked = state.likedTracks.includes(song.id);

      row.innerHTML = `
        <td class="col-num">
          <span class="row-index">${idx + 1}</span>
          <span class="row-play-btn"><i class="fa-solid fa-play"></i></span>
        </td>
        <td class="col-title">
          <div class="table-track-info">
            <img src="${song.cover}" alt="${song.title}">
            <div class="table-track-text">
              <span class="table-track-title">${song.title}</span>
              <span class="table-track-artist">${song.artist}</span>
            </div>
          </div>
        </td>
        <td class="col-album">${song.album}</td>
        <td class="col-date">${playlist.dateCreated || "May 25, 2026"}</td>
        <td class="col-actions">
          <button class="row-heart-btn ${isLiked ? 'liked' : ''}" title="Like song">
            <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
          <button class="row-more-btn" title="More options"><i class="fa-solid fa-ellipsis"></i></button>
        </td>
        <td class="col-duration">${song.duration}</td>
      `;

      // Handlers
      row.addEventListener("dblclick", () => {
        playSelectedTrack(song.id, playlistTracks);
      });

      row.querySelector(".row-play-btn").addEventListener("click", () => {
        playSelectedTrack(song.id, playlistTracks);
      });

      row.querySelector(".row-heart-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        toggleLikeTrack(song.id);
        renderPlaylistView(playlistId);
      });

      row.querySelector(".row-more-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        showSongContextMenu(e, song.id, true); // true = in custom playlist (shows remove option)
      });

      playlistSongsTableBody.appendChild(row);
    });
  }

  // Render recommended items for this playlist
  renderRecommendedSection(playlistId, playlist.songs);
}

// Render recommendations inside custom playlist details
function renderRecommendedSection(playlistId, excludedSongIds) {
  recSongsListContainer.innerHTML = "";
  
  // Recommend songs not already in this playlist
  const recs = SONGS.filter(song => !excludedSongIds.includes(song.id));

  if (recs.length === 0) {
    playlistRecsSection.style.display = "none";
    return;
  }

  playlistRecsSection.style.display = "block";

  recs.slice(0, 5).forEach(song => {
    const row = document.createElement("div");
    row.className = "rec-song-row";
    row.innerHTML = `
      <img src="${song.cover}" alt="${song.title}">
      <div class="rec-song-details">
        <span class="rec-song-title">${song.title}</span>
        <span class="rec-song-artist">${song.artist}</span>
      </div>
      <span class="rec-song-album">${song.album}</span>
      <button class="rec-add-btn">Add</button>
    `;

    row.querySelector(".rec-add-btn").addEventListener("click", () => {
      addTrackToPlaylist(playlistId, song.id);
    });

    recSongsListContainer.appendChild(row);
  });
}

// LYRICS SYNCRONIZED PANEL
function renderLyricsView() {
  const track = state.queue[state.currentTrackIndex];
  if (!track) {
    lyricsScroller.innerHTML = `<p style="padding:100px;text-align:center;font-size:20px;color:rgba(255,255,255,0.5);">Play a track with lyrics to view them</p>`;
    return;
  }

  lyricsTrackCover.src = track.cover;
  lyricsTrackTitle.textContent = track.title;
  lyricsTrackArtist.textContent = track.artist;
  
  lyricsScroller.innerHTML = "";

  // Assign random dark color palette to Lyrics view background for Spotify premium feel
  const colors = ["#8c1e40", "#1e3264", "#00483a", "#475e35", "#3c2a4d", "#7c4e20"];
  const color = colors[state.currentTrackIndex % colors.length];
  viewLyrics.style.setProperty("--lyrics-bg", color);

  if (!track.lyrics || track.lyrics.length === 0) {
    lyricsScroller.innerHTML = `<p style="padding:100px;text-align:center;font-size:32px;font-weight:800;color:var(--text-white);">Lyrics aren't available for this song</p>`;
    return;
  }

  track.lyrics.forEach((line, idx) => {
    const p = document.createElement("p");
    p.className = "lyric-line";
    p.setAttribute("data-time", line.time);
    p.setAttribute("data-idx", idx);
    p.textContent = line.text;

    // Double click lyrics skips song to that timestamp
    p.addEventListener("click", () => {
      audio.currentTime = line.time;
      highlightLyricsLine(line.time);
    });

    lyricsScroller.appendChild(p);
  });
}

function highlightLyricsLine(currentTime) {
  const lines = document.querySelectorAll(".lyric-line");
  let activeIndex = -1;

  for (let i = 0; i < lines.length; i++) {
    const lineTime = parseFloat(lines[i].getAttribute("data-time"));
    const nextLineTime = i < lines.length - 1 ? parseFloat(lines[i + 1].getAttribute("data-time")) : Infinity;

    if (currentTime >= lineTime && currentTime < nextLineTime) {
      activeIndex = i;
      break;
    }
  }

  if (activeIndex !== -1) {
    lines.forEach((line, idx) => {
      if (idx === activeIndex) {
        if (!line.classList.contains("active")) {
          line.classList.add("active");
          // Smooth scroll active line to center of lyrics view
          line.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        line.classList.remove("active");
      }
    });
  }
}

// Update playing row indicators when playing/pausing
function updateTracksTableStatus() {
  const curTrack = state.queue[state.currentTrackIndex];
  if (!curTrack) return;

  document.querySelectorAll("tbody tr").forEach(row => {
    const rowId = row.getAttribute("data-id");
    const isCurrent = rowId === curTrack.id;

    if (isCurrent) {
      row.classList.add("active-track");
      const indexSpan = row.querySelector(".row-index");
      const playIcon = row.querySelector(".row-play-btn i");
      
      if (state.isPlaying) {
        // Render simple equalizer visualizer icon inside row
        if (indexSpan) {
          indexSpan.innerHTML = `
            <div class="playing-bars">
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </div>
          `;
        }
        if (playIcon) playIcon.className = "fa-solid fa-pause";
      } else {
        if (indexSpan) indexSpan.textContent = row.rowIndex; // Reset number
        if (playIcon) playIcon.className = "fa-solid fa-play";
      }
    } else {
      row.classList.remove("active-track");
      const indexSpan = row.querySelector(".row-index");
      const playIcon = row.querySelector(".row-play-btn i");
      
      // Restore numbers
      if (indexSpan) {
        // Table cell indices are 1-based offset from siblings
        const rows = Array.from(row.parentNode.children);
        indexSpan.textContent = rows.indexOf(row) + 1;
      }
      if (playIcon) playIcon.className = "fa-solid fa-play";
    }
  });
}

// UPDATE FLOATING QUEUE PANEL
function updateQueuePanelUI() {
  if (state.currentTrackIndex === null) {
    queueNowPlaying.innerHTML = "";
    queueNextUpList.innerHTML = "";
    return;
  }

  const nowPlaying = state.queue[state.currentTrackIndex];
  
  queueNowPlaying.innerHTML = `
    <div class="queue-item active">
      <img src="${nowPlaying.cover}" alt="${nowPlaying.title}">
      <div class="queue-item-info">
        <span class="queue-title">${nowPlaying.title}</span>
        <span class="queue-artist">${nowPlaying.artist}</span>
      </div>
      <i class="fa-solid fa-chart-simple" style="color:var(--spotify-green)"></i>
    </div>
  `;

  queueNextUpList.innerHTML = "";
  
  // List next 5 tracks in queue
  let nextUpCount = 0;
  for (let i = state.currentTrackIndex + 1; i < state.queue.length; i++) {
    if (nextUpCount >= 5) break;
    const song = state.queue[i];
    
    const row = document.createElement("div");
    row.className = "queue-item";
    row.innerHTML = `
      <img src="${song.cover}" alt="${song.title}">
      <div class="queue-item-info">
        <span class="queue-title">${song.title}</span>
        <span class="queue-artist">${song.artist}</span>
      </div>
    `;

    row.addEventListener("click", () => {
      loadTrack(i, true);
    });

    queueNextUpList.appendChild(row);
    nextUpCount++;
  }

  if (nextUpCount === 0) {
    queueNextUpList.innerHTML = `<p style="color:var(--text-subtle);font-size:12px;padding:8px;">Queue is empty. Select another playlist to populate.</p>`;
  }
}

// ==========================================
// 7. PLAYLIST & SONGS LIKING STATE LOGIC
// ==========================================
function toggleLikeTrack(trackId) {
  const index = state.likedTracks.indexOf(trackId);
  const track = SONGS.find(s => s.id === trackId);
  
  if (index === -1) {
    state.likedTracks.push(trackId);
    showToast(`Saved to Liked Songs`);
  } else {
    state.likedTracks.splice(index, 1);
    showToast(`Removed from Liked Songs`);
  }

  saveLikesToStorage();

  // If the currently playing song is updated, sync playbar heart
  const curTrack = state.queue[state.currentTrackIndex];
  if (curTrack && curTrack.id === trackId) {
    if (state.likedTracks.includes(trackId)) {
      playerLikeBtn.querySelector("i").className = "fa-solid fa-heart";
      playerLikeBtn.classList.add("liked");
    } else {
      playerLikeBtn.querySelector("i").className = "fa-regular fa-heart";
      playerLikeBtn.classList.remove("liked");
    }
  }

  // Refresh current tables
  if (state.currentView === "liked") {
    renderLikedSongsView();
  } else if (state.currentView === "playlist") {
    renderPlaylistView(state.activePlaylistId);
  }
}

function createPlaylist(name, desc) {
  const id = "playlist-" + Date.now();
  const newPlaylist = {
    id: id,
    name: name || `My Playlist #${state.customPlaylists.length + 1}`,
    description: desc || "",
    cover: null,
    songs: [],
    dateCreated: new Date().toLocaleDateString()
  };

  state.customPlaylists.push(newPlaylist);
  savePlaylistsToStorage();
  
  switchView("playlist", id);
  showToast(`Created playlist "${newPlaylist.name}"`);
}

function deletePlaylist(playlistId) {
  const idx = state.customPlaylists.findIndex(p => p.id === playlistId);
  if (idx === -1) return;
  
  const name = state.customPlaylists[idx].name;
  state.customPlaylists.splice(idx, 1);
  savePlaylistsToStorage();

  switchView("home");
  showToast(`Deleted playlist "${name}"`);
}

function addTrackToPlaylist(playlistId, trackId) {
  const playlist = state.customPlaylists.find(p => p.id === playlistId);
  if (!playlist) return;

  if (playlist.songs.includes(trackId)) {
    showToast("Song already in this playlist");
    return;
  }

  playlist.songs.push(trackId);
  savePlaylistsToStorage();

  if (state.currentView === "playlist" && state.activePlaylistId === playlistId) {
    renderPlaylistView(playlistId);
  }

  showToast(`Added to ${playlist.name}`);
}

function removeTrackFromPlaylist(playlistId, trackId) {
  const playlist = state.customPlaylists.find(p => p.id === playlistId);
  if (!playlist) return;

  playlist.songs = playlist.songs.filter(id => id !== trackId);
  savePlaylistsToStorage();

  if (state.currentView === "playlist" && state.activePlaylistId === playlistId) {
    renderPlaylistView(playlistId);
  }

  showToast(`Removed from ${playlist.name}`);
}

// Dynamic Playlist field edits (Directly clicking title in details)
playlistCustomTitle.addEventListener("blur", (e) => {
  const playlist = state.customPlaylists.find(p => p.id === state.activePlaylistId);
  if (playlist) {
    const val = e.target.textContent.trim();
    playlist.name = val || "My Playlist";
    savePlaylistsToStorage();
  }
});

playlistCustomDesc.addEventListener("blur", (e) => {
  const playlist = state.customPlaylists.find(p => p.id === state.activePlaylistId);
  if (playlist) {
    playlist.description = e.target.textContent.trim();
    savePlaylistsToStorage();
  }
});

// ==========================================
// 8. TOAST NOTIFICATIONS & CONTEXT MENU
// ==========================================
function showToast(message) {
  // Remove existing toast if visible
  const oldToast = document.querySelector(".toast-notification");
  if (oldToast) oldToast.remove();

  const toast = document.createElement("div");
  toast.className = "toast-notification";
  toast.style.cssText = `
    position: fixed;
    bottom: 110px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #2e77d0;
    color: white;
    padding: 12px 24px;
    border-radius: 24px;
    font-size: 14px;
    font-weight: 700;
    z-index: 99;
    box-shadow: 0 8px 16px rgba(0,0,0,0.3);
    animation: slideUpPanel 0.2s ease-out;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.5s ease";
    setTimeout(() => toast.remove(), 500);
  }, 2500);
}

function showSongContextMenu(event, trackId, inCustomPlaylist) {
  // Populate playlist submenu
  ctxPlaylistsSubmenu.innerHTML = "";
  if (state.customPlaylists.length === 0) {
    ctxPlaylistsSubmenu.innerHTML = `<div class="context-menu-item" style="color:var(--text-subtle);">No playlists</div>`;
  } else {
    state.customPlaylists.forEach(playlist => {
      const item = document.createElement("div");
      item.className = "context-menu-item";
      item.textContent = playlist.name;
      item.addEventListener("click", () => {
        addTrackToPlaylist(playlist.id, trackId);
        songContextMenu.style.display = "none";
      });
      ctxPlaylistsSubmenu.appendChild(item);
    });
  }

  // Toggle remove from current playlist option
  if (inCustomPlaylist) {
    ctxRemoveFromPlaylist.style.display = "flex";
    ctxRemoveFromPlaylist.onclick = () => {
      removeTrackFromPlaylist(state.activePlaylistId, trackId);
      songContextMenu.style.display = "none";
    };
  } else {
    ctxRemoveFromPlaylist.style.display = "none";
  }

  // Setup Save/Unsave labels
  const isLiked = state.likedTracks.includes(trackId);
  ctxLike.innerHTML = isLiked ? `<i class="fa-solid fa-heart" style="color:var(--spotify-green)"></i> <span>Remove from Liked</span>` : `<i class="fa-regular fa-heart"></i> <span>Save to Liked Songs</span>`;
  ctxLike.onclick = () => {
    toggleLikeTrack(trackId);
    songContextMenu.style.display = "none";
  };

  // Position context menu near mouse pointer
  songContextMenu.style.display = "block";
  
  // Calculate bounds to prevent menu clipping past view edges
  const menuWidth = songContextMenu.offsetWidth;
  const menuHeight = songContextMenu.offsetHeight;
  let posX = event.clientX;
  let posY = event.clientY;

  if (posX + menuWidth > window.innerWidth) posX = window.innerWidth - menuWidth - 10;
  if (posY + menuHeight > window.innerHeight) posY = window.innerHeight - menuHeight - 10;

  songContextMenu.style.left = posX + "px";
  songContextMenu.style.top = posY + "px";
}

// Close menus/dropdowns on clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest("#song-context-menu")) {
    songContextMenu.style.display = "none";
  }
  if (!e.target.closest(".profile-menu-container")) {
    profileDropdown.classList.remove("show");
  }
});

// ==========================================
// 9. EVENT LISTENERS SETUP
// ==========================================
function setupEventListeners() {
  
  // Audio Player Event Listeners
  btnPlayPause.addEventListener("click", togglePlayPause);
  btnNext.addEventListener("click", nextTrack);
  btnPrev.addEventListener("click", prevTrack);
  btnShuffle.addEventListener("click", toggleShuffle);
  btnRepeat.addEventListener("click", toggleRepeat);
  
  playerLikeBtn.addEventListener("click", () => {
    if (state.currentTrackIndex !== null) {
      const track = state.queue[state.currentTrackIndex];
      toggleLikeTrack(track.id);
    }
  });

  // Topbar dropdown toggle
  profileMenuTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    profileDropdown.classList.toggle("show");
  });

  // Modal creation playlist dialog trigger
  createPlaylistBtn.addEventListener("click", () => {
    playlistModal.classList.add("show");
    modalPlaylistName.value = "";
    modalPlaylistDesc.value = "";
    modalPlaylistName.focus();
  });

  // Cancel modals
  const closeModal = () => playlistModal.classList.remove("show");
  closePlaylistModal.addEventListener("click", closeModal);
  cancelPlaylistCreation.addEventListener("click", closeModal);

  // Confirm playlist creation
  confirmPlaylistCreation.addEventListener("click", () => {
    const name = modalPlaylistName.value.trim();
    const desc = modalPlaylistDesc.value.trim();
    createPlaylist(name, desc);
    closeModal();
  });

  // Search typing listener
  searchInput.addEventListener("input", (e) => {
    const val = e.target.value;
    searchClearBtn.style.display = val ? "block" : "none";
    performSearch(val);
  });

  searchClearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchClearBtn.style.display = "none";
    performSearch("");
    searchInput.focus();
  });

  // Global links
  document.getElementById("nav-home").addEventListener("click", (e) => {
    e.preventDefault();
    switchView("home");
  });

  document.getElementById("nav-search").addEventListener("click", (e) => {
    e.preventDefault();
    switchView("search");
    searchInput.focus();
  });

  document.getElementById("lib-liked-songs").addEventListener("click", () => {
    switchView("liked");
  });

  // Play Actions on Headers
  playLikedBtn.addEventListener("click", () => {
    const likedSongs = SONGS.filter(s => state.likedTracks.includes(s.id));
    if (likedSongs.length > 0) {
      state.queue = [...likedSongs];
      loadTrack(0, true);
    } else {
      showToast("No liked songs to play");
    }
  });

  shuffleLikedBtn.addEventListener("click", () => {
    const likedSongs = SONGS.filter(s => state.likedTracks.includes(s.id));
    if (likedSongs.length > 0) {
      state.queue = [...likedSongs];
      state.isShuffle = true;
      btnShuffle.classList.add("active");
      const randomIdx = Math.floor(Math.random() * state.queue.length);
      loadTrack(randomIdx, true);
    }
  });

  playCustomPlaylistBtn.addEventListener("click", () => {
    const playlist = state.customPlaylists.find(p => p.id === state.activePlaylistId);
    if (playlist && playlist.songs.length > 0) {
      const playlistSongs = SONGS.filter(s => playlist.songs.includes(s.id));
      state.queue = [...playlistSongs];
      loadTrack(0, true);
    } else {
      showToast("Add songs to this playlist first");
    }
  });

  deletePlaylistBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this playlist?")) {
      deletePlaylist(state.activePlaylistId);
    }
  });

  // Recommended section inside playlist details
  refreshRecsBtn.addEventListener("click", () => {
    const playlist = state.customPlaylists.find(p => p.id === state.activePlaylistId);
    if (playlist) {
      renderRecommendedSection(playlist.id, playlist.songs);
    }
  });

  // Immersive Lyrics Panel toggling
  document.getElementById("btn-lyrics-toggle").addEventListener("click", () => {
    if (state.currentView === "lyrics") {
      // Go back to previous view in history
      if (state.viewHistory.length > 1) {
        state.viewHistory.pop(); // Remove lyrics from history
        const prev = state.viewHistory[state.viewHistory.length - 1];
        switchView(prev);
        // Remove duplicate entry
        state.viewHistory.pop();
      } else {
        switchView("home");
      }
    } else {
      switchView("lyrics");
    }
  });

  document.getElementById("close-lyrics-view-btn").addEventListener("click", () => {
    document.getElementById("btn-lyrics-toggle").click();
  });

  // Queue slider drawer toggle
  btnQueueToggle.addEventListener("click", () => {
    const isVisible = queuePanel.style.display === "flex";
    if (isVisible) {
      queuePanel.style.display = "none";
      btnQueueToggle.classList.remove("active");
    } else {
      queuePanel.style.display = "flex";
      btnQueueToggle.classList.add("active");
      updateQueuePanelUI();
    }
  });

  closeQueuePanel.addEventListener("click", () => {
    queuePanel.style.display = "none";
    btnQueueToggle.classList.remove("active");
  });

  // Theme custom cycling
  document.getElementById("btn-visuals").addEventListener("click", () => {
    // Increment theme index
    state.currentThemeIndex = (state.currentThemeIndex + 1) % THEMES.length;
    const selectedTheme = THEMES[state.currentThemeIndex];
    
    // Remove existing themes from body
    document.body.className = "";
    document.body.classList.add(selectedTheme.class);
    
    showToast(`Color Theme: ${selectedTheme.name}`);
  });

  // Fullscreen Immersive Mode Trigger (Mock or HTML5 Fullscreen)
  document.getElementById("btn-fullscreen").addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        showToast("Error enabling Fullscreen Mode");
      });
    } else {
      document.exitFullscreen();
    }
  });

  // Quick listener for clicking song title in footer player leads to lyrics or details
  document.getElementById("player-track-title").addEventListener("click", () => {
    if (state.currentTrackIndex !== null) {
      switchView("lyrics");
    }
  });
}

// Run app init
window.addEventListener("DOMContentLoaded", initApp);
