import { redirect } from 'next/navigation';

export default function RootPage() {
  // On envoie tout le monde sur la version française par défaut
  redirect('/fr');
}