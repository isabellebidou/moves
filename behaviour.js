var player;
var moves = [];
var filteredMoves = [];
var usedMovesList = [];
var categories = [];
var families = [];
var rows = [];
var tabletrs = [];

var selectedCategory;
var selectedFamily;
var categorySpinner;
var familySpinner;
var categoriesSelectLabel;
var okButton;
var descriptionLabel;
var theme = "dark";

myJson = [
  {
    id: "IezoTI31Dls",
    name: "Arabic Basic",
    url: "www.youtube.com/watch?v=IezoTI31Dls&t=3m15s",
    family: "Arabic",
    category: "fast",
  },
  {
    id: "fQ3YOPot7Yo",
    name: "Arabic Hip Twist",
    url: "www.youtube.com/watch?v=fQ3YOPot7Yo&t=3m55s ",
    family: "Arabic",
    category: "fast",
  },
  {
    id: "fQ3YOPot7Yo",
    name: "Arabic Hip Twist Half Turn  ",
    url: "www.youtube.com/watch?v=fQ3YOPot7Yo&t=4m00s   ",
    family: "Arabic",
    category: "fast",
  },
  {
    id: "aEzgJMKH2hc",
    name: "Arabic Hip Twist Flourish (AHTF)  ",
    url: "www.youtube.com/watch?v=aEzgJMKH2hc&t=2m29s  ",
    family: "Arabic",
    category: "fast",
  },
  {
    id: "ZhJvBrsuw_w",
    name: "AHTF Fade  ",
    url: "www.youtube.com/watch?v=ZhJvBrsuw_w&t=2m35s  ",
    family: "Arabic",
    category: "fast",
  },
  {
    id: "v34V0w7snwI",
    name: "AHTF Circle  ",
    url: "www.youtube.com/watch?v=v34V0w7snwI&t=1m07s     ",
    family: "Arabic",
    category: "fast",
  },
  {
    id: "aEzgJMKH2hc",
    name: "Arabic 1-2-3 ",
    url: "www.youtube.com/watch?v=aEzgJMKH2hc&t=2m50s   ",
    family: "Arabic",
    category: "fast",
  },
  {
    id: "WQk7oeTCD2I",
    name: "Arabic Shimmy",
    url: "www.youtube.com/watch?v=WQk7oeTCD2I&t=0m10s    ",
    family: "Arabic",
    category: "fast",
  },
  {
    id: "IezoTI31Dls",
    name: "Arabic Shimmy with Arms and Turn (ASWAT)",
    url: "www.youtube.com/watch?v=IezoTI31Dls&t=1m57s    ",
    family: "Arabic",
    category: "fast",
  },
  {
    id: "IezoTI31Dls",
    name: "ASWAT Fade ",
    url: "www.youtube.com/watch?v=IezoTI31Dls&t=2m04s    ",
    family: "Arabic",
    category: "fast",
  },
  {
    id: "WQk7oeTCD2I",
    name: "ASWAT Circle ",
    url: "www.youtube.com/watch?v=WQk7oeTCD2I&t=1m34s    ",
    family: "Arabic",
    category: "fast",
  },
  {
    id: "ov3mNYtmhVA",
    name: "ASWAT Duet Combo",
    url: "www.youtube.com/watch?v=ov3mNYtmhVA&t=0m22s   ",
    family: "Arabic",
    category: "fast",
  },
  {
    id: "WQk7oeTCD2I",
    name: "Arabic Orbit",
    url: "www.youtube.com/watch?v=WQk7oeTCD2I&t=1m10s   ",
    family: "Arabic",
    category: "fast",
  },
  {
    id: "LuLMBKucJwo",
    name: "Arabic Double Turn",
    url: "www.youtube.com/watch?v=LuLMBKucJwo&t=1m59s   ",
    family: "Arabic",
    category: "fast",
  },
  {
    id: "qtAkbm547W4",
    name: "Alabama Twister",
    url: "www.youtube.com/watch?v=qtAkbm547W4&t=2m14s   ",
    family: "Arabic",
    category: "fast",
  },
  {
    id: "UtrP3fmJjvQ",
    name: "Dragonfly (+ Fade)",
    url: "www.youtube.com/watch?v=UtrP3fmJjvQ&t=4m53s   ",
    family: "Arabic",
    category: "fast",
  },
  {
    id: "0JKMkCVhTmw",
    name: "Arabic Do-Si-Do",
    url: "www.youtube.com/watch?v=0JKMkCVhTmw&t=1m40s   ",
    family: "Arabic",
    category: "fast",
  },
  {
    id: "OeQ3kOtmlTc",
    name: "Egyptian Basic",
    url: "www.youtube.com/watch?v=OeQ3kOtmlTc&t=2m53s ",
    family: "Egyptian",
    category: "fast",
  },
  {
    id: "eHa57t9yZAw",
    name: "Egyptian Half-Turn",
    url: "www.youtube.com/watch?v=eHa57t9yZAw&t=2m12s ",
    family: "Egyptian",
    category: "fast",
  },
  {
    id: "OeQ3kOtmlTc",
    name: "Egyptian Full-Turn",
    url: "www.youtube.com/watch?v=OeQ3kOtmlTc&t=3m04s ",
    family: "Egyptian",
    category: "fast",
  },
  {
    id: "TLYsErMpc30",
    name: "The Triple Egyptian",
    url: "www.youtube.com/watch?v=TLYsErMpc30&t=0m10s ",
    family: "Egyptian",
    category: "fast",
  },
  {
    id: "aEzgJMKH2hc",
    name: "Pivot Bump",
    url: "www.youtube.com/watch?v=aEzgJMKH2hc&t=1m30s ",
    family: "Hip Bumps",
    category: "fast",
  },
  {
    id: "aEzgJMKH2hc",
    name: "Choo-Choo",
    url: "www.youtube.com/watch?v=OeQ3kOtmlTc&t=2m34s ",
    family: "Hip Bumps",
    category: "fast",
  },
  {
    id: "aEzgJMKH2hc",
    name: "Pivot Bump Arc (Choo-Choo Arc / Arc Arms)",
    url: "www.youtube.com/watch?v=aEzgJMKH2hc&t=1m37s ",
    family: "Hip Bumps",
    category: "fast",
  },
  {
    id: "4yPxWTm6IH8",
    name: "Choo-Choo Arc Arm Combo",
    url: "www.youtube.com/watch?v=4yPxWTm6IH8&t=2m28s  ",
    family: "Hip Bumps",
    category: "fast",
  },
  {
    id: "fQ3YOPot7Yo",
    name: "Double Bump (Choo-Choo Doubles)",
    url: "www.youtube.com/watch?v=fQ3YOPot7Yo&t=2m22s  ",
    family: "Hip Bumps",
    category: "fast",
  },
  {
    id: "fQ3YOPot7Yo",
    name: "Single Bump (Choo-Choo Singles)",
    url: "www.youtube.com/watch?v=fQ3YOPot7Yo&t=2m30s ",
    family: "Hip Bumps",
    category: "fast",
  },
  {
    id: "fQ3YOPot7Yo",
    name: "Single Bump Half-Turn",
    url: "www.youtube.com/watch?v=fQ3YOPot7Yo&t=2m38s ",
    family: "Hip Bumps",
    category: "fast",
  },
  {
    id: "fQ3YOPot7Yo",
    name: "Resham-Ka",
    url: "www.youtube.com/watch?v=fQ3YOPot7Yo&t=3m37s",
    family: "Hip Bumps",
    category: "fast",
  },
  {
    id: "4yw5R10x_-Q",
    name: "Resham-ka Spin",
    url: "www.youtube.com/watch?v=4yw5R10x_-Q&t=1m38s",
    family: "Hip Bumps",
    category: "fast",
  },
  {
    id: "aEzgJMKH2hc",
    name: "Reach and Sit",
    url: "www.youtube.com/watch?v=aEzgJMKH2hc&t=2m59s",
    family: "Hip Bumps",
    category: "fast",
  },
  {
    id: "hoTM5KEUySs",
    name: "Up2 Down3",
    url: "www.youtube.com/watch?v=hoTM5KEUySs&t=10m02s",
    family: "Hip Bumps",
    category: "fast",
  },
  {
    id: "qtAkbm547W4",
    name: "Chico Four Corners",
    url: "www.youtube.com/watch?v=IezoTI31Dls&t=2m25s",
    family: "Hip Bumps",
    category: "fast",
  },
  {
    id: "qtAkbm547W4",
    name: "Chico Circle Up Combo ",
    url: "www.youtube.com/watch?v=qtAkbm547W4&t=2m34s",
    family: "Hip Bumps",
    category: "fast",
  },
  {
    id: "Eore-cmDevs",
    name: "The Roundhouse ",
    url: "www.youtube.com/watch?v=Eore-cmDevs&t=3m41s",
    family: "Hip Bumps",
    category: "fast",
  },
  {
    id: "4yw5R10x_-Q",
    name: "Double Back",
    url: "www.youtube.com/watch?v=4yw5R10x_-Q&t=8m01s",
    family: "Hip Bumps",
    category: "fast",
  },
  {
    id: "4yw5R10x_-Q",
    name: "Double Back Half Turn",
    url: "www.youtube.com/watch?v=4yw5R10x_-Q&t=8m08s",
    family: "Hip Bumps",
    category: "fast",
  },
  {
    id: "1z3nmto4_eM",
    name: "Box Step",
    url: "www.youtube.com/watch?v=1z3nmto4_eM&t=4m40s",
    family: "Hip Bumps",
    category: "fast",
  },
  {
    id: "ZXJyS6lPkmo",
    name: "Triangle Step",
    url: "www.youtube.com/watch?v=ZXJyS6lPkmo&t=0m35s",
    family: "Hip Bumps",
    category: "fast",
  },
  {
    id: "ZXJyS6lPkmo",
    name: "Push Forward & Back",
    url: "www.youtube.com/watch?v=ZXJyS6lPkmo&t=1m00s",
    family: "Hip Bumps",
    category: "fast",
  },
  {
    id: "iNB-ej6qOHE",
    name: "Shimmy Step (Basic Shimmy)",
    url: "www.youtube.com/watch?v=iNB-ej6qOHE&t=1m13s",
    family: "Shimmy",
    category: "fast",
  },
  {
    id: "OeQ3kOtmlTc",
    name: "Turkish Shimmy",
    url: "www.youtube.com/watch?v=OeQ3kOtmlTc&t=0m47s",
    family: "Shimmy",
    category: "fast",
  },
  {
    id: "iNB-ej6qOHE",
    name: "Turkish Shimmy Quarter turn",
    url: "www.youtube.com/watch?v=iNB-ej6qOHE&t=1m19s",
    family: "Shimmy",
    category: "fast",
  },
  {
    id: "iNB-ej6qOHE",
    name: "Turkish Shimmy quarter turn fade",
    url: "www.youtube.com/watch?v=iNB-ej6qOHE&t=1m26s",
    family: "Shimmy",
    category: "fast",
  },
  {
    id: "Sa6mUMd_62o",
    name: "Turkish Shimmy half turn",
    url: "www.youtube.com/watch?v=Sa6mUMd_62o&t=4m06s",
    family: "Shimmy",
    category: "fast",
  },
  {
    id: "nXyXxeEB0Zs",
    name: "Turkish Shimmy Cross-Over",
    url: "www.youtube.com/watch?v=nXyXxeEB0Zs&t=0m10s",
    family: "Shimmy",
    category: "fast",
  },
  {
    id: "OeQ3kOtmlTc",
    name: "Turkish Shimmy with arms and turns",
    url: "www.youtube.com/watch?v=OeQ3kOtmlTc&t=0m52s",
    family: "Shimmy",
    category: "fast",
  },
  {
    id: "OeQ3kOtmlTc",
    name: "TSWAT in circle",
    url: "www.youtube.com/watch?v=OeQ3kOtmlTc&t=1m02s",
    family: "Shimmy",
    category: "fast",
  },
  {
    id: "WQk7oeTCD2I",
    name: "Reverse Shimmy",
    url: "www.youtube.com/watch?v=WQk7oeTCD2I&t=0m54s",
    family: "Shimmy",
    category: "fast",
  },
  {
    id: "OeQ3kOtmlTc",
    name: "Shoulder Shimmy hip drop",
    url: "www.youtube.com/watch?v=OeQ3kOtmlTc&t=2m19s",
    family: "Shimmy",
    category: "fast",
  },
  {
    id: "IezoTI31Dls",
    name: "Ghawazee Shimmy Combo",
    url: "www.youtube.com/watch?v=IezoTI31Dls&t=2m48s",
    family: "Shimmy",
    category: "fast",
  },
  {
    id: "fQ3YOPot7Yo",
    name: "Sunanda",
    url: "www.youtube.com/watch?v=fQ3YOPot7Yo&t=3m22s",
    family: "Shimmy",
    category: "fast",
  },
  {
    id: "qtAkbm547W4",
    name: "Sunna Duet Combo",
    url: "www.youtube.com/watch?v=qtAkbm547W4&t=1m24s",
    family: "Shimmy",
    category: "fast",
  },
  {
    id: "f8Gg1TUGebo",
    name: "Wet Dog",
    url: "www.youtube.com/watch?v=f8Gg1TUGebo&t=0m50s",
    family: "Shimmy",
    category: "fast",
  },
  {
    id: "OeQ3kOtmlTc",
    name: "Spins",
    url: "www.youtube.com/watch?v=OeQ3kOtmlTc&t=3m19s",
    family: "Spins",
    category: "fast",
  },
  {
    id: "IezoTI31Dls",
    name: "Partner spins",
    url: "www.youtube.com/watch?v=IezoTI31Dls&t=4m37s",
    family: "Spins",
    category: "fast",
  },
  {
    id: "kx0UymsMRms",
    name: "Water Pot",
    url: "www.youtube.com/watch?v=kx0UymsMRms&t=3m15s",
    family: "Spins",
    category: "fast",
  },
  {
    id: "eHa57t9yZAw",
    name: "Barrel Turn",
    url: "www.youtube.com/watch?v=eHa57t9yZAw&t=0m33s",
    family: "Turns",
    category: "slow",
  },
  {
    id: "MAx_gmVIfuU",
    name: "Corkscrew Turn",
    url: "www.youtube.com/watch?v=MAx_gmVIfuU&t=0m31s",
    family: "Turns",
    category: "slow",
  },
  {
    id: "eHa57t9yZAw",
    name: "Propellor Turn",
    url: "www.youtube.com/watch?v=eHa57t9yZAw&t=0m43s",
    family: "Turns",
    category: "slow",
  },
  {
    id: "IezoTI31Dls",
    name: "Reverse Turn",
    url: "www.youtube.com/watch?v=IezoTI31Dls&t=0m53s",
    family: "Turns",
    category: "slow",
  },
  {
    id: "aEzgJMKH2hc",
    name: "Sahra Turn ",
    url: "www.youtube.com/watch?v=aEzgJMKH2hc&t=6m46s",
    family: "Turns",
    category: "slow",
  },
  {
    id: "eHa57t9yZAw",
    name: "Wrap Around turn",
    url: "www.youtube.com/watch?v=eHa57t9yZAw&t=1m04s",
    family: "Turns",
    category: "slow",
  },
  {
    id: "serKlFMp4YI",
    name: "Wrap Around drop",
    url: "www.youtube.com/watch?v=serKlFMp4YI&t=1m30s",
    family: "Turns",
    category: "slow",
  },
  {
    id: "4zfB-8qHEX4",
    name: "Pulse Turn",
    url: "www.youtube.com/watch?v=4zfB-8qHEX4&t=4m52s",
    family: "Turns",
    category: "slow",
  },
  {
    id: "eyNcSekIe-0",
    name: "Arm Undulation",
    url: "www.youtube.com/watch?v=eyNcSekIe-0&t=0m17s",
    family: "Undulations",
    category: "slow",
  },
  {
    id: "agONBGm7Luk",
    name: "Hand Floreo",
    url: "www.youtube.com/watch?v=agONBGm7Luk&t=7m50s",
    family: "Undulations",
    category: "slow",
  },
  {
    id: "eyNcSekIe-0",
    name: "Belly Roll",
    url: "www.youtube.com/watch?v=eyNcSekIe-0&t=1m00s",
    family: "Undulations",
    category: "slow",
  },
  {
    id: "aEzgJMKH2hc",
    name: "Bodywave",
    url: "www.youtube.com/watch?v=aEzgJMKH2hc&t=6m02s",
    family: "Undulations",
    category: "slow",
  },
  {
    id: "tgKAVdS-uH0",
    name: "Deep Bodywave",
    url: "www.youtube.com/watch?v=tgKAVdS-uH0&t=0m22s",
    family: "Undulations",
    category: "slow",
  },
  {
    id: "W7yHHfHdzrc",
    name: "Layback",
    url: "www.youtube.com/watch?v=W7yHHfHdzrc&t=2m02s",
    family: "Undulations",
    category: "slow",
  },
  {
    id: "MAx_gmVIfuU",
    name: "Walking Bodywave",
    url: "www.youtube.com/watch?v=MAx_gmVIfuU&t=0m44s",
    family: "Undulations",
    category: "slow",
  },
  {
    id: "BYF5iyI76KM",
    name: "Circle Step",
    url: "www.youtube.com/watch?v=BYF5iyI76KM&t=3m48s",
    family: "Rotations",
    category: "slow",
  },
  {
    id: "aEzgJMKH2hc",
    name: "Ribcage Rotation",
    url: "www.youtube.com/watch?v=aEzgJMKH2hc&t=6m21s",
    family: "Rotations",
    category: "slow",
  },
  {
    id: "fQ3YOPot7Yo",
    name: "Torso Rotation",
    url: "www.youtube.com/watch?v=fQ3YOPot7Yo&t=4m55s",
    family: "Rotations",
    category: "slow",
  },
  {
    id: "lBg8VTcC8nY",
    name: "Torso Twist",
    url: "www.youtube.com/watch?v=lBg8VTcC8nY&t=4m17s",
    family: "Rotations",
    category: "slow",
  },
  {
    id: "bu98enjBqeU",
    name: "Taxeem",
    url: "www.youtube.com/watch?v=bu98enjBqeU&t=0m02s",
    family: "Figures Eights",
    category: "slow",
  },
  {
    id: "BYF5iyI76KM",
    name: "Reverse Taxeem (Maya)",
    url: "www.youtube.com/watch?v=BYF5iyI76KM&t=0m16s",
    family: "Figures Eights",
    category: "slow",
  },
  {
    id: "bu98enjBqeU",
    name: "Walking Taxeem",
    url: "www.youtube.com/watch?v=bu98enjBqeU&t=0m02s",
    family: "Figures Eights",
    category: "slow",
  },
  {
    id: "rJa6IFkRDW0",
    name: "Posture",
    url: "www.youtube.com/watch?v=rJa6IFkRDW0&t=1m35s",
    family: "Others",
    category: "slow",
  },
  {
    id: "rJa6IFkRDW0",
    name: "Puja",
    url: "www.youtube.com/watch?v=rJa6IFkRDW0&t=1m35s",
    family: "Others",
    category: "slow",
  },
  {
    id: "eHa57t9yZAw",
    name: "Camelwalk",
    url: "www.youtube.com/watch?v=eHa57t9yZAw&t=0m23s",
    family: "Others",
    category: "slow",
  },
  {
    id: "jrnG6nJhKCc",
    name: "Loco Camel",
    url: "www.youtube.com/watch?v=jrnG6nJhKCc&NR=1&t=0m36s",
    family: "Others",
    category: "slow",
  },
  {
    id: "4zfB-8qHEX4",
    name: "Flutter",
    url: "www.youtube.com/watch?v=4zfB-8qHEX4&t=6m47s",
    family: "Others",
    category: "slow",
  },
  {
    id: "eyNcSekIe-0",
    name: "Levels",
    url: "www.youtube.com/watch?v=eyNcSekIe-0&t=1m25s",
    family: "Others",
    category: "slow",
  },
  {
    id: "eHa57t9yZAw",
    name: "Levels Fast",
    url: "www.youtube.com/watch?v=eHa57t9yZAw&t=3m25s",
    family: "Others",
    category: "slow",
  },
  {
    id: "aEzgJMKH2hc",
    name: "Levels Slow",
    url: "www.youtube.com/watch?v=aEzgJMKH2hc&t=6m07s ",
    family: "Others",
    category: "slow",
  },
  {
    id: "tgKAVdS-uH0",
    name: "Level Drop",
    url: "www.youtube.com/watch?v=tgKAVdS-uH0&t=4m32s",
    family: "Others",
    category: "slow",
  },
  {
    id: "eyNcSekIe-0",
    name: "Head Slides",
    url: "www.youtube.com/watch?v=eyNcSekIe-0&t=0m12s",
    family: "Others",
    category: "slow",
  },
  {
    id: "4yw5R10x_-Q",
    name: "Rainbow",
    url: "www.youtube.com/watch?v=4yw5R10x_-Q&t=3m15s",
    family: "Others",
    category: "slow",
  },
  {
    id: "jrnG6nJhKCc&NR=1",
    name: "Medusa Combo (ATS® style)",
    url: "www.youtube.com/watch?v=jrnG6nJhKCc&NR=1&t=0m22s",
    family: "Others",
    category: "slow",
  },
  {
    id: "W8_dSdQv7K4",
    name: "Medusa Combo (Indian style)",
    url: "www.youtube.com/watch?v=W8_dSdQv7K4&t=2m00s",
    family: "Others",
    category: "slow",
  },
  {
    id: "n9Dnso3QB9I",
    name: "Strong Arm 1",
    url: "www.youtube.com/watch?v=n9Dnso3QB9I&t=2m23s",
    family: "Others",
    category: "slow",
  },
  {
    id: "UtrP3fmJjvQ",
    name: "Strong Arm 2",
    url: "www.youtube.com/watch?v=UtrP3fmJjvQ&t=7m04s",
    family: "Others",
    category: "slow",
  },
  {
    id: "UtrP3fmJjvQ",
    name: "Strong Arm 3",
    url: "www.youtube.com/watch?v=UtrP3fmJjvQ&t=1m35s",
    family: "Others",
    category: "slow",
  },
  {
    id: "bu98enjBqeU",
    name: "Simple Drop to the knees",
    url: "www.youtube.com/watch?v=bu98enjBqeU&t=0m39s",
    family: "Floor",
    category: "slow",
  },
  {
    id: "vG8EqEH3tYg",
    name: "Berber Walk",
    url: "www.youtube.com/watch?v=vG8EqEH3tYg&t=1m53s",
    family: "Floor",
    category: "slow",
  },
  {
    id: "vG8EqEH3tYg",
    name: "Mermaid Turn",
    url: "www.youtube.com/watch?v=vG8EqEH3tYg&t=1m58s",
    family: "Floor",
    category: "slow",
  },
  {
    id: "bu98enjBqeU",
    name: "Zipper",
    url: "www.youtube.com/watch?v=bu98enjBqeU&t=0m58s",
    family: "Floor",
    category: "slow",
  },
  {
    id: "bu98enjBqeU",
    name: "Zipper Petal",
    url: "www.youtube.com/watch?v=bu98enjBqeU&t=1m07s",
    family: "Floor",
    category: "slow",
  },
  {
    id: "ljrgiwAJcLk",
    name: "Standing Drop",
    url: "www.youtube.com/watch?v=ljrgiwAJcLk&t=2m53s",
    family: "Floor",
    category: "slow",
  },
];

