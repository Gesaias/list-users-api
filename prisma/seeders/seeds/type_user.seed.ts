import { PrismaClient } from '@prisma/client';

const seedTypeUser = async (prisma: PrismaClient) => {
  try {
    await prisma.typeUser.deleteMany();
    console.log('Deleted records in TYPE_USERS table');

    await prisma.$queryRaw`ALTER SEQUENCE type_users_id_seq RESTART WITH 1`;
    console.log('reset TYPE_USERS auto increment to 1');

    // const data = await typeUsersData();

    // await prisma.user.createMany({
    //   data: data as any[],
    // });
    console.log('Added TYPE_USERS data');

    console.log('\n');
  } catch (e) {
    throw e;
  }
};

export default seedTypeUser;
