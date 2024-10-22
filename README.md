
# hoyasumii-queue

Um pacote de Node.js para gerenciar filas (queues) de maneira simples e eficiente.

## Instalação

Você pode instalar o pacote usando npm ou yarn:

```bash
npm install hoyasumii-queue
```

ou

```bash
yarn add hoyasumii-queue
```

## Uso

Aqui está um exemplo básico de como usar o pacote:

```javascript
const Queue = require('hoyasumii-queue');

// Criar uma nova fila
const myQueue = new Queue<string>();

// Adicionar itens à fila
myQueue.push('item1');
myQueue.push('item2');
myQueue.push('item3');

// Remover um item da fila
const item = myQueue.pop();
console.log(item); // 'item1'

// Verificar o tamanho da fila
console.log(myQueue.size()); // 2

// Verificar se a fila está vazia
console.log(myQueue.isEmpty()); // false
```

## Métodos

### `push(item)`

Adiciona um item ao final da fila.

**Parâmetros:**
- `item`: O item a ser adicionado à fila.

### `pop()`

Remove e retorna o item no início da fila.

**Retorno:**
- O item removido da fila. Retorna `undefined` se a fila estiver vazia.

### `size()`

Retorna o número de itens na fila.

**Retorno:**
- O número de itens na fila.

### `isEmpty()`

Verifica se a fila está vazia.

**Retorno:**
- `true` se a fila estiver vazia, `false` caso contrário.

## Licença

Este projeto está licenciado sob a [MIT License](https://raw.githubusercontent.com/Hoyasumii/-hoyasumii-queue/refs/heads/main/LICENSE).
```
