import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/services/database/database.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private db: DatabaseService) {}
  async create(createUserDto: CreateUserDto): Promise<Partial<User>> {
    const type: string =
      createUserDto.type_user == 'juridico'
        ? createUserDto.type_user
        : 'fisica';

    const createUser: User = await this.db.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        telefone: createUserDto.telefone,
        type_user: {
          create: {
            type,
          },
        },
      },
      include: {
        type_user: true,
      },
    });

    return createUser;
  }

  async findAll(): Promise<Partial<User[]>> {
    return await this.db.user
      .findMany({ include: { type_user: true }, orderBy: { name: 'asc' } })
      .then((users) => {
        if (users && users.length > 0) return users;
        throw new NotFoundException('Usuários não encontrados');
      })
      .catch((err) => {
        console.error(err);
        throw new NotFoundException('Usuários não encontrados');
      });
  }

  async findOne(id: number) {
    return this.db.user
      .findUnique({
        where: { id },
        include: { type_user: true },
      })
      .then((user: User) => {
        if (user) return user;
        throw new NotFoundException('Usuário não encontrado');
      })
      .catch((err) => {
        console.error(err);
        throw new NotFoundException('Usuário não encontrado');
      });
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<Partial<User>> {
    console.log(updateUserDto);
    const type: string =
      updateUserDto.type_user == 'juridico'
        ? updateUserDto.type_user
        : 'fisica';

    return this.db.user
      .upsert({
        where: { id },
        create: {
          name: updateUserDto.name,
          email: updateUserDto.email,
          telefone: updateUserDto.telefone,
          type_user: { create: { type } },
        },
        update: {
          ...updateUserDto,
          type_user: { update: { type } },
        },
        include: { type_user: true },
      })
      .then((data) => {
        if (data) return data;
        throw new NotFoundException('Usuário não encontrado');
      })
      .catch((err) => {
        console.error(err);
        throw new NotFoundException('Usuário não encontrado');
      });
  }

  async remove(id: number): Promise<Partial<User>> {
    await this.db.typeUser.delete({
      where: { user_id: id },
    });

    return await this.db.user
      .delete({
        where: { id },
        include: { type_user: true },
      })
      .then((data) => {
        if (data) return data;
        throw new NotFoundException('Usuário não encontrado');
      })
      .catch((err) => {
        console.error(err);
        throw new NotFoundException('Usuário não encontrado');
      });
  }
}
