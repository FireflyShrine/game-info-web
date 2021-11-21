import React from "react";
import { FaGamepad } from "react-icons/fa";
import { GiGameConsole } from "react-icons/gi";
import { BiBuildings } from "react-icons/bi";
import { Navigation } from "../@types/navigation-items";

const SIZE = 20;

export const navigationItems: Navigation[] = [
  {
    topic: "Administração",
    children: [
      {
        href: "/games",
        icon: <FaGamepad size={SIZE} />,
        title: "Jogos",
      },
      {
        href: "/platforms",
        icon: <GiGameConsole size={SIZE} />,
        title: "Plataformas",
      },
      {
        href: "/developers",
        icon: <BiBuildings size={SIZE} />,
        title: "Desenvolvedoras",
      },
    ],
  },
];
