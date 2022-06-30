import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateSubscriberMutation } from '../graphql/generated';

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate('/event');
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-36 px-[1.5rem]">
      <div className="w-full max-w-[38.4rem] mx-auto p-8 bg-gray-700 border border-gray-600 border-solid rounded-xs">
        <strong className="text-2xl mb-6 block ">Faça login</strong>
        <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
          <input
            className="bg-gray-900 text-gray-300 rounded px-5 h-14 text-md font-medium placeholder-gray-400 placeholder-opacity-medium"
            type="text"
            placeholder="Seu nome completo"
            onChange={event => setName(event.target.value)}
          />
          <input
            className="bg-gray-900 text-gray-300 rounded px-5 h-14 text-md font-medium placeholder-gray-400 placeholder-opacity-medium"
            type="email"
            placeholder="Digite seu e-mail"
            onChange={event => setEmail(event.target.value)}
          />
          <button
            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-medium"
            type="submit"
            disabled={loading}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
