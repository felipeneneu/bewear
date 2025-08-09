'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod/v4';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z
  .object({
    name: z.string().nonempty('O campo não pode ser vazio'),
    email: z.email('Email invalido'),
    password: z
      .string('Senha invalida')
      .min(8, 'Sua senha precisa ter no minimo 8 caracteres'),
    password_confirmed: z
      .string('Senha invalida')
      .min(8, 'Sua senha precisa ter no minimo 8 caracteres'),
  })
  .refine(
    (data) => {
      return data.password === data.password_confirmed;
    },
    {
      error: 'As senhas não coincidem',
      path: ['password_confirmed'],
    }
  );

type SignUpFormValue = z.infer<typeof formSchema>;

const SignUpForm = () => {
  const form = useForm<SignUpFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password_confirmed: '',
    },
  });

  function onSubmit(values: SignUpFormValue) {
    // biome-ignore lint/suspicious/noConsole: <testando>
    console.log(values);
  }

  return (
    // biome-ignore lint/complexity/noUselessFragments: <react fragment>
    <>
      <Card>
        <CardHeader>
          <CardTitle>Criar Conta</CardTitle>
          <CardDescription>Crie sua conta para continuar</CardDescription>
        </CardHeader>

        <Form {...form}>
          <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="grid gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite sua senha"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password_confirmed"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirme sua Senha</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite sua senha"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit">Criar Conta</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </>
  );
};

export default SignUpForm;
