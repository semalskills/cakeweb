import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Product {
  id: string;
  category_id: string;
  name: string;
  price: number;
  image_url: string;
  display_order: number;
}

export interface Category {
  id: string;
  name: string;
  display_order: number;
}
