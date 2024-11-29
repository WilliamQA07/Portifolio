import AmigosEntregadoresLogo from "@/app/components/logo/amigosentregadores-logo"
import BeedooLogo from "@/app/components/logo/beedoo-logo"
import BugbankLogo from "@/app/components/logo/bugbank-logo"
import docunderL from "@/app/components/logo/Agilego-logo"
import GenericLogo from "@/app/components/logo/generic-logo"

import MotionHUBLogo from "@/app/components/logo/motionhub-logo"
import TodoMVCLogo from "@/app/components/logo/todomvc-logo"
import Head from 'next/head' //
import BrandsSection from "@/app/components/BrandsSection" //


export const myself = {
  firstName: "William",
  fullName: "William de Souza Pereira",
  role: "QA Engineer",
  email: "williandesousa30@gmail.com",
  github: "https://github.com/WilliamQA07/William",
  linkedin: "https://www.linkedin.com/in/william-souza-qa",
  whatsapp: "https://wa.me/+5588998141112",
  description:
    "Alguns dos projetos que atuei:",
  bulletPoints: ["🐞 além do bug", "🦙 AI enthusiast", "🍵 tea lover"],
}

export type ProjectParams = {
  name: string
  description: string
  image: string
  smimage: string
  xsimage: string
  video?: string
  logo: JSX.Element
  url: string
  github?: string
  linkedin?: string
  figma?: string
}

const genericVideo =
  "https://images.unsplash.com/photo-1719937050446-a121748d4ba0?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export const projects: { [project: string]: ProjectParams } = {
  docunder: {
    name: "AgileGo",
    description:
      "Plataforma de Entregas.",
    image: "/projects/docunder/docunder.png",
    smimage: "/projects/docunder/AgileGo.png",
    xsimage: "/projects/docunder/docunder-xs.png",
    video: "/projects/docunder/docunder-home.png",
    logo:<></>,
    url: "/",
    github: "",
    linkedin: "",
  },

  backofficeJogajunto: {
    name: "Liberta XP",
    description:
      "Plataforma Financeira.",
    image: "/projects/backoffice-jogajunto/backoffice-jogajunto.png",
    smimage: "/projects/backoffice-jogajunto/LibertaInvestimentos.png",
    xsimage: "/projects/backoffice-jogajunto/backoffice-jogajunto-xs.png",
    video: "genericVideo",
    logo:<></>,

    url: "/",
    github: "",
  },

  amigosEntregadores: {
    name: "XContact",
    description:
      "Plataforma de atendimentos via chat.",
    image: "/projects/amigos-entregadores/amigos-entregadores.png",
    smimage: "/projects/amigos-entregadores/Logo-X-Contact-2.png",
    xsimage: "/projects/amigos-entregadores/amigos-entregadores-xs.png",
    logo:<></>,
    video: "genericVideo",
    url: "/",
    figma:"",
  },

  bugbank: {
    name: "Ceisc",
    description:
      "E-commerce de cursos.",
    image: "/projects/bugbank/bugbank.png",
    smimage: "/projects/bugbank/ceisc.png",
    xsimage: "/projects/bugbank/bugbank-xs.png",
    video: genericVideo,
    logo:<></>,
    url: "/",
    github: "",
  },

  motionhub: {
    name: "Dippi",
    description:
      "Plataforma de transações financeiras.",
    image: "/projects/motionhub-api/motionhub.png",
    smimage: "/projects/motionhub-api/dippi.png",
    xsimage: "/projects/motionhub-api/motionhub-xs.png",
    video: genericVideo,
    logo:<></>,
    url: "/",
    github: "",
  },

  beedoo: {
    name: "Ambipar",
    description:
      "Empresa global especializada em soluções ambientais.",
    image: "/projects/beedoo/beedoo.png",
    smimage: "/projects/beedoo/Ambipar.png",
    xsimage: "/projects/beedoo/beedoo-xs.png",
    video: genericVideo,
    logo:<></>,

    url: "/",
    github: "",
  },
}

