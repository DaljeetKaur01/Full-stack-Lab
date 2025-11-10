import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await seedData();
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })

async function seedData() {

    await prisma.employee.deleteMany();
    await prisma.role.deleteMany();


    const managerRole = await prisma.role.create({
        data: { type: "Manager" },
    });

    const developerRole = await prisma.role.create({
        data: { type: "Developer" },
    });


    await prisma.employee.createMany({
        data: [
            {
                name: "Alice Johnson",
                email: "alice@example.com",
                roleId: managerRole.id,
            },
            {
                name: "Bob Smith",
                email: "bob@example.com",
                roleId: developerRole.id,
            },
        ],
    });

    console.log("Database seeded successfully!");
}