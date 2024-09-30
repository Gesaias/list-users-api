import { PrismaClient } from '@prisma/client';

const seedTypeUser = async (prisma: PrismaClient) => {
  try {
    await prisma.typeUser.deleteMany();
    console.log('Deleted records in TYPE_USERS table');

    await prisma.$queryRaw`ALTER SEQUENCE type_users_id_seq RESTART WITH 1`;
    console.log('reset TYPE_USERS auto increment to 1');

    console.log('\n');
  } catch (e) {
    throw e;
  }
};

export default seedTypeUser;
