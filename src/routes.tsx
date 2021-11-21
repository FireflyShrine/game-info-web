import React from "react";
import { FaUserGraduate, FaHospital, FaHome } from "react-icons/fa";
import { Navigation } from "../@types/navigation-items";

const SIZE = 20;

export const navigationItems: Navigation[] = [
  {
    topic: "Administração",
    children: [
      {
        href: "/",
        icon: <FaHome size={SIZE} />,
        title: "Games",
      },
      {
        href: "/hospitais",
        icon: <FaHospital size={SIZE} />,
        title: "Plataformas",
      },
      {
        href: "/especialidades",
        icon: <FaUserGraduate size={SIZE} />,
        title: "Desenvolvedoras",
      },
    ],
  },
];