var listview;
function initialize() {
  //http://www.youtube.com/embed/?listType=user_uploads&list=FatChanceBellyDance
  document.getElementById("promptRefresh").style.visibility = "hidden";
  player = document.getElementById("player");
  //https://www.youtube.com/user/FatChanceBellyDance
  player.setAttribute(
    "src",
    "http://www.youtube.com/embed/?listType=user_uploads&list=FatChanceBellyDance"
  );
  listview = document.getElementById("listview");
  console.log("initialize");
  categorySpinner = document.getElementById("categoriesSelect");
  familySpinner = document.getElementById("familiesSelect");
  categoriesSelectLabel = document.getElementById("categoriesSelectLabel");
  okButton = document.getElementById("okButton");
  descriptionLabel = document.getElementById("description");
  //description.innerHTML = "selection: Fat Chance BellyDance YouTube Channel";
  checkPlayerForVideo();
  //useTheme();
  myFunction(myJson);
}

//var xmlhttp = new XMLHttpRequest();

//var url = "https://api.myjson.com/bins/3dd8y";
//var url = 'http://isabellebidou.com/dance/atsmoves.json';
//var url = 'atsmoves.json';

// xmlhttp.onreadystatechange = function() {
// if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
// var myArr = JSON.parse(xmlhttp.responseText);
// myFunction(myArr);
//
// }
// };
// xmlhttp.open("GET", url, true);
// xmlhttp.send();

