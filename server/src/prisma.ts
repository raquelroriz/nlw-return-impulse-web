import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log: ['query']
});

// que a cada operação que o prisma dê no log para que possamos ver as operações realizadas
