'use client';
import { ButtonData } from "@/app/lib/definitions";
import Button from "@/app/(logged-in)/ui/button";

export default function Page() {
  const createUserButton: ButtonData = {
    name: 'Create',
    icon: '',
    action: () => { console.log() }
  }

  return (
    <Button {...createUserButton} />
  );
}