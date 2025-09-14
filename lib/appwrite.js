import { Client, Account, Databases,Avatars } from "react-native-appwrite";

export const client = new Client();

client
    .setEndpoint("https://nyc.cloud.appwrite.io/v1") // Appwrite endpoint
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID); 
     
export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(clien)