function myFunction(arr) {
  categories.push(new Category("All Categories"));
  families.push(new Family("All Families"));
  var out = "";
  var i;
  for (i = 0; i < arr.length - 1; i++) {
    var url = arr[i].url;
    var id = arr[i].id;
    var name = arr[i].name;
    var categoryStr = arr[i].category;

    if (!checkIfAlreadyInArray(categoryStr, categories)) {
      var category = new Category(categoryStr);

      categories.push(category);
    }

    var familyStr = arr[i].family;
    //if (family != Array.isArray(familyNames))

    if (!checkIfAlreadyInArray(familyStr, families)) {
      var family = new Family(familyStr);
      families.push(family);
    }
    //console.log(url);
    var ststr = url.split("&t=")[1];
    var st = parseInt(ststr.charAt(0) * 60) + parseInt(ststr.substr(2, 3));
    // console.log(st);
    var embedUrl = "http://www.youtube.com/embed/" + id + "?start=" + st;
    //console.log(embedUrl);
    moves.push(new Move(id, embedUrl, name, categoryStr, familyStr, url));
  }

  makeSpinner(categories, categorySpinner);
  makeSpinner(families, familySpinner);
  selectedFamily = "All Families";
  familySpinner.value = "All Families";
  $("#familiesSelect").selectmenu("refresh");
  selectedCategory = "All Categories";
  categorySpinner.value = "All Categories";
  $("#categoriesSelect").selectmenu("refresh");

  window.onpopstate = function () {
    checkPlayerForVideo();
  };

  familySpinner.onchange = function () {
    selectedFamily = familySpinner.value;
    $("#familiesSelect").selectmenu("refresh");

    var i = 0;

    for (i; i < moves.length; i++) {
      if (moves[i].family == selectedFamily) {
        selectedCategory = moves[i].category;
        break;
      }
    }

    var newCategories = [];

    if (selectedFamily == "All Families") {
      newCategories = categories;
    } else {
      newCategories.push(new Category("All Categories"));
      var i = 0;
      for (i; i < moves.length; i++) {
        if (moves[i].family == selectedFamily) {
          if (!checkIfAlreadyInArray(moves[i].category, newCategories)) {
            var category = new Category(moves[i].category);
            newCategories.push(category);
          }
        }
      }
    }

    $("#categoriesSelect").empty();
    makeSpinner(newCategories, categorySpinner);
    $("#categoriesSelect").selectmenu("refresh");
    categorySpinner.value = selectedCategory;
  };
  categorySpinner.onchange = function () {
    selectedCategory = categorySpinner.value;
    $("#categoriesSelect").selectmenu("refresh");

    var newFamilies = [];

    if (selectedCategory == "All Categories") {
      newFamilies = families;

      selectedFamily = "All Families";
    } else {
      newFamilies.push(new Family("All Families"));
      var i = 0;
      for (i; i < moves.length; i++) {
        if (moves[i].category == selectedCategory) {
          if (!checkIfAlreadyInArray(moves[i].family, newFamilies)) {
            var family = new Family(moves[i].family);
            newFamilies.push(family);
          }
        }
      }
    }

    $("#familiesSelect").empty();
    makeSpinner(newFamilies, familySpinner);
    $("#familiesSelect").selectmenu("refresh");
    familySpinner.value = selectedFamily;
  };
  displayList(moves);
}

