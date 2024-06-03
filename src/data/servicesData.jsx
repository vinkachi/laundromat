import { machine_clothefloor, machine_delivery, machine_manwash, machine_towels, maching_clothefold } from "../assets/images";

export const servicesData = [
    {
        id: "98810",
        text: "Washing",
        image: machine_manwash,
        info:"The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element.",
        link: "Washing"
    },
    {
        id: "98811",
        text: "Ironing",
        info:"The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element.",
        image: machine_towels,
        link: "ironing"
    },
    {
        id: "98812",
        text: "Sorting",
        info:"The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element.",
        image: machine_clothefloor,
        link: "sorting"
    },
    {
        id: "98813",
        text: "Packaging",
        info:"The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element.",
        image: maching_clothefold,
        link: "packaging"
    },
    {
        id: "98814",
        text: "Delivery",
        info:"The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element.",
        image: machine_delivery,
        link: "delivery"
    },
]