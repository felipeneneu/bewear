'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
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
import { authClient } from '@/lib/auth-client';

const formSchema = z.object({
  email: z.email('Email invalido'),
  password: z
    .string('Senha invalida')
    .min(8, 'Sua senha precisa ter no minimo 8 caracteres'),
});

type SignInFormValue = z.infer<typeof formSchema>;

const SignInForm = () => {
  const router = useRouter();
  const form = useForm<SignInFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: SignInFormValue) {
    await authClient.signIn.email({
      email: values.email,
      password: values.password,
      fetchOptions: {
        onSuccess: () => {
          router.push('/');
          toast.success('Login efetuado com sucesso.');
        },
        onError: (ctx) => {
          if (ctx.error.code === 'USER_NOT_FOUND') {
            toast.error('E-mail não encontrado');
            return form.setError('email', {
              message: 'E-mail ou senha inválidos.',
            });
          }
          if (ctx.error.code === 'INVALID_EMAIL_OR_PASSWORD') {
            toast.error('E-mail ou Senha Invalida');
            return form.setError('email', {
              message: 'E-mail ou senha inválidos.',
            });
          }
          toast.error(ctx.error.message);
        },
      },
    });
    // biome-ignore lint/suspicious/noConsole: <in dev>
    console.log(values);
  }

  return (
    // biome-ignore lint/complexity/noUselessFragments: <react fragment>
    <>
      <Card>
        <CardHeader>
          <CardTitle>Entrar</CardTitle>
          <CardDescription>Faça o login para continuar</CardDescription>
        </CardHeader>

        <Form {...form}>
          <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="grid gap-6">
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
            </CardContent>
            <CardFooter>
              <Button type="submit">Entrar</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </>
  );
};

export default SignInForm;
