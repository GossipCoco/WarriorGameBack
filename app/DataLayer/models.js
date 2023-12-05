const { DataTypes, sequelize, Op } = require("sequelize");

const connection = require("./connection");

const User = connection.define(
  "User",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    LastName: {
      type: DataTypes.STRING,
    },
    FirstName: {
      type: DataTypes.STRING,
    },
    Login: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
    },
    Password: {
      type: DataTypes.STRING,
    },
    UserName: {
      type: DataTypes.STRING,
    },
    Avatar: {
      type: DataTypes.STRING,
    },
    Birthday: {
      type: DataTypes.DATE,
    },
    Inscription: {
      type: DataTypes.DATE,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Level = connection.define(
  "Level",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Role = connection.define(
  "Role",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Permission = connection.define(
  "Permission",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Permission: {
      type: DataTypes.INTEGER,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Character = connection.define(
  "Character",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    CurrentName: {
      type: DataTypes.STRING,
    },
    Genre: {
      type: DataTypes.STRING,
    },
    KitName: {
      type: DataTypes.STRING,
    },
    ApprenticeName: {
      type: DataTypes.STRING,
    },
    WarriorName: {
      type: DataTypes.STRING,
    },
    OlderName: {
      type: DataTypes.STRING,
    },
    LeaderName: {
      type: DataTypes.STRING,
    },
    Age: {
      type: DataTypes.INTEGER,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    Personnality: {
      type: DataTypes.TEXT,
    },
    Biography: {
      type: DataTypes.TEXT,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const RelationCharacters = connection.define(
  "RelationCharacters",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const TypeRelation = connection.define(
  "TypeRelation",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const ExistingCharacter = connection.define(
  "ExistingCharacter",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    FirstApparition: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const OriginalCharacter = connection.define(
  "OriginalCharacter",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    FreeUsing: {
      type: DataTypes.BOOLEAN,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const KittyPet = connection.define(
  "KittyPet",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Loner = connection.define(
  "Loner",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Warrior = connection.define(
  "Warrior",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Clan = connection.define(
  "Clan",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Grade = connection.define(
  "Grade",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Location = connection.define(
  "Location",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const OtherAnimal = connection.define(
  "OtherAnimal",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Prey = connection.define(
  "Prey",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Ennemy = connection.define(
  "Ennemy",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const UserCharacter = connection.define(
  "UserCharacter",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Game = connection.define(
  "Game",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const GameCharacter = connection.define(
  "GameCharacter",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Fiction = connection.define(
  "Fiction",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Title: {
      type: DataTypes.STRING,
    },
    Summary: {
      type: DataTypes.TEXT,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Chapter = connection.define(
  "Chapter",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Title: {
      type: DataTypes.STRING,
    },
    Content: {
      type: DataTypes.TEXT,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Battle = connection.define(
  "Battle",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Title: {
      type: DataTypes.STRING,
    },
    Content: {
      type: DataTypes.TEXT,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const UsersGame = connection.define(
  "UsersGame",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const RolePermission = connection.define(
  "RolePermission",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Images = connection.define(
  "Images",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  {
    Route: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

User.belongsTo(Level);
Level.hasMany(User);

User.belongsTo(Role);
Role.hasMany(User);

ExistingCharacter.belongsTo(Character, { foreignKey: "Id" });
Character.hasOne(ExistingCharacter, { foreignKey: "Id" });

OriginalCharacter.belongsTo(Character, { foreignKey: "Id" });
Character.hasOne(OriginalCharacter, { foreignKey: "Id" });

OriginalCharacter.belongsTo(User);
User.hasMany(OriginalCharacter);

KittyPet.belongsTo(Character, { foreignKey: "Id" });
Character.hasOne(KittyPet, { foreignKey: "Id" });

Loner.belongsTo(Character, { foreignKey: "Id" });
Character.hasOne(Loner, { foreignKey: "Id" });

Warrior.belongsTo(Character, { foreignKey: "Id" });
Character.hasOne(Warrior, { foreignKey: "Id" });

Warrior.belongsTo(Clan);
Clan.hasMany(Warrior);

KittyPet.belongsTo(Clan);
Clan.hasMany(KittyPet);

Loner.belongsTo(Clan);
Clan.hasMany(Loner);

Location.belongsTo(Clan);
Clan.hasMany(Location);

Character.belongsTo(Grade);
Grade.hasMany(Character);

UserCharacter.belongsTo(User, { foreignKey: "Id" });
User.hasMany(UserCharacter);

UserCharacter.belongsTo(Character, { foreignKey: "Id" });
Character.hasMany(UserCharacter);

GameCharacter.belongsTo(Game, { foreignKey: "Id" });
Game.hasMany(GameCharacter);

GameCharacter.belongsTo(Character, { foreignKey: "Id" });
Character.hasMany(GameCharacter);

RelationCharacters.belongsTo(Character, { foreignKey: "IdCharacterOne" });
Character.hasMany(RelationCharacters);

RelationCharacters.belongsTo(Character, { foreignKey: "IdCharacterTwo" });
Character.hasMany(RelationCharacters);

RelationCharacters.belongsTo(TypeRelation);
TypeRelation.hasMany(RelationCharacters);

Prey.belongsTo(OtherAnimal, { foreignKey: "Id" });
OtherAnimal.hasMany(Prey);

Ennemy.belongsTo(OtherAnimal, { foreignKey: "Id" });
OtherAnimal.hasMany(Ennemy);

UsersGame.belongsTo(Game, { foreignKey: "Id" });
Game.hasMany(UsersGame);

UsersGame.belongsTo(User, { foreignKey: "Id" });
User.hasMany(UsersGame);

Fiction.belongsTo(Game, { foreignKey: "Id" });
Game.hasMany(Fiction);

Chapter.belongsTo(Fiction, { foreignKey: "Id" });
Fiction.hasMany(Chapter);

Chapter.belongsTo(Chapter, { foreignKey: "Id" });
Chapter.hasOne(Chapter, { foreignKey: { name: "NextChapterId" } });

RolePermission.belongsTo(Role, { foreignKey: "Id" });
Role.hasMany(RolePermission);

RolePermission.belongsTo(Permission, { foreignKey: "Id" });
Permission.hasMany(RolePermission);

const models = {
  User,
  Permission,
  Role,
  RolePermission,
  Character,
  ExistingCharacter,
  OriginalCharacter,
  Grade,
  Location,
  Level,
  UserCharacter,
  RelationCharacters,
  TypeRelation,
  OtherAnimal,
  Prey,
  Ennemy,
  Game,
  Fiction,
  Chapter,
  UsersGame,
  GameCharacter,
  KittyPet,
  Loner,
  Warrior,
  Clan,
  Battle,
  Images,
  Utils: {
    Op,
    sequelize,
  },
};
module.exports = models;
