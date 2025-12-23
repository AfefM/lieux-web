import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirige automatiquement vers la version française
  redirect('/fr');
}