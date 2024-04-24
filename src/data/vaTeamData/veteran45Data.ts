interface TeamData {
  position: number;
  image: string;
  nameLong: string;
  nameShort: string;
  jj: number | null;
  jg: number | null;
  je: number | null;
  jp: number | null;
  gf: number | null;
  gc: number | null;
  dif: number | null;
  points: number | null;
}

const Teams: TeamData[] = [
  {
    position: 1,
    image: "./teamLogos/juventus.svg",
    nameLong: "Juventus",
    nameShort: "JUV",
    jj: 2,
    jg: 1,
    je: 1,
    jp: 0,
    gf: 8,
    gc: 3,
    dif: 5,
    points: 4,
  },
  {
    position: 2,
    image: "./teamLogos/colima.svg",
    nameLong: "Colima",
    nameShort: "",
    jj: 2,
    jg: 1,
    je: 1,
    jp: 0,
    gf: 4,
    gc: 2,
    dif: 2,
    points: 4,
  },
  {
    position: 3,
    image: "./teamLogos/guadalajara.svg",
    nameLong: "Guadalajara",
    nameShort: "",
    jj: 2,
    jg: 1,
    je: 1,
    jp: 0,
    gf: 6,
    gc: 5,
    dif: 1,
    points: 4,
  },
  {
    position: 4,
    image: "",
    nameLong: "Atletico Vet",
    nameShort: "",
    jj: 2,
    jg: 1,
    je: 0,
    jp: 1,
    gf: 4,
    gc: 3,
    dif: 1,
    points: 3,
  },
  {
    position: 5,
    image: "./teamLogos/mazatlan.svg",
    nameLong: "Sinaloa",
    nameShort: "",
    jj: 2,
    jg: 1,
    je: 0,
    jp: 1,
    gf: 2,
    gc: 3,
    dif: 0,
    points: 3,
  },
  {
    position: 6,
    image: "./teamLogos/tuzos.svg",
    nameLong: "Tuzos",
    nameShort: "",
    jj: 2,
    jg: 1,
    je: 0,
    jp: 1,
    gf: 3,
    gc: 7,
    dif: -4,
    points: 3,
  },
  {
    position: 7,
    image: "",
    nameLong: "El Cartel",
    nameShort: "",
    jj: 1,
    jg: 0,
    je: 1,
    jp: 0,
    gf: 2,
    gc: 2,
    dif: 0,
    points: 1,
  },
  {
    position: 8,
    image: "",
    nameLong: "Forty's",
    nameShort: "",
    jj: 1,
    jg: 0,
    je: 0,
    jp: 1,
    gf: 0,
    gc: 1,
    dif: -1,
    points: 0,
  },
  {
    position: 9,
    image: "",
    nameLong: "Coro",
    nameShort: "",
    jj: 2,
    jg: 0,
    je: 0,
    jp: 2,
    gf: 5,
    gc: 9,
    dif: -4,
    points: 0,
  },
];

export default Teams;