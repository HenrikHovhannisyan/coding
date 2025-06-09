import {
  faJs,
  faReact,
  faHtml5,
  faCss3Alt,
  faPhp,
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export const lessons = [
  {
    title: "JavaScript",
    icon: faJs,
    href: "/lessons/javascript",
    color: "text-yellow-400",
    description:
      "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.",
  },
  {
    title: "React",
    icon: faReact,
    href: "/lessons/react",
    color: "text-blue-400",
    description:
      "React — это библиотека JavaScript для создания пользовательских интерфейсов. Подходит для создания одностраничных приложений.",
  },
  {
    title: "HTML",
    icon: faHtml5,
    href: "/lessons/html",
    color: "text-orange-500",
    description:
      "HTML — стандартный язык разметки документов для просмотра веб-страниц в браузере.",
  },
  {
    title: "CSS",
    icon: faCss3Alt,
    href: "/lessons/css",
    color: "text-blue-500",
    description:
      "CSS — язык таблиц стилей, используемый для описания внешнего вида документа, написанного на HTML.",
  },
  {
    title: "PHP",
    icon: faPhp,
    href: "/lessons/php",
    color: "text-indigo-600",
    description:
      "PHP — популярный язык сценариев общего назначения, особенно подходящий для веб-разработки.",
  },
  {
    title: "Laravel",
    icon: faLaravel,
    href: "/lessons/laravel",
    color: "text-red-500",
    description:
      "Laravel — популярный PHP-фреймворк для разработки веб-приложений с чистым и элегантным синтаксисом.",
  },
  {
    title: "SQL",
    icon: faDatabase,
    href: "/lessons/sql",
    color: "text-green-600",
    description:
      "SQL — язык структурированных запросов, предназначенный для управления данными в реляционных базах данных.",
  },
];
