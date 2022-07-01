import { Injectable, Post } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {

    return 'chamand';
  }

  async sendUserToAuthLaunchpad() {

  }
}


// {
//   "access_token": "BAhbB0kiAbB7ImNsaWVudF9pZCI6ImM3MjY2ZWIzMDQ4NDUyNzY4ZTNlNzE2MjM4ODhmOGE4YjhjY2I0NzgiLCJleHBpcmVzX2F0IjoiMjAyMi0wNy0xNVQxODoxNDo0OFoiLCJ1c2VyX2lkcyI6WzQ0NjMxODczXSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiZjRjM2RmMjMwYmQ2OTllMTU2ZDAzYjNiMTUwMjI2MzMifQY6BkVUSXU6CVRpbWUN8pkewCoACTsJOg1uYW5vX251bWkCawE6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgc2MDoJem9uZUkiCFVUQwY7AEY=--3e608346c925045a91efc6df110d4b1955bcd8f2",
//   "expires_in": 1209600,
//   "refresh_token": "BAhbB0kiAbB7ImNsaWVudF9pZCI6ImM3MjY2ZWIzMDQ4NDUyNzY4ZTNlNzE2MjM4ODhmOGE4YjhjY2I0NzgiLCJleHBpcmVzX2F0IjoiMjAzMi0wNy0wMVQxODoxNDo0OFoiLCJ1c2VyX2lkcyI6WzQ0NjMxODczXSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiZjRjM2RmMjMwYmQ2OTllMTU2ZDAzYjNiMTUwMjI2MzMifQY6BkVUSXU6CVRpbWUNMhghwF0TCTsJOg1uYW5vX251bWkCLQE6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgcwEDoJem9uZUkiCFVUQwY7AEY=--5cbddde8ad6fcd8b5c3c8e420e62cd4f7d38b7ee"
// }