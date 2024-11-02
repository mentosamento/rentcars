const hyundai = [
  { value: "Santa-Fe", label: "Santa-Fe" },
  { value: "Sonata", label: "Sonata" },
  { value: "Quanji", label: "Quanji" },
].sort((a, b) => a.label.localeCompare(b.label));
const landrover = [
  { value: "Range Rover", label: "Range Rover" },
  { value: "Velar", label: "Velar" },
  { value: "Range Rover Sport", label: "Range Rover Sport" },
].sort((a, b) => a.label.localeCompare(b.label));

const optionsMap = {
  Hyundai: hyundai,
  "Land Rover": landrover,
};

const markaOptions = [
  { value: "Hyundai", label: "Hyundai" },
  { value: "Land Rover", label: "Land Rover" },
].sort((a, b) => a.label.localeCompare(b.label));

const colorOptions = [
  { value: "White", label: "White" },
  { value: "Red", label: "Red" },
  { value: "Black", label: "Black" },
  { value: "Blue", label: "Blue" },
].sort((a, b) => a.label.localeCompare(b.label));

const yanacaqOptions = [
  { value: "Benzin", label: "Benzin" },
  { value: "Dizel", label: "Dizel" },
  { value: "Qaz", label: "Qaz" },
  { value: "Elektro", label: "Elektro" },
  { value: "Hybrid", label: "Hybrid" },
  { value: "Plug-in Hybrid", label: "Plug-in Hybrid" },
].sort((a, b) => a.label.localeCompare(b.label));

const cityOptions = [
  { value: "Bakı", label: "Bakı" },
  { value: "Gəncə", label: "Gəncə" },
  { value: "Şəki", label: "Şəki" },
  { value: "Ağdam", label: "Ağdam" },
].sort((a, b) => a.label.localeCompare(b.label));

const banOptions = [
  { value: "Avtobus", label: "Avtobus" },
  { value: "Dartıqı", label: "Dartıqı" },
  { value: "Furqon", label: "Furqon" },
  { value: "Kabriolet", label: "Kabriolet" },
].sort((a, b) => a.label.localeCompare(b.label));

const oturucuOptions = [
  { value: "Arxa", label: "Arxa" },
  { value: "Ön", label: "Ön" },
  { value: "Tam", label: "Tam" },
].sort((a, b) => a.label.localeCompare(b.label));

const qutuOptions = [
  { value: "Avtomat", label: "Avtomat" },
  { value: "Variator", label: "Variator" },
  { value: "Mexaniki", label: "Mexaniki" },
  { value: "Robot", label: "Robot" },
  { value: "Reduktor", label: "Reduktor" },
].sort((a, b) => a.label.localeCompare(b.label));

const yearOptions = [];
for (let year = 2024; year >= 1995; year--) {
  yearOptions.push({ value: year.toString(), label: year.toString() });
}

const motorOptions = [];
for (let i = 10; i <= 85; i++) {
  let value = (i / 10).toFixed(1);
  motorOptions.push({ value: value, label: value + "L" });
}

const seatOptions = [];
for (let seat = 1; seat <= 8; seat++) {
  seatOptions.push({ value: seat.toString(), label: seat.toString() + " yer" });
}

export {
  markaOptions,
  colorOptions,
  cityOptions,
  banOptions,
  optionsMap,
  yanacaqOptions,
  oturucuOptions,
  qutuOptions,
  yearOptions,
  motorOptions,
  seatOptions,
};