function showSelected() {
  var newMoves = [];

  if (
    selectedCategory == "All Categories" &&
    selectedFamily == "All Families"
  ) {
    newMoves = moves;
  } else if (
    selectedCategory == "All Categories" &&
    selectedFamily != "All Families"
  ) {
    // select by family

    var filteredMoves = [];
    for (move in moves) {
      if (moves[move].family == selectedFamily) {
        filteredMoves.push(moves[move]);
      }
    }
    newMoves = filteredMoves;
  } else if (
    selectedCategory != "All Categories" &&
    selectedFamily != "All Families"
  ) {
    // select by family and category

    var filteredMoves = [];
    for (move in moves) {
      if (
        moves[move].family == selectedFamily &&
        moves[move].category == selectedCategory
      ) {
        filteredMoves.push(moves[move]);
      }
    }
    newMoves = filteredMoves;
  } else if (
    selectedCategory != "All Categories" &&
    selectedFamily == "All Families"
  ) {
    // select by  category

    var filteredMoves = [];
    for (move in moves) {
      if (moves[move].category == selectedCategory) {
        filteredMoves.push(moves[move]);
      }
    }
    newMoves = filteredMoves;
  }

  displayList(newMoves);
  $("#categoriesSelect").selectmenu("refresh");

  $("#familiesSelect").selectmenu("refresh");
}

