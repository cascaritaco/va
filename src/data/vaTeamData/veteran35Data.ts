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
    image: "./teamLogos/guadalajara.svg",
    nameLong: "Guadalajara",
    nameShort: "",
    jj: 1,
    jg: 1,
    je: 0,
    jp: 0,
    gf: 9,
    gc: 2,
    dif: 7,
    points: 3,
  },
  {
    position: 2,
    image: "",
    nameLong: "Athletico Vet",
    nameShort: "",
    jj: 1,
    jg: 1,
    je: 0,
    jp: 0,
    gf: 5,
    gc: 2,
    dif: 3,
    points: 3,
  },
  {
    position: 3,
    image: "",
    nameLong: "Los Banos F. C.",
    nameShort: "",
    jj: 1,
    jg: 1,
    je: 0,
    jp: 0,
    gf: 4,
    gc: 3,
    dif: 1,
    points: 3,
  },
  {
    position: 4,
    image: "",
    nameLong: "Atletico Morelia",
    nameShort: "",
    jj: 1,
    jg: 0,
    je: 0,
    jp: 1,
    gf: 3,
    gc: 4,
    dif: -1,
    points: 0,
  },
  {
    position: 5,
    image: "./teamLogos/pumas.svg",
    nameLong: "Pumas",
    nameShort: "",
    jj: 1,
    jg: 0,
    je: 0,
    jp: 1,
    gf: 2,
    gc: 5,
    dif: -3,
    points: 0,
  },
  {
    position: 6,
    image: "",
    nameLong: "Aztecas",
    nameShort: "",
    jj: 1,
    jg: 0,
    je: 0,
    jp: 1,
    gf: 2,
    gc: 9,
    dif: -7,
    points: 0,
  },
  {
    position: 7,
    image: "./teamLogos/inter.svg",
    nameLong: "Inter",
    nameShort: "",
    jj: null,
    jg: null,
    je: null,
    jp: null,
    gf: null,
    gc: null,
    dif: null,
    points: null,
  },
];

export default Teams;
