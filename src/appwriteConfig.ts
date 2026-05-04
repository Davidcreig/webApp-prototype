import { Account, Client, Databases, Storage, TablesDB } from "appwrite";

const appwriteEndpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
const appwriteProjectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const appwriteProjectName = import.meta.env.VITE_APPWRITE_PROJECT_NAME;
const appwriteDatabaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;

if (!appwriteEndpoint || !appwriteProjectId || !appwriteDatabaseId) {
  throw new Error("Missing Appwrite endpoint, project ID, or database ID in .env");
}

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
