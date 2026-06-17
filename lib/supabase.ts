import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export interface Booking {
  id?: string;
  barber_id: string;
  service_id: string;
  customer_name: string;
  customer_phone: string;
  date: string;
  time: string;
  status?: string;
  created_at?: string;
}

export async function createBooking(data: Booking): Promise<{ error: string | null }> {
  if (!supabase) return { error: 'Supabase nao configurado.' };

  const { error } = await supabase.from('bookings').insert(data);

  if (error) {
    if (error.code === '23505') {
      return { error: 'Esse horario acabou de ser preenchido. Escolha outro.' };
    }
    return { error: 'Erro ao confirmar agendamento. Tente novamente.' };
  }

  return { error: null };
}

export async function checkAvailability(
  barberId: string,
  date: string,
  time: string
): Promise<boolean> {
  if (!supabase) return true;

  const { data } = await supabase
    .from('bookings')
    .select('id')
    .eq('barber_id', barberId)
    .eq('date', date)
    .eq('time', time)
    .eq('status', 'confirmed')
    .maybeSingle();

  return !data;
}