function displayList(arr) {
  //console.log("displayList");

  if (listview.childNodes.length != 0) {
    //removeElements(listview);
    removeChildrenFromNode(listview);
  }
  rows = [];
  console.log(listview.childNodes.length);
  if (arr.length > 0) {
    //document.getElementById("promptRefresh").style.visibility = "hidden";
    document.getElementById("promptRefresh").innerHTML = "";
  } else {
    document.getElementById("promptRefresh").innerHTML =
      "If the list does not appear refresh the page :)";
    //document.getElementById("promptRefresh").style.visibility = "visible";
  }
  for (move in arr) {
    listmove2(arr[move]);
  }

  usedMovesList = arr;
}

function removeChildrenFromNode(element) {
  while (element.firstChild) element.removeChild(element.firstChild);
}

function checkIfAlreadyInArray(element, array) {
  for (index in array) {
    var result = false;
    if (element == array[index].name) {
      result = true;
      break;
    }
  }
  return result;
}

function Move(mId, mEmbedUrl, mName, mCategory, mFamily, mUrl) {
  this.id = mId;
  this.embedUrl = mEmbedUrl;
  this.name = mName;
  this.category = mCategory;
  this.family = mFamily;
  this.url = mUrl;
}

function Category(categoryStr) {
  this.name = categoryStr;
  this.option = document.createElement("option");

  this.option.value = this.name;
  this.option.text = categoryStr;
  this.option.id = categoryStr;
}

