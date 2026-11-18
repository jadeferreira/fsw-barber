<h1 align="center">💈 FSW Barber</h1>

<p align="center">
  SaaS de agendamento para barbearias — encontre uma barbearia, escolha o serviço e reserve seu horário em poucos toques.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2-black?logo=nextdotjs" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Prisma-5-2D3748?logo=prisma" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white" alt="PostgreSQL" />
</p>

<!-- ---

### 📑 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Demonstração](#-demonstração)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Qualidade de código e padrões](#-qualidade-de-código-e-padrões)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Modelagem do banco de dados](#-modelagem-do-banco-de-dados)
- [Variáveis de ambiente](#-variáveis-de-ambiente)
- [Scripts disponíveis](#-scripts-disponíveis)
- [Deploy](#-deploy)
- [Aprendizados](#-aprendizados)
- [Próximos passos](#-próximos-passos)-->

---

### 📖 Sobre o projeto

O **FSW Barber** é um SaaS de agendamento para barbearias, desenvolvido durante o **Full Stack Club**. A aplicação é **mobile-first** e permite que clientes descubram barbearias, conheçam seus serviços e agendem horários de forma rápida e intuitiva, além de acompanhar e cancelar seus agendamentos.

> 📱 Esta versão foi desenvolvida **apenas para dispositivos móveis**. Para a melhor experiência, acesse pelo celular ou use o modo responsivo do navegador (DevTools).

O projeto exercita o desenvolvimento **full stack** com o ecossistema React/Next.js: interface, autenticação, banco de dados relacional e regras de negócio de agendamento.

### 🎬 Demonstração

<!-- CONFIRMAR: link do deploy e imagens -->

🔗 **Acesse a aplicação:** [fsw-barber](https://fsw-barber-puce.vercel.app/)

<table align="center">
  <tr>
    <td align="center" valign="top"><sub>Home</sub><br /><img src="./docs/screenshots/home.png" width="200" alt="Tela inicial" /></td>
    <td align="center" valign="top"><sub>Categorias</sub><br /><img src="./docs/screenshots/categories.png" width="200" alt="Categorias" /></td>
    <td align="center" valign="top"><sub>Barbearia</sub><br /><img src="./docs/screenshots/barbershop.png" width="200" alt="Página da barbearia" /></td>
    <td align="center" valign="top"><sub>Informações</sub><br /><img src="./docs/screenshots/info.png" width="200" alt="Informações da barbearia" /></td>
  </tr>
  <tr>
    <td align="center" valign="top"><sub>Agendamento</sub><br /><img src="./docs/screenshots/booking.png" width="200" alt="Agendamento" /></td>
    <td align="center" valign="top"><sub>Agendamentos</sub><br /><img src="./docs/screenshots/bookings.png" width="200" alt="Meus agendamentos" /></td>
    <td align="center" valign="top"><sub>Menu</sub><br /><img src="./docs/screenshots/menu.png" width="200" alt="Menu lateral" /></td>
  </tr>
</table>

### ✨ Funcionalidades

- **Login com Google** (NextAuth, sessões salvas no banco)
- **Home** com listagem de barbearias
- **Busca** de barbearias
- **Página da barbearia** com descrição, endereço, telefones e serviços
- **Agendamento de serviços**
  - seleção da data em calendário
  - horários disponíveis calculados dinamicamente
  - horários já reservados indisponíveis
  - confirmação com feedback visual (toasts)
- **Meus agendamentos**
- **Cancelamento** de agendamentos
- **Menu lateral** com navegação e login/logout

### 🛠️ Tecnologias

| Camada                      | Tecnologias                                                                                                                                                       |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**               | [Next.js 14](https://nextjs.org/) (App Router) + [React 18](https://react.dev/)                                                                                   |
| **Linguagem**               | [TypeScript](https://www.typescriptlang.org/)                                                                                                                     |
| **Estilização**             | [Tailwind CSS](https://tailwindcss.com/), `tailwind-merge`, `tailwindcss-animate`, `class-variance-authority`                                                     |
| **Componentes de UI**       | [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/), [Lucide Icons](https://lucide.dev/), [Sonner](https://sonner.emilkowal.ski/) (toasts) |
| **Formulários e validação** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)                                                                                         |
| **Calendário e datas**      | [react-day-picker](https://daypicker.dev/) + [date-fns](https://date-fns.org/)                                                                                    |
| **Banco de dados**          | [PostgreSQL](https://www.postgresql.org/) (driver `pg` + `@prisma/adapter-pg`)                                                                                    |
| **ORM**                     | [Prisma 5](https://www.prisma.io/)                                                                                                                                |
| **Autenticação**            | [NextAuth.js v4](https://next-auth.js.org/) + `@auth/prisma-adapter` (Google OAuth)                                                                               |

### ✅ Qualidade de código e padrões

- **ESLint** (`eslint-config-next`) para análise estática
- **Prettier** com `prettier-plugin-tailwindcss` (ordenação automática de classes)
- **Husky + lint-staged** para validar o código antes de cada commit
- **git-commit-msg-linter** para padronizar as mensagens de commit

> ⚠️ O script `prepare` instala os hooks do Husky e gera o Prisma Client automaticamente após o `npm install`.

### 🧱 Estrutura de pastas

<!-- CONFIRMAR: ajuste a árvore para refletir exatamente o seu projeto -->

```bash
fsw-barber/
├── prisma/
│   ├── schema.prisma        # Modelos do banco
│   └── seed.ts              # Dados iniciais (barbearias e serviços)
├── public/                  # Imagens e assets estáticos
├── src/
│   ├── app/                 # Rotas (App Router)
│   ├── components/          # Componentes reutilizáveis
│   │   └── ui/              # Componentes do shadcn/ui
│   └── lib/                 # Configurações (prisma, auth, utils)
├── .env.example
├── package.json
└── README.md
```

### 🗄️ Modelagem do banco de dados

O banco é **PostgreSQL**, modelado com Prisma. Principais entidades:

| Modelo                                    | Descrição                                                               |
| ----------------------------------------- | ----------------------------------------------------------------------- |
| **User**                                  | Usuário autenticado via Google (nome, e-mail, imagem)                   |
| **Account / Session / VerificationToken** | Tabelas exigidas pelo NextAuth (Prisma Adapter)                         |
| **Barbershop**                            | Barbearia: nome, endereço, telefones (lista), descrição e imagem        |
| **BarbershopService**                     | Serviço da barbearia: nome, descrição, imagem e preço (`Decimal(10,2)`) |
| **Booking**                               | Agendamento: usuário, serviço e data/hora                               |

```mermaid
erDiagram
  User ||--o{ Account : possui
  User ||--o{ Session : possui
  User ||--o{ Booking : faz
  Barbershop ||--o{ BarbershopService : oferece
  BarbershopService ||--o{ Booking : reservado_em

  Barbershop {
    string id PK
    string name
    string address
    string[] phones
    string description
    string imageUrl
  }
  BarbershopService {
    string id PK
    string name
    string description
    string imageUrl
    decimal price
    string barbershopId FK
  }
  Booking {
    string id PK
    string userId FK
    string serviceId FK
    datetime date
  }
```

### 🔑 Variáveis de ambiente

<!-- CONFIRMAR: compare com o seu .env.example -->

```env
# Banco de dados
DATABASE_URL="postgresql://usuario:senha@localhost:5432/fsw_barber"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="gere-com-openssl-rand-base64-32"

# Google OAuth
GOOGLE_CLIENT_ID="seu-client-id"
GOOGLE_CLIENT_SECRET="seu-client-secret"
```

> No Google Cloud Console, adicione `http://localhost:3000/api/auth/callback/google` em **URIs de redirecionamento autorizados**.

### 📜 Scripts disponíveis

| Comando              | Descrição                                 |
| -------------------- | ----------------------------------------- |
| `npm run dev`        | Inicia o servidor de desenvolvimento      |
| `npm run build`      | Gera o build de produção                  |
| `npm run start`      | Roda o build de produção                  |
| `npm run lint`       | Executa o ESLint                          |
| `npx prisma db seed` | Popula o banco (`ts-node prisma/seed.ts`) |
| `npx prisma studio`  | Abre a interface visual do banco          |

### ☁️ Deploy

<!-- CONFIRMAR: plataforma usada no deploy -->

1. Importe o repositório na plataforma de deploy (ex.: Vercel)
2. Configure as variáveis de ambiente
3. Atualize `NEXTAUTH_URL` para a URL de produção
4. Adicione a URL de callback de produção no Google Cloud Console
5. Rode as migrations no banco de produção: `npx prisma migrate deploy`

### 💡 Aprendizados

<!-- CONFIRMAR: personalize com o que você realmente aprendeu -->

- Estruturação de um projeto full stack com **Next.js (App Router)**
- Modelagem de dados e relacionamentos com **Prisma + PostgreSQL**
- Autenticação social com **NextAuth.js** e **Prisma Adapter**
- Regras de negócio de agendamento: horários disponíveis e conflitos
- Formulários tipados com **React Hook Form + Zod**
- Interfaces consistentes com **shadcn/ui** e **Tailwind CSS**
- Boas práticas de repositório: **ESLint, Prettier, Husky e commits padronizados**

### 🔭 Próximos passos

- [ ] Versão **desktop** responsiva
- [ ] Painel administrativo para a barbearia
- [ ] Lembretes de agendamento
- [ ] Avaliações das barbearias
- [ ] Testes automatizados

---

<p align="center">
  Projeto desenvolvido durante o <strong>Full Stack Club</strong> 💜
</p>
