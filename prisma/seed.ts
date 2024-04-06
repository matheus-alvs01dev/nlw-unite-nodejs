import { prisma } from "../src/lib/prisma";

async function seed() {
    await prisma.event.create({
        data: {
            id:'a9998663-80d8-4a9b-866e-b1830d024d7a',
            title: "Brasil Summit 2024",
            slug: "brasil-summit",
            details:"O Maior Evento de tecnologia da América Latina",
            maximumAttendees: 180,
        }, 
    });

}

seed().then(() => {
  console.log("Seed complete");
  prisma.$disconnect();
});