function Family(familyStr) {
  this.name = familyStr;
  this.option = document.createElement("option");

  this.option.value = this.name;
  this.option.text = familyStr;
  this.option.id = familyStr;
}

function sortByAlphabeticalOrderOfStringProperty(array, stringProperty) {
  for (index in array) {
  }

  return array;
}

function listmove2(move) {
  var li = document.createElement("li");

  var moveNameLink = document.createTextNode(move.name);
  li.appendChild(moveNameLink);

  li.addEventListener("click", function () {
    play(this);
  });

  listview.appendChild(li);
  rows.push(li);

  li.setAttribute("class", "movesTabletr");
  if (rows.length % 2 == 0) li.setAttribute("class", "evenTabletr");
  else li.setAttribute("class", "oddTabletr");

  tabletrs.push(li);
}

function listmove(move) {
  // var tr= document.createElement("tr");
  var tds = [];
  var moveNameNode = document.createTextNode(move.name);
  var moveCategoryNode = document.createTextNode(move.category);
  var moveFamilyNode = document.createTextNode(move.family);

  var nodes = [moveNameNode, moveCategoryNode, moveFamilyNode];
  // table= document.getElementById("table");
  var tbody = document.getElementById("tbody");
  //	var tr = table.insertRow(1);
  //	var tr = tbody.insertRow(0);
  //	tbody.setAttribute("height", "200px");

  var tr = document.createElement("tr");

  if (rows.length > 0) tbody.insertBefore(tr, rows[rows.length - 1]);
  else tbody.appendChild(tr);
  rows.push(tr);
  tr.setAttribute("class", "movesTabletr");
  if (rows.length % 2 == 0) tr.setAttribute("class", "evenTabletr");
  else tr.setAttribute("class", "oddTabletr");
  tr.addEventListener("click", function () {
    play(this);
  });
  var i = 0;

  for (i; i < nodes.length; i++) {
    var td = document.createElement("td");
    td.setAttribute("class", "movesTabletd");
    tr.appendChild(td);

    tds.push(td);
    td.appendChild(nodes[i]);
  }

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = false;
  move.checkbox = checkbox;
  var checkboxtd = document.createElement("td");
  checkboxtd.appendChild(checkbox);
  tr.appendChild(checkboxtd);
  tr.style.background = move.colour;

  tabletrs.push(tr);
}

