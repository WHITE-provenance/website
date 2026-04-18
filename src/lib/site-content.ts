export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  id: string;
  title: string;
  summary: string;
};

export type Doctor = {
  id: string;
  name: string;
  role: string;
  experience: string;
};

export type Offer = {
  id: string;
  title: string;
  description: string;
};

export const clinicInfo = {
  name: "WHITE provenance",
  city: "Новосибирск",
  phone: "+7 (383) 000-00-00",
  email: "hello@white-provenance.ru",
  address: "ул. Примерная, 10",
};

export const navItems: NavItem[] = [
  { label: "Услуги", href: "/services" },
  { label: "Команда", href: "/team" },
  { label: "Цены", href: "/prices" },
  { label: "О клинике", href: "/about" },
  { label: "Контакты", href: "/contacts" },
  { label: "Акции", href: "/offers" },
  { label: "Запись", href: "/appointment" },
];

export const services: Service[] = [
  {
    id: "diagnostics",
    title: "Диагностика",
    summary: "КТ, цифровая диагностика и план лечения с понятной дорожной картой.",
  },
  {
    id: "therapy",
    title: "Терапевтическая стоматология",
    summary: "Лечение кариеса, реставрации и эндодонтия под увеличением.",
  },
  {
    id: "surgery",
    title: "Хирургия и имплантация",
    summary: "Удаление, имплантация и костная пластика по протоколам безопасности.",
  },
];

export const doctors: Doctor[] = [
  {
    id: "dr-1",
    name: "Врач 1",
    role: "Ортопед",
    experience: "10+ лет практики",
  },
  {
    id: "dr-2",
    name: "Врач 2",
    role: "Терапевт",
    experience: "8+ лет практики",
  },
];

export const offers: Offer[] = [
  {
    id: "offer-1",
    title: "Профессиональная гигиена",
    description: "Специальная цена на первый визит и консультацию.",
  },
  {
    id: "offer-2",
    title: "Имплантация под ключ",
    description: "Персональный план лечения с фиксированной сметой.",
  },
];
