import { PrismaClient } from '@prisma/client';
import { userData } from '../data/user.data';

const seedUser = async (prisma: PrismaClient) => {
  try {
    await prisma.user.deleteMany();
    console.log('Deleted records in USERS table');

    await prisma.$queryRaw`ALTER SEQUENCE users_id_seq RESTART WITH 1`;
    console.log('reset USERS auto increment to 1');
    const data = await userData();

    for (const user of data) {
      const type: string =
        user.type_user == 'juridica' ? user.type_user : 'fisica';

      await prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          telefone: user.telefone,
          type_user: {
            create: {
              type,
            },
          },
        },
      });
    }

    console.log('Added USERS data \n');
    console.log('Added TYPE_USERS data');

    console.log('\n');
  } catch (e) {
    throw e;
  }
};

export default seedUser;