function filterByCategory(cat) {
  //for()
  var newMoves = [];
  if (cat != "All Categories") {
    var filteredMoves = [];
    var i = 0;
    for (i; i < moves.length; i++) {
      if (moves[i].category == cat) {
        filteredMoves.push(moves[i]);
      }
    }
    newMoves = filteredMoves;
  } else {
    newMoves = moves;
  }

  familySpinner.value = "All Families";

  familySpinner.addEventListener("change", function () {
    filterByFamily(familySpinner.value);
    selectedFamily = familySpinner.value;
  });

  displayList(newMoves);
}

function filterByFamily(fam) {
  if (fam != "All Families") {
    var filteredMoves = [];
    var i = 0;
    for (i; i < moves.length; i++) {
      if (moves[i].family == fam) {
        filteredMoves.push(moves[i]);
      }
    }

    displayList(filteredMoves);
  } else {
    filterByCategory(selectedCategory);
  }
}

function findCatByFam(f) {
  var c = "";
  var i = 0;
  for (i; i < moves.length; i++) {
    if (moves[i].family == f) {
      c = moves[i].category;
      break;
    }
  }
  return c;
}

function play(row) {
  var index = rows.indexOf(row);
  var move = usedMovesList[index];

  player.setAttribute("src", move.embedUrl);
  //	description.innerHTML = "selection: "+ move.name;
  window.location.href = "#video";
}

