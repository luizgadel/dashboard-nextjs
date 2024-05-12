'use client';
import Button from "@/app/(logged-in)/ui/button";
import { ButtonData } from "@/app/lib/definitions";

export default function EditUserPage() {
    const editUserButton: ButtonData = {
      name: 'Edit',
      icon: '',
      action: () => { console.log() }
    }
  
    return (
        <Button {...editUserButton} />
    );
}