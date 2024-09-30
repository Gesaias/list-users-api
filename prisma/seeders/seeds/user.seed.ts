import { PrismaClient } from '@prisma/client';
// import { userData } from '../data/user.data';

const seedUser = async (prisma: PrismaClient) => {
  try {
    await prisma.user.deleteMany();
    console.log('Deleted records in USERS table');

    await prisma.$queryRaw`ALTER SEQUENCE users_id_seq RESTART WITH 1`;
    console.log('reset USERS auto increment to 1');

    // const data = await userData();

    // await prisma.user.createMany({
    //   data: data as any[],
    // });
    console.log('Added USERS data');

    console.log('\n');
  } catch (e) {
    throw e;
  }
};

export default seedUser;
