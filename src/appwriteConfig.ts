import { Account, Client, Databases, Storage, TablesDB } from "appwrite";

const appwriteEndpoint = "https://fra.cloud.appwrite.io/v1";
const appwriteProjectId = "69f8c1430006e29dfbc6";
const appwriteProjectName = "webApp";
const appwriteDatabaseId = "69f8c577003a399bd798";

const client = new Client()
  .setEndpoint(appwriteEndpoint)
  .setProject(appwriteProjectId);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);
const tablesDB = new TablesDB(client);

export {
  account,
  appwriteDatabaseId,
  appwriteEndpoint,
  appwriteProjectId,
  appwriteProjectName,
  client,
  databases,
  storage,
  tablesDB,
};
