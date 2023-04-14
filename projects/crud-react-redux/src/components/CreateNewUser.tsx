import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { useUserActions } from "../hooks/useUserActions";

export function CreateNewUser() {
	const { addUser } = useUserActions();
	const [result, setResult] = useState<"ok" | "ko" | null>(null);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setResult(null);

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;

		if (!name || !email || !github) {
			return setResult("ko");
		}

		addUser({ name, email, github });
		setResult("ok");
		form.reset();
	};
	return (
		<Card className='mt-2'>
			<Title>Crear Nuevo Usuario</Title>

			<form onSubmit={handleSubmit}>
				<TextInput name='name' placeholder='nombre' />
				<TextInput name='email' placeholder='email' />
				<TextInput name='github' placeholder='usuario de github' />
				<div>
					<Button className='mt-4' type='submit'>
						Crear usuario
					</Button>
					<span>
						{result === "ok" && (
							<Badge color='green'>Guardado correctamente</Badge>
						)}
						{result === "ko" && (
							<Badge color='red'>Rellena todos los campos</Badge>
						)}
					</span>
				</div>
			</form>
		</Card>
	);
}
