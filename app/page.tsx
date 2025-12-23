import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirige directement vers la version française au chargement
  redirect('/fr');
}