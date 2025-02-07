import { createClient } from "next-sanity";
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Get file and directory names
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../../.env.local') });

// Create the Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-10-10"
});

// Define types for the query parameters and response
interface SanityFetchParams {
  query: string;
  params?: Record<string, unknown>; // A more specific type can be used here if you know the structure of params
}

// Define a return type for the fetch function, which can be more specific based on your query's response
export async function sanityFetch<T = unknown>({ query, params = {} }: SanityFetchParams): Promise<T> {
  return await client.fetch<T>(query, params);
}
