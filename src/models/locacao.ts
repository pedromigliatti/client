import { Cliente } from './cliente';
import { Locadora } from './locadora';

export class Locacao {
   id: string;
   data: string;
   locadora: Locadora;
   cliente: Cliente;
}
