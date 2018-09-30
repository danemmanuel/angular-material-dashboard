import { Papel } from './papel.model';

export class User {
  uuid: string;
  name: string = "";
  email: string = "";
  interno: boolean;
  cpf: string;
  roles: Papel[];
  areaUsuario: string;
  perfil: string;
}