function checkPlayerForVideo() {
  console.log(window.location.href);
  console.log(player.getAttribute("src"));
}

function makeSpinner(array, spinner) {
  var i = 0;
  for (i; i < array.length; i++) {
    spinner.appendChild(array[i].option);
  }
}

/*function useTheme(){

 switch(theme) {
 case "light":
 document.body.style.backgroundImage = "url('images/nenubullet.png')";
 document.body.style.repeat = "repeat";
 document.body.style.backgroundColor = "rgba(230, 255, 255,1)";
 document.getElementById("body").style.color = "rgb(255, 0, 255)";
 var oddlis= document.getElementsByClassName("evenTabletr");
 // oddlis.style.backgroundColor = "rgba(0, 0, 0,1)";

 for (li in oddlis){

 oddlis[li].style.backgroundColor = "rgba(0, 0, 0,1)";
 }
 break;
 case "dark":

 document.body.style.backgroundColor = "rgba(0, 0, 0,1)";
 document.getElementById("body").style.color = "rgb(255, 255, 255)";
 var oddlis= document.getElementsByClassName("evenTabletr");
 var i = 0;
 for (i;i< oddlis.length; i++){

 oddlis[i].style.backgroundColor = "black";
 }

 break;
 default:
 break;
 }
 }*/